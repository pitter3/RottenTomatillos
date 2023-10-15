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
      .then((response) => response.json())
      .then((data) => {
        console.log("GET ALL MOVIES", data);
        setMovies([...data.movies]); // Why do we need a spread operator and brackets here?
      })
      .catch((error) => setError(error.message));
  };

  const getSingleMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("GET SINGLE MOVIE", data);
        setSingleMovie(data.movie); // Originally we used 2 arguments here but only needed one!
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  // function displaySingleMovie(id) {
  //   const yourMovie = movies.find((movie) => {
  //     return movie.id == id;
  //   });
  //   setSingleMovie(yourMovie);
  // }

  function displayHomePage() {
    setSingleMovie(null);
  }

  return (
    <div className='App'>
      <h1>
        Rancid Tomatillos! <HomeButton displayHomePage={displayHomePage} />
      </h1>
      {singleMovie ? (
        <SingleMovie singleMovie={singleMovie} />
      ) : (
        <Movies movies={movies} getSingleMovie={getSingleMovie} />
      )}
    </div>
  );
}

export default App;
