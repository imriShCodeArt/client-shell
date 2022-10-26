import React, { Suspense } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import Root from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import { useThemeContext } from "../../.";
import Avatar from "./components/Avatar";

const Logo = loadable(() => import("./components/Logo"));
const MenuBtn = loadable(() => import("./components/MenuBtn"));

const AppBar = ({
  useLogo,
  useMenuBtn,
  useAvatar,
  disableDivider,
  elevation,
  children,
}) => {
  const theme = useThemeContext();
  const { logo, links } = theme || {};
  return (
    <Root elevation={elevation} position='static'>
      <Toolbar>
        {useMenuBtn && <MenuBtn />}
        {useMenuBtn && !disableDivider && (
          <Divider sx={{ mx: "1em" }} variant='middle' orientation='vertical' flexItem />
        )}
        {useLogo && logo && <Logo />}
        <Box flexGrow={1}>{children}</Box>
        {useAvatar !== undefined && <Avatar />}
      </Toolbar>
    </Root>
  );
};

AppBar.propTypes = {};
AppBar.defaultProps = {};

export default AppBar;
