import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const context=vm.createContext({});
vm.runInContext(readFileSync('dados.js','utf8'),context);
const extras=JSON.parse(vm.runInContext('JSON.stringify(MATERIAIS_EXTRAS)',context));
assert.deepEqual(extras.map(e=>[e.produto,e.material,e.series]),[
 ['international',817.57,['1º Ano','2º Ano','3º Ano','4º Ano','5º Ano']],
 ['mooney',300.58,['4º Ano','5º Ano']],
 ['mooney',240.46,['6º Ano','7º Ano','8º Ano','9º Ano']],
]);
assert.equal(new Set(extras.map(e=>e.produto+'|'+e.bloco)).size,3);
console.log('PASS: International School and Mooney prices/series match PDF page2.');
