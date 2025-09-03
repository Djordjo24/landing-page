import "./FooterLink.css";

const FooterLink = ({ linkTitle }) => {
  return (
    <li className="footerLinkItem">
      <button>
        <a href="#">{linkTitle}</a>
      </button>
    </li>
  );
};

export default FooterLink;
