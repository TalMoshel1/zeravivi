import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    isMessageSent: false,
  },
  reducers: {
    setMessageSent: (state, action) => {
      state.isMessageSent = action.payload;
    },
  },
});

export const { setMessageSent } = messageSlice.actions;
export const selectIsMessageSent = (state) => state.message.isMessageSent;
