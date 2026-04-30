// background.js - O Service Worker da extensão (Manifest V3)
console.log("NoShortVideos: Background script iniciado.");

// Escuta quando a extensão é instalada
chrome.runtime.onInstalled.addListener(() => {
  console.log("NoShortVideos: Extensão instalada com sucesso!");
  
  // Configurações padrão iniciais
  chrome.storage.sync.set({
    hideYoutubeShorts: true,
    hideInstagramReels: true,
    hideTiktokFeeds: true
  }, () => {
    console.log("NoShortVideos: Configurações padrão salvas.");
  });
});
