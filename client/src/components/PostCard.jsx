import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const PostCard = ({ post, deletedPostId }) => {
  const [deletePost, setDeletePost] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

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
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
