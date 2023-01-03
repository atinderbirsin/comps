import Overlay from "./Overlay";
import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onDismiss, children, action }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <Overlay onClick={onDismiss} />
      <div className="fixed inset-40 bg-white">
        <div className="p-10 flex flex-col justify-between h-full">
          <div>
            <p>{children}</p>
          </div>
          <div className="self-end">{action}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-container")
  );
}

export default Modal;
