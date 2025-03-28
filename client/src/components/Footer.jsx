import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 flex flex-col py-5">
      <div className="footer sm:footer-horizontal bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-5">
        <aside>
          <img src={logo} alt="ACME Industries Logo" className="w-50 h-auto mb-2" />
          <p>Thanks for visiting our realm of adventure!</p>
        </aside>

        <nav>
          <h6 className="footer-title">Links</h6>
          <Link to='/' >
            <a className="link link-hover">Home</a>
          </Link>
          <Link to='/create' >
            <a className="link link-hover">Create Post</a>
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Favorite Posts</h6>
          <a className="link link-hover">Deck of Many Dragons</a>
          <a className="link link-hover">Cauldron of Brewskis</a>
          <a className="link link-hover">Why I Always Bring a Spare Set of Dice</a>
        </nav>

        <nav>
          <h6 className="footer-title">Latest posts</h6>
          <a className="link link-hover">Deck of Many Dragons</a>
          <a className="link link-hover">Cauldron of Brewskis</a>
          <a className="link link-hover">Why I Always Bring a Spare Set of Dice</a>
        </nav>
      </div>

      <div className="mt-8 border-t border-white/20 pt-4 text-center w-full">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} -
          All right reserved by EMA - MUSA - ALI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
