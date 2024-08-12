import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onNavigateTo }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="object-contain mx-auto h-16"
        src={noProjectImage}
        alt="no-project-selected-symbol"
      />

      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project a get started with a new one
      </p>
      <p>
        <Button onClick={() => onNavigateTo(null)}>Create New Project</Button>
      </p>
    </div>
  );
}
