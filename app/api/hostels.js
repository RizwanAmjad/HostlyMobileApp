import apiClient from "./client";

const endpoint = "/hostels";

const getHostels = () => {
  return apiClient.get(endpoint);
};

const postHostelAd = (formData) => {
  return apiClient.post(endpoint, formData);
};

export default {
  getHostels,
};
