import Controlls from "../controlls";
import "./index.scss";
import { useTranslation } from "react-i18next";

function Header(props: {
  onClick: (e: React.MouseEvent<Element>) => void;
  isCv: boolean | "1";
}) {
  const { t } = useTranslation();
  return (
    <section className="header">
      <div className="header__lebenslauf">{t("header.title")}</div>
      <Controlls onClick={props.onClick} isCv={props.isCv} />
    </section>
  );
}

export default Header;
