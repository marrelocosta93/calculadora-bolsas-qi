# Atualização de metas em abas abertas

Problema: prints de Tijuca/8º Ano mostram o alvo antigo 1.945,28 e o atual 2.237,07. O servidor já entrega o atual, mas a página carregava dados.js sem versão e mantinha METAS em memória até a navegação. Não há uso de cookies, storage ou service worker para metas. Não é possível comprovar o estado dos navegadores dos prints retrospectivamente.

Correção: URL de dados.js com hash, cabeçalhos no-store, consulta ao JSON publicado sem cache nem cookies ao abrir, retornar à aba, reconectar e a cada minuto. Validação de cobertura, unicidade, valores e piso antes da substituição atômica. Nenhuma alteração nos 72 tickets. Preservar inputs e seleção ao recalcular.

Falha de consulta bloqueia resultado da simulação com mensagem para verificar conexão/recarregar. Não tratar valores não confirmados como meta válida. Resposta antiga ou incompleta não substitui dados atuais.

Abas já abertas com o código anterior precisam de uma recarga inicial: o código antigo não possui sincronização e não pode receber código novo remotamente sem navegação.

Validação: nó VM executa o código real de sincronização, testa carga antiga, foco, pageshow, intervalo, offline/recuperação, HTTP 500, duplicidades, tipos inválidos e preservação de pisos. Ao modificar dados.js, atualizar hash de SHA-256 do conteúdo LF (primeiros 16 caracteres) na URL do script; o CI recusa divergências.
