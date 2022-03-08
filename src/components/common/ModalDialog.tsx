import React from "react";
import { MouseEventHandler } from "react";
import ReactDOM from "react-dom";

import classes from "./ModalDialog.module.css";

export const Backdrop: React.FC<{
  onConfirm: MouseEventHandler<HTMLDivElement>;
}> = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalDialog: React.FC<{
  onConfirm: MouseEventHandler;
}> = (props) => {
  const backdrop = document.getElementById("backdrop-root");
  const overlay = document.getElementById("overlay-root");

  return (
    <React.Fragment>
      {backdrop &&
        ReactDOM.createPortal(
          <Backdrop onConfirm={props.onConfirm} />,
          backdrop
        )}
      {overlay && ReactDOM.createPortal(props.children, overlay)}
    </React.Fragment>
  );
};
export default ModalDialog;
