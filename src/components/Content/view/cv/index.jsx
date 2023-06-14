import React from "react";

import MainPhoto from "./main-photo";
import MainInfo from "./main-info";
import ProfileTitle from "./profile-title";
import ProfileDescription from "./profile-description";
import Contacts from "./contacts";
import Exp from "./exp";
import Education from "./education";
// import './index.scss';

const CV = () => {
  return (
    <div id="cv" className="cv">
      <MainPhoto />
      <MainInfo />
      <ProfileTitle />
      <ProfileDescription />
      <Contacts />
      <Exp />
      <Education />
    </div>
  );
};
export default CV;
