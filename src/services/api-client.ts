import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "53ea98e9bc5b44af9a0327b0fa59e9a1",
  },
});
