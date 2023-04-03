import React from "react";

import classes from "./Model.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const handleClose = () => {
    // alert("Backdrop clicked");
    props.onClose(false);
  };

  return <div className={classes.backdrop} onClick={handleClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.setModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Model;
