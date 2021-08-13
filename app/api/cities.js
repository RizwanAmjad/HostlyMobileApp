import apiClient from "./client";

const endpoint = "/cities";

const getCities = () => {
  return apiClient.get(endpoint);
};

export default {
  getCities,
};
