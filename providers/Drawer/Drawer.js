import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Context from "./Context";

import Root from "@mui/material/Drawer";

const Drawer = ({ title, id, actions, children, width, height }) => {
  const [state, setState] = useState({
    open: false,
    children: "",
    anchor: "left",
    width: width,
    height: height,
  });

  function handleOpen() {
    setState((val) => ({ ...val, open: true }));
  }
  function handleClose() {
    setState((val) => ({ ...val, open: false }));
  }
  function setContent(content) {
    setState((val) => ({ ...val, children: content }));
  }
  function setAnchor(anchor) {
    const arr = ["top", "bottom", "left", "right"];
    const validate = arr.map((c) => anchor === c).filter((f) => f === true)[0] === true;
    validate ? setState((val) => ({ ...val, anchor: anchor })) : "";
    return validate;
  }
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      e.key === "Escape" && state.open && handleClose();
    });
  }, []);
  return (
    <Context.Provider
      value={{
        open: state.open,
        anchor: state.anchor,
        width,
        height,
        handleOpen,
        handleClose,
        setContent,
        setAnchor,
      }}
    >
      {children}
      <Root
        PaperProps={{
          sx: {
            width: { xs: state.width ? "90vw" : "100vw", md: state.width },
            height: { xs: state.height ? "90vh" : "100vh", md: state.height },
          },
        }}
        onClose={handleClose}
        {...{ title, id, actions, ...state }}
      />
    </Context.Provider>
  );
};

Drawer.propTypes = {};
Drawer.defaultProps = {
  width: 250,
  height: undefined,
};

export default Drawer;
