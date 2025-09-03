import { useState } from "react";
import "./ShopSection.css";
import { shopCategories } from "../../mockData/mockData.js";
import { productCards } from "../../mockData/mockData.js";
import ShopCategory from "../../components/ShopCategory/ShopCategory.jsx";
import ProductsCard from "../../components/ProductCard/ProductCard.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper.jsx";
import { shufle } from "../../utils/utils.js";

const ShopSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewMore, setViewMore] = useState(false);

  const updatedProductCards =
    selectedCategory === "Random" || selectedCategory === ""
      ? shufle(productCards)
      : productCards.filter((card) => card.category === selectedCategory);

  const handleCategoryClick = (category) => setSelectedCategory(category);

  const handleViewMore = () => setViewMore(true);

  return (
    <SectionWrapper colorsComb="white">
      <SectionHeader section="Shop" color="#101828" />
      <div className="shopWrapper">
        <div className="shopControls">
          <h3>Featured Products</h3>
          <div className="shopFilter">
            {shopCategories.map((cat) => (
              <ShopCategory
                key={cat}
                text={cat}
                onClick={() => handleCategoryClick(cat)}
                selectedCategory={selectedCategory}
              />
            ))}
          </div>
        </div>
        <div className="shopProducts">
          <ul>
            {viewMore
              ? updatedProductCards.map((card) => (
                  <ProductsCard
                    key={card.id}
                    source={card.source}
                    altText={card.altText}
                  />
                ))
              : updatedProductCards
                  .slice(0, 3)
                  .map((card) => (
                    <ProductsCard
                      key={card.id}
                      source={card.source}
                      altText={card.altText}
                    />
                  ))}
          </ul>

          <div className="viewMoreBtn">
            {!viewMore && (
              <button onClick={handleViewMore}>View More &gt;&gt;&gt;</button>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ShopSection;
