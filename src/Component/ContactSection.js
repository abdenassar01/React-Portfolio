import "../css/comp-contact.css";
import myPic from "../imgs/son.jpg";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div id="contact-section">
      <img src={myPic} alt="" className="my-pic" />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
