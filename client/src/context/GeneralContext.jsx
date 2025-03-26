import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GeneralContext = createContext();

function GeneralContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const getAllFetchPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}posts`);
      setPosts(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!post.title || !post.author || !post.content || !post.cover) return alert("Please fill the form");
  //   setPosts([{ ...post, ...posts}]);
  //   setPost({ title: "", author: "", content: "", cover: "" });
  // };

  return (
    <div>
      <GeneralContext.Provider
        value={{
          posts,
          setPosts,
          loading,
          error,
          getAllFetchPosts,
          handleSubmit,
          API_URL
        }}
      >
        {children}
      </GeneralContext.Provider>
    </div>
  );
}

export default GeneralContextProvider;
