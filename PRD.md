# PRD — Tabela de Valores & Calculadora de Bolsas QI 2027

**Produto:** Dashboard interno de matrículas — Colégio Qi  
**Ciclo:** 2027  
**Data:** 2026-08-24  
**Status:** Implementado — aguardando deploy

---

## Problema

A ferramenta original (tess.page) não permitia que os coordenadores de admissão avaliassem, no momento da negociação, se o desconto proposto estava gerando um ticket compatível com a **meta da série**. A calculadora operava por **bloco de preço** (ex.: "EF1 — 1º ao 5º Ano"), sem distinção por série individual — o que impede comparar com metas granulares.

---

## Objetivos

1. **Replicar** todas as 5 abas da ferramenta original com fidelidade visual e funcional
2. **Evoluir** a Calculadora de Mensalidade: de bloco para série individual
3. **Integrar** as metas de ticket por filial/série (planilha Metas_2027_Qi) com indicador visual em tempo real
4. **Hospedar** na Vercel com URL própria — sem depender da tess.page

---

## Usuários-alvo

Coordenadores de Admissão e Responsáveis Comerciais do Colégio Qi (uso interno por unidade).

---

## Escopo da Versão 1

### Abas mantidas (sem alteração funcional)
| Aba | Descrição |
|-----|-----------|
| Tabela de Valores | Segmento / Série / Turno / Anuidade / Mensalidade / 1ª Cota / Material / Bilíngue |
| Prazos & Condições | 4 prazos (até 30/09, 31/10, 30/11, 31/12) com descontos e parcelas |
| Calc. Material | Calculadora de material didático por bloco + prazo |
| Portas Abertas | Calendário de eventos por unidade |

### Evolução — Calculadora de Mensalidade
**Antes:** seleção por bloco de preço (agrupa séries com mesmo valor)  
**Depois:** seleção por **série individual** (ex.: "1º Ano", "6º Ano", "1ª Série EM")

#### Novo bloco "Indicador de Meta"
Aparece no painel de resultado logo abaixo da mensalidade sugerida:

| Campo | Descrição |
|-------|-----------|
| Ticket meta da série | Mensalidade média histórica da série (fonte: Metas_2027_Qi.xlsx) |
| Ticket alvo (+10%) | Meta + 10% — valor mínimo desejado na negociação |
| Mensalidade proposta | Valor calculado com desconto aplicado |
| Status | ✅ ACIMA DA META (verde) ou ⚠️ ABAIXO DA META (vermelho) |
| Delta | Diferença em R$ e % entre proposta e ticket alvo |

---

## Dados

| Fonte | Conteúdo | Registros |
|-------|----------|-----------|
| tess.page (extraído) | Tabela de valores, prazos, blocos, bilíngue, portas abertas | 79 linhas |
| Metas_2027_Qi.xlsx | Ticket médio histórico por filial/segmento/série | 72 linhas |

**Unidades cobertas:** Freguesia, Metropolitano, Recreio, Rio 2, Tijuca, Valqueire

---

## Regra do ticket alvo

```
ticket_meta  = mensalidade_media_total da série (col M da planilha, linha "SSS 25")
ticket_alvo  = ticket_meta × 1.10
status       = "ACIMA"  se mensalidade_proposta >= ticket_alvo
               "ABAIXO" se mensalidade_proposta <  ticket_alvo
delta_R$     = mensalidade_proposta - ticket_alvo
delta_pct    = (mensalidade_proposta / ticket_alvo - 1) × 100
```

---

## Stack técnica

- **Frontend:** HTML5 + CSS3 + Vanilla JS (zero dependências)
- **Dados:** `dados.js` — arquivo JS com todos os dados embedados (gerado por script Python)
- **Deploy:** Vercel — site estático, sem build step
- **Fonte de dados futura:** planilha pode ser re-exportada e o `dados.js` regerado via script

---

## Arquivos do projeto

```
tabela-valores-calculadora-bolsas/
├── index.html       # App completo (5 abas + calculadora evoluída)
├── dados.js         # Dados: DADOS, REGRAS, BLOCOS, MBLOCOS, BILING, PORTAS, METAS
├── metas_qi.json    # Fonte das metas (gerado da planilha)
├── vercel.json      # Config deploy estático
└── PRD.md           # Este documento
```

---

## Critérios de aceite

- [ ] Tabela de Valores filtra corretamente por unidade / segmento / série
- [ ] Prazos & Condições mostra os 4 prazos com descontos corretos
- [ ] Calc. Mensalidade permite selecionar série individual (não bloco)
- [ ] Indicador de Meta exibe ticket alvo (+10%) correto por série
- [ ] Status ACIMA/ABAIXO muda de cor em tempo real conforme desconto digitado
- [ ] Calc. Material funciona por bloco + prazo (inalterado)
- [ ] Portas Abertas exibe eventos filtrados por unidade
- [ ] Deploy na Vercel acessível via URL pública

---

## Próximos passos (fora do escopo v1)

- Adicionar **Calc. de Bolsa** dedicada: simular % de bolsa e impacto na anuidade
- Integrar com Data Engine para buscar metas em tempo real (sem re-exportar planilha)
- Adicionar comparativo entre unidades para orientar redistribuição de vagas
