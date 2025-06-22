import React from 'react';
import logo from '../../assets/img/logo-title.png';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import { useState } from 'react';
import { use } from 'react';

const Popup = () => {
  const [abled, setAbled] = useState(false);
  const [text, setText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ 
          color: 'black',
          fontSize: '12px',

        }}>
        Enter Credentials of targeted site.
        </p>
         <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Site Name (e.g. https://example.com)"
            className="my-text-input"  
          />
        </div>
        <p style={{
          color: 'black',
          fontSize: '12px',
          marginTop: '10px',
          width: '90%'
        }}>
          Enter HTML element ID of targeted button.
        </p>
         <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Element ID (e.g. edit-submit)"
            className="my-text-input"  
          />
        </div>
        <div>
          <button/>
        </div>
      </header>
    </div>
  );
};

// {/* <p>You typed: {text}</p> */}

export default Popup;
