import "./FooterLinks.css";
import FooterLink from "../FooterLink/FooterLink";

const FooterLinks = ({ title, linksArray }) => {
  return (
    <section className="footerLinksSection">
      <h3>{title}</h3>
      <ul>
        {linksArray.map((linkTitle, index) => (
          <FooterLink key={index} linkTitle={linkTitle} />
        ))}
      </ul>
    </section>
  );
};

export default FooterLinks;
