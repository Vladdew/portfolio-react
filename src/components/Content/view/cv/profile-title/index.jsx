import square from "../../../../../img/square.jpg";
import cwars from "../../../../../img/cwars.jpg";
import kyu from "../../../../../img/kyu.jpg";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

const ProfileTitle = () => {
  const { t } = useTranslation();
  const langFlag = useSelector(state => state.language.language);
  let count = 0;

  return (
    <div
      className={`profile-title ${langFlag === "de" ? "profile-title-de" : ""}`}
    >
      {t("profile-title.professional")}
      <br />
      <img className="profile-title__square" alt="item" src={square} />{" "}
      {t("profile-title.profile")}
      <div
        onClick={() => {
          if (typeof window !== "undefined") {
            if (window.innerWidth < 633) {
              if (count) {
                window.open(
                  "https://www.codewars.com/users/%3CVladok%2F%3E",
                  "_blank"
                );
              }
            } else {
              window.open(
                "https://www.codewars.com/users/%3CVladok%2F%3E",
                "_blank"
              );
            }

            count++;
          }
        }}
        className="profile-title__cwars"
      >
        <p className="profile-title__cwars-t1">codewars</p>
        <p className="profile-title__cwars-t2">
          {t("profile-title.more_than_100_solved")}
          <br /> {t("profile-title.problems")}
        </p>
        <img
          className="profile-title__cwars-img profile-title__cwars-img-kyu"
          alt="item"
          src={kyu}
        />
        <img
          className="profile-title__cwars-img profile-title__cwars-img-cwars"
          alt="item"
          src={cwars}
        />
      </div>
    </div>
  );
};

export default ProfileTitle;
