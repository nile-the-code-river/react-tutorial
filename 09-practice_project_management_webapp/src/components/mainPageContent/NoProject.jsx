import styles from "./NoProject.module.css";

export default function NoProject({ onAddProject }) {
  return (
    <div className={styles.general}>
      <img
        src="../../../src/assets/no-projects.png"
        alt="no-project-available"
      />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button onClick={onAddProject}>Create new project</button>
    </div>
  );
}
