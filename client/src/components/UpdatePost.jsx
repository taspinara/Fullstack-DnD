import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    author: "",
    title: "",
    content: "",
    cover: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${API_URL}posts/${id}`);
        if (res.data) {
          setPost(res.data);
        } else {
          setError("Post not found");
        }
      } catch (error) {
        setError("Failed to fetch post");
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(`${API_URL}posts/${id}`, post);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("Failed to update post");
    }
  };

  return (
    <div className="updateContainer w-full h-[100%] flex flex-col justify-center items-center gap-3 p-8">
      <h2 className="text-[1.3rem] tracking-[1px] mb-2">{`Update ${post.title}`}</h2>
      {error && <p>{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="form w-[40%] flex flex-col gap-2 border border-gray-200 rounded py-6 p-4"
      >
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="author">Author</label>
          <input
            className=" border border-gray-200 rounded px-3 py-1.5"
            type="text"
            id="author"
            name="author"
            value={post.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            className=" border border-gray-200 rounded px-3 py-1.5"
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="content">Content</label>
          <textarea
            className=" border border-gray-200 rounded px-3 py-1.5"
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group flex flex-col gap-2">
          <label htmlFor="cover">Cover-image</label>
          <input
            className=" border border-gray-200 rounded px-3 py-1.5"
            type="text"
            id="cover"
            name="cover"
            value={post.cover}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn btn-accent text-white text-[1.1rem] bg-blue-600 outline-0 border-0 tracking-[1px] mt-3"
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;
