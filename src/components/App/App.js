import { useState, useEffect } from "react";
import "./App.css";
import movieData from "../../MockData";
import singleMovieData from "../../SingleMockData";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";
import HomeButton from "../HomeButton/HomeButton";

function App() {
  const singleMockData = singleMovieData.movies;
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState(null);
  const [error, setError] = useState(null);



const getAllMovies = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(data => {
    setMovies([...movies, ...data.movies])  // REVIEW THIS vs. setMovies([...movies, data]) ** MAKE SURE TO RETURN ERROR HANDLING
  })
  
  .catch(error => setError(error.message))
}

useEffect(() => {
  getAllMovies()
}, [])

  function displaySingleMovie(id) {
    const yourMovie = movies.find((movie) => {
      return movie.id == id;
    });
    setSingleMovie(yourMovie);
  }

  function displayHomePage() {
    setMovies([])
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
