import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-[50vh] text-white">
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Dungeons & Dragons</h1>
          <p className="mb-5">
            Step into a realm of epic quests, mystical lore, and boundless
            creativity!
          </p>
          <Link to="/create" className="btn btn-primary">
            Create a New Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
