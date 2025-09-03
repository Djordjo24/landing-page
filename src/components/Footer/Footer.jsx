import "./Footer.css";
import BigPawsIcon from "../../assets/icons/BigPawsIcon";
import FooterLinks from "../FooterLinks/FooterLinks";
import { footerLinksObj } from "../../mockData/mockData";
import BigTwitterIcon from "../../assets/icons/BigTwitterIcon.jsx";
import BigLinkedInIcon from "../../assets/icons/BigLinkedInIcon.jsx";
import FacebookIcon from "../../assets/icons/FacebookIcon.jsx";
import GitHubIcon from "../../assets/icons/GitHubIcon.jsx";
import AngelListIcon from "../../assets/icons/AngelListIcon.jsx";
import BigDribbbleIcon from "../../assets/icons/BigDribbbleIcon.jsx";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="newsLetter">
        <div className="newsletterContent">
          <div className="title">
            <h2>Join our newsletter</h2>
            <p>
              Be the first to receive latest updates on promo, sales and offers
            </p>
          </div>
          <form className="emailCapture">
            <div className="emailField">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                required
              />
              <p>Enter a valid email address (e.g. user@domain.com).</p>
            </div>
            <button type="submit" className="subscribeBtn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <section className="footerNavigation">
        <div className="linksWrapper">
          <div className="footerLogo">
            <div className="logo">
              <BigPawsIcon />
              <h1>Paws n’ Play</h1>
            </div>
            <p>Where wagging tails and purring hearts reign supreme!</p>
          </div>
          <div className="linksGrid">
            <FooterLinks title="Shop" linksArray={footerLinksObj.shop} />
            <FooterLinks title="Company" linksArray={footerLinksObj.company} />
            <FooterLinks
              title="Services"
              linksArray={footerLinksObj.services}
            />
            <FooterLinks title="Social" linksArray={footerLinksObj.social} />
            <FooterLinks title="Legal" linksArray={footerLinksObj.legal} />
          </div>
        </div>
        <div className="copyright">
          <div className="divider"></div>
          <div className="copyrightContent">
            <p>© 2024 Paws n’ Play. All rights reserved.</p>
            <div className="socialIcons">
              <BigTwitterIcon />
              <BigLinkedInIcon />
              <FacebookIcon />
              <GitHubIcon />
              <AngelListIcon />
              <BigDribbbleIcon />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
