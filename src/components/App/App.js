import { useState } from 'react';
import "./App.css"
import movieData from '../../MockData';
import singleMovieData from '../../SingleMockData';
import Movies from '../Movies/Movies'
import SingleMovie  from '../SingleMovie/SingleMovie'



function App() {
  const mockData = movieData.movies
  const singleMockData = singleMovieData.movies
  const [movies, setMovies] = useState(mockData);
  const [singleMovie, setSingleMovie] = useState(singleMockData);

  // function displaySingleMovie(id) {
  //   setSingleMovie(id) // need to update this!
  //   const yourMovie = movies.find((movie) => {
  //     return movie.id == id
  //   })
  //  return console.log(yourMovie)
  // }
  
  return (
    <div className="App">
      <h1>Rancid Tomatillos!</h1> 
      {/* {singleMovie ?  <Movies movies={movies} displaySingleMovie={displaySingleMovie}/>: <p>Single movie goes here</p> } */}
      <SingleMovie singleMovie={singleMovie} />
    </div>
  )
}

export default App;
