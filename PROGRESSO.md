# Progresso — Tabela de Valores & Calculadora de Bolsas

**Projeto:** Ferramenta interna de negociação de matrículas 2027  
**Data:** 2026-08-24  
**Status atual:** QI concluído — outras marcas pendentes de arquivos

---

## ✅ Concluído — Colégio Qi

### Fontes de dados usadas
- **Tabela de preços (mensalidade, cota, material):** extraída de `matriculas-2027-qi.tess.page` via Playwright
- **Metas de ticket:** `Metas_2027_Qi (1).xlsx` — aba "Detalhe por Série", coluna "Mensalidade média captação" (col 11), safra SSS 25

### Funcionalidades implementadas
- [x] 5 abas: Tabela de Valores, Prazos & Condições, Calc. Mensalidade, Calc. Material, Portas Abertas
- [x] Calculadora de Mensalidade por **série individual** (não mais por bloco)
- [x] Indicador de meta em tempo real (verde/vermelho) — ticket proposto vs ticket alvo
- [x] Fórmula correta: `ticket_proposto = (12 × mensalidade + 1ª cota) / 12`
- [x] Meta = **mensalidade média de captação** (SSS 25, col 11) × 1.10 = ticket alvo
- [x] Inputs de desconto aceitam **% ou R$**, sincronizados automaticamente, com casas decimais
- [x] Sugestão reversa: dado X% de desconto na 1ª cota, qual mensalidade mínima para atingir o alvo?
- [x] 60 séries cobertas (6 filiais × ~10 séries cada)

### Arquivos do projeto
```
tabela-valores-calculadora-bolsas/
├── index.html       — app completo (5 abas)
├── dados.js         — DADOS, REGRAS, BLOCOS, MBLOCOS, BILING, PORTAS, METAS
├── metas_qi.json    — metas brutos (gerado da planilha)
├── vercel.json      — config deploy estático
├── PRD.md           — especificação do produto
└── PROGRESSO.md     — este arquivo
```

### Deploy
- Pendente: autenticar Vercel (`vercel login`) e rodar `vercel --prod`

---

## 🔜 Próximas Marcas — Pendente de Arquivos

Para replicar a ferramenta nas demais marcas, precisamos de **2 arquivos por marca**:

| # | Arquivo | Descrição | Como obter |
|---|---------|-----------|------------|
| 1 | Tabela de preços | Mensalidade, 1ª cota, material por série/filial/turno | tess.page da marca OU planilha enviada |
| 2 | Metas de ticket | Mensalidade média de **captação** por série/filial | Planilha do Azambuja (e-mail 10/08) |

### E-mails com os arquivos (baixar manualmente)

| Marca | E-mail | Remetente | Data |
|-------|--------|-----------|------|
| **Matriz** | `Ciclo 2027 - Metas \| Matriz` | João Azambuja | 10/08/2026 |
| **Matriz** | `[Matriz] Tabela de Preços 2027` | Enzo Silva | 07/08/2026 |
| **Apogeu** | `Ciclo 2027 - Metas \| Apogeu` | João Azambuja | 10/08/2026 |
| **Americano** | `Ciclo 2027 - Metas \| Americano, União e Unificado` | João Azambuja | 10/08/2026 |
| **União** | (mesmo e-mail do Americano) | João Azambuja | 10/08/2026 |
| **Unificado** | (mesmo e-mail do Americano) | João Azambuja | 10/08/2026 |

> **Ação necessária:** Baixar os xlsx dos e-mails acima e salvar em `tabela-valores-calculadora-bolsas/fontes/`

### Plano de execução por marca

Para cada marca nova, o fluxo é:

1. **Tabela de preços** → ler xlsx/tess.page e extrair: unidade, segmento, série, turno, mensalidade, cota, material
2. **Metas** → ler xlsx do Azambuja, filtrar SSS 25, coluna "Mensalidade média captação" (col 11)
3. **Gerar dados_MARCA.js** → mesmo formato do `dados.js` do Qi
4. **Criar index_MARCA.html** → adaptar cores/logo da marca, reutilizar toda a lógica JS
5. **Deploy separado na Vercel** → URL própria por marca

### Marcas × Status

| Marca | Tabela preços | Metas | dados.js | HTML | Deploy |
|-------|--------------|-------|----------|------|--------|
| Qi | ✅ tess.page | ✅ xlsx | ✅ | ✅ | ⏳ |
| Matriz | ⏳ arquivo pendente | ⏳ arquivo pendente | ❌ | ❌ | ❌ |
| Apogeu | ⏳ arquivo pendente | ⏳ arquivo pendente | ❌ | ❌ | ❌ |
| Americano | ⏳ arquivo pendente | ⏳ arquivo pendente | ❌ | ❌ | ❌ |
| União | ⏳ arquivo pendente | ⏳ arquivo pendente | ❌ | ❌ | ❌ |
| Unificado | ⏳ arquivo pendente | ⏳ arquivo pendente | ❌ | ❌ | ❌ |

---

## Decisões técnicas registradas

- **Ticket meta = captação, não total:** Usar col 11 ("Mensalidade média captação") em vez de col 12 ("total"). Motivo: a ferramenta é usada em negociação de novos alunos — comparar com o que outros novos pagam é mais justo.
- **Safra = SSS 25 apenas:** Excluir linhas NU 26 (nova unidade 2026) para não misturar bases.
- **Ticket alvo = meta × 1.10:** 10% acima da média de captação como referência de negociação.
- **Fórmula do ticket:** `(12 × mensalidade + 1ª cota) / 12` — mesma base da planilha do Azambuja.
- **Deploy estático na Vercel:** Sem backend, sem build step — só HTML/JS/CSS.
