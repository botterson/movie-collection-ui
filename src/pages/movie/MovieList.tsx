import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Movie } from "../../models/Movie";
import MovieItem from "./MovieItem";

import classes from "./MovieList.module.css";

interface RootState {
  movie: Movie[];
}

const MovieList = () => {
  const movies: Movie[] = useSelector((state: RootState) => state.movie);

  return (
    <Fragment>
      <h1 style={{ textAlign: "center"}}>Moooovieeeee List</h1>
      <section className={classes.products}>
        <ul>
          {movies.map(
            (item: Movie) =>
              item.name && (
                <MovieItem id={item.id} name={item.name} description={item.description} rating={item.rating} />
              )
          )}
        </ul>
      </section>
    </Fragment>
  );
};

export default MovieList;
