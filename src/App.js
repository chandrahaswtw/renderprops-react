import React from 'react';
import './App.css';
import ClickComponent from './ClickComponent/ClickComponent';
import HoverComponent from './HoverComponent/HoverComponent';
import CommonComponent from './CommonComponent/CommonComponent';

function App() {
  return (
    <div>
      <CommonComponent
        render={
          (count, countHandler) => <ClickComponent count={count} countHandler={countHandler}></ClickComponent>}></CommonComponent>
      <CommonComponent
        render={
          (count, countHandler) => <HoverComponent count={count} countHandler={countHandler}></HoverComponent>}></CommonComponent>
    </div>
  );
}

export default App;