import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Context from "./Context";

const Notifications = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: "NOTE_1",
      title: "Welcome New User!",
      text: "bla bla bla",
      date: new Date().toISOString(),
      markAsViewed: false,
    },
  ]);

  function markNoteAsViewed(id) {
    const noteIndex = notes
      .map((note, i) => note.id === id && i)
      .filter((f) => f !== undefined)[0];
    setNotes(
      notes.map((n, i) => (i === noteIndex ? { ...n, markAsViewed: true } : { ...n }))
    );
  }

  useEffect(() => {}, []);
  useEffect(() => {}, [notes]);
  return <Context.Provider value={{ markNoteAsViewed }}>{children}</Context.Provider>;
};

Notifications.propTypes = {};
Notifications.defaultProps = {
  width: 250,
  height: undefined,
};

export default Notifications;
