import "../css/comp-main.css";
import CvSection from "./CvSection";
import Home from "./Home";
import ContactSection from "./ContactSection";

const Main = () => {
  return (
    <main id="main-section">
      <Home />
      <CvSection />
      <ContactSection />
    </main>
  );
};

export default Main;
