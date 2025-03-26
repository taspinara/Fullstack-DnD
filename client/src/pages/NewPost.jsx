import React, { useState} from "react";
import axios from "axios";

function NewPost() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [cover, setCover] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${API_URL}posts`, {
                title,
                author,
                content,
                cover
            });

            console.log('Post added:', res.data);
            setTitle('');
            setAuthor('');
            setContent('');
            setCover('');
        } catch (error) {
            console.error('Error adding post:', error);
        }
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
            value={title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
          <textarea
            className=""
            type="text"
            placeholder="Who goes there?"
            value={author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            required
          ></textarea>
          <input
            className=""
            type="text"
            value={content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            required
          />
          <input
            className=""
            type="url"
            value={cover}
            onChange={(e) => setPost({ ...post, cover: e.target.value })}
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