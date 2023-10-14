import "./SingleMovie.css";

function singleMovie({ singleMovie }) {
  console.log(singleMovie);
  return (
    <div className='single-movie-container'>
      <div className='left-container'>
        <aside className='movie-overview'>{singleMovie[0].overview}</aside>
      </div>
      <div className='middle-container'>
        <h2 className='movie-title'>{singleMovie[0].title}</h2>
        <img
          src={singleMovie[0].backdrop_path}
          alt='movie picture'
          style={{ height: "200px", width: "400px" }}
        />
        <p className='movie-tagline'>{singleMovie[0].tagline}</p>
      </div>

      <div className='right-container'>
        <p className='movie-average-rating'>{singleMovie[0].average_rating}</p>
        <p className='movie-release-date'>{singleMovie[0].release_date}</p>
        <p className='movie-runtime'>{singleMovie[0].runtime}</p>
        <br></br>
        <div className='movie-genres-container'>
          <p className='movie-genres'>{singleMovie[0].genres}</p>
        </div>
      </div>
    </div>
  );
}

export default singleMovie;
