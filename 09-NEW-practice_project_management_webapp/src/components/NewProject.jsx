import { useRef } from "react";

import Input from "./Input";
import Button from "./Button";
import TransparentButton from "./TransparentButton";

export default function NewProject({
  onSubmitNewProject,
  onNavigateTo,
  onOpenErrorModal,
}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleClickSave() {
    const input = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    if (
      input.title === "" ||
      input.description === "" ||
      input.dueDate === ""
    ) {
      onOpenErrorModal();
    } else {
      onSubmitNewProject(input);
    }
  }

  return (
    <div className="my-7 md:my-14 md:mx-10 w-[36rem]">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <TransparentButton onClick={() => onNavigateTo(undefined)}>
            Cancel
          </TransparentButton>
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
