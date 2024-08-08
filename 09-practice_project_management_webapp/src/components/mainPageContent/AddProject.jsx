import styles from "./AddProject.module.css";

const project = {
  title: "",
  description: "",
  dueDate: "",
  task: {},
};

export default function AddProject({ onNavigateToProjectDetail }) {
  return (
    <form>
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton}>Cancel</button>
        <button type="submit">Save</button>
      </div>
      <div className={styles.inputFields}>
        <div>
          <label>TITLE</label>
          <input type="text" />
        </div>
        <div>
          <label>DESCRIPTION</label>
          <textarea />
        </div>
        <div>
          <label>DUE DATE</label>
          <input type="date" />
        </div>
      </div>
    </form>
  );
}
