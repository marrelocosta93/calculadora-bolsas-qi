import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const context=vm.createContext({});
vm.runInContext(readFileSync('dados.js','utf8'),context);
const metas=JSON.parse(vm.runInContext('JSON.stringify(METAS)',context));
const report=JSON.parse(readFileSync('docs/reajuste-qi-2026-10-06.json','utf8'));
const adjustment=JSON.parse(readFileSync('docs/ajuste-tijuca-pagantes-2026-10-06.json','utf8'));
assert.equal(adjustment.alteracoes.length,2);
assert.deepEqual(adjustment.alteracoes.map(a=>[a.filial,a.segmento,a.serie]),[
  ['Tijuca','EM','2ª Série'],['Tijuca','EM','3ª Série'],
]);
assert.equal(metas.length,72);
assert.equal(report.metas.length,72);
assert.equal(new Set(metas.map(m=>m.filial)).size,6);
assert.equal(new Set(metas.map(m=>[m.filial,m.segmento,m.serie].join('|'))).size,72);
assert.deepEqual(metas,JSON.parse(readFileSync('metas_qi.json','utf8')));
for(const [i,meta] of metas.entries()){
  const entry=report.metas[i];
  for(const key of ['filial','segmento','serie'])assert.equal(meta[key],entry[key]);
  for(const field of ['ticket_meta','ticket_alvo']){
    const override=field==='ticket_alvo' && adjustment.alteracoes.find(a=>a.filial===meta.filial && a.segmento===meta.segmento && a.serie===meta.serie);
    if(override){
      const expected=Math.max(override.ticket_anterior,Math.ceil(override.ticket_realizado_2026*adjustment.fator*100)/100);
      assert.equal(override.ticket_anterior,entry.depois.ticket_alvo);
      assert.equal(meta.ticket_alvo,expected);
      assert.equal(meta.ticket_alvo,override.ticket_novo);
      assert.ok(meta.ticket_alvo>=override.ticket_realizado_2026*1.10);
      continue;
    }
    // Integer cent arithmetic: 15% over the published amount, rounded half up.
    const source=entry.fonte_planilha;
    assert.equal(source.base_escolhida,Math.max(source.captacao,source.media_total));
    const useCaptacao=source.captacao>source.media_total;
    const reference=useCaptacao
      ? source.captacao*(field==='ticket_alvo'?1.10:1)
      : entry.antes[field];
    const previousCents=Math.round(reference*100);
    const expectedCents=Math.floor((previousCents*115+50)/100);
    assert.equal(Math.round(meta[field]*100),expectedCents,meta.filial+' '+meta.serie+' '+field);
    assert.equal(meta[field],entry.depois[field]);
  }
}
const html=readFileSync('index.html','utf8');
for(const [,code] of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(code);
assert.ok(html.includes('const ticketAlvo = meta.ticket_alvo;'));
assert.equal(metas.find(m=>m.filial==='Tijuca' && m.serie==='2ª Série').ticket_alvo,2201.09);
assert.equal(metas.find(m=>m.filial==='Tijuca' && m.serie==='3ª Série').ticket_alvo,2493.36);
console.log('72 metas conferidas; dois pisos da Tijuca validados; demais valores preservados; JSON/JS iguais; sintaxe valida.');
