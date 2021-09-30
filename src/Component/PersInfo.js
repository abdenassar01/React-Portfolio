// importing the icons and my profile image
import myImg from "../imgs/img-profile.jpg";
import fb_icon from "../imgs/Icon/facebook.png";
import in_icon from "../imgs/Icon/instagram.png";
import gh_icon from "../imgs/Icon/github.png";
import tg_icon from "../imgs/Icon/telegram.png";

const PersInfo = (props) => {
  return (
    <div className="persInfo">
      <div className="card">
        <div className="img-wrapper">
          <img src={myImg} alt="AbdeNassar Amimi" className="img-profile" />
        </div>
        <div className="info-profile">
          <div className="big-label">
            AbdeNassar <br />
            <span> AMIMI</span>
          </div>
          <div className="info">
            <p className="info-column">
              <span className="label">Age:</span> 20 Years
            </p>
            <p className="info-column">
              <span className="label">Education:</span> BTS DSI
            </p>
            <p className="info-column">
              <span className="label">Specialty:</span> Front-End
            </p>
          </div>
        </div>
        <div className="social-account">
          <a href="facebook.com" className="account-wrapper facebook">
            <img src={fb_icon} alt="" className="social-account-ico" />
            <span>facebook</span>
          </a>
          <a
            href="instagram.com/abde_nassar01"
            className="instagram account-wrapper"
          >
            <img src={in_icon} alt="" className="social-account-ico" />
            <span>instagram</span>
          </a>
          <a href="github.org" className="github account-wrapper">
            <img src={gh_icon} alt="" className="social-account-ico" />
            <span>github</span>
          </a>
          <a href="telegram.com" className="telegram account-wrapper">
            <img src={tg_icon} alt="" className="social-account-ico" />
            <span>linkedin</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersInfo;
