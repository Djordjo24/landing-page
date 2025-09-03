import "./ServiceSection.css";
// import adoption from "../../assets/images/adoption.png";
import { services } from "../../mockData/mockData.js";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper.jsx";

const ServiceSection = () => {
  return (
    <SectionWrapper colorsComb="white">
      <SectionHeader section="Services" color="#101828" />
      <div className="services">
        <ul>
          {services.map((card) => (
            <ServiceCard
              key={card.id}
              source={card.source}
              title={card.title}
              className={card.className}
            />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default ServiceSection;
