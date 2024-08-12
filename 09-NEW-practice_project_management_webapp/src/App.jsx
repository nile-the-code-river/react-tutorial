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

  function handleAddNewProject() {
    console.log("1234");

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  return (
    <main className="flex h-screen gap-3">
      <Sidebar onClickNewProject={handleAddNewProject} />
      {projectState.selectedProjectId === undefined && (
        <NoProjectSelected onClickNewProject={handleAddNewProject} />
      )}
      {projectState.selectedProjectId === null && <NewProject />}
      {projectState.selectedProjectId === 1 && <ProjectPage />}
    </main>
  );
}

export default App;
