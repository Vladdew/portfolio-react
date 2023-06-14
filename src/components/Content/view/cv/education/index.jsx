import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Education = () => {
  const { t } = useTranslation();
  const langFlag = useSelector(state => state.language.language);

  return (
    <div className="education">
      <p className="education__education-title">{t("education.title")}</p>
      <p
        className={`education__vuz ${
          langFlag === "de" ? "education__vuz-de" : ""
        }`}
      >
        <span className="education__qualify">
          {t("education.vuz1.qualify")}
        </span>
        <br />
        {t("education.vuz1.name")}
      </p>
      <p
        className={`education__vuz ${
          langFlag === "de" ? "education__vuz-de" : ""
        }`}
      >
        <span className="education__qualify">
          {t("education.vuz2.qualify1")}
          <br /> {t("education.vuz2.qualify2")}
        </span>
        <br />
        {t("education.vuz2.name")}
      </p>
      <p
        className={`education__vuz education__qualify ${
          langFlag === "de" ? "education__vuz-de" : ""
        }`}
      >
        {t("education.vuz3.qualify")}
        <br />
        <span className="education__vuz3-span">{t("education.vuz3.name")}</span>
      </p>
    </div>
  );
};

export default Education;
