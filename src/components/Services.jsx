import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ServiceSection = () => {
  const [ setActive] = useState(null);

  // Service Icons Data
  const services = [
    { id: 1, icon: "fas fa-solar-panel", label: "Solar Panels" },
    { id: 2, icon: "fas fa-wrench", label: "Maintenance" },
    { id: 3, icon: "fas fa-cogs", label: "Technical Support" },
  ];

  const youtubeLink = "https://www.youtube.com/watch?v=Fvae8nxzVz4";

  return (
    <section id="Service" className="relative flex justify-center items-center py-20 bg-[#fdedec]">
      {/* Left Section: Service Icons */}
     {/* Left Section: Service Icons */}
<div className="flex flex-col space-y-6 items-center justify-center mr-6 md:mr-10">
  {services.map((service) => (
    <div
      key={service.id}
      className="flex flex-col items-center justify-center text-center cursor-pointer"
      onClick={() => setActive(service.id)}
    >
      {/* Icon Container */}
      <div className="bg-[#B0D129] flex items-center justify-center p-4 rounded-full text-white shadow-lg hover:bg-[#91B421] transition">
        <i className={`${service.icon} text-3xl`}></i>
      </div>
      {/* Text */}
      <p className="mt-2 text-gray-700 font-semibold">{service.label}</p>
    </div>
  ))}
</div>


      {/* Centered Image */}
      <div className="relative w-full md:w-2/3 flex justify-center items-center">
        <div className="relative w-full max-w-lg">
          {/* Image */}
          <img
            src="/video.png" // Place video.png in the public directory
            alt="Worker Installing Solar Panels"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />

          {/* Play Button */}
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#B0D129] p-5 rounded-full text-white cursor-pointer hover:bg-[#91B421] transition"
          >
            <i className="fas fa-play text-2xl"></i>
          </a>

          {/* Meet Our Expert Members */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-3 rounded-lg text-center">
            <p className="text-[#2c3e50] font-semibold text-sm md:text-lg">
              Meet Our Expert Members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
