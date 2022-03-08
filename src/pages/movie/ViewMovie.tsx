import React, { MouseEventHandler } from "react";
import Card from "../../components/common/Card";

import classes from "./ViewMovie.module.css";

const ViewMovie: React.FC<{
  id: string;
  title: string;
  message?: string;
  rating?: string;
  onConfirm: MouseEventHandler;
}> = (props) => {
  return (
    <Card className={classes.modal}>
      <div>
        <p>Name: {props.title}</p>
      </div>
      <div>
        <p>Description: {props.message}</p>
      </div>
      <div>
        <p>Rating: {props.rating}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onConfirm} className='btn'>Okay</button>
      </footer>
    </Card>
  );
};

export default ViewMovie;
