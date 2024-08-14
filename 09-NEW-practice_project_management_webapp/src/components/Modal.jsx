import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

const Modal = forwardRef(function (props, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.show();
      },
    };
  });

  function close() {
    dialogRef.current.close();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="w-screen h-screen bg-stone-700 bg-opacity-85 content-center"
    >
      <div className=" bg-slate-200 p-8 text-center rounded-lg m-auto w-2/3 md:w-1/4">
        <h1 className="font-bold text-xl mb-3">Oops!</h1>
        <p className="m-5 text-blue-900">
          Looks like you haven't filled some info
        </p>
        <Button onClick={close}>OK</Button>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
