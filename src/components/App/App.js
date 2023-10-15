import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";
import HomeButton from "../HomeButton/HomeButton";

function App() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState(null);
  const [error, setError] = useState(null);

  const getAllMovies = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server is down or an error occurred.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("GET ALL MOVIES", data);
        setMovies([...data.movies]);
      })
      .catch((error) => setError(error.message));
  };

  const getSingleMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server is down or an error occurred.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("GET SINGLE MOVIE", data);
        setSingleMovie(data.movie);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  function displayHomePage() {
    setSingleMovie(null);
  }

  return (
    <div className='App'>
      <h1>
        Rancid Tomatillos! <HomeButton displayHomePage={displayHomePage} />
      </h1>
      {error ? (
        <div className="error-message">
          {error}
        </div>
      ) : singleMovie ? (
        <SingleMovie singleMovie={singleMovie} />
      ) : (
        <Movies movies={movies} getSingleMovie={getSingleMovie} />
      )}
    </div>
  );
}

export default App;