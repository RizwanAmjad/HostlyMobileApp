import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error Storing the Auth Token");
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync();
  } catch (error) {
    console.log("Error getting the token");
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync();
  } catch (error) {
    console.log("Error removing the Auth token");
  }
};

export default {
  storeToken,
  getToken,
  removeToken,
};
