import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/sbshop_user";

class Sbshop_userService {
  getsbshop_user() {
    return axios.get(USER_API_BASE_URL);
  }
  createSbshop_user(sbshop_user) {
    return axios.post(USER_API_BASE_URL, sbshop_user);
  }

  getSbshop_userById(sbshop_userId) {
    return axios.get(USER_API_BASE_URL + "/" + sbshop_userId);
  }

  updatesbshop_user(sbshop_user, sbshop_userId) {
    return axios.put(USER_API_BASE_URL + "/" + sbshop_userId, sbshop_user);
  }
  deleteSbshop_user(sbshop_userId) {
    return axios.delete(USER_API_BASE_URL + "/" + sbshop_userId);
  }
}

export default new Sbshop_userService();
