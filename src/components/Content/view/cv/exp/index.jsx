import { useTranslation } from "react-i18next";

const Exp = () => {
  const { t } = useTranslation();
  return (
    <div className="exp">
      <div className="exp__experience">
        <h3 className="exp__pe-title">{t("exp.pe-title")}</h3>
        <p className="exp__accent-gray" />
        <p className="exp__pe-description">
          {t("exp.pe-description")}
          <br />
          React/Redux/KonvaJS/TypeScript
        </p>
      </div>
      <h3 className="exp__pe-title exp__pe-title-1">{t("exp.pe-title1")}</h3>
      <p className="exp__accent-gray exp__accent-gray2" />
      <div className="exp__skillset">
        <div className="exp__item-wrap">
          <span className="exp__item">HTML:</span>
          <p className="exp__skill">{t("exp.skills.html")}</p>
          <hr className="exp__hr" />
        </div>
        <div className="exp__item-wrap">
          <span className="exp__item">CSS:</span>
          <p className="exp__skill">{t("exp.skills.css")}</p>
          <hr className="exp__hr" />
        </div>
        <div className="exp__item-wrap">
          <span className="exp__item">JavaScript:</span>
          <p className="exp__skill">React, Next, Konva, D3.js, TS</p>
          <hr className="exp__hr" />
        </div>
        <div className="exp__item-wrap exp__item-wrap6">
          <span className="exp__item">
            PSD to
            <br /> HTML:
          </span>
          <p className="exp__skill">Photoshop, Figma</p>
          <hr className="exp__hr" />
        </div>
        <div className="exp__item-wrap exp__item-wrap7">
          <span className="exp__item">
            {t("exp.skills.version")}
            <br /> {t("exp.skills.control")}
          </span>
          <p className="exp__skill">GitHub, GitLab</p>
          <hr className="exp__hr" />
        </div>
        <div className="exp__item-wrap">
          <span className="exp__item">CMS:</span>
          <p className="exp__skill">WordPress</p>
          <hr className="exp__hr" />
        </div>
        <div className="exp__item-wrap">
          <span className="exp__item">Backend:</span>
          <p className="exp__skill">
            NodeJs/ Express/ JWT access/ refresh/ Bcrypt/ Telegram bot{" "}
          </p>
          <hr className="exp__hr" />
        </div>
      </div>
    </div>
  );
};

export default Exp;
