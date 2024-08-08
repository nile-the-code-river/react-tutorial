import styles from "./Sidebar.module.css";
import AddProject from "./mainPageContent/AddProject";
import NoProject from "./mainPageContent/NoProject";

const projects = [];

function addDummyProjects() {
  projects.push({
    title: "dummy1-title",
    description: "dummy1-desc",
    dueDate: "dummy1-date",
  });

  projects.push({
    title: "this-is-some-long-dummy2-title",
    description: "dummy2-desc",
    dueDate: "dummy2-date",
  });
}

export default function SideBar({ onAddProject }) {
  if (projects.length === 0) addDummyProjects();

  return (
    <nav className={styles.sideBar}>
      <h3>YOUR PROJECTS</h3>
      <button onClick={onAddProject}>+ Add Project</button>
      <ol className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.title + project.dueDate}>
            <button>{project.title}</button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
