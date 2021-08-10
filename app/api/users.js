import apiClient from "./client";

const authEndpoint = "/auth";

const login = (email, password) => {
  return apiClient.post(authEndpoint, { email, password });
};

const userEndpoint = "users";

const register = (name, email, password, phone_number) => {
  return apiClient.post(userEndpoint, { name, email, password, phone_number });
};

export default {
  login,
  register,
};
