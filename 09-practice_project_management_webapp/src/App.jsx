import { useRef, useState } from "react";

import SideBar from "./components/SideBar";
import NoProject from "./components/mainPageContent/NoProject";
import AddProject from "./components/mainPageContent/AddProject";
import ProjectDetail from "./components/mainPageContent/ProjectDetail";

const pages = ["noProject", "addProject", "projectDetail"];

function App() {
  const [mainPageContent, setMainPageContent] = useState(pages[0]);
  const ref = useRef();

  function handleNavigateToAddProject() {
    setMainPageContent((prevContent) => pages[1]);
  }

  function handleNavigateToProjectDetail(project) {
    AddProjectToSideBar(project);
    setMainPageContent((prevContent) => pages[2]);
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
            />
          )}
          {mainPageContent === pages[2] && (
            <ProjectDetail gottagettheparameter="" />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
