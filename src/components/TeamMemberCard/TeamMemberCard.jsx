import "./TeamMemberCard.css";
import SocialIcons from "../SocialIcons/SocialIcons";

const TeamMemberCard = ({ imageSrc, name, role }) => {
  return (
    <li className="teamMemberCard">
      <img src={imageSrc} alt={name} />
      <div className="teamMember">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
      <SocialIcons />
    </li>
  );
};

export default TeamMemberCard;
