import { create } from "apisauce";

import backend from "../config/backend";
import authStorage from "../auth/storage";

const authTokenKey = "x-auth-token";
let authToken = "";

(async () => {
  authToken = await authStorage.getToken();
})();

const apiClient = create({
  baseURL: backend.backendURL,
});

apiClient.addRequestTransform((request) => {
  request.headers[authTokenKey] = authToken;
});

export default apiClient;
