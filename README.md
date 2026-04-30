# 🚀 NoShortVideos

Fala, galera! 👋 Sou estagiário de programação e esse é o **NoShortVideos**!

Sabe quando a gente vai procurar um tutorial no YouTube ou abrir o Instagram pra ver uma mensagem e, do nada, já se passaram duas horas porque a gente ficou preso rodando o feed de vídeos curtos? Pois é! 😅 

Eu criei essa extensão para o Chrome com o objetivo de ajudar a gente a **recuperar o nosso foco**. Em vez de bloquear o site inteiro (afinal, a gente ainda precisa do YouTube pra estudar, né?), ela age por baixo dos panos (manipulando o DOM) escondendo apenas as partes que distraem, como o YouTube Shorts, Reels e o feed do TikTok.

## 🛠️ O que ela vai fazer (Planejado)
- **YouTube**: Esconder a prateleira de Shorts, os links na barra lateral e os Shorts nos resultados de pesquisa.
- **Instagram**: Sumir com os Reels do feed e da barra lateral.
- **TikTok**: Ocultar os feeds principais que sugam nosso tempo. 😂
- **Popup UI**: Um menuzinho super fácil de usar pra você ativar e desativar a extensão quando quiser, além de configurar o que você quer ver ou não.

## 🚀 Como instalar e testar

A extensão já está funcional! Como ainda não publiquei na Chrome Web Store, você pode instalar ela manualmente usando o "Modo do Desenvolvedor". É super fácil:

1. Faça o clone deste repositório na sua máquina (ou baixe o `.zip`).
2. Abra o Chrome e acesse a página de extensões digitando `chrome://extensions/` na barra de endereços.
3. No canto superior direito, ative a chavinha **"Modo do desenvolvedor"**.
4. Clique no botão **"Carregar sem compactação"** (ou *Load unpacked*).
5. Selecione a pasta do projeto `NoShortVideos` que você baixou.
6. Pronto! 🎉 O ícone do nosso lobinho focado vai aparecer na barra do seu navegador. É só clicar nele para configurar!

## 💻 Como foi feito
Esse projeto está sendo construído com as tecnologias web clássicas (HTML, CSS e JavaScript puro) e utilizando a arquitetura mais recente do Chrome, o **Manifest V3**. É uma ótima oportunidade pra aprender como as extensões funcionam na prática!

## 🤝 Como contribuir
Você é muito bem-vindo para dar um *fork*, estudar o código e abrir um *Pull Request*! 
Algumas ideias do que podemos melhorar no futuro:
- Adicionar suporte a outros navegadores (Firefox, Edge).
- Melhorar a seleção dos elementos no DOM para não quebrar caso o YouTube mude o layout.
- Criar estatísticas mostrando quanto tempo de foco você ganhou.

## 📜 Licença
Licença MIT - Fique à vontade pra clonar, estudar o código e contribuir!
