import { createSlice } from "@reduxjs/toolkit";
import { list } from "../gallery/mockList.js";

let i = 0

export const threePhotoSlice = createSlice({
  name: "threePhoto",
  initialState: {
    threePhoto: list.slice(i, i + 3),
    direction: null,
    location: 'start',
  },
  reducers: {
    Forwards: (state) => {
      if (i === list.length - 3) {
        return
      }
      state.location = ''
      i++
      if (i === list.length - 3) {
        state.location = 'end'

      }
      state.threePhoto = list.slice(i, i + 3)
      state.direction = {direction: 'Forwards'}
    },
    Backwords: (state) => {
      if (i === 0){
        return
      }
      state.location = ''
      i--
      if (i === 0) {
        state.location = 'start'

      }
      state.threePhoto = list.slice(i, i + 3)
      state.direction = {direction:'Backwards'}



    }
  },
});

export const { Forwards, Backwords } = threePhotoSlice.actions;
export const selectThreePhoto = (state) => state.threePhoto.threePhoto;
export const direction = (state) => state.threePhoto.direction
export const location = (state) => state.threePhoto.location

