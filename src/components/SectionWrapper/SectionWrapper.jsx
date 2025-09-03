import { Link } from "react-router-dom";
import "./SectionWrapper.css";

const SectionContainer = ({ children, colorsComb }) => {
  return (
    <section className={`section ${colorsComb}`}>
      <div className="sectionWrapper">{children}</div>
    </section>
  );
};

export default SectionContainer;
