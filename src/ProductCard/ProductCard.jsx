import "./ProductCard.css";

const ProductsCard = ({ source, altText }) => {
  return (
    <li className="productCard">
      <img src={source} alt={altText} />
    </li>
  );
};

export default ProductsCard;
