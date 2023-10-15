import './Card.css';

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
