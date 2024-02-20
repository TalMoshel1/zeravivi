import React from "react";
import { useDispatch } from "react-redux";
import { setMessageSent } from "../features/messageSlice";
import '../components-css/Modal.css'

const Modal = ({text}) => {
  const dispatch = useDispatch();
  return (
    <dialog open>
      <article>
        <h3>{text}</h3>
        <footer>
          <button
            href="#cancel"
            role="button"
            class="secondary"
            onClick={() => dispatch(setMessageSent(false))}
          >
            close
          </button>
        </footer>
      </article>
    </dialog>
  );
};

export default Modal;
