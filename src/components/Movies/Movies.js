import './Movies.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movies( {movies, getSingleMovie} ) {
  console.log(movies)
  const MovieIcons = movies.map(movie => {
    return (
      <Link to={`/SingleMovie/`}>
        <Card
        id={movie.id}
        key={movie.id}
        image={movie.poster_path}
        getSingleMovie={getSingleMovie}
        />
      </Link>
    )
  })
  
  return (
    <div className='movie-container'>
      {MovieIcons}
    </div>
  )
}

export default Movies

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  getSingleMovie: PropTypes.func.isRequired
}