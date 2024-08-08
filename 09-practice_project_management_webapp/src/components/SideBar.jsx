import styles from "./Sidebar.module.css";
import AddProject from "./mainPageContent/AddProject";
import NoProject from "./mainPageContent/NoProject";

export default function SideBar({ onNavigate }) {
  return (
    <nav className={styles.sideBar}>
      <h1>Sidebar</h1>
      <button onClick={() => onNavigate(<AddProject />)}>Add Project</button>
    </nav>
  );
}
