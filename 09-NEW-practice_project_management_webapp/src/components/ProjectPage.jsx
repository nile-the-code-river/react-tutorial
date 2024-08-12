import { useRef } from "react";

export default function ProjectPage({ project, tasks, onAddNewTask }) {
  const { title, description, dueDate } = project;
  const taskInputRef = useRef();

  function HandleSubmitNewTask() {
    onAddNewTask(taskInputRef.current.value);
    taskInputRef.current.value = "";
  }

  return (
    <div className="my-7 md:my-14 md:mx-10 w-2/3">
      <div className="flex mb-3 items-center">
        <h1 className="text-xl md:text-3xl font-bold text-stone-800 overflow-hidden">
          {title} asdasdasdasdasdasdasdasds
          asdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsada
          sdasasdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsadasdas
        </h1>
        <button className="ml-auto hover:text-red-600 p-3">Delete</button>
      </div>
      <p className="mb-5 text-stone-500">{dueDate}</p>
      <p className="mb-10 text-slate-700">
        {description} asdasdasdasdasdasdasdasds
        asdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsada
        sdasasdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsadasdas
        asdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsada
        sdasasdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsadasdas
        asdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsada
        sdasasdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsadasdas
        asdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsada
        sdasasdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsadasdas
        asdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsada
        sdasasdasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdsadasdas
      </p>
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
          className="p-3 ml-1 self-center hover:text-red-600"
          onClick={HandleSubmitNewTask}
        >
          Add
        </button>
      </div>
      {tasks != undefined && (
        <ul>
          {tasks.map((x) => (
            <li key={x.id} className="my-3">
              {x.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
