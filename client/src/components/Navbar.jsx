import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar sticky top-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white z-10">
      <div className="flex-1">
        <Link to='/' className="normal-case text-2xl flex items-center">
          <img src={logo} alt="D&D Blog Logo" className="w-30 h-auto mr-2" />
        </Link>
      </div>
      <div className="flex-none flex items-center gap-4">
        <Link to='/about-us' className="btn btn-secondary ml-4">
          About Us
        </Link>
        <Link to='/create' className="btn btn-accent">
          Create Post
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
