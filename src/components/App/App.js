import { useState } from 'react';
import "./App.css"
import movieData from '../../MockData';
import Movies from '../Movies/Movies'



function App() {
  const mockData = movieData.movies
  const [movies, setMovies] = useState(mockData);
  const [singleMovie, setSingleMovie] =useState([]);

  function displaySingleMovie(movie) {
    console.log("movie", movie)
    setSingleMovie(movie)

  }
  return (
    <div className="App">
      <h1>Rancid Tomatillos!</h1> 
      {singleMovie ?  <Movies movies={movies} displaySingleMovie={displaySingleMovie}/>: <p>Single movie goes here</p> }
    </div>
  )
}

export default App;
