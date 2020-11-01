import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-u-burger.firebaseio.com/",
});

export default instance;
