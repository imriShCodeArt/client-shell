import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Context from "./Context";

const Messeges = ({ children }) => {
  const [messeges, setMesseges] = useState([
    {
      id: "MSG_1",
      title: "Greetings",
      text: "bla bla bla",
      date: new Date().toISOString(),
      markAsViewed: false,
      from: "system",
    },
  ]);

  function markMessegeAsViewed(id) {
    const noteIndex = messeges
      .map((note, i) => note.id === id && i)
      .filter((f) => f !== undefined)[0];
    setMesseges(
      messeges.map((n, i) => (i === noteIndex ? { ...n, markAsViewed: true } : { ...n }))
    );
  }

  function sendMessege({ subject, addressee, text }) {
    console.log("SEND MESSEGE!");
  }

  useEffect(() => {}, []);
  useEffect(() => {}, [messeges]);
  return (
    <Context.Provider value={{ markMessegeAsViewed, sendMessege }}>
      {children}
    </Context.Provider>
  );
};

Messeges.propTypes = {};
Messeges.defaultProps = {
  width: 250,
  height: undefined,
};

export default Messeges;
