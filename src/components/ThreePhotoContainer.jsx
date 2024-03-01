import React, { useEffect } from "react";
import { selectThreePhoto, direction } from "../features/threePhotoSlice.js";
import { setClickedPhoto } from "../features/photoSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Use useNavigate
import "../components-css/ThreePhotoContainer.css";
import "../components-css/ThreePhoto.css";
import BackwordsButton from "./Backwords.jsx";
import FowardsButton from "./Forwards.jsx";

const ThreePhotoContainer = () => {
  const threePhoto = useSelector(selectThreePhoto);
  const whichDirection = useSelector(direction);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    if (!whichDirection?.direction) return;

    const elements = document.querySelectorAll(".grid-item");
    const timeouts = [];

    elements.forEach((element) => {
      element.classList.remove("Backwards", "Forwards");
      if (whichDirection.direction) {
        const timeoutId = setTimeout(() => {
          element.classList.add(whichDirection.direction);
        }, 10);
        timeouts.push(timeoutId);
      }
    });

    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [whichDirection]);

  const handleImageClick = (index) => {
    dispatch(setClickedPhoto(threePhoto[index]));
    navigate(`/photos/${threePhoto[index].id}`); // Use navigate
  };

  return (
    <>
      <BackwordsButton />
      <div className="three-photo-container">
        <img
          className={`grid-item1 grid-item `}
          src={threePhoto[0].src}
          width="100%"
          height="100%"
          onClick={() => handleImageClick(0)}
        />
        <img
          className={`grid-item2  grid-item `}
          src={threePhoto[1].src}
          width="100%"
          height="100%"
          onClick={() => handleImageClick(1)}
        />
        <img
          className={`grid-item3  grid-item `}
          src={threePhoto[2].src}
          width="100%"
          height="100%"
          onClick={() => handleImageClick(2)}
        />
      </div>
      <FowardsButton />
    </>
  );
};

export default ThreePhotoContainer;
