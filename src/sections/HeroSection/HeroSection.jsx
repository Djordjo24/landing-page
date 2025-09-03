import "./HeroSection.css";
import SmallPawsIcon from "../../assets/icons/SmallPawsIcon.jsx";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroContent">
        <div className="heroTextWrapper">
          <h1>Pawsitively Perfect: Where Every Pet's Dream Comes True!</h1>
          <p>
            Welcome to Paws n’ Play, the ultimate destination for pet lovers!
            Explore a world of tail-wagging joy and furry companionship with our
            wide range of products and services. From pampering essentials to
            playful toys, we're here to make every moment with your pet
            pawsitively perfect!"
          </p>
        </div>
        <Link to="shop" smooth="true" duration={500}>
          <button className="heroButton">
            Shop Now
            <SmallPawsIcon />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
