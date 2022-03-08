import { createSlice } from '@reduxjs/toolkit';

import { Movie } from '../models/Movie';

const initialState: Movie[] = [
  { id: '', name: '' },
];

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie(state, action) {
      const newMovie: Movie = action.payload;
      const existingItem = state.find((movie: Movie) => movie.name === newMovie.name);

      if (!existingItem) {
        const movie1: Movie = {
          id: newMovie.id,
          name: newMovie.name,
          description: newMovie.description ? newMovie.description : '',
          rating: newMovie.rating ? newMovie.rating : ''
        };

        state.push(movie1);
      }
    }
  }
});

export const movieActions = movieSlice.actions;

export default movieSlice;