import { create } from "apisauce";
import backend from "../config/backend";

const apiClient = create({
  baseURL: backend.backendURL,
});

export default apiClient;
