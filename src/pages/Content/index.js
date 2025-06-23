import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

function checkAndClick() {
  console.log('Checking for button click...');
  chrome.storage.local.get(['abled', 'siteText', 'htmlTag'], (result) => {
    if (!result.abled) return;
    console.log('Extension is enabled:', result.abled);

    const urlMatch = window.location.href.startsWith(result.siteText);
    if (!urlMatch) return;
    console.log('URL matches:', result.siteText);

    const button = document.getElementById(result.htmlTag);
    console.log('Button found:', button);

    if (button && !button.disabled) {
      console.log('Clicking button:', button);
      button.click();
      //Play a sound if enabled here!
    }
  });
}

// Run every second (or adjust interval)
setInterval(checkAndClick, 10000);

// Optional: listen for storage changes (react live)
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.abled) {
    console.log('Enabled state changed:', changes.abled.newValue);
  }
});
