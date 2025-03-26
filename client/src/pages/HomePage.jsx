// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import Hero from '../components/Hero';

function HomePage() {
  const [posts, setPosts] = useState([]);
  console.log('first')

  // Fetch all posts

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed">
      {/* Hero Section */}
      <Hero />
      {/* Posts Grid */}
      <div className="bg-base-100 bg-opacity-90 py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">All D&D Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
