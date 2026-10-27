# Referências QI — decisão de 27/10/2026

Problema: a recuperação integral nas matrículas restantes tornou preços pouco praticáveis. Usuário aprovou retirar teto de 40% e piso pelo realizado.

- Fonte oficial: Metas_2027_Qi novas.xlsx, ticket de captação. Realizado: ficha de 26/10/2026, exclusivamente matrículas novas e pré-matriculados ativos.
- Padrão: meta oficial +10%, mostrada como Meta da série, sem expor margem.
- Exceções: realizado abaixo da meta oficial e recuperação superior ao padrão; usar menor entre recuperação e meta +20%.
- Sem pagantes restantes e com déficit: meta +20%, sem afirmar recuperação da receita.
- Usuário autorizou referência abaixo do realizado quando houver folga.
- Diagnóstico mantém 95% da captação, bolsistas históricos e duas exceções de mais duas matrículas aprovadas.
- Valqueire: seleção comercial usa limite inferior de bolsistas integrais anuais. Bolsas integrais em parte do ano permanecem pendentes; não mostrar déficit ou pagantes necessários como projeção confirmada nessa unidade.
- Ticket equivalente: mensalidade/anuidade e primeira cota líquidas divididas por 12; excluir cancelados, sem financeiro gerado, bolsa zero e integral anual. Material não incluído.
- Preservar preços de tabela, demais marcas e fórmula da primeira cota.
- Atualizar JSON, fallback JS e versão de sincronização; permitir reduções autorizadas, recusar dados antigos.
- Validar 72 referências, 20 exceções, teto de tabela, sintaxe, sincronização, indicadores e produção.

Site estático sem package.json, build ou TypeScript. Gate existente: Node scripts/validate-captacao.mjs e smoke real de navegador.
