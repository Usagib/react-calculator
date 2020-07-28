import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../index.css';

export default function App() {
  return (
    <div id="Calcualtor">
      <Display />
      <ButtonPanel />
    </div>
  );
}
