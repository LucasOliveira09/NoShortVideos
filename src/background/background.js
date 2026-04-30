console.log("NoShortVideos: Background script iniciado.");

chrome.runtime.onInstalled.addListener(() => {
  console.log("NoShortVideos: Extensão instalada com sucesso!");
  
  chrome.storage.sync.set({
    hideYoutubeShorts: true,
    hideInstagramReels: true,
    hideTiktokFeeds: true
  }, () => {
    console.log("NoShortVideos: Configurações padrão salvas.");
  });
});
