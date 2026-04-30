// content.js - Script injetado nas páginas web

console.log("NoShortVideos: Content script carregado.");

// Definindo as regras de CSS para cada plataforma
const CSS_RULES = {
  youtube: `
    /* Oculta a aba Shorts na barra lateral (completa e mini) */
    ytd-guide-entry-renderer a[title="Shorts"],
    ytd-mini-guide-entry-renderer[aria-label="Shorts"] {
      display: none !important;
    }
    /* Oculta a prateleira de Shorts na Home e nos resultados de busca */
    ytd-rich-shelf-renderer[is-shorts],
    ytd-reel-shelf-renderer {
      display: none !important;
    }
    /* Oculta a seção inteira que contém a prateleira de Shorts na Home */
    ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts]) {
      display: none !important;
    }
  `,
  instagram: `
    /* Oculta links do Reels na barra lateral e em outros lugares */
    a[href^="/reels/"] {
      display: none !important;
    }
    /* Tenta ocultar publicações do tipo Reel no feed (usando seletor avançado) */
    article:has(svg[aria-label="Reel"]) {
      display: none !important;
    }
  `,
  tiktok: `
    /* Oculta os vídeos no feed principal do TikTok */
    [data-e2e="recommend-list-item-container"],
    [data-e2e="explore-item"],
    div[class*="DivVideoFeed"] {
      display: none !important;
    }
  `
};

// Determina qual plataforma estamos acessando
const hostname = window.location.hostname;
let currentPlatform = null;
let storageKey = null;

if (hostname.includes("youtube.com")) {
  currentPlatform = "youtube";
  storageKey = "hideYoutubeShorts";
} else if (hostname.includes("instagram.com")) {
  currentPlatform = "instagram";
  storageKey = "hideInstagramReels";
} else if (hostname.includes("tiktok.com")) {
  currentPlatform = "tiktok";
  storageKey = "hideTiktokFeeds";
}
const STYLE_ID = "noshortvideos-style";

// Função para injetar ou remover o CSS
function updateCSS(isEnabled) {
  if (!currentPlatform) return;

  let styleTag = document.getElementById(STYLE_ID);

  if (isEnabled) {
    // Se a opção está ativada e o CSS não existe, injetamos
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = STYLE_ID;
      styleTag.textContent = CSS_RULES[currentPlatform];
      document.head.appendChild(styleTag);
      console.log(`NoShortVideos: Ocultando vídeos curtos no ${currentPlatform}`);
    }
  } else {
    // Se a opção foi desativada, removemos o CSS para voltar a mostrar os vídeos
    if (styleTag) {
      styleTag.remove();
      console.log(`NoShortVideos: Mostrando vídeos curtos no ${currentPlatform}`);
    }
  }
}

// Quando o script carrega, verificamos as configurações no Storage
if (currentPlatform) {
  chrome.storage.sync.get([storageKey], (result) => {
    const isEnabled = result[storageKey] !== false;
    updateCSS(isEnabled);
  });

  // Escutamos por mudanças feitas no Popup para atualizar a tela em tempo real
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === "sync" && changes[storageKey]) {
      updateCSS(changes[storageKey].newValue);
    }
  });
}
