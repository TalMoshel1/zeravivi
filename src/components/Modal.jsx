import React from "react";
import { useDispatch } from "react-redux";
import { setMessageSent } from "../features/messageSlice";
import "../components-css/Modal.css";

const Modal = ({ text, photo }) => {
  const dispatch = useDispatch();

    return (
      <dialog open className='message-modal'>
        <article>
          <h3>{text}</h3>
          <footer>
            <button
            className='form-button'
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
