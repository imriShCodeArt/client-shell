import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";

import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";

import Context from "./Context";

import AppBar from "./components/AppBar";

import config from "./utils/config";
import reducer from "./utils/reducer";
import * as types from "./utils/vars";

const WebLayout = (props) => {
  const [state, dispatch] = useReducer(reducer, config());
  const { drawer } = state;
  const { user, children } = props || {};
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
      <Context.Provider
        value={{
          drawer: {
            ...drawer,
            useOpen: () => dispatch({ type: types.OPEN_DRAWER }),
          },
          notifications:[],
          user,
        }}
      >
        <CssBaseline />
        <AppBar></AppBar>
        {children}
        <Drawer
          PaperProps={{ sx: { width: drawer.width } }}
          open={drawer.open}
          onClose={() => dispatch({ type: types.CLOSE_DRAWER })}
        ></Drawer>
      </Context.Provider>
    </ThemeProvider>
  );
};

export default WebLayout;
