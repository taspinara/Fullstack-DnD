import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <Link to={`/post/${post.id}`} className="no-underline">
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
            </div>
        </Link>
    );
};

export default PostCard;
