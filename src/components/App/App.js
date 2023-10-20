import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";
import HomeButton from "../HomeButton/HomeButton";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllMovies();
  }, []);

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
        console.log(singleMovie);
      })
      .catch((error) => setError(error.message));
  };

  function displayHomePage() {
    setSingleMovie(null);
    window.location.href = "/";
  }

  function formatRunTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  return (
    <div className='App'>
      <h1 className='header-title'>
      <img src="TomatoGuy.png" height={100} alt="Tomato Guy" />{" "}
        {useLocation().pathname.includes("/SingleMovie/") && (
          <HomeButton displayHomePage={displayHomePage} />
        )}
      </h1>
      <Routes>
        <Route
          exact
          path='/'
          element={<Movies movies={movies} getSingleMovie={getSingleMovie} />}
        />
        <Route
          path='/SingleMovie/:id'
          element={singleMovie && <SingleMovie singleMovie={singleMovie} formatRunTime={formatRunTime}/>}
        />
      </Routes>
    </div>
  );
}
export default App;
