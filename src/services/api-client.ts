import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "74956246159445bda3043d935bd085f9",
  },
});
