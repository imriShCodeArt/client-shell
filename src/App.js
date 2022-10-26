import React from "react";
import { hot } from "react-hot-loader/root";

import WebLayout from "shared/Web";

import AccountIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  console.clear();
});
//  *****************************************************

window.localStorage.clear();
window.localStorage.setItem("user", JSON.stringify({
  id: 1,
  userName: "",
  email: "email@gmail.com",
  password: "123",
  fName: "John",
  lName: "Snow",
}));

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