// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import Hero from '../components/Hero';
import axios from 'axios';

function HomePage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  console.log(API_URL)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API_URL}posts`);
        if (res.data) {
          setPosts(res.data)
        } else {
          setError("Not found. :(")
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = (deletedPostId) => {
    setPosts(posts.filter((post) => post.id !== deletedPostId));
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed">
      {/* Hero Section */}
      <Hero />
      {/* Posts Grid */}
      <div className="bg-opacity-90 py-8 px-4 bg-[#B793C7]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">All D&D Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} deletedPostId={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
