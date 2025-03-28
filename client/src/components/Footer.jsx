import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo.png";

const Footer = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [latestPosts, setLatestPosts] = useState([]);
  const [favoritePosts, setFavoritePosts] = useState([]);

  const sortPostsByDate = (posts) => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const truncateTitle = (title) => {
    return title.length > 25 ? title.slice(0, 25) + "..." : title;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API_URL}posts`);
        if (res.data) {
          const sortedPosts = sortPostsByDate(res.data);
          const topFour = sortedPosts.slice(0, 4);
          setLatestPosts(topFour);
        }
      } catch (error) {
        console.error("Fetching Error: ", error);
      }
    };
    fetchPosts();
  }, [API_URL]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoritePosts") || "[]");
    favorites.sort((a, b) => new Date(b.favoriteAdded) - new Date(a.favoriteAdded));
    setFavoritePosts(favorites.slice(0, 4));
  }, []);

  return (
    <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 flex flex-col py-5">
      <div className="footer sm:footer-horizontal bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-5">
        <aside>
          <img src={logo} alt="DnD-Logo" className="w-50 h-auto mb-2" />
          <p>Thanks for visiting our realm of adventure!</p>
        </aside>

        <nav>
          <h6 className="footer-title">Links</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/create" className="link link-hover">Create Post</Link>
        </nav>

        <nav>
          <h6 className="footer-title">Favorite Posts</h6>
          {favoritePosts.length > 0 ? (
            favoritePosts.map((post) => (
              <Link key={post.id} to={`/more-about/${post.id}`} className="link link-hover">
                {truncateTitle(post.title)}
              </Link>
            ))
          ) : (
            <p>No favorites added</p>
          )}
        </nav>

        <nav>
          <h6 className="footer-title">Latest Posts</h6>
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <Link key={post.id} to={`/more-about/${post.id}`} className="link link-hover">
                {truncateTitle(post.title)}
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </nav>
      </div>

      <div className="mt-8 border-t border-white/20 pt-4 text-center w-full">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by EMA - MUSA - ALI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
