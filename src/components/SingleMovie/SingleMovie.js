import "./SingleMovie.css";
import PropTypes from "prop-types";

function singleMovie({ singleMovie }) {
  console.log(singleMovie);
  return (
    <div className='single-movie-container'>
      <div className='left-container'>
        <aside className='movie-overview'>{singleMovie.overview}</aside>
      </div>
      <div className='middle-container'>
        <h2 className='movie-title'>{singleMovie.title}</h2>
        <img
          src={singleMovie.backdrop_path}
          alt='movie picture'
          style={{ height: "200px", width: "400px" }}
        />
        <p className='movie-tagline'>{singleMovie.tagline}</p>
      </div>

      <div className='right-container'>
        <p className='movie-average-rating'>
          {" "}
          <strong>Average Rating: </strong>
          {singleMovie.average_rating} / 10
        </p>
        <p className='movie-release-date'>
          {" "}
          <strong>Release Date: </strong> {singleMovie.release_date}
        </p>
        <p className='movie-runtime'>
          {" "}
          <strong>Runtime: </strong> {singleMovie.runtime}
        </p>
        <br></br>
        <div className='movie-genres-container'>
          <p className='movie-genres'>
            {" "}
            <strong> Genres: </strong> {singleMovie.genres}
          </p>
        </div>
      </div>
    </div>
  );
}

export default singleMovie;

singleMovie.propTypes = {
  singleMovie: PropTypes.object.isRequired,
};
