import React, { useEffect, useState } from "react";
import "../components-css/PhotoModal.css";
import { useDispatch, useSelector } from "react-redux";
import { selectClickedPhoto, setClickedPhoto } from "../features/photoSlice";
import { IoExitOutline } from "react-icons/io5";

const PhotoModal = () => {
  const dispatch = useDispatch();
  const WhichPhotoClicked = useSelector(selectClickedPhoto);

  useEffect(() => {
    if (WhichPhotoClicked) {
      console.log(WhichPhotoClicked);
    }
  }, [WhichPhotoClicked]);

  if (WhichPhotoClicked) {
    console.log('!!!')
    return (
      <dialog open className="photo-modal-container photo-modal photo-modal-width-height photo-modal-alignment">
        <IoExitOutline onClick={()=>dispatch(setClickedPhoto(null))}/>
        <img className="single-photo" src={WhichPhotoClicked.src} alt="" />
      </dialog>
    );
  }
};

export default PhotoModal;
