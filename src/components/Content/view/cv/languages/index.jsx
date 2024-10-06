import { useTranslation } from "react-i18next";
import "./index.scss";

const Languages = () => {
  const { t } = useTranslation();

  return (
    <div className="sections-wrap">
      <h3>
        <span>{t("languages.title")}</span>
      </h3>
      <p className="sections-wrap__accent-yellow" />
      <ul className="languages">
        <li>
          <span className="languages__heading">Deutsch:</span>{" "}
          <span className="languages__information">B2 Niveau</span>
        </li>
        <li>
          <span className="languages__heading">Enlgisch:</span>{" "}
          <span className="languages__information">mittleres Niveau</span>
        </li>
        <li>
          <span className="languages__heading">Russisch:</span>{" "}
          <span className="languages__information">Muttersprache</span>
        </li>
        <li>
          <span className="languages__heading">Ukrainisch:</span>{" "}
          <span className="languages__information">Muttersprache</span>
        </li>
      </ul>
    </div>
  );
};

export default Languages;
