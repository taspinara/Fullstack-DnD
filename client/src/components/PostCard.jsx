import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PostCard = ({ post, deletedPostId }) => {
  const [deletePost, setDeletePost] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoritePosts') || "[]");
    const exists = favorites.find((fav) => fav.id === post.id);
    if (exists) setIsFavorited(true);
  }, [post.id])

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await axios.delete(`${API_URL}posts/${post.id}`);
      if (deletedPostId) {
        deletedPostId(post.id);
      }
    } catch (error) {
      setError("Failed to delete post");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/update/${post.id}`);
  };

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favoritePosts") || "[]");
    
    if (isFavorited) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== post.id);
      localStorage.setItem('favoritePosts', JSON.stringify(updatedFavorites));
      setIsFavorited(false);
    } else {
      const favoritePost = { ...post, favoriteAdded: new Date().toISOString() };
      favorites.push(favoritePost);
      localStorage.setItem("favoritePosts", JSON.stringify(favorites));
      setIsFavorited(true);
    }
  }

  return (
    <Link to={`/more-about/${post.id}`} className="no-underline">
      <div className="card card-compact bg-base-100 shadow-xl h-full flex flex-col">
        <figure className="h-48">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body flex flex-col">
          <h2 className="card-title">{post.title}</h2>
          <p className="text-gray-600 flex-grow">
            {post.content.substring(0, 150)}...
          </p>
          <div>
            <p className="text-sm text-gray-500">Author: {post.author}</p>
          </div>
        </div>
        <div className="btns flex items-center gap-2 p-4">
          <button
            onClick={handleUpdate}
            className="btn btn-outline btn-accent"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-outline btn-secondary"
          >
            Delete
          </button>
          <button
            onClick={handleFavorite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`btn btn-outline ml-auto ${
              isFavorited ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {isHovered
              ? isFavorited
                ? "Remove from Favorites"
                : "Add to Favorites"
              : isFavorited
              ? "❤️"
              : "🤍"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
