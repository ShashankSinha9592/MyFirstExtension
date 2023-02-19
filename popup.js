function injectTheScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.url?.startsWith("chrome://")) return undefined;
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content_script.js"],
    });
  });
}
document
  .getElementById("clickactivity")
  .addEventListener("click", injectTheScript);
