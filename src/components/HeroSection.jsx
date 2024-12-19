import { useState, useEffect } from "react";

const HeroSection = () => {
  // Carousel State
  const images = [
    { src: "/service-4.jpg", caption: "Empowering Sustainable Solutions" },
    { src: "/service-1.jpg", caption: "Innovating for a Greener Future" },
    { src: "/service-5.jpg", caption: "Transforming Energy Efficiency" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Home" className="flex flex-col md:flex-row justify-between items-start bg-[#fdedec] px-8 py-8 md:py-12 mt-0">
      {/* Left Content */}
      <div className="text-[#B0D129] max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          QSS Energy: Powering <br />
          <span className="text-[#91B421]">Sustainability & Efficiency</span>
        </h1>
        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          Join us in revolutionizing energy solutions for a greener tomorrow.
          Our advanced technologies drive innovation, efficiency, and progress
          toward a sustainable future.
        </p>
        {/* Input and Button */}
        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 px-4 py-3 rounded-lg border border-[#B0D129] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B0D129]"
          />
          <button className="bg-[#B0D129] hover:bg-[#91B421] text-white px-6 py-3 rounded-lg shadow-md font-bold transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Image with Carousel and Dialogue */}
      <div className="mt-6 md:mt-0 flex flex-col justify-center items-center w-full md:w-auto">
        {/* Image Carousel */}
        <div className="relative w-full max-w-xs md:max-w-md">
          <img
            src={images[currentImage].src}
            alt="QSS Energy Solutions"
            className="rounded-lg shadow-md"
          />
          {/* Dialogue Caption */}
          <div className="absolute bottom-0 bg-[#B0D129] text-white p-3 rounded-b-lg text-center">
            <p className="text-sm md:text-md font-semibold">
              {images[currentImage].caption}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex space-x-4 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-3 w-3 rounded-full ${
                currentImage === index
                  ? "bg-[#B0D129]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
