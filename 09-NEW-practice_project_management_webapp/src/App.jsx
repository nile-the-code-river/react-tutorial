import { useState } from "react";

import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import ProjectPage from "./components/ProjectPage";

import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleNavigateTo(destId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: destId,
      };
    });
  }

  function handleSubmitNewProject(projectData) {
    const rndId = Math.random(1000);

    const newProject = {
      ...projectData,
      id: rndId,
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: newProject.id, // go to the project page
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects.filter((x) => x.id != projectId)],
      };
    });
  }

  function handleAddNewTask(taskTitle) {
    const rndId = Math.random(1000);

    const newTask = {
      title: taskTitle,
      id: rndId,
      projectId: projectState.selectedProjectId,
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks.filter((x) => x.id != taskId)],
      };
    });
  }

  return (
    <main className="flex h-screen gap-3">
      <Sidebar
        selectedProjectId={projectState.selectedProjectId}
        projects={projectState.projects}
        onNavigateTo={handleNavigateTo}
      />
      {projectState.selectedProjectId === undefined && (
        <NoProjectSelected onNavigateTo={handleNavigateTo} />
      )}
      {projectState.selectedProjectId === null && (
        <NewProject
          onSubmitNewProject={handleSubmitNewProject}
          onNavigateTo={handleNavigateTo}
        />
      )}
      {projectState.selectedProjectId != undefined &&
        projectState.selectedProjectId != null && (
          <ProjectPage
            project={projectState.projects.find(
              (x) => x.id == projectState.selectedProjectId
            )}
            tasks={projectState.tasks.filter(
              (x) => x.projectId == projectState.selectedProjectId
            )}
            onDeleteProject={handleDeleteProject}
            onAddNewTask={handleAddNewTask}
            onDeleteTask={handleDeleteTask}
            onNavigateTo={handleNavigateTo}
          />
        )}
    </main>
  );
}

export default App;
