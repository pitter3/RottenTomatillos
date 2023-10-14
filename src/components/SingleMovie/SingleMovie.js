import './'

function singleMovie({ singleMovie }) {
  console.log(singleMovie);
  return (
    <div className='single-movie-container'>
      <h2 className='movie-title'>{singleMovie[0].title}</h2>
      <img
        src={singleMovie[0].backdrop_path}
        alt='movie picture'
        style={{ height: "300px", width: "500px" }}
      />
      <p className='movie-tagline'>{singleMovie[0].tagline}</p>
      <aside className='movie-overview'>{singleMovie[0].overview}</aside>
      <aside>
        <div className='movie-info-container'>
          <p className='movie-average-rating'>
            {singleMovie[0].average_rating}
          </p>
          <br></br>
          <p className='movie-release-date'>{singleMovie[0].release_date}</p>
          <br></br>
          <p className='movie-runtime'>{singleMovie[0].runtime}</p>
          <div className='movie-tagline'>
            <p className='movie-genres-container'>{singleMovie[0].genres}</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default singleMovie;
