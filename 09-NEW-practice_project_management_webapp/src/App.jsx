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

  console.log(projectState);

  function handleAddNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleShowProjectPage(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
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
        selectedProjectId: newProject.id,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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
        onClickNewProject={handleAddNewProject}
        selectedProjectId={projectState.selectedProjectId}
        projects={projectState.projects}
        onHandleShowProjectPage={handleShowProjectPage}
      />
      {projectState.selectedProjectId === undefined && (
        <NoProjectSelected onClickNewProject={handleAddNewProject} />
      )}
      {projectState.selectedProjectId === null && (
        <NewProject onSubmitNewProject={handleSubmitNewProject} />
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
          />
        )}
    </main>
  );
}

export default App;
