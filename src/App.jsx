import { useSelector } from "react-redux";
import { selectIsMessageSent } from "./features/messageSlice";
import Form from "./components/Form";
import Background from "./components/Background";
import Navbar from "./components/Navbar.jsx";
import Modal from "./components/Modal";
// import oolaliImage from "./photos/oolali.jpg";
import "./App.css";
import ThreePhotoContainer from "./components/ThreePhotoContainer.jsx";

function App() {
  const isMessageSent = useSelector(selectIsMessageSent);

  return (
    <div className="app" style={isMessageSent ? { overflow: "hidden" } : {}}>
      <Navbar />
        {/* <Background />  */}
        <div
          className={
            isMessageSent
              ? "blurred-and-no-pointer-events viewport-minus-navbar"
              : "viewport-minus-navbar"
          }
        >
          <div className="container">
            <Form />
          </div>
        </div>
        {isMessageSent && <Modal text="הודעתך נשלחה בהצלחה" />}

        <div className=" photos-arrows-align-top photos-arrows-direction-column last-page-height-margin">
          <ThreePhotoContainer />
        </div>
    </div>
  );
}

export default App;
