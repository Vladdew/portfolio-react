import MainPhoto from "../main-photo";
import { useTranslation } from "react-i18next";

import "./index.scss";

function MainInfo() {
  const { t } = useTranslation();

  return (
    <section className="main-info">
      <MainPhoto />
      <div className="main-info__name-block">
        <h2 className="main-info__name">
          <br />
          Presniakov
          <br />
          Vlad
        </h2>
        <span className="main-info__specialitat">{t("main-info.status")}</span>
      </div>
    </section>
  );
}

export default MainInfo;
