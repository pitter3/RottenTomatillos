import './HomeButton.css'

function HomeButton( {displayHomePage} ) {
  return (
  <div className="home-button">
    <button onClick={(event) =>
    displayHomePage()}>HOME</button>
  </div>
  )
}

export default HomeButton

