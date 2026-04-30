document.addEventListener("DOMContentLoaded", () => {
  const toggleYoutube = document.getElementById("toggle-youtube");
  const toggleInstagram = document.getElementById("toggle-instagram");
  const toggleTiktok = document.getElementById("toggle-tiktok");

  chrome.storage.sync.get(["hideYoutubeShorts", "hideInstagramReels", "hideTiktokFeeds"], (result) => {
    toggleYoutube.checked = result.hideYoutubeShorts !== false;
    toggleInstagram.checked = result.hideInstagramReels !== false;
    toggleTiktok.checked = result.hideTiktokFeeds !== false;
  });

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
