import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Context from "./Context";

const Root = loadable(() => import("components/feedback/Dialog"));

const Dialog = ({ title, id, actions, children }) => {
  const [state, setState] = useState({
    open: false,
    content: "",
    transitionDirection: "up",
  });

  function handleClose() {
    setState((val) => ({ ...val, open: false }));
  }
  function handleOpen() {
    setState((val) => ({ ...val, open: true }));
  }
  function setContent(content) {
    setState((val) => ({ ...val, content }));
  }
  function setDirection(direction) {
    const arr = ["up", "down", "left", "right"];
    const validate =
      arr.map((c) => direction === c).filter((f) => f === true)[0] === true;
    validate ? setState((val) => ({ ...val, transitionDirection: direction })) : "";
    return validate;
  }
  useEffect(() => {

  }, []);
  return (
    <Context.Provider
      value={{
        open: state.open,
        direction: state.transitionDirection,
        handleClose,
        handleOpen,
        setContent,
        setDirection,
      }}
    >
      {children}
      <Root onClose={handleClose} {...{ title, id, actions, ...state }}>
        {state.content}
      </Root>
    </Context.Provider>
  );
};

Dialog.propTypes = {};

export default Dialog;
