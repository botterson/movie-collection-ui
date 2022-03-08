import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Card from "../../components/common/Card";
import { movieActions } from "../../store/movie-slice";

import classes from "./AddMovie.module.css";

const AddMovie: React.FC<{}> = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevents the browser from refreshing the page.

    const id: string = uuidv4();

    dispatch(movieActions.addMovie({ id, name, description, rating }));

    clearForm();
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setRating("");
  };

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setRating(event.target.value);
  };

  return (
    <Card className={classes.card}>
      <form onSubmit={handleSubmit}>
        <div className={classes.formDiv}>
          <div className={classes.title}>Add Movie</div>
          <div className={classes.row}>
            <label className={classes.formLabel}>Movie Name:</label>
            <input
              type="text"
              value={name}
              className={classes.formInput}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.row}>
            <label className={classes.formLabel}>Movie Description:</label>
            <textarea
              value={description}
              className={classes.formInputArea}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={classes.row}>
            <label className={classes.formLabel}>Movie Rating:</label>
            <select onChange={selectHandler} className={classes.formSelect}>
              <option selected disabled>
                Choose one
              </option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
            </select>
          </div>
          <div className={classes.actions}>
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddMovie;
