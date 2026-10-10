import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import vm from 'node:vm';

const html=readFileSync('index.html','utf8');
const data=readFileSync('dados.js','utf8').replaceAll('\r\n','\n');
const hash=createHash('sha256').update(data).digest('hex').slice(0,16);
assert.ok(html.includes(`src="dados.js?v=${hash}"`),'Atualize a versão da URL ao alterar dados.js');
const sync=html.split('// METAS_SYNC_START')[1].split('// METAS_SYNC_END')[0];
const current=JSON.parse(readFileSync('metas_qi.json','utf8'));
const old=JSON.parse(readFileSync('docs/reajuste-qi-2026-10-06.json','utf8')).metas.map(m=>({filial:m.filial,segmento:m.segmento,serie:m.serie,...m.antes}));
function setup(initial=current){
  let reply=current, fail=false, status=200;
  const calls=[], handlers={}, renders=[];
  let interval;
  const context=vm.createContext({URL,AbortController,setTimeout,clearTimeout,Date,
    METAS:structuredClone(initial),
    document:{baseURI:'https://calculadora-bolsas-qi.vercel.app/',visibilityState:'visible',addEventListener:(event,fn)=>handlers[event]=fn},
    window:{addEventListener:(event,fn)=>handlers[event]=fn},
    setInterval:fn=>{interval=fn;},
    fetch:async(url,options)=>{calls.push({url:String(url),options});if(fail)throw Error('offline');return {ok:status===200,json:async()=>structuredClone(reply)};},
    calcMens:()=>{renders.push(vm.runInContext('metasConfirmadas',context));},
  });
  vm.runInContext(sync,context);
  return {context,calls,handlers,renders,interval,run:()=>vm.runInContext('sincronizarMetas()',context),confirmed:()=>vm.runInContext('metasConfirmadas',context),reply:value=>{reply=value;},fail:value=>{fail=value;},status:value=>{status=value;}};
}
const stale=setup(old);
await stale.run();
assert.deepEqual(stale.context.METAS,current);
assert.equal(stale.confirmed(),true);
assert.equal(stale.calls[0].options.cache,'no-store');
assert.equal(stale.calls[0].options.credentials,'omit');
assert.ok(new URL(stale.calls[0].url).searchParams.has('atualizacao'));
assert.deepEqual(stale.renders,[false,true]);
const series=current.find(m=>m.filial==='Tijuca'&&m.serie==='8º Ano');
assert.equal(series.ticket_alvo,2237.07);
assert.equal(stale.context.METAS.find(m=>m.filial==='Tijuca'&&m.serie==='8º Ano').ticket_alvo,2237.07);

for (const bad of [old,current.slice(1),[...current.slice(1),current[1]],current.map((m,i)=>i?m:{...m,ticket_alvo:'2237.07'}),null]) {
  const test=setup();test.reply(bad);await test.run();
  assert.equal(test.confirmed(),false);
  assert.deepEqual(test.context.METAS,current,'Falha deve preservar atomicamente as metas');
}
const offline=setup();offline.fail(true);await offline.run();
assert.equal(offline.confirmed(),false);
offline.fail(false);await offline.handlers.online();assert.equal(offline.confirmed(),true);
const error=setup();error.status(500);await error.run();assert.equal(error.confirmed(),false);
for(const event of ['focus','pageshow','visibilitychange']){
  const test=setup(old);await test.handlers[event]();await test.run();
  assert.deepEqual(test.context.METAS,current);
}
const periodic=setup(old);periodic.interval();await periodic.run();assert.deepEqual(periodic.context.METAS,current);
const headers=JSON.parse(readFileSync('vercel.json','utf8')).headers;
assert.ok(headers.some(rule=>rule.source==='/(.*)'&&rule.headers.some(h=>h.key==='Cache-Control'&&h.value.includes('no-store'))));
console.log('Sincronização validada: dados antigos, foco, retorno, atualização periódica, falha de rede, base incompleta e recusa de redução.');
