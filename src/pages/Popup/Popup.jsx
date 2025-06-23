import React, {useContext} from 'react';
import logo from '../../assets/img/logo-title.png';
import './Popup.css';
import { createContext, useState, useEffect } from 'react';
import { ExtensionProvider, ExtensionContext } from './ExtensionProvider';

const PopupContent = () => {
  const { abled, setAbled, 
    soundOn, setSoundOn, 
    siteText, setSiteText, 
    htmlTag, setHtmlTag } = useContext(ExtensionContext);

  const handleToggle = () => {
    setAbled(prev => !prev);
  };

  const handleToggleSound = () => {
    setSoundOn(prev => !prev);
  };

  return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

            <div className="text-input-container">
              <p style={{ color: 'white', fontSize: '11px' }}>
                Enter Credentials of targeted site.
              </p>
              <input
                type="text"
                value={siteText}
                onChange={(e) => setSiteText(e.target.value)}
                placeholder="Enter Site Name (e.g. https://example.com)"
                className="my-text-input"
              />
            </div>

            <div className="text-input-container" style={{ marginTop: '10px' }}>
              <p style={{ color: 'white', fontSize: '11px' }}>
                Enter HTML element ID of targeted button.
              </p>
              <input
                type="text"
                value={htmlTag}
                onChange={(e) => setHtmlTag(e.target.value)}
                placeholder="Enter Element ID (e.g. edit-submit)"
                className="my-text-input"
              />
            </div>
  

          <div className="title-switch">
            <p style={{ color: 'black', fontSize: '13px' }}>ENABLE</p>
            <label className="switch">
              <input type="checkbox" checked={abled} onChange={handleToggle} />
              <span className="slider" />
            </label>
            <p style={{ color: 'black', fontSize: '13px', marginLeft: '20px'}}>SOUND</p>
            <label className="switch">
              <input type="checkbox" checked={soundOn} onChange={handleToggleSound} />
              <span className="slider" />
            </label>
          </div>
        </header>
      </div>
  );
};

const Popup = () => (
  <ExtensionProvider>
    <PopupContent />
  </ExtensionProvider>
);

export default Popup;
