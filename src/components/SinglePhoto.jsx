import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSelector } from "react-redux";
import { selectClickedPhoto } from "../features/photoSlice";
import { useParams } from 'react-router-dom';
import {list} from '../gallery/mockList.js'
import '../components-css/SinglePhoto.css'

const SinglePhoto = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const WhichPhotoClicked = useSelector(selectClickedPhoto);
  const [photo, setPhoto] = useState(null)
  const handleGoBack = () => {
    navigate(-1);
  };

  const id = useParams()

  useEffect(()=>{
    const photo = list.filter((photo)=>{return photo.id == id.id})
    setPhoto(photo[0])
  })

  if (photo) {

    return (
        <div className='single-photo-container'>
          <button onClick={handleGoBack}>Go Back</button>
          <img src={photo.src} alt="" id={photo.id} />
        </div>
      );
  }

};

export default SinglePhoto;
