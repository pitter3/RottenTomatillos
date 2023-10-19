import { useState, useEffect } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";
import HomeButton from "../HomeButton/HomeButton";
import {Routes, Route, NavLink, Link, useLocation } from 'react-router-dom' //import useLocation here
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
        console.log(singleMovie)
      })
      .catch((error) => setError(error.message));
  };

  function displayHomePage() {
    setSingleMovie(null);
    window.location.href='/'
  }

  const location = useLocation(); //hook that provides info about currently location of app. This initializes the 'location' constant with the current location object. 
  
  //conditional rendering. If the current path name includes the string 'SingleMovie, render the HomeButton component. Otherise, don't do jack shit. 
  return (
    <div className='App'>
      <h1 className="header-title">
        Rancid Tomatillos! {location.pathname.includes('/SingleMovie/') && <HomeButton displayHomePage={displayHomePage} />}
      </h1>
      <Routes>
        <Route exact path='/' element= { <Movies movies={movies} getSingleMovie={getSingleMovie}/>} />
        <Route path='/SingleMovie/:id' element={singleMovie && <SingleMovie singleMovie={singleMovie} />}
/>

      </Routes>
    </div>
  );
}
export default App;