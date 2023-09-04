const Cake = ({ cakeName, ingredients, price, rating }) => {
  return (
    <>
        <h2>{cakeName}</h2>
        <ul>
          {ingredients.map((ingredients, index) => (
            <li key={index}>{ingredients}</li>
          ))}
        </ul>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>

    </>
  )
}

export default Cake;