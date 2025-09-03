import "./Header.css";
import MenuIcon from "../../assets/icons/MenuIcon.jsx";
import DropdownIcon from "../../assets/icons/DropdownIcon.jsx";
import BigPawsIcon from "../../assets/icons/BigPawsIcon.jsx";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbarWrapper">
        <div className="navbarContent">
          <Link to="hero" smooth="true" duration={1000}>
            <div className="navbarLogo">
              <BigPawsIcon />
              <h1>Paws n’ Play</h1>
            </div>
          </Link>
          <nav>
            <ul className="navLinks">
              <li>
                <Link to="shop" smooth="true" duration={1000}>
                  <h4>Shop</h4>
                  <DropdownIcon />
                </Link>
                <div className="dropdown">
                  <a href="#">Multivitamin for Cat</a>
                  <a href="#">Cat Food</a>
                  <a href="#">Dog Food</a>
                  <a href="#">Pet Plate</a>
                  <a href="#">Bird Water</a>
                  <a href="#">Dog Water</a>
                </div>
              </li>
              <li>
                <Link to="services" smooth="true" duration={1000} offset={-200}>
                  <h4>Services</h4>
                  <DropdownIcon />
                </Link>
                <div className="dropdown">
                  <a href="#">Grooming</a>
                  <a href="#">Boarding</a>
                  <a href="#">Veterinary</a>
                  <a href="#">Training</a>
                  <a href="#">Adoption</a>
                </div>
              </li>
              <li>
                <Link to="about" smooth="true" duration={1000}>
                  <h4>About Us</h4>
                </Link>
              </li>
              <li>
                <Link to="blog" smooth="true" duration={1000}>
                  <h4>Blog</h4>
                </Link>
              </li>
              <li>
                <Link to="contact" smooth="true" duration={1000}>
                  <h4>Contact</h4>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Link to="services" smooth="true" duration={1000} offset={-200}>
          <button className="getStartedBtn">Get Started</button>
        </Link>
      </div>
      <button className="navbarMenu" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      <nav className={`dropdownMenu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="shop" smooth="true" duration={1000}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="services" smooth="true" duration={1000} offset={-100}>
              Services
            </Link>
          </li>
          <li>
            <Link to="about" smooth="true" duration={1000}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="blog" smooth="true" duration={1000}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="contact" smooth="true" duration={1000} offset={10}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
