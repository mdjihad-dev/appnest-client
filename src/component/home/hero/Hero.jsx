import React from "react";
import heroImage from '../../../assets/Image/hero.png'
import apple from '../../../assets/Image/apple.png'
import googlePlay from '../../../assets/Image/Vector.png'

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-base-100">
      <div className="flex flex-col items-center text-center max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          We Build <br />
          <span className="bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>

        <p className="text-lg md:text-xl text-[#627382] max-w-4xl mb-10 leading-relaxed">
          At <span className="font-bold text-gray-900">HERO.IO</span>, we craft
          innovative apps designed to make everyday life simpler, smarter, and
          more exciting. Our goal is to turn your ideas into digital experiences
          that truly make an impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="btn btn-primary btn-lg px-8 shadow-lg hover:scale-105 transition-transform">
            <img
              className="w-6 h-auto object-contain"
              src={googlePlay}
              alt=""
            />{" "}
            Google Play
          </button>
          <button className="btn btn-outline btn-lg px-8 hover:bg-black hover:text-white transition-all">
            <img
              className="w-6 h-auto object-contain"
              src={apple}
              alt="google"
            />{" "}
            App Store
          </button>
        </div>
        <div className="mx-auto my-8">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
