import "./ContactItem.css";

const ContactItem = ({ icon, title, text, href, content }) => {
  return (
    <address className="contactItem">
      {icon}
      <h4>{title}</h4>
      <p>{text}</p>
      <button>
        <a href={href} rel="noopener noreferrer" target="_blank">
          {content}{" "}
        </a>
      </button>
    </address>
  );
};

export default ContactItem;
