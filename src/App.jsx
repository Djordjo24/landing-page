import "./App.css";
import HeroSection from "./HerroSection/HerroSection.jsx";
import ShopSection from "./ShopSection/ShopSection.jsx";
import ServiceSection from "./ServiceSection/ServiceSection.jsx";
import AboutSection from "./AboutSection/AboutSection.jsx";
import BlogSection from "./BlogSection/BlogSection.jsx";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <ShopSection />
      <ServiceSection />
      <AboutSection />
      <BlogSection />
    </div>
  );
}

export default App;
