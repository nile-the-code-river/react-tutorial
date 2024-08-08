import styles from "./ProjectDetail.module.css";

export default function ProjectDetail({ project }) {
  return (
    <div className={styles.projectDetailContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{project.title}</h1>
        <button className="negativeButton">Delete</button>
      </div>
      <p className={styles.date}>{project.dueDate}</p>
      <p>{project.description}</p>
      <hr />
      <h1>Tasks</h1>
      <div>
        <input type="text" className={styles.inputTask} />
        <button className="negativeButton">Add Task</button>
      </div>
      {project.task.length > 0 && (
        <ol>
          {project.task.map((x) => (
            <li key={x}>
              <span>{x}</span>
              <button className="negativeButton">Clear</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
