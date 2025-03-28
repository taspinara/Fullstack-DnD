import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="hero min-h-[65vh] text-white">
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content w-[50%] text-center">
        <div className="w-[80%]">
          <div className="dungeonsDragons mb-10">
            <h1 className="mb-5 text-5xl font-bold">Dungeons & Dragons</h1>
            <p className="text-[1.2rem] mb-5">
              Step into a realm of epic quests, mystical lore, and boundless
              creativity!
            </p>
          </div>
          <h2 className="text-[1.4rem] mb-5 text-5xl font-bold">
            Welcome, Adventurers!
          </h2>
          <p className="text-[1.2rem] mb-5">
            We are <span className="font-bold text-[1.3rem]">Ema</span>,{" "}
            <span className="font-bold text-[1.3rem]">Ali</span>, and{" "}
            <span className="font-bold text-[1.3rem]">Musa</span> – three
            passionate Dungeons & Dragons players who love crafting epic
            stories, strategizing through battles, and immersing ourselves in
            the boundless world of fantasy role-playing.
          </p>
          <h2 className="text-[1.4rem] mb-5 text-5xl font-bold">Our Journey</h2>
          <p className="text-[1.2rem] mb=5">
            What started as a simple game night quickly evolved into an ongoing
            saga filled with legendary heroes, cunning villains, and
            unforgettable moments. Whether it’s rolling natural 20s in moments
            of glory or suffering through critical failures that lead to
            hilarious disasters, we cherish every session and the friendships
            we've built along the way.
          </p>
          <h2 className="text-[1.4rem] mb-5 text-5xl font-bold">
            Join Our Quest
          </h2>
          <p className="text-[1.2rem] mb-5">
            Follow our journey, explore the worlds we build, and share in our
            adventures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
