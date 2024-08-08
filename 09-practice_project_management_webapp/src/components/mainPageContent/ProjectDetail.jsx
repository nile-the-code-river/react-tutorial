import styles from "./ProjectDetail.module.css";
import { useState } from "react";

export default function ProjectDetail({
  projects,
  selectedProjectIndex,
  onNavigateToNoProject,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
}) {
  const [newTask, setNewTask] = useState();

  function handleNewTaskChange(event) {
    setNewTask(() => event.target.value);
  }

  return (
    <div className={styles.projectDetailContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{projects[selectedProjectIndex].title}</h1>
        <button
          onClick={() => {
            onDeleteProject(projects[selectedProjectIndex]);
            onNavigateToNoProject();
          }}
          className="negativeButton"
        >
          Delete
        </button>
      </div>
      <p className={styles.date}>{projects[selectedProjectIndex].dueDate}</p>
      <p>{projects[selectedProjectIndex].description}</p>
      <hr />
      <h1>Tasks</h1>
      <div>
        <input
          type="text"
          className={styles.inputTask}
          onChange={handleNewTaskChange}
        />
        <button
          onClick={() => onAddTask(projects[selectedProjectIndex], newTask)}
          className="negativeButton"
        >
          Add Task
        </button>
      </div>
      {projects[selectedProjectIndex].task.length > 0 && (
        <ol>
          {projects[selectedProjectIndex].task.map((x) => (
            <li key={x}>
              <span>{x}</span>
              <button
                onClick={() => onDeleteTask(projects[selectedProjectIndex], x)}
                className="negativeButton"
              >
                Clear
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
