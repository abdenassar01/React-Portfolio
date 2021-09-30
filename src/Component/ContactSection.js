import "../css/comp-contact.css";
import myPic from "../imgs/Me.jpg";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div id="contact-section">
      <img src={myPic} alt="" className="my-pic" loading="lazy"/>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
