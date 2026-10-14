# QI: captação e teto comercial
Atualizar 60 séries com realizado de 14/10/2026; preservar 12 de Valqueire até
validar bolsistas históricos. Não modificar preços de tabela nem outras marcas.

Projeção: floor(95% meta de captação), descontando taxa de bolsistas da unidade
em 2026 e arredondando pagantes para baixo. Somente receita e alunos de captação,
incluindo pré-matriculados elegíveis. Renovação não entra na conta.
Freguesia/7º e Metropolitano/3º: mais 2 pagantes cada, por decisão explícita.
Referência: máximo entre recuperação, ticket atual e meta oficial de captação.
Teto: menor entre 140% do atual (meta se não há captação) e preço cheio.
Ticket publicado: menor entre referência e teto. Sem margens de 10% ou 15%.
Equivalente mensal: mensalidade + primeira cota/12; sem MD e bilíngue.
Déficit = meta anual - realizado - restantes * ticket publicado * 12.
Adicionais = ceil(déficit / (ticket publicado * 12)).

JSON e METAS embutidas iguais e versionadas. Sincronização aceita redução
autorizada, mas recusa versão antiga, base incompleta, duplicatas e valores inválidos.
Indicador compara proposta com referência; aviso separado mostra déficit de receita.
Testar fórmula, preservação de Valqueire, sincronização e navegador antes do deploy.
Relatório agregado não contém dados pessoais. Versionar por PR e validar produção.
