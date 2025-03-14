import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800">Hi, I'm Samir</h2>
      <p className="text-lg text-gray-600 mt-2">Backend Developer | Node.js | MongoDB | Express</p>
      <a href="#projects" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View My Work
      </a>
    </section>
  );
};

export default Hero;
