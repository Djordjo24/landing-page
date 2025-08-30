import "./ShopSection.css";
import { shopCategories } from "../mockData/mockData.js";
import { productCards } from "../mockData/mockData.js";
import ShopCategory from "../ShopCategory/ShopCategory.jsx";
import ProductsCard from "../ProductCard/ProductCard.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const ShopSection = () => {
  return (
    <section className="shopSection">
      <div className="shopSectionContainer">
        <div className="shopControls">
          <SectionHeader section="Shop" />
          <h3>Featured Products</h3>
          <div className="shopFilter">
            {shopCategories.map((cat) => (
              <ShopCategory key={cat} text={cat} />
            ))}
          </div>
        </div>
        <div className="shopProducts">
          <ul>
            {productCards.map((card) => (
              <ProductsCard
                key={card.id}
                source={card.source}
                altText={card.altText}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
