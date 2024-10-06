import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "de",
  },
  reducers: {
    switchLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;
