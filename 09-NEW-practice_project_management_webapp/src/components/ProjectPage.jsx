import { useRef } from "react";

import TransparentButton from "./TransparentButton";

export default function ProjectPage({
  project,
  tasks,
  onDeleteProject,
  onAddNewTask,
  onDeleteTask,
  onNavigateTo,
  onOpenErrorModal,
}) {
  console.log(tasks);

  const { id, title, description, dueDate } = project;
  const taskInputRef = useRef();

  function handleSubmitNewTask() {
    const enteredTask = taskInputRef.current.value;

    if (enteredTask === "") {
      onOpenErrorModal();
    } else {
      onAddNewTask();
      taskInputRef.current.value = "";
    }
  }

  function handleDeleteProject() {
    onDeleteProject(id);
    onNavigateTo(undefined);
  }

  return (
    <div className="my-7 md:my-14 md:mx-10 w-2/3">
      <div className="flex mb-3 items-center">
        <h1 className="text-xl md:text-3xl font-bold text-stone-800 overflow-hidden">
          {title}
        </h1>
        <TransparentButton onClick={handleDeleteProject}>
          Delete
        </TransparentButton>
      </div>
      <p className="mb-5 text-stone-500">{dueDate}</p>
      <p className="mb-10 text-slate-700">{description}</p>
      <hr />
      <h3 className="mt-5 mb-3 text-lg md:text-2xl font-semibold self-center">
        Tasks
      </h3>
      <div className="flex object-center">
        <input
          className=" px-3 bg-stone-200 border-b-2 w-1/3 focus:outline-none focus:border-stone-400"
          ref={taskInputRef}
        />
        <button
          className="p-3 ml-1 self-center text-stone-600 hover:text-stone-950"
          onClick={handleSubmitNewTask}
        >
          Add
        </button>
      </div>
      {tasks != undefined && (
        <ul>
          {tasks.map((x) => (
            <li key={x.id} className="my-3">
              <span>{x.title}</span>
              <TransparentButton onClick={() => onDeleteTask(x.id)}>
                Clear
              </TransparentButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
