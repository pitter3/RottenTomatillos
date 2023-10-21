import "./Card.css";
import PropTypes from "prop-types";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Card({ id, image, getSingleMovie }) {
  return (
    <div className='card' onClick={() => getSingleMovie(id)}>
      <Link to={`/SingleMovie/${id}`}>
        <img
          id={id}
          src={image}
          alt='movie poster'
          style={{ height: "300px", width: "200px" }}
        />
      </Link>
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  getSingleMovie: PropTypes.func.isRequired,
};
