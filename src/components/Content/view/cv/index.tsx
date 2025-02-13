import Sidebar from "./sidebar";
import MainInfo from "./main-info";
import AboutMe from "./aboutMe";
import Contacts from "./contacts";
import ContactLinks from "./contactLinks";
import Header from "./header";
import TechnologienCarousel from "./technologienCarousel";

const CV = (props: {
  onClick: (e: React.MouseEvent<Element>) => void;
  isCv: boolean | "1";
}) => {
  console.log("CV");
  return (
    <main
      id="cv"
      className={
        props.isCv === "1"
          ? "cv"
          : props.isCv
          ? "cv animate-in"
          : "cv animate-out"
      }
    >
      <Header onClick={props.onClick} isCv={props.isCv} />

      <MainInfo />
      <section className="cv__sections">
        <Contacts />
        <AboutMe />
      </section>

      <section className="cv__block-fon">
        <TechnologienCarousel isCv={props.isCv} />
      </section>
      <section className="cv__footer">
        <ContactLinks />
      </section>
      <Sidebar />
      <div
        onClick={e => {
          props.onClick(e);
        }}
        className="overlay overlay-cv"
      ></div>
    </main>
  );
};
export default CV;
