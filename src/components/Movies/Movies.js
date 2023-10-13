import './Movies.css';

function Movies( props ) {
  console.log(props)
    const { name } = props
  return (
    <h2>
      Hello, {props.name}!
    </h2>
  )
}

export default Movies