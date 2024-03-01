import { createSlice } from '@reduxjs/toolkit';

export const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    clickedPhoto: null,
  },
  reducers: {
    setClickedPhoto: (state, action) => {
      state.clickedPhoto = action.payload;
    },
  },
});

export const { setClickedPhoto } = photoSlice.actions;
export const selectClickedPhoto = (state) => state.photo.clickedPhoto;
