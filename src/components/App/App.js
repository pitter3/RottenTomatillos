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

  const handleErrors = (response) => {
    if (!response.ok) {
      switch(response.status) {
        case 400:
          throw new Error("Sorry, the server is down, please try again later.");
        case 500:
          throw new Error("This is a bad request,  please try again later.");
        default:
          throw new Error("Sorry, an error occured, please refresh page or try again later.");
      }
    }
    return response.json();
  }

  const getAllMovies = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(handleErrors)
      .then((data) => {
        setMovies([...data.movies]);
      })
      .catch((error) => setError(error.message));
  };

  const getSingleMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(handleErrors)
      .then((data) => {
        setSingleMovie(data.movie);
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
      {error && <div className="error-message">{error}</div>}
      <h1 className='header-title'>
        <img src="TomatoGuy.png" height={100} alt="Tomato Guy" onClick={() => displayHomePage()} className="tomato-guy"/>{" "}
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
