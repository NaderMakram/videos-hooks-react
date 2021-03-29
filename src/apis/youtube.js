import axios from "axios";

const KEY = "AIzaSyD9Af68oEe0LRp7q6y-GCRb2EvltjTNYQM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
