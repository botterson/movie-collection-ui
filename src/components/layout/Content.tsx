import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMovie from "../../pages/movie/AddMovie";
import MovieList from "../../pages/movie/MovieList";

import classes from './Layout.module.css';

const Content = () => {

  return (
    <div className={classes.contentArea}>
    <Routes>
      <Route path='/list-movies' element={<MovieList />}/>
      <Route path='/add-movie' element={<AddMovie />}/>
    </Routes>
    </div>
  );
}

export default Content;