import MainPhoto from "../main-photo";

import "./index.scss";

function MainInfo() {
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
        <span className="main-info__specialitat">JavaScript developer</span>
      </div>
    </section>
  );
}

export default MainInfo;
