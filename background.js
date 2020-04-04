// this background script changes the icon dynamically.

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.iconH) {
    console.log('changing icon to H');
    chrome.tabs.query(
      { active: true, windowType: 'normal', currentWindow: true },
      function (d) {
        var tabId = d[0].id;
        chrome.browserAction.setIcon({ path: 'h-01.png', tabId: tabId });
      }
    );
  }
  if (msg.iconW) {
    console.log('changing icon to W');
    chrome.tabs.query(
      { active: true, windowType: 'normal', currentWindow: true },
      function (d) {
        var tabId = d[0].id;
        chrome.browserAction.setIcon({ path: 'w.png', tabId: tabId });
      }
    );
  }
});
