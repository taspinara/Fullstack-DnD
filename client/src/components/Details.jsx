import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Details() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${API_URL}posts/${id}`);
        if (res.data) {
          setPost(res.data);
        } else {
          setError("Post not found");
        }
        console.log("Fetched Post:", res.data);
      } catch (err) {
        console.error("Error fetching post", err);
        setError("Failed to fetch post");
      }
    };
    fetchPost();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div className="detailsContainer w-full min-h-[100vh] flex flex-col justify-start items-start px-[2rem] py-[2rem] gap-5">
      <h2 className="text-[1.5rem]">{`Details of ${post.title}`}</h2>
      <section className="detailsSection w-full h-[100%] flex flex-col justify-start items-start gap-10">
        <div className="details w-full h-[100%] flex flex-col justify-start items-start">
          <div className="detailsCard flex justify-start items-center flex-wrap gap-10">
            <div className="left w-[40rem]">
              <img
                className="w-full"
                src={post.cover}
                alt={post.title}
              />
            </div>
            <div className="right w-[60rem] flex flex-col justify-start items-start">
              <h3 className="text-[2rem] font-bold tracking-[1px]">{post.title}</h3>
              <p className="text-white text-[1.3rem]">
                <strong className="text-white">Author:</strong> {post.author}
              </p>
              <p className="text-white text-[1.3rem]">
                <strong className="text-white">Date:</strong> {post.date}
              </p>
              <p className="text-white text-[1.3rem]">
                <strong className="text-white">Content:</strong> {post.content}
              </p>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 transition-all duration-[.3s] text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </section>
    </div>
  );
}

export default Details;
