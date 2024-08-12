export default function Sidebar({ onClickNewProject }) {
  return (
    <aside className="bg-stone-800 py-10 pl-5 pr-12 mt-7 rounded-tr-xl w-1/3 md:w-72">
      <p className="font-semibold text-gray-50 md:text-lg mb-4">
        YOUR PROJECTS
      </p>
      <button
        className=" p-3 bg-stone-700 text-stone-200 rounded-md text-xs md:text-base hover:text-stone-50"
        onClick={onClickNewProject}
      >
        + Add Project
      </button>

      <ul></ul>
    </aside>
  );
}
