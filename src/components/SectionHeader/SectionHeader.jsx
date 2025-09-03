import "./SectionHeader.css";
import MediumPawsIcon from "../../assets/icons/MediumPawsIcon.jsx";

const SectionHeader = ({ section, color }) => {
  return (
    <div className="sectionHeader">
      <div className="sectionHeaderLogo">
        <MediumPawsIcon color={color} />
        <h2>{section}</h2>
      </div>
    </div>
  );
};

export default SectionHeader;
