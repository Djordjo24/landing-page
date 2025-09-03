import "./TeamSection.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper.jsx";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard.jsx";
import { team } from "../../mockData/mockData.js";

const TeamSection = () => {
  return (
    <SectionWrapper colorsComb="white">
      <SectionHeader section="Our Team" color="#101828" />
      <div className="team">
        <ul>
          {team.map((member) => (
            <TeamMemberCard
              key={member.id}
              imageSrc={member.imageSrc}
              name={member.name}
              role={member.role}
            />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;
