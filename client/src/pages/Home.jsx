import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const APIURL = import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${APIURL}posts`);
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this post?'
    );

    if (!isConfirmed) return;

    try {
      await axios.delete(`${APIURL}posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      <ul className="bg-white p-4 rounded shadow">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border-b p-2 last:border-none flex justify-between items-center"
          >
            <span>
              {post.author} - {post.title} - {post.date}
            </span>
            <div className="space-x-2">
              <Link
                to={`/post/${post.id}`}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
              >
                Read More
              </Link>
              <Link
                to={`/updatePost/${post.id}`}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
              >
                Update
              </Link>
              <button
                onClick={() => deletePost(post.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;