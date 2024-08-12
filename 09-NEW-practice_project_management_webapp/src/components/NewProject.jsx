import { useRef } from "react";

import Input from "./Input";
import Button from "./Button";

export default function NewProject({ onSubmitNewProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleClickSave() {
    const input = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    // validation...

    onSubmitNewProject(input);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={handleClickSave}>Save</Button>
        </li>
      </menu>

      <div>
        <Input label="Title" ref={title} />
        <Input label="Description" isTextArea ref={description} />
        <Input label="Due Date" type="date" ref={dueDate} />
      </div>
    </div>
  );
}
