import { useRef, useState } from "react";

import SideBar from "./components/SideBar";
import NoProject from "./components/mainPageContent/NoProject";
import AddProject from "./components/mainPageContent/AddProject";
import ProjectDetail from "./components/mainPageContent/ProjectDetail";

const pages = ["noProject", "addProject", "projectDetail"];

function App() {
  const [mainPageContent, setMainPageContent] = useState(pages[0]);
  const [selectedProject, setSelectedProject] = useState();
  const ref = useRef();

  function handleNavigateToAddProject() {
    setMainPageContent(() => pages[1]);
  }

  function handleNavigateToProjectDetail(project) {
    setMainPageContent(() => pages[2]);
    setSelectedProject(() => project);
  }

  function AddProjectToSideBar(project) {
    ref.current.addToProject(project);
  }

  return (
    <>
      <div className="mainContainer">
        <SideBar
          ref={ref}
          onNavigateToAddProject={handleNavigateToAddProject}
          onNavigateToProjectDetail={handleNavigateToProjectDetail}
        />
        <div className="mainPageContainer">
          {mainPageContent === pages[0] && (
            <NoProject onNavigateToAddProject={handleNavigateToAddProject} />
          )}
          {mainPageContent === pages[1] && (
            <AddProject
              onNavigateToProjectDetail={handleNavigateToProjectDetail}
              onAddProject={AddProjectToSideBar}
            />
          )}
          {mainPageContent === pages[2] && (
            <ProjectDetail project={selectedProject} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
