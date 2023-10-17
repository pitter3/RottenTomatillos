import './Movies.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function Movies( {movies, getSingleMovie} ) {
  console.log('USE PARAMS', useParams())

  const MovieIcons = movies.map(movie => {
    return (

      <Card
        id={movie.id}
        key={movie.id}
        image={movie.poster_path}
        getSingleMovie={getSingleMovie}
      />
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