import "./SocialIcons.css";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import DribbbleIcon from "../../assets/icons/DribbbleIcon";

const SocialIcons = () => {
  return (
    <div className="socialIcons">
      <a href="#">
        <TwitterIcon />
      </a>
      <a href="#">
        <LinkedInIcon />
      </a>
      <a href="#">
        <DribbbleIcon />
      </a>
    </div>
  );
};

export default SocialIcons;
