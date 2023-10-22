import './Movies.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

function Movies( {movies, getSingleMovie} ) {
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
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      average_rating: PropTypes.number.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  getSingleMovie: PropTypes.func.isRequired,
}