import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
  const { id } = useParams();
  const APIURL = import.meta.env.VITE_API_URL;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${APIURL}posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-4">
        <div>
            {post.cover}
        </div>
      <h2 className="text-2xl font-bold mb-4"> {post.title}</h2>
      <div className="bg-white p-4 rounded shadow">
        <p>
          <strong>Author:</strong> {post.author}
        </p>
        <p>
          <strong>Content:</strong> {post.content}
        </p>
        <p>
          <strong>Age:</strong> {post.date}
        </p>
      </div>
    </div>
  );
}

export default Post;