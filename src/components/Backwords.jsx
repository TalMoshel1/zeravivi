import React, { useEffect, useState } from "react"
import { location } from "../features/threePhotoSlice.js";

import {Backwords} from '../features/threePhotoSlice.js'
import { useDispatch, useSelector } from "react-redux";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import '../components-css/Arrow.css'



const BackwordsButton = () => {

  const dispatch = useDispatch()
  const locationValue = useSelector(location)


  return (
    <button className="arrow arrow-margin-top">
      <FaArrowAltCircleLeft fill={`${locationValue === 'start' && 'grey'}`} size='75px'  aria-label='Backwords photo' onClick={()=>{dispatch(Backwords())}}/>

    </button>
  )
};

export default BackwordsButton;
