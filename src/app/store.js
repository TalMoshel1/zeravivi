import { configureStore } from '@reduxjs/toolkit';
import { messageSlice } from '../features/messageSlice';
import { photoSlice } from '../features/photoSlice';
import { threePhotoSlice } from '../features/threePhotoSlice';


export const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
    photo: photoSlice.reducer,
    threePhoto: threePhotoSlice.reducer
  },
});
