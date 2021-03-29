import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// custom hook for searching videos that takes default term and returns videos on that term, and a function to search for more terms.
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        type: "video",
      },
    });

    setVideos(response.data.items);
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  return [videos, search];
};

export default useVideos;
