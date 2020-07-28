import React from 'react';
import Button from './Button';
import '../index.css';

export default function ButtonPanel({ clickHandler }) {
  return (
    <div id="ButtonPanel">
      <div className="group">
        <Button clickHandler={clickHandler} buttonName="AC" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="+/-" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="%" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="/" />
      </div>
      <div className="group">
        <Button clickHandler={clickHandler} buttonName="7" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="8" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="9" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="X" />
      </div>
      <div className="group">
        <Button clickHandler={clickHandler} buttonName="4" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="5" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="6" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="-" />
      </div>
      <div className="group">
        <Button clickHandler={clickHandler} buttonName="1" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="2" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="3" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="+" />
      </div>
      <div className="group">
        <Button clickHandler={clickHandler} buttonName="0" width="50%" color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="." color="lightgray" />
        <Button clickHandler={clickHandler} buttonName="=" />
      </div>
    </div>
  );
}
