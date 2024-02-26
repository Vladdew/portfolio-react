import MainPhoto from "./main-photo";
import MainInfo from "./main-info";
import ProfileTitle from "./profile-title";
import ProfileDescription from "./profile-description";
import Contacts from "./contacts";
import Exp from "./exp";
import Education from "./education";
import { useState, useEffect } from "react";

const CV = (props: { onClick: () => void; isCv: boolean | "1" }) => {
  // const [flag, setFlag] = useState<null | boolean>(null);
  // const [flag2, setFlag2] = useState<null | boolean>(null);

  // useEffect(() => {
  //   console.log("РАзок", flag);
  //   //return () => setFlag(true);
  // }, []);
  //console.log("flag", flag);

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
      <MainInfo />

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
