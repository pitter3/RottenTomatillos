import './Card.css';

function Card( { id, image, displaySingleMovie } ) {
  return (
    <div className='card' onClick={(event) => displaySingleMovie(event.target.id)}>
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
