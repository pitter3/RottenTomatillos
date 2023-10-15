import './Card.css';
import PropTypes from 'prop-types';

function Card( { id, image, getSingleMovie } ) {
  return (
    <div className='card' onClick={(event) => getSingleMovie(event.target.id)}>
      <img 
        id={ id }
        src={ image } 
        alt="movie poster" 
        style={{ height: '300px', width: '200px' }} 
      />
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired, 
  getSingleMovie: PropTypes.func.isRequired,
}
