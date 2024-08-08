import { useRef, useState } from "react";

import SideBar from "./components/SideBar";
import NoProject from "./components/mainPageContent/NoProject";
import AddProject from "./components/mainPageContent/AddProject";
import ProjectDetail from "./components/mainPageContent/ProjectDetail";

const pages = ["noProject", "addProject", "projectDetail"];

function App() {
  const [mainPageContent, setMainPageContent] = useState(pages[0]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState();
  const ref = useRef();

  function handleNavigateToAddProject() {
    setMainPageContent(() => pages[1]);
  }

  function handleNavigateToProjectDetail(project) {
    setMainPageContent(() => pages[2]);

    if (project != null) {
      setSelectedProjectIndex(() =>
        ref.current.getProjects().findIndex((x) => x.title === project.title)
      );
    }
  }

  function handleNavigateToNoProject() {
    setMainPageContent(() => pages[0]);
  }

  function AddProjectToSideBar(project) {
    ref.current.addToProject(project);
  }
  function handleAddTask(project, task) {
    ref.current.addTask(project, task);
  }
  function handleDeleteTask(project, task) {
    ref.current.deleteTask(project, task);
  }
  function handleDeleteProject(project) {
    ref.current.deleteProject(project);
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
            <ProjectDetail
              projects={ref.current.getProjects()}
              selectedProjectIndex={selectedProjectIndex}
              onNavigateToNoProject={handleNavigateToNoProject}
              onDeleteProject={handleDeleteProject}
              onDeleteTask={handleDeleteTask}
              onAddTask={handleAddTask}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
