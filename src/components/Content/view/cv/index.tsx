import MainPhoto from "./main-photo";
import MainInfo from "./main-info";
import ProfileTitle from "./profile-title";
import ProfileDescription from "./profile-description";
import Contacts from "./contacts";
import Exp from "./exp";
import Education from "./education";

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
      <MainPhoto />
      <ProfileTitle />
      <ProfileDescription />
      <Exp />
      <Contacts />
      <MainInfo onClick={props.onClick} />

      <Education />
      <div
        onClick={() => {
          props.onClick();
        }}
        className="overlay"
      ></div>
    </div>
  );
};
export default CV;
