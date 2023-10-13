import './Card.css';

function Card( { image } ) {
  return (
    <div className='card'>
      <img 
        src={ image } 
        alt="movie poster" 
        style={{ height: '300px', width: '200px' }} 
      />
    </div>
  );
}

export default Card;
