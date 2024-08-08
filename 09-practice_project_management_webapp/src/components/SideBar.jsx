import styles from "./Sidebar.module.css";
import { forwardRef, useImperativeHandle, useState } from "react";

const SideBar = forwardRef(function (
  { onNavigateToAddProject, onNavigateToProjectDetail },
  ref
) {
  const [projects, setProjects] = useState([
    {
      title: "dummy1-title",
      description: "dummy1-desc",
      dueDate: "dummy1-date",
      task: ["d1-task1", "d1-task2", "d1-task3"],
    },
    {
      title:
        "this-is-some-long-dummy2-title this-is-some-long-dummy2-title this-is-some-long-dummy2-title",
      description: "dummy2-desc",
      dueDate: "dummy2-date",
      task: ["d2-task1", "d2-task2", "d2-task3"],
    },
  ]);

  // ref
  useImperativeHandle(ref, () => {
    return {
      addToProject(project) {
        setProjects((prevProjects) => [...prevProjects, project]);

        console.log("2 " + { ...projects.map((x) => console.log(x)) });
      },
    };
  });

  return (
    <nav className={styles.sideBar}>
      <h3>YOUR PROJECTS</h3>
      <button onClick={onNavigateToAddProject}>+ Add Project</button>
      {projects && (
        <ol className={styles.projectList}>
          {projects.map((item) => (
            <li key={item.title}>
              <button
                onClick={() =>
                  onNavigateToProjectDetail(
                    projects.find((x) => x.title === item.title)
                  )
                }
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
