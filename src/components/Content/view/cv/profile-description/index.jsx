import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ProfileDescription = () => {
  const { t } = useTranslation();
  const langFlag = useSelector(state => state.language.language);

  return (
    <div
      className={`profile-description ${
        langFlag === "de" ? "profile-description-de" : ""
      }`}
    >
      &nbsp; {t("profile-description.part1")}
      <br className="profile-description__br" />
      &nbsp;{t("profile-description.part2")}&nbsp;
      <br className="profile-description__br" />
      {t("profile-description.part3")}&nbsp; {t("profile-description.part4")}
      <br />
    </div>
  );
};

export default ProfileDescription;
