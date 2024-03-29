const Product = ({ imgUrl, name, price }) => {
  return (
    <div>
      <img src={imgUrl} alt={name} width="320" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

export default Product;
