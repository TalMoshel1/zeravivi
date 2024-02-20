import React, { useEffect, useState } from "react";
import { selectThreePhoto, direction } from "../features/threePhotoSlice.js";
import { useSelector } from "react-redux";
import "../components-css/ThreePhotoContainer.css";
import "../components-css/ThreePhoto.css";
import BackwordsButton from "./Backwords.jsx";
import FowardsButton from "./Forwards.jsx";

const ThreePhotoContainer = () => {
  const threePhoto = useSelector(selectThreePhoto);
  const whichDirection = useSelector(direction);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (!whichDirection?.direction) return;
  
    const elements = document.querySelectorAll('.grid-item');
    const timeouts = [];

    elements.forEach(element => {
      element.classList.remove('Backwards', 'Forwards');
        if (whichDirection.direction) {
        const timeoutId = setTimeout(() => {
          element.classList.add(whichDirection.direction);
        }, 10);
        timeouts.push(timeoutId);
      }
    });
  
    return () => {
      timeouts.forEach(timeoutId => clearTimeout(timeoutId));
    };
  
  }, [whichDirection]);

  return (
    <>
      <BackwordsButton />
      <div className="three-photo-container">
        <img
          className={`grid-item1 grid-item `}
          src={threePhoto[0]}
          width="100%"
          height="100%"
        />
        <img
          className={`grid-item2  grid-item `}
          src={threePhoto[1]}
          width="100%"
          height="100%"
        />
        <img
          className={`grid-item3  grid-item `}
          src={threePhoto[2]}
          width="100%"
          height="100%"
        />
      </div>
      <FowardsButton />
    </>
  );
};

export default ThreePhotoContainer;
