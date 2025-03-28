import { Link } from "react-router-dom";
import heroimage from "../assets/heroimage.jpg"

const Hero = () => {
    return (
        <div className="hero min-h-[30vh] text-white">
            <div className="hero-overlay">
            <img src={heroimage} className="w-full h-full object-cover" alt="background"></img>

            </div>
            <div className="hero-content text-center">
                <div className="max-w-[100%] bg-[#1A1A1A]/60 px-5 py-2 rounded-lg">
                    <h1 className="mb-5 text-5xl font-bold">Dungeons & Dragons</h1>
                    <p className="mb-5">
                        Step into a realm of epic quests, mystical lore, and boundless creativity!
                    </p>
                    <Link to="/create" className="btn btn-primary bg-purple-600 hover:bg-purple-700">
                        Create a New Post
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero