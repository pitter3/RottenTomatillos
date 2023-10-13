import { useState } from 'react';
import "./App.css"
import movieData from '../../MockData';
import Movies from '../Movies/Movies'


function App() {
  const mockData = movieData.movies
  const [movies, setMovies] = useState(mockData);
  return (
    <div className="App">
      <h1>Rancid Tomatillos!</h1> 
      <Movies name="Nicole"/>
    </div>
  )
}

export default App;