console.log('This is the background page.');
console.log('Put the background scripts here.');

// chrome.tabs.onActivated.addListener((activeInfo) => {
//   chrome.tabs.get(activeInfo.tabId, (tab) => {
//     const tabIncludes =
//       (tab.url ?? false) && (tab.url.includes('my.yd.com') ?? false);
//     if (tabIncludes) {
//       console.log('Target tab is active!');
//       chrome.scripting.executeScript(
//         {
//           target: { tabId: tab.id },
//           func: () => {
//             const btn = document.querySelector('#edit-submit');
//             if (btn) {
//               btn.click();
//               console.log('Button clicked!');
//             } else {
//               console.log('Button not found');
//             }
//           },
//         },
//         () => {
//           if (chrome.runtime.lastError) {
//             console.error('Injection error:', chrome.runtime.lastError.message);
//           }
//         }
//       );
//     } else {
//       console.log(
//         'Tab URL is not valid or does not match: ' + tab.url ?? 'No URL'
//       );
//     }
//   });
// });

// chrome.windows.onFocusChanged.addListener((windowId) => {
//   if (windowId === chrome.windows.WINDOW_ID_NONE) {
//     console.log('Early return: No focused window');
//     return;
//   } // No focused window
//   chrome.windows.get(windowId, { populate: true }, (window) => {
//     const activeTab =
//       (window.tabs ?? false) && window.tabs.find((t) => t.active);
//     const urlIncludes =
//       (activeTab.url ?? false) &&
//       (activeTab.url.includes('my.yd.com') ?? false);
//     if (urlIncludes) {
//       console.log('Target tab is focused!');
//       // Trigger your cursor automation
//     } else {
//       console.log(
//         'activeTab URL is not valid or does not match: ' + activeTab.url ??
//           'No URL'
//       );
//     }
//   });
// });
