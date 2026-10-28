import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const context=vm.createContext({});
vm.runInContext(readFileSync('dados.js','utf8'),context);
const metas=JSON.parse(vm.runInContext('JSON.stringify(METAS)',context));
const prices=JSON.parse(vm.runInContext('JSON.stringify(DADOS)',context));
const report=JSON.parse(readFileSync('docs/metas-2026-10-27.json','utf8'));
const revision=JSON.parse(readFileSync('docs/rio2-meta-oficial-2026-10-28.json','utf8'));
assert.equal(revision.changes.length,12);
const cents=v=>Math.round((v+Number.EPSILON)*100)/100;
assert.equal(metas.length,72);
assert.equal(report.rows.length,72);
assert.equal(new Set(metas.map(m=>[m.filial,m.segmento,m.serie].join('|'))).size,72);
assert.deepEqual(metas,JSON.parse(readFileSync('metas_qi.json','utf8')));
for(const m of metas){
 const r=report.rows.find(r=>r.unit===m.filial&&r.series===m.serie);
 assert.ok(r);
 assert.equal(m.versao,revision.version);
 const officialOnly=m.filial==='Rio 2';
 const base=r.official_meta*1.1;
 const actual=r.payers?r.realized_revenue/r.payers/12:null;
 const total=Math.floor(Math.floor(r.capture_goal*.95)*(1-r.historical_rate));
 const remaining=r.remaining_override??Math.max(0,total-r.payers);
 assert.equal(r.remaining,remaining);
 const gap=Math.max(0,r.revenue_goal-r.realized_revenue);
 const recovery=remaining?gap/remaining/12:gap===0?0:null;
 const critical=r.payers>0&&actual<r.official_meta&&(recovery===null||recovery>base);
 assert.equal(r.critical,critical);
 const expected=cents(officialOnly?r.official_meta:critical?Math.min(recovery??Infinity,r.official_meta*1.2):base);
 assert.equal(m.ticket_meta,cents(officialOnly?r.official_meta:base));
 assert.equal(m.ticket_alvo,expected,`${m.filial}/${m.serie}`);
 if(officialOnly){assert.equal(expected,cents(r.official_meta));}
 else{assert.ok(expected>=cents(base)&&expected<=cents(r.official_meta*1.2));}
 const price=prices.find(p=>p.unidade===m.filial&&p.serie===m.serie&&p.segmento===m.segmento);
 assert.ok(price);
 assert.ok(expected<=price.mensalidade+price.cota/12);
 if(m.filial==='Valqueire'){
  assert.equal(m.projecao_pendente,true);
  assert.equal(m.receita_pendente,null);
  assert.equal(m.pagantes_restantes,null);
 }else{
  assert.equal(m.projecao_pendente,false);
  assert.equal(m.receita_pendente,cents(Math.max(0,gap-remaining*expected*12)));
 }
}
const target=(unit,series)=>metas.find(m=>m.filial===unit&&m.serie===series).ticket_alvo;
assert.equal(target('Rio 2','4º Ano'),2197.02);
assert.equal(target('Rio 2','2ª Série'),1937.00);
assert.equal(target('Rio 2','6º Ano'),1850.15);
assert.equal(target('Metropolitano','6º Ano'),1583.84);
assert.equal(target('Valqueire','1º Ano'),1365.44);
assert.equal(target('Valqueire','2º Ano'),1389.26);
assert.equal(target('Valqueire','6º Ano'),1548.67);
assert.equal(report.rows.filter(r=>r.critical).length,20);
const page=readFileSync('index.html','utf8');
for(const [,code] of page.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(code);
assert.ok(page.includes('Meta da série'));
await import('./validate-sync.mjs');
console.log('PASS: 72 targets; Rio2 official targets, other units preserved; projections and synchronization.');
