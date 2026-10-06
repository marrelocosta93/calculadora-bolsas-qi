import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const context=vm.createContext({});
vm.runInContext(readFileSync('dados.js','utf8'),context);
const metas=JSON.parse(vm.runInContext('JSON.stringify(METAS)',context));
const report=JSON.parse(readFileSync('docs/reajuste-qi-2026-10-06.json','utf8'));
assert.equal(metas.length,72);
assert.equal(report.metas.length,72);
assert.equal(new Set(metas.map(m=>m.filial)).size,6);
assert.equal(new Set(metas.map(m=>[m.filial,m.segmento,m.serie].join('|'))).size,72);
assert.deepEqual(metas,JSON.parse(readFileSync('metas_qi.json','utf8')));
for(const [i,meta] of metas.entries()){
  const entry=report.metas[i];
  for(const key of ['filial','segmento','serie'])assert.equal(meta[key],entry[key]);
  for(const field of ['ticket_meta','ticket_alvo']){
    // Integer cent arithmetic: 15% over the published amount, rounded half up.
    const previousCents=Math.round(entry.antes[field]*100);
    const expectedCents=Math.floor((previousCents*115+50)/100);
    assert.equal(Math.round(meta[field]*100),expectedCents,meta.filial+' '+meta.serie+' '+field);
    assert.equal(meta[field],entry.depois[field]);
  }
}
const html=readFileSync('index.html','utf8');
for(const [,code] of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(code);
assert.ok(html.includes('const ticketAlvo = meta.ticket_alvo;'));
console.log('72 metas de 6 unidades: aumento de 15% conferido; JSON/JS iguais; sintaxe valida.');
