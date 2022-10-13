import React, { useEffect, useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import CssBaseline from "@mui/material/CssBaseline";

import Context from "./Context";

import AppBar from "./components/AppBar";

import config from "./utils/config";

import DialogContext from "providers/Dialog";
import DrawerContext from "providers/Drawer";
import NotificationsContext from "providers/Notifications";
import MessegesContext from "providers/Messeges";
import UserContext from "providers/User/User";

const WebLayout = ({ initialState, children, ...props }) => {
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
      <Context.Provider value={config}>
        <UserContext>
          <DialogContext>
            <NotificationsContext>
              <MessegesContext>
                <DrawerContext>
                  <CssBaseline />
                  <AppBar useMenuBtn useAvatar useLogo />
                  {children}
                </DrawerContext>
              </MessegesContext>
            </NotificationsContext>
          </DialogContext>
        </UserContext>
      </Context.Provider>
    </ThemeProvider>
  );
};

export default WebLayout;
