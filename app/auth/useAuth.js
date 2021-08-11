import { useContext } from "react";

import jwtDecode from "jwt-decode";

import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

export default useAuth = () => {
  const { setUser } = useContext(AuthContext);

  const login = (authToken) => {
    setUser(jwtDecode(authToken));
    authStorage.storeToken(authToken);
  };

  const logout = async () => {
    setUser();
    await authStorage.removeToken();
  };

  return {
    login,
    logout,
  };
};
