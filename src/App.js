import React from "react";
import { hot } from "react-hot-loader/root";

import WebLayout from 'shared/layout/Web'

//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  console.clear();
});
//  *****************************************************

const App = () => {
  return (
    <WebLayout>
      <div className='container'>
        <div>Name: App</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
      </div>
    </WebLayout>
  );
};

export default hot(App);
