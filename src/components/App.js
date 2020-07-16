import React from 'react';
import Display from './Display.js';
import ButtonPanel from './ButtonPanel.js';
import '../index.css';

export default function App() {
    return (
      <div id="Calcualtor">
          <Display />
          <ButtonPanel />
      </div>
    );
  }
