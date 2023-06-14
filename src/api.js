import axios from "axios";

export function fetchProjects(repos) {
  const promises = repos.map(rep => axios.get(rep.url));

  return axios.all(promises).then(results => results);
}
