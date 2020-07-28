import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars
import '../index.css';

export default function App() {
  return (
    <div id="Calcualtor">
      <Display />
      <ButtonPanel />
    </div>
  );
}
