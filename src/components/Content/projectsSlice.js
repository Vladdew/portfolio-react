import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    isLoading: false,
  },
  reducers: {
    startLoading: state => {
      state.isLoading = true;
    },
    recieveProjects: (state, action) => {
      state.projects = action.payload;
    },
    finishLoading: state => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, recieveProjects, recieveError, finishLoading } =
  projectsSlice.actions;

export default projectsSlice.reducer;
