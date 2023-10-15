import './HomeButton.css';
import PropTypes from 'prop-types';

function HomeButton( {displayHomePage} ) {
  return (
  <div className="home-button">
    <button onClick={(event) =>
    displayHomePage()}>HOME</button>
  </div>
  )
}

export default HomeButton

HomeButton.propTypes = {
  displayHomePage: PropTypes.func.isRequired,
}