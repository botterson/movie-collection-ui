import React from "react";

import classes from './Layout.module.css';

const Header: React.FC<{className: string}> = (props) => {

  return (
    <div className={props.className}>
      <div className={classes.headerText}>Movie Collection Demo</div>
    </div>
  );
}

export default Header;