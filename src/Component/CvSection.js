import "../css/comp-cvsection.css";
import PersonalInfo from "./PersInfo";
import Experiences from "./Experiences";

const CvSection = () => {
  return (
    <div id="cv-section">
      <PersonalInfo />
      <Experiences />
    </div>
  );
};

export default CvSection;
