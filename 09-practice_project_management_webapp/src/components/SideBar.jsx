import styles from "./Sidebar.module.css";
import AddProject from "./mainPageContent/AddProject";

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

export default function SideBar({
  onNavigateToAddProject,
  onNavigateToProjectDetail,
}) {
  if (projects.length === 0) addDummyProjects();

  return (
    <nav className={styles.sideBar}>
      <h3>YOUR PROJECTS</h3>
      <button onClick={onNavigateToAddProject}>+ Add Project</button>
      <ol className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.title}>
            <button
              onClick={() =>
                onNavigateToProjectDetail(
                  projects.find((x) => x.title === project.title)
                )
              }
            >
              {project.title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
