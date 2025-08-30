import "./ServiceCard.css";

const ServiceCard = ({ source, title }) => {
  return (
    <li className="serviceCard">
      <img src={source} alt={title} />
      <h2>{title}</h2>
    </li>
  );
};

export default ServiceCard;
