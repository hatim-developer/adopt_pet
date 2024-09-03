import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modal = document.getElementById("modal");
    modal.appendChild(elRef.current);

    return () => modal.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
