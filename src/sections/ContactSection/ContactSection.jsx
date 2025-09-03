import "./ContactSection.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper.jsx";
import ContactItem from "../../components/ContactItem/ContactItem.jsx";
import { contactItems } from "../../mockData/mockData.js";
import ChatIcon from "../../assets/icons/ChatIcon.jsx";
import EmailIcon from "../../assets/icons/EmailIcon.jsx";
import OfficeIcon from "../../assets/icons/OfficeIcon.jsx";
import PhoneIcon from "../../assets/icons/PhoneIcon.jsx";

const ContactSection = () => {
  const icons = [<EmailIcon />, <ChatIcon />, <OfficeIcon />, <PhoneIcon />];

  return (
    <SectionWrapper colorsComb="teget">
      <SectionHeader section="Get in touch" color="#ffffff" />
      <div className="contactWrapper">
        <div className="contactInfo">
          {contactItems.map((item) => (
            <ContactItem
              key={item.id}
              icon={icons[item.id]}
              title={item.title}
              text={item.text}
              href={item.href}
              content={item.content}
            />
          ))}
        </div>
        <div className="contactForm">
          <form>
            <div className="formFields">
              <div className="fullNameWrapper">
                <div className="fullName">
                  <div className="firstName">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      minLength="2"
                      maxLength="50"
                      pattern="^\p{L}{2,}$"
                      required
                    />
                  </div>
                  <div className="lastName">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      minLength="2"
                      maxLength="50"
                      pattern="^\p{L}{2,}$"
                      required
                    />
                  </div>
                </div>
                <p>
                  Enter your first name and last name (min. 2 letters, no
                  numbers or special characters).
                </p>
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  required
                />
                <p>Enter a valid email address (e.g. user@domain.com).</p>
              </div>
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  minLength="10"
                  maxLength="1500"
                  required
                />
                <p>
                  Your message must be at least 10 characters long and no more
                  than 2000.
                </p>
              </div>
              <div className="checkPrivacy">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  required
                />
                <label htmlFor="privacyPolicy">
                  You agree to our friendly <span>privacy policy</span>.
                </label>
              </div>
            </div>
            <button type="submit" className="submitBtn">
              Send message
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
