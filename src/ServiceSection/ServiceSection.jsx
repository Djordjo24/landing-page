import "./ServiceSection.css";
import adoption from "../assets/images/adoption.png";
import { services } from "../mockData/mockData.js";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const ServiceSection = () => {
  return (
    <section className="serviceSection">
      <div className="serviceSectionContainer">
        <SectionHeader section="Services" />
        <div className="services">
          <ul>
            {services.map((card) => (
              <ServiceCard
                key={card.id}
                source={card.source}
                title={card.title}
              />
            ))}
          </ul>
          <li className="adoption">
            <img src={adoption} alt="Adoption Service" />
            <h2>Adoption</h2>
          </li>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
