function listenClick() {
  const button = document.getElementById("get-player");
  button.addEventListener("click", () => {
    chrome.tabs.executeScript({
      file: "scripts/buy-player.js"
    });
  });
}

listenClick();
