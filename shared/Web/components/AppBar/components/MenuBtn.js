import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useDrawerContext } from "providers/Drawer";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../..";

const List = loadable(() => import("@mui/material/List"));
const ListItem = loadable(() => import("@mui/material/MenuItem"));
const ListItemText = loadable(() => import("@mui/material/ListItemText"));
const ListItemIcon = loadable(() => import("@mui/material/ListItemIcon"));
const Typography = loadable(() => import("@mui/material/Typography"));
const Toolbar = loadable(() => import("@mui/material/Toolbar"));
const AppBar = loadable(() => import("@mui/material/AppBar"));

const MenuBtn = (props) => {
  const theme = useThemeContext();
  const drawer = useDrawerContext();
  const navigate = useNavigate();

  const { pages } = theme;

  const {
    setAnchor,
    handleOpen: openDrawer,
    handleClose: closeDrawer,
    setContent,
    anchor,
    width,
    open,
  } = drawer || {};

  function handleOpen() {
    setAnchor("left");
    setContent(
      <List disablePadding>
        <AppBar position='static' sx={{ mb: "1em" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant='h6'>Brand</Typography>
            <IconButton onClick={closeDrawer}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {Object.keys(pages).map((p, i) => {
          const { slug, title: text, icon } = pages[p] || {};
          return (
            <ListItem key={i} onClick={() => navigate(slug)}>
              {text && <ListItemText  >{text}</ListItemText>}
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            </ListItem>
          );
        })}
      </List>
    );
    openDrawer();
  }

  return (
    <IconButton onClick={() => handleOpen()}>
      <MenuIcon />
    </IconButton>
  );
};

MenuBtn.propTypes = {};

export default MenuBtn;
