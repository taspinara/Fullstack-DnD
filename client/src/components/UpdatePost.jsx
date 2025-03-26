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
    <div className="updateContainer">
      <h2>Update Post</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={post.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover</label>
          <input
            type="text"
            id="cover"
            name="cover"
            value={post.cover}
            onChange={handleChange}
          />
        </div>
        <button onClick={() => navigate("/")} type="submit" disabled={loading}>
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;
