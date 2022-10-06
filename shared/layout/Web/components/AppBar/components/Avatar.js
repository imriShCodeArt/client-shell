import React, { useRef } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import loadable from "@loadable/component";
import { useIntl } from "react-intl";

const Menu = loadable(() => import("components/providers/Menu"));
const IconButton = loadable(() => import("components/io/IconButton"));

const Avatar = ({}) => {
  const intl = useIntl();

  return (
    <Menu
      root={
        <IconButton sx={{ p: "0.15em!important" }} disableFocusRipple>
          <Tooltip placement="left-end"
            title={intl.formatMessage({
              id: "account_settings",
              description: "",
              defaultMessege: "Account Settings",
            })}
          >
            <Root>A</Root>
          </Tooltip>
        </IconButton>
      }
    ></Menu>
  );
};

Avatar.propTypes = {};

export default Avatar;
