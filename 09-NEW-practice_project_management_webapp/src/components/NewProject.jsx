import Input from "./Input";
import Button from "./Button";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>

      <div>
        <Input label="Title" />
        <Input label="Description" isTextArea />
        <Input label="Due Date" type="date" />
      </div>
    </div>
  );
}
