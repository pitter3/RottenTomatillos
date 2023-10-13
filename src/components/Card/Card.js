import './Card.css';

function Card( { image, displaySingleMovie } ) {
  return (
    <div className='card' onClick={() => displaySingleMovie()}>
      <img 
        src={ image } 
        alt="movie poster" 
        style={{ height: '300px', width: '200px' }} 
      />
    </div>
  );
}

export default Card;
