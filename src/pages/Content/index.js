import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

// function monitorNextButton() {
//   const button = document.querySelector('#edit-submit');
//   if (!button) {
//     console.log('Next button not found');
//     return;
//   }

//   console.log('Monitoring Next button...');

//   const observer = new MutationObserver(() => {
//     const value = button.value?.trim();
//     const isEnabled = !button.disabled;

//     console.log(`Button value: ${value}, disabled: ${button.disabled}`);

//     if (isEnabled && value === 'Next') {
//       console.log('Conditions met — clicking button!');
//       button.click();
//       observer.disconnect();
//     }
//   });

//   observer.observe(button, {
//     attributes: true,
//     attributeFilter: ['value', 'disabled'],
//   });

//   const interval = setInterval(() => {
//     const value = button.value?.trim();
//     const isEnabled = !button.disabled;

//     if (isEnabled && value === 'Next') {
//       console.log('Conditions met (interval) — clicking button!');
//       button.click();
//       observer.disconnect();
//       clearInterval(interval);
//     }
//   }, 500);
// }

// if (document.hasFocus()) {
//   monitorNextButton();
// }

// window.addEventListener('focus', () => {
//   console.log('Tab focused — starting monitor');
//   monitorNextButton();
// });
