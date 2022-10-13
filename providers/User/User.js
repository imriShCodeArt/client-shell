import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Context from "./Context";

import Account from "@mui/icons-material/AccountBox";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import avatar from "assets/avatar.webp";

const User = ({ children }) => {
  const options = [
    {
      slug: "/account",
      title: "Account",
      icon: <Account />,
    },
    {
      slug: "/settings",
      title: "Settings",
      icon: <Settings />,
    },
    {
      slug: "/logout",
      title: "Logout",
      icon: <Logout />,
    },
  ];
  const tmpUser = {
    id: 1,
    userName: "ImriWain",
    fName: "Imri",
    lName: "Wainberg",
    email: "imri@email.com",
    password: "abc123",
    profileImgUrl: avatar,
    options,
  };
  const [state, setState] = useState(undefined);

  function setUser({ ...newUser }) {
    setState(newUser);
    return true;
  }
  function clearUser() {
    setState(undefined);
  }
  function updateUser(fields) {
    setState((usr) => ({ ...usr, ...fields, id: usr.id }));
  }
  return (
    <Context.Provider
      value={{
        ...state,
        options,
        setUser,
        clearUser,
        updateUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

User.propTypes = {};
User.defaultProps = {
  width: 250,
  height: undefined,
};

export default User;
