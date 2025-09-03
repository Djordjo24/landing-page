import "./App.css";
import HeroSection from "./sections/HeroSection/HeroSection.jsx";
import ShopSection from "./sections/ShopSection/ShopSection.jsx";
import ServiceSection from "./sections/ServiceSection/ServiceSection.jsx";
import AboutSection from "./sections/AboutSection/AboutSection.jsx";
import BlogSection from "./sections/BlogSection/BlogSection.jsx";
import TeamSection from "./sections/TeamSection/TeamSection.jsx";
import ContactSection from "./sections/ContactSection/ContactSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BlogTeamWrapper from "./BlogTeamWrapper/BlogTeamWrapper.jsx";
import Header from "./components/Header/Header.jsx";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="app">
      <Header />
      <Element name="hero">
        <HeroSection />
      </Element>
      <Element name="shop">
        <ShopSection />
      </Element>
      <Element name="service">
        <ServiceSection />
      </Element>
      <Element name="about">
        <AboutSection />
      </Element>
      <BlogTeamWrapper>
        <Element name="blog">
          <BlogSection />
        </Element>
        <Element name="team">
          <TeamSection />
        </Element>
      </BlogTeamWrapper>
      <Element name="contact">
        <ContactSection />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
