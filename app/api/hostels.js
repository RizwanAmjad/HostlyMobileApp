import apiClient from "./client";

const endpoint = "/hostels";
const uploadEndpoint = "./upload";

const uploadImages = async (formData) => {
  const result = await apiClient.post(uploadEndpoint, formData);
  return result;
};

const getHostels = () => {
  return apiClient.get(endpoint);
};

const postHostelAd = async (data) => {
  data = {
    ...data,
    city: data.city._id,
  };
  let images = new FormData();
  data.images.forEach((image, index) => {
    images.append("file", {
      name: "image" + index,
      type: "image/*",
      uri: image,
    });
  });

  const { data: files } = await uploadImages(images);
  data.images = [];

  files.forEach((file) => {
    data.images.push(file.filename);
  });

  return apiClient.post(endpoint, data);
};

export default {
  getHostels,
  postHostelAd,
};
