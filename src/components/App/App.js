import { useState } from 'react';
import "./App.css"
import movieData from '../../MockData';
import Movies from '../Movies/Movies'



function App() {
  const mockData = movieData.movies
  const [movies, setMovies] = useState(mockData);
  const [singleMovie, setSingleMovie] =useState([]);

  return (
    <div className="App">
      <h1>Rancid Tomatillos!</h1> 
      {/* <Movies movies={movies} /> */}
      {!singleMovie.length ?  <Movies movies={movies} /> : null}
    </div>
  )
}

export default App;
