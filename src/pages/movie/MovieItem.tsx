import { Fragment, useState } from "react";
import Card from "../../components/common/Card";
import ModalDialog from "../../components/common/ModalDialog";
import { Movie } from "../../models/Movie";
import ViewMovie from "./ViewMovie";

import classes from "./MovieItem.module.css";

const MovieItem: React.FC<Movie> = (props) => {
  const { id, name, description, rating } = props;

  const [showView, setShowView] = useState(false);

  const onConfirm = (event: any) => {
    setShowView(false);
  };

  const showViewHandler = () => {
    setShowView(true);
  };

  return (
    <Fragment>
      <li key={id} className={classes.item}>
        <Card className={classes.Card}>
          <div className={classes.item}>
            <h3 onClick={showViewHandler} className={classes.name}>{name}</h3>
            <div className={classes.rating}>{props.rating}</div>
          </div>
        </Card>
      </li>
      {showView && (
        <ModalDialog onConfirm={onConfirm}>
          <ViewMovie
            id={id}
            title={name}
            message={description}
            rating={rating}
            onConfirm={onConfirm}
          />
        </ModalDialog>
      )}
    </Fragment>
  );
};

export default MovieItem;
