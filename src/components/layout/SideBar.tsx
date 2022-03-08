import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from './Layout.module.css';


const SideBar: React.FC<{className: string}> = (props) => {

  return (
    <div className={props.className}>
      <div className={classes.menuDiv}>
        <NavLink to={'list-movies'} className={classes.menu} style={{ textDecoration: 'none' }}>Movie List</NavLink>
      </div>
      <div className={classes.menuDiv}>
        <Link to={'add-movie'} className={classes.menu} style={{ textDecoration: 'none' }}>Add Movie</Link>
      </div>
    </div>
  );
};

export default SideBar;