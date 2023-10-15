import './Movies.css';
import Card from '../Card/Card';

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