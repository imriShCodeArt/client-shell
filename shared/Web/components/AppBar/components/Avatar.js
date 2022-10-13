import React, { useEffect } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import { useDrawerContext } from "providers/Drawer";
import { useUserContext } from "providers/User";
import { useDialogContext } from "providers/Dialog";

import Root from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const List = loadable(() => import("@mui/material/List"));
const ListItem = loadable(() => import("@mui/material/MenuItem"));
const ListItemText = loadable(() => import("@mui/material/ListItemText"));
const ListItemIcon = loadable(() => import("@mui/material/ListItemIcon"));
const Typography = loadable(() => import("@mui/material/Typography"));
const Toolbar = loadable(() => import("@mui/material/Toolbar"));
const AppBar = loadable(() => import("@mui/material/AppBar"));
const SignIn = loadable(() => import("cards/SimpleSignIn"));

import { useNavigate, useLocation } from "react-router-dom";

const Avatar = (props) => {
  const drawer = useDrawerContext();
  const dialog = useDialogContext();
  const user = useUserContext();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    setAnchor,
    handleOpen: openDrawer,
    handleClose: closeDrawer,
    setContent: setDrawerContent,
  } = drawer || {};
  const {
    handleOpen: openDialog,
    handleClose: closeDialog,
    setContent: setDialogContent,
  } = dialog || {};

  const { profileImgUrl, fName, lName, email, options, setUser, clearUser } = user || {};

  function handleOpenDrawer() {
    email !== undefined &&
      setDrawerContent(
        <List disablePadding>
          <AppBar position='static' sx={{ mb: "1em" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <div>
                <Typography variant='caption'>Hello {fName}!:</Typography>
                <Typography variant='h6'>Account:</Typography>
              </div>
              <Root title={`${email}`} src={profileImgUrl}>{fName[0]}</Root>
            </Toolbar>
          </AppBar>
          {email &&
            options &&
            options.map(({ slug, title, icon }, i) => {
              return (
                <ListItem
                  key={i}
                  onClick={() => {
                    navigate(slug);
                    closeDrawer();
                  }}
                >
                  <ListItemText>{title}</ListItemText>
                  <ListItemIcon>{icon}</ListItemIcon>
                </ListItem>
              );
            })}
        </List>
      );
    setAnchor("right");
    openDrawer();
  }

  useEffect(() => {
    const l = location.pathname.split("/").filter((f) => f !== "/" && f !== "")[0];
    if (l === "logout") {
      clearUser();
      navigate("");
    }
  }, [location]);

  const SigninBtn = () => (
    <Button
      onClick={() => {
        setDialogContent(
          <SignIn
            onSubmit={() => {
              setUser(JSON.parse(window.localStorage.getItem("signin"))) && closeDialog();
            }}
          />
        );
        openDialog();
      }}
    >
      Sign in
    </Button>
  );

  const AvatarBtn = () => (
    <IconButton onClick={handleOpenDrawer} disableFocusRipple>
      <Root src={profileImgUrl}>{fName[0]}</Root>
    </IconButton>
  );

  return email !== undefined ? <AvatarBtn /> : <SigninBtn />;
};

Avatar.propTypes = {};

export default Avatar;
