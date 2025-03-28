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
    <div className="createContainer w-full h-[100%] flex flex-col justify-center items-center gap-3 p-8">
        <h1 className="text-[1.3rem] tracking-[1px] mb-2 font-bold underline">Create a new post!</h1>
        <form
            onSubmit={handleSubmit}
            className="form w-[50%] flex flex-col gap-2 border border-purple-700 rounded py-6 p-4 bg-[#BB8DD0]"
        >
          <div className="form flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              className="border border-gray-200 rounded px-3 py-1.5 focus:outline-purple-700 focus:ring-0 focus:border-purple-700 bg-[#BC9FC9]"
              type="text"
              placeholder="Why Fireballs Are Overrated..."
              value={post.title}
              name="title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form flex flex-col gap-2">
            <label htmlFor="author">Author</label>
            <input
              className="border border-gray-200 rounded px-3 py-1.5 focus:outline-purple-700 focus:ring-0 focus:border-purple-700 bg-[#BC9FC9]"
              type="text"
              placeholder="Who goes there?"
              value={post.author}
              name="author"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form flex flex-col gap-2">
            <label htmlFor="content">Content</label>
            <textarea
              className="border h-50 border-gray-200 rounded px-3 py-1.5 focus:outline-purple-700 focus:ring-0 focus:border-purple-700 bg-[#BC9FC9]"
              type="text"
              value={post.content}
              name="content"
              placeholder="Only these adventurers three can avert a murder most foul..."
              onChange={handleChange}
              required
              > </textarea>
          </div>
          <div className="form flex flex-col gap-2">
          <label htmlFor="cover">Cover Image</label>
            <input
              className="border border-gray-200 rounded px-3 py-1.5 focus:outline-purple-700 focus:ring-0 focus:border-purple-700 bg-[#BC9FC9]"
              placeholder="https://..."
              type="text"
              value={post.cover}
              name="cover"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            onClick={() => navigate("/")}
            className="btn btn-accent text-white text-[1.1rem] bg-purple-600 hover:bg-purple-700 outline-0 border-0 tracking-[1px] mt-3 mx-[40%]"
          >
            Create Post
          </button>
        </form>
  </div>
  );
}

export default NewPost;