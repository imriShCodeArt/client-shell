import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { useThemeContext } from "shared/layout/Web";

import loadable from "@loadable/component";

import { useIntl } from "react-intl";

const Avatar = loadable(() => import("./components/Avatar"));
const Notifications = loadable(() => import("./components/Notifications"));
const IconButton = loadable(() => import("components/io/IconButton"));

const AppBar = (props) => {
  const intl = useIntl();
  const context = useThemeContext();
  const {
    open: drawerOpen,
    width: drawerWidth,
    height: drawerHeight,
    anchor: drawerAnchor,
    useOpen: openDrawer,
  } = context["drawer"] || {};
  const { fName: userFName, lName: userLName } = context["user"] || {};
  const { toolbarProps, children, disableAvatar, disableNotifications, ...rest } = props;
  const { sx: toolbarSx, ...more } = toolbarProps || {};

  const adjustToolbarSize = () => {
    if (!drawerOpen) return;
    switch (drawerAnchor) {
      case "top":
        return { pt: { xs: undefined, md: `${drawerHeight}px!important` } };
      case "left":
        return { pl: { xs: undefined, md: `${drawerWidth}px!important` } };
      case "right":
        return { pr: { xs: undefined, md: `${drawerWidth}px!important` } };

      default:
        return;
    }
  };

  const MenuBtn = () => (
    <IconButton onClick={openDrawer} disableFocusRipple>
      {!drawerOpen ? <MenuIcon /> : <MenuOpenIcon />}
    </IconButton>
  );

  const sxObj = {
    justifyContent: "space-between",
    transition: "all .15s ease-in-out",
    ...adjustToolbarSize(),
    ...toolbarSx,
  };

  return (
    <Root {...rest}>
      <Toolbar {...more} sx={sxObj}>
        <MenuBtn />

        {children}

        <Stack direction={'row'} >
          {!disableNotifications && <Notifications />}
          {!disableAvatar && <Avatar />}
        </Stack>
      </Toolbar>
    </Root>
  );
};

AppBar.propTypes = {};
AppBar.defaultProps = {
  position: "static",
};

export default AppBar;
