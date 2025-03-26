import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewPost() {
    const API_URL = import.meta.env.VITE_API_URL;
    const [post, setPost] = useState({
        title: '',
        author: '',
        content: '',
        cover: ''
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${API_URL}posts`, post);

            setPost({
                title: '',
                author: '',
                content: '',
                cover: ''
            })

            console.log('Post added:', res.data);
        } catch (error) {
            console.error('Error adding post:', error);
        }
    }

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })

    }

    return (
    <div className="">
        <div className="">
        <div className="">
        <h1 className="">Create a new post!</h1>
        </div>
        <form
            onSubmit={handleSubmit}
            className=""
        >
          <input
            className=""
            type="text"
            placeholder="Why Fireballs Are Overrated..."
            value={post.title}
            name="title"
            onChange={handleChange}
            required
          />
          <input
            className=""
            type="text"
            placeholder="Who goes there?"
            value={post.author}
            name="author"
            onChange={handleChange}
            required
          />
          <textarea
            className=""
            type="text"
            value={post.content}
            name="content"
            onChange={handleChange}
            required
            > </textarea>
          <input
            className=""
            type="text"
            value={post.cover}
            name="cover"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            onClick={() => navigate("/")}
            className=""
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPost;