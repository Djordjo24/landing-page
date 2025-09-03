import "./ServiceCard.css";

const ServiceCard = ({ source, title, className }) => {
  return (
    <li className={`serviceCard ${className}`}>
      <img src={source} alt={title} />
      <h3 className="nonHoverHeading">{title}</h3>
      <div className="serviceOverlay">
        <h3 className="hoverHeading">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut
          eget tempor egestas diam. Donec pellentesque ut eget tempor egestas
          diam. Dolor sit amet consectetur. Vitae donec pellentesque ut eget
          tempor egestas diam. Donec pellentesque ut eget tempor egestas diam.
        </p>
        <button className="overlayLearnMore">Learn more</button>
      </div>
    </li>
  );
};

export default ServiceCard;
