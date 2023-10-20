import "./SingleMovie.css";
import PropTypes from "prop-types";

import React from "react";




function SingleMovie({ singleMovie, formatRunTime }) {
  // if (singleMovie === null) {
  //   return <div>Loading...</div>;
  // }

  return error ? (
      <p className='error-message'>ERROR: {error}</p>
    ) : (
    <div className='single-movie-container'>
      <div className='middle-container'>
        <h2 className='movie-title'>{singleMovie.title}</h2>
        <div className='subheader'>
  <div className='details'>
    {singleMovie.release_date.slice(0, 4)}
    <span className="bullet">•</span>
    {formatRunTime(singleMovie.runtime)}
  </div>
</div>
        <img
          className='movie-image'
          src={singleMovie.backdrop_path}
          alt='movie picture'
          style={{ height: "540px", width: "960px" }}
        />
        <p className='movie-tagline'>{singleMovie.tagline}</p>
      </div>
  
      <div className='right-container'>

        <div className='movie-overview-container'>
          <p className='movie-overview'>
          {singleMovie.overview}
          </p>
        </div>
        <div className='movie-genre-container'>
          <p className='movie-genre'>Categories:<br></br>
          {singleMovie.genres.join(", ")}
          </p>
        </div>
        <div>
        </div>
      </div>
    </div>
    )}
  );  
}


{/* <li>
{singleMovie.average_rating} / 10
</li> */}
export default SingleMovie;

SingleMovie.propTypes = {
  singleMovie: PropTypes.object.isRequired,
};
