import React, { createContext, useState, useEffect } from 'react';

export const ExtensionContext = createContext();

export function ExtensionProvider({ children }) {
  const [abled, setAbled] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [siteText, setSiteText] = useState('');
  const [htmlTag, setHtmlTag] = useState('');

  // Load value from chrome.storage when extension starts
  useEffect(() => {
    chrome.storage.local.get(['abled', 'soundOn', 'siteText', 'htmlTag'], (result) => {
      if (result.abled !== undefined) setAbled(result.abled);
      if (result.soundOn !== undefined) setSoundOn(result.soundOn);
      if (result.siteText !== undefined) setSiteText(result.siteText);
      if (result.htmlTag !== undefined) setHtmlTag(result.htmlTag);
    });
  }, []);

  // Save value to chrome.storage when it changes
  useEffect(() => {
    chrome.storage.local.set({ abled, soundOn, siteText, htmlTag });
  }, [abled, soundOn, siteText, htmlTag]);

  return (
    <ExtensionContext.Provider value={{ abled, setAbled,
      soundOn, setSoundOn,
      siteText, setSiteText,
      htmlTag, setHtmlTag }}>
      {children}
    </ExtensionContext.Provider>
  );
}
