import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext();

const usePost = () => useContext(PostContext); // optional

const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        cover: "",
        title: "",
        author: "",
        date: "",
        content: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
            const res = await axios.get(`${APIURL}/posts`);
            setPosts(res.data);
            } catch (error) {
            console.error(error);
            }
        };
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        const isConfirmed = window.confirm(
            'Are you sure you want to delete this post?'
        );
    
        if (!isConfirmed) return;
    
        try {
            await axios.delete(`${APIURL}posts/${id}`);
            setUsers(users.filter((post) => post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    
    const handleDetail = (id) => {
        navigate(`/post/${id}`);
    };

    return (
        <EventContext.Provider
            value={{
                events: posts,
                event: post,
                setEvent: setPost,
                handleSubmit,
                handleDelete,
                handleDetail,
            }}
            >
            {children}
        </EventContext.Provider>
    );
};

export { PostContextProvider , usePost};