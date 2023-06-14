import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Project from "./project";
import { startLoading } from "../../projectsSlice";

const Projects = () => {
  const projects = useSelector(state => state.projects.projects);
  const dispatch = useDispatch();
  const [flag, setAnimationFlag] = useState(false);

  const onClickGetProjects = () => {
    dispatch(startLoading());
    setTimeout(() => setAnimationFlag(true));
    return;
  };

  const lepestok = {
    data: {
      homepage: "https://lepestok.top/",
      name: "lepestok",
      description: "Wordpress / Woocommerce / SEO / Google, FCB Ads",
    },
  };

  const d3Graph = {
    data: {
      homepage: "https://vladdew.github.io/d3-chart/",
      name: "d3Graph",
      description: "D3 / React / TS ",
    },
  };

  const calendar = {
    data: {
      homepage: "http://muse-travel.com/calendar.php",
      name: "calendar",
      description: "PHP / MySQL / JQuery",
    },
  };

  const vipclub = {
    data: {
      homepage: "https://vipclub.netlify.app/",
      name: "vipclub",
      description: "Backend NodeJs / Frontend React-Redux/ Telegram bot",
    },
  };

  const AITelegramBot = {
    data: {
      homepage: "https://t.me/WowTalkingBrilliantBot_bot",
      name: "AITelegramBot",
      description:
        "NodeJS / TypeScript / Express / Docker / Telegram bot / Digital Ocean",
    },
  };

  return (
    <div className="projects">
      <div className="projects__container">
        {Array.isArray(projects) &&
          projects.map(project => {
            return (
              <Project
                key={project.data.id}
                project={project}
                animated={flag}
              />
            );
          })}

        {/* {Array.isArray(projects) && (
          <Project project={lepestok} animated={flag} />
        )} */}
        {Array.isArray(projects) && (
          <Project project={calendar} animated={flag} />
        )}
        {Array.isArray(projects) && (
          <Project project={vipclub} animated={flag} />
        )}
        {Array.isArray(projects) && (
          <Project project={d3Graph} animated={flag} />
        )}
        {Array.isArray(projects) && (
          <Project project={AITelegramBot} animated={flag} />
        )}

        <button
          type="button"
          aria-label="GetFromGit-projects"
          onClick={() => onClickGetProjects()}
          className={
            !flag
              ? "projects__getFromGit"
              : "projects__getFromGit projects__getFromGit--disabled"
          }
        />
      </div>
    </div>
  );
};

export default Projects;
