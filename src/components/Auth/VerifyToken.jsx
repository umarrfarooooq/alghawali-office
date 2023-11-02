import { jwtDecode } from "jwt-decode";

export const  VerifyOfficeToken = () => {
  const officeToken = localStorage.getItem("officeToken");

  if (!officeToken) {
    return false;
  }

  try {
    const decoded = jwtDecode(officeToken);
    const now = Date.now() / 1000; 
    if (decoded.exp < now) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};
