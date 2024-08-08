import styles from "./Sidebar.module.css";
import { forwardRef, useImperativeHandle, useState } from "react";

const SideBar = forwardRef(function (
  { onNavigateToAddProject, onNavigateToProjectDetail },
  ref
) {
  const [projects, setProjects] = useState([]);

  useImperativeHandle(ref, () => {
    return {
      getProjects() {
        return projects;
      },
      addToProject(project) {
        console.log("add project called");
        setProjects((prevProjects) => [...prevProjects, project]);
      },
      addTask(project, task) {
        setProjects((prevProjects) => {
          // increase the project number damn
          // const prevTasks = prevProjects.find(
          //   (x) => x.title === project.title
          // ).task;

          const projectIndex = prevProjects.findIndex(
            (x) => x.title === project.title
          );

          // const prevTask = prevProjects[projectIndex].task;

          const updatedProject = {
            ...prevProjects[projectIndex],
            task: ["asdf", task],
          };

          console.log(prevProjects.forEach((x) => console.log(x)));
          console.log("asdasdasdasdasdasdsad : " + task);

          return [
            // ...prevProjects.slice(0, projectIndex),
            updatedProject,
            // ...prevProjects.slice(projectIndex + 1),
          ];
        });
      },
      deleteTask(project, task) {
        setProjects((prevProjects) => {
          return prevProjects
            .find((x) => x.title === project.title)
            .filter((x) => x.task != task);
        });
      },
      deleteProject(project) {
        setProjects((prevProjects) => {
          return prevProjects.filter((x) => x.title != project.title);
        });
      },
    };
  });

  return (
    <nav className={styles.sideBar}>
      <h3>YOUR PROJECTS</h3>
      <button onClick={onNavigateToAddProject}>+ Add Project</button>
      {projects && (
        <ol className={styles.projectList}>
          {console.log(projects.length)}
          {projects.map((x) => console.log("uwan " + x.title))}
          {projects.map((item) => (
            <li key={item.title + Date.now()}>
              <button
                onClick={() => {
                  console.log("onclick called");
                  onNavigateToProjectDetail(
                    projects.find((x) => x.title === item.title)
                  );
                }}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
});

export default SideBar;
