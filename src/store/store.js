import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../components/Content/projectsSlice";
import languageReducer from "../components/Content/view/cv/main-info/languageSlice";
import createSagaMiddleware from "redux-saga";
import projectsSaga from "../sagas/saga";
const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    language: languageReducer,
  },
  middleware: [saga],
});

saga.run(projectsSaga);
