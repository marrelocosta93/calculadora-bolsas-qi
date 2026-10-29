# Produtos adicionais de material — 29/10/2026

## Requisito
A equipe precisa calcular International School (Livro de Inglês) e Mooney além do material regular. Fonte: Tabela de Preços 2027 - Qi.pdf, página 2. Usuário determina as mesmas condições do material atual, mesmo onde o PDF diz valor único.

## Implementação
- Seletor Produto na calculadora de material: regular, International School e Mooney.
- International School: 1º ao 5º ano, R$817,57.
- Mooney: 4º/5º, R$300,58; 6º ao 9º, R$240,46.
- Valores anuais únicos por produto, iguais nas seis unidades; não somar automaticamente ao material regular ou ao bilíngue.
- Filtrar blocos pelo produto; limpar seleção e tags ao trocar produto/unidade.
- Reutilizar REGRAS.prazos e calcMat para desconto à vista, boleto e cartão. Último vencimento boleto ago/27 permanece.
- Não alterar preços regulares, tickets metas, calendário ou cálculo de mensalidade.
- Atualizar hash do asset, validar valores e séries, todos os prazos e unidades, troca de produto e retorno ao regular no navegador.
