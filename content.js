let h = window.innerHeight;
let w = window.innerWidth;

window.addEventListener('resize', () => {
  // to update the dimensions
  h = window.innerHeight;
  w = window.innerWidth;
  const data = { height: h, width: w };
  chrome.runtime.sendMessage(data);
});

function copyToClipboard(text) {
  // to copy to clipboard... have to create a text element to get around chrome extensions being unable to copy
  var dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}

let map = {};
// create array to understand double key presses
onkeydown = onkeyup = function (e) {
  map[e.keyCode] = e.type === 'keydown';
  if (map[16] && map[87]) {
    // shift w
    map = {};
    // clear array
    copyToClipboard(w);
    this.console.log('width has been copied to clipboard!');
    chrome.runtime.sendMessage({ iconW: true, iconH: false }); // change icon
  } else if (map[16] && map[72]) {
    // shift h
    map = {};
    copyToClipboard(h);
    this.console.log('height has been copied to clipboard!');
    chrome.runtime.sendMessage({ iconW: false, iconH: true });
  }
};
