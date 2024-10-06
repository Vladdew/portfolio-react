import MainPhoto from "./main-photo";
import MainInfo from "./main-info";
import ProfileTitle from "./profile-title";
import ProfileDescription from "./profile-description";
import Exp from "./exp";
import Education from "./education";
import AboutMe from "./aboutMe";
import Contacts from "./contacts";
import Languages from "./languages";
import ContactLinks from "./contactLinks";
import Controlls from "./controlls";
import TechnologienCarousel from "./technologienCarousel";

const CV = (props: { onClick: () => void; isCv: boolean | "1" }) => {
  return (
    <div
      id="cv"
      className={
        props.isCv === "1"
          ? "cv"
          : props.isCv
          ? "cv animate-in"
          : "cv animate-out"
      }
    >
      <div className="cv__sidebar"></div>

      <div className="cv__block-fon">
        <TechnologienCarousel />
      </div>
      <MainInfo />
      <Controlls />
      <div className="cv__lebenslauf">Lebenslauf</div>
      <div className="cv__sections">
        <Contacts />
        <AboutMe />
      </div>
      <div
        onClick={() => {
          props.onClick();
        }}
        className="overlay"
      ></div>
      <div className="cv__footer">
        <ContactLinks />
      </div>
    </div>
  );
};
export default CV;
