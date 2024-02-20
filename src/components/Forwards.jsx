import React, { useEffect, useState } from "react"
import {Forwards} from '../features/threePhotoSlice.js'
import { useDispatch, useSelector } from "react-redux";
import { FaArrowAltCircleRight } from "react-icons/fa";
import '../components-css/Arrow.css'
import { location } from "../features/threePhotoSlice.js";


const FowardsButton = () => {

  const dispatch = useDispatch()
  const locationValue = useSelector(location)
  const [isButtonDisabled, setisButtonDisabled] = useState(true)

  useEffect(()=>{
    if (locationValue !== 'start') {
      return setisButtonDisabled(false)
    } 
    setisButtonDisabled(true)
  },[locationValue])

  return (
    <button className="arrow arrow-margin-top">
      <FaArrowAltCircleRight size='75px'  fill={`${locationValue === 'end' && 'grey'}`} aria-label='fowards photo' onClick={()=>{dispatch(Forwards())}}/>

    </button>
  )
};

export default FowardsButton;
