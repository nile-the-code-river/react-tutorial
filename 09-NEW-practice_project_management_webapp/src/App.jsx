import { useState } from "react";

import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import ProjectPage from "./components/ProjectPage";

import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  console.log(projectState);

  function handleAddNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSubmitNewProject(projectData) {
    setProjectState((prevState) => {
      const rndId = Math.random(1000);

      const newProject = {
        ...projectData,
        id: rndId,
      };

      return {
        ...prevState,
        selectedProjectId: newProject.id,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  return (
    <main className="flex h-screen gap-3">
      <Sidebar onClickNewProject={handleAddNewProject} />
      {projectState.selectedProjectId === undefined && (
        <NoProjectSelected onClickNewProject={handleAddNewProject} />
      )}
      {projectState.selectedProjectId === null && (
        <NewProject onSubmitNewProject={handleSubmitNewProject} />
      )}
      {projectState.selectedProjectId != undefined &&
        projectState.selectedProjectId != null && (
          <ProjectPage
            data={projectState.projects.find(
              (x) => x.id == projectState.selectedProjectId
            )}
          />
        )}
    </main>
  );
}

export default App;
