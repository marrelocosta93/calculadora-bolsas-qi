import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const context=vm.createContext({});
vm.runInContext(readFileSync('dados.js','utf8'),context);
const metas=JSON.parse(vm.runInContext('JSON.stringify(METAS)',context));
const report=JSON.parse(readFileSync('docs/captacao-40-2026-10-14.json','utf8'));
const previous=JSON.parse(readFileSync('docs/reajuste-qi-2026-10-06.json','utf8'));
assert.equal(metas.length,72);
assert.equal(report.rows.length,60);
assert.equal(new Set(metas.map(m=>[m.filial,m.segmento,m.serie].join('|'))).size,72);
assert.deepEqual(metas,JSON.parse(readFileSync('metas_qi.json','utf8')));
const ceil=v=>Math.ceil((v-1e-9)*100)/100;
const floor=v=>Math.floor((v+1e-9)*100)/100;
for(const m of metas){
 assert.equal(m.versao,report.version);
 if(m.filial==='Valqueire'){
  const old=previous.metas.find(r=>r.filial===m.filial&&r.serie===m.serie);
  assert.equal(m.ticket_meta,old.depois.ticket_meta);
  assert.equal(m.ticket_alvo,old.depois.ticket_alvo);
  continue;
 }
 const r=report.rows.find(r=>r.unit===m.filial&&r.series===m.serie);
 const recovery=r.remaining_payers?Math.max(0,r.revenue_goal-r.realized)/(12*r.remaining_payers):0;
 const reference=ceil(Math.max(recovery,r.current_ticket??0,r.capture_meta));
 const cap=floor(Math.min((r.current_ticket??r.capture_meta)*1.4,r.table_monthly+r.table_quota/12));
 const expected=Math.min(reference,cap);
 assert.equal(m.ticket_alvo,expected,`${m.filial}/${m.serie}`);
 assert.ok(m.ticket_alvo<=cap);
 const gap=Math.max(0,r.revenue_goal-r.realized-r.remaining_payers*expected*12);
 assert.equal(m.receita_pendente,Math.round(gap*100)/100);
 assert.equal(m.pagantes_adicionais,gap>0.01?Math.ceil(gap/(expected*12)):0);
}
assert.equal(metas.find(m=>m.filial==='Metropolitano'&&m.serie==='2º Ano').ticket_alvo,1554.53);
assert.equal(metas.find(m=>m.filial==='Freguesia'&&m.serie==='7º Ano').ticket_alvo,1594.39);
assert.equal(report.rows.filter(r=>r.deficit>0.01).length,19);
const page=readFileSync('index.html','utf8');
for(const [,code] of page.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(code);
assert.ok(page.includes('Receita de captação ainda não recuperada'));
await import('./validate-sync.mjs');
console.log('60 novos alvos; 12 Valqueire preservados; teto, pisos, déficits e adicionais conferidos.');
