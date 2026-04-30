// popup.js - Lógica da interface da extensão

document.addEventListener("DOMContentLoaded", () => {
  // Pegamos as referências dos checkboxes
  const toggleYoutube = document.getElementById("toggle-youtube");
  const toggleInstagram = document.getElementById("toggle-instagram");
  const toggleTiktok = document.getElementById("toggle-tiktok");

  // Função para carregar o estado inicial armazenado
  chrome.storage.sync.get(["hideYoutubeShorts", "hideInstagramReels", "hideTiktokFeeds"], (result) => {
    // Definimos os valores; se for undefined (não salvo ainda), assume true
    toggleYoutube.checked = result.hideYoutubeShorts !== false;
    toggleInstagram.checked = result.hideInstagramReels !== false;
    toggleTiktok.checked = result.hideTiktokFeeds !== false;
  });

  // Salva no storage quando houver mudança nos checkboxes
  toggleYoutube.addEventListener("change", (e) => {
    chrome.storage.sync.set({ hideYoutubeShorts: e.target.checked });
  });

  toggleInstagram.addEventListener("change", (e) => {
    chrome.storage.sync.set({ hideInstagramReels: e.target.checked });
  });

  toggleTiktok.addEventListener("change", (e) => {
    chrome.storage.sync.set({ hideTiktokFeeds: e.target.checked });
  });
});
