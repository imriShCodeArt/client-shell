import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../..";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Logo = ({ alt = "Logo", title }) => {
  const navigate = useNavigate();
  const theme = useThemeContext();

  const { logo, pages } = theme;

  return (
    <Box>
      <Button sx={{ p: 0 }} disableRipple onClick={() => navigate(pages["home"].slug)}>
        <img style={{}} width={"60px"} src={logo} />
      </Button>
    </Box>
  );
};

Logo.propTypes = {};

export default Logo;
