import { useState } from "react";
import "./App.css";
import movieData from "../../MockData";
import singleMovieData from "../../SingleMockData";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";
import HomeButton from "../HomeButton/HomeButton";

function App() {
  const mockData = movieData.movies;
  const singleMockData = singleMovieData.movies;
  const [movies, setMovies] = useState(mockData);
  const [singleMovie, setSingleMovie] = useState(null);

  function displaySingleMovie(id) {
    const yourMovie = movies.find((movie) => {
      return movie.id == id;
    });
    setSingleMovie(yourMovie);
  }

  function displayHomePage() {
    setMovies(mockData)
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
