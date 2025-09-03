import "./ProductCard.css";
import HeartIcon from "../../assets/icons/HeartIcon.jsx";
import { useState } from "react";

const ProductsCard = ({ source, altText }) => {
  const [count, setCount] = useState(0);
  const handleAdition = () => setCount((num) => num + 1);
  const handleSubtraction = () => {
    if (count > 0) setCount((num) => num - 1);
  };
  const handleAddToCart = () => setCount(0);

  return (
    <li className="productCard">
      <img src={source} alt={altText} />
      <div className="overlay">
        <div className="price">
          <h2>₦15,000.00</h2>
          <HeartIcon />
        </div>
        <div className="title">
          <h1>{altText}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut
            eget tempor egestas diam.
          </p>
        </div>
        <div className="productCardButtons">
          <div className="countButtons">
            <button onClick={handleAdition}>+</button>
            <span>{count}</span>
            <button onClick={handleSubtraction}>-</button>
          </div>
          <button className="addToCartButton" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductsCard;
