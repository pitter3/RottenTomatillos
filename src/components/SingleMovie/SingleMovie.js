//This is a card test

function singleMovie({ singleMovie }) {
  console.log(singleMovie)
  return (
    <div>
      <h2>{singleMovie[0].title}</h2>
      <img src={singleMovie[0].backdrop_path} alt="movie picture" style={{ height: '300px', width: '500px' }}/>
      <p>{singleMovie[0].tagline}</p>
      <aside>{singleMovie[0].overview}</aside>
      <aside>
        <div>
          <p>{singleMovie[0].average_rating}</p>
          <br></br>
          <p>{singleMovie[0].release_date}</p>
          <br></br>
          <p>{singleMovie[0].runtime}</p>
          <div>
            <p>{singleMovie[0].genres}</p>
          </div>
          </div>
      </aside>
    </div>
  )
  
}

export default singleMovie