import "./SingleMovie.css";
import PropTypes from "prop-types";

import React from "react";

function SingleMovie({ singleMovie, formatRunTime, error }) {
  console.log("singleMovie:=====", singleMovie);
  // if (singleMovie === null) {
  //   return <div>Loading...</div>;
  // }

  return error ? (
    <p className='error-message'>ERROR: {error}</p>
  ) : (
    <div className='single-movie-container'>
      <div className='middle-container'>
        <div className='movie-title-container'>
          <h2 className='movie-title'>{singleMovie.title}</h2>
          <div className='subheader'>
            <div className='details'>
              {singleMovie.release_date.slice(0, 4)}
              <span className='bullet'>•</span>
              {formatRunTime(singleMovie.runtime)}
            </div>
          </div>
        </div>
        <div className='image-container'>
          <img
            className='movie-image'
            src={singleMovie.backdrop_path}
            alt='movie picture'
            style={{ height: "486px", width: "864px" }}
          />
        </div>
        <div className='movie-tagline-container'>
          <p className='movie-tagline'>{singleMovie.tagline || "___"}</p>
        </div>
      </div>

      <div className='right-container'>
        <div className='movie-overview-container'>
          <p className='movie-overview'>{singleMovie.overview}</p>
        </div>
        <div className='movie-genre-container'>
          <p className='movie-genre'>
            Categories:<br></br>
            {singleMovie.genres.join(", ")}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

{
  /* <li>
{singleMovie.average_rating} / 10
</li> */
}
export default SingleMovie;

SingleMovie.propTypes = {
  singleMovie: PropTypes.shape({
    average_rating: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    revenue: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  formatRunTime: PropTypes.func.isRequired,
  error: PropTypes.string,
};
