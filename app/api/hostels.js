import apiClient from "./client";

const endpoint = "/hostels";

const getHostels = () => {
  return apiClient.get(endpoint);
};

export default {
  getHostels,
};
