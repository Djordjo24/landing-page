import "./ShopCategory.css";

const ShopCategory = ({ text, selectedCategory, onClick }) => {
  const isActive = selectedCategory === text;
  return (
    <button
      onClick={onClick}
      className={isActive ? "shopCategoryBtn active" : "shopCategoryBtn"}
    >
      {text}
    </button>
  );
};

export default ShopCategory;
