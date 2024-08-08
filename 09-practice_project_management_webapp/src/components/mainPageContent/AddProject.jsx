import { useState } from "react";
import styles from "./AddProject.module.css";

export default function AddProject({ onNavigateToProjectDetail }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    dueDate: "",
    task: {},
  });

  function handleTitleChange(event) {
    setProject((prevProject) => {
      return {
        title: event.target.value,
        description: prevProject.description,
        dueDate: prevProject.dueDate,
        task: {},
      };
    });
  }

  function handleDescriptionChange(event) {
    setProject((prevProject) => {
      return {
        title: prevProject.title,
        description: event.target.value,
        dueDate: prevProject.dueDate,
        task: {},
      };
    });
  }

  function handleDueDateChange(event) {
    setProject((prevProject) => {
      return {
        title: prevProject.title,
        description: prevProject.description,
        dueDate: event.target.value,
        task: {},
      };
    });
  }

  return (
    <div>
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton}>Cancel</button>
        <button
          // type="submit"
          onClick={() => {
            console.log(project);
            onNavigateToProjectDetail(project);
          }}
        >
          Save
        </button>
      </div>
      <div className={styles.inputFields}>
        <div>
          <label>TITLE</label>
          <input type="text" onChange={handleTitleChange} />
        </div>
        <div>
          <label>DESCRIPTION</label>
          <textarea onChange={handleDescriptionChange} />
        </div>
        <div>
          <label>DUE DATE</label>
          <input type="date" onChange={handleDueDateChange} />
        </div>
      </div>
    </div>
  );
}
