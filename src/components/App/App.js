import { useState, useEffect } from "react";
import "./App.css";
import movieData from "../../MockData";
import singleMovieData from "../../SingleMockData";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";
import HomeButton from "../HomeButton/HomeButton";

function App() {
  const singleMockData = singleMovieData.movies;
  const [movies, setMovies] = useState(null);
  const [singleMovie, setSingleMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllMovies()
  }, [])

const getAllMovies = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => setMovies(data))
  .catch(error => setError(error.message))
}

  function displaySingleMovie(id) {
    const yourMovie = movies.find((movie) => {
      return movie.id == id;
    });
    setSingleMovie(yourMovie);
  }

  function displayHomePage() {
    setMovies(getAllMovies())
    setSingleMovie(null)
  }

  return (
    <div className='App'>
        <h1>Rancid Tomatillos! <HomeButton displayHomePage={displayHomePage}/> </h1>
      {singleMovie ? (
        <SingleMovie singleMovie={singleMovie} />
      ) : (
        <Movies movies={movies} displaySingleMovie={displaySingleMovie} />
      )}
      
    </div>
  );
}

export default App;
