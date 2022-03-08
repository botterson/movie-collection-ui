import React from "react";
import Content from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";

import classes from './Layout.module.css';

const MainLayout = () => {

  return (
    <div>
      <Header className={classes.header}/>
      <div className={classes.mainlayout}>
        <SideBar className={classes.sidebar} />
        <Content  />
      </div>
    </div>
  );
}

export default MainLayout;