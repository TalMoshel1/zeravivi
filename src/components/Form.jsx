import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMessageSent, setMessageSent } from "../features/messageSlice";
import "../components-css/Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    setIsSending(true);
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsSending(false);

      if (response.ok) {
        dispatch(setMessageSent(true));
        console.log(response);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendEmail(formData);

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
    <h1>Contact</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="name">Name:</label>
        <input
          id="Name"
          type="text"
          name="name"
          value={formData.name}
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label>Emaill address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label>Body:</label>
        <textarea
          name="message"
          value={formData.message}
          required
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        aria-busy={isSending}
        aria-label={isSending ? "הודעה נשלחת" : "שליחה"}
      >
        {isSending ? <>Message being sent</> : <>Send</>}
      </button>
    </form>
    </>

  );
};

export default Form;
