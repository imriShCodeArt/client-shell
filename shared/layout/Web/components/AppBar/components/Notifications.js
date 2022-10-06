import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import { useIntl } from "react-intl";

import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Notification from "@mui/icons-material/Notifications";

const Menu = loadable(() => import("components/providers/Menu"));
const IconButton = loadable(() => import("components/io/IconButton"));

const Notifications = (props) => {
  const intl = useIntl();
  return (
    <Stack direction={"row"}>
      <Menu
        root={
          <IconButton sx={{ p: "0.15em!important" }} disableFocusRipple>
            <Tooltip
              placement='left-end'
              title={intl.formatMessage({
                id: "notifications",
                description: "",
                defaultMessege: "Account Settings",
              })}
            >
              <Notification />
            </Tooltip>
          </IconButton>
        }
      ></Menu>
    </Stack>
  );
};

Notifications.propTypes = {};

export default Notifications;
