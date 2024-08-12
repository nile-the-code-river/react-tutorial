export default function Sidebar({
  onClickNewProject,
  selectedProjectId,
  projects,
  onHandleShowProjectPage,
}) {
  const classes = "px-1 py-3 hover:text-stone-50";

  return (
    <aside className="bg-stone-800 py-10 pl-5 pr-12 mt-7 rounded-tr-xl h-screen w-1/3 md:w-72">
      <p className="font-semibold text-gray-50 md:text-lg mb-4">
        YOUR PROJECTS
      </p>
      <button
        className=" py-2 px-4 mb-3 bg-stone-700 text-stone-200 rounded-md text-xs md:text-base hover:text-stone-50"
        onClick={onClickNewProject}
      >
        + Add Project
      </button>

      {projects != undefined && (
        <ul>
          {projects.map((x) => (
            <li key={x.id}>
              <button
                onClick={() => onHandleShowProjectPage(x.id)}
                className={
                  classes +
                  (x.id === selectedProjectId
                    ? " text-stone-50"
                    : " text-stone-400")
                }
              >
                {x.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
