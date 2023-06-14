import { takeEvery, call, put } from "redux-saga/effects";
import { projectsSlice } from "../components/Content/projectsSlice";

import { fetchProjects } from "../api";
import repos from "./repos";

function* workerGetApiProjects() {
  const localProjects = localStorage.getItem("localProjects");
  if (!localProjects) {
    try {
      const data = yield call(() => fetchProjects(repos));
      yield put(projectsSlice.actions.recieveProjects(data));
      yield localStorage.setItem("localProjects", JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }
  const data = JSON.parse(localStorage.localProjects);
  yield put(projectsSlice.actions.recieveProjects(data));
}

function* finishLoadingProjects() {
  yield put(projectsSlice.actions.finishLoading());
}

export default function* projectsSaga() {
  yield takeEvery("projects/startLoading", workerGetApiProjects);
  yield takeEvery("projects/recieveProjects", finishLoadingProjects);
}
