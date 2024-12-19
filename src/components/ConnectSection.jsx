import { useState } from "react";

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Data for services
  const services = [
    {
      id: 1,
      title: "Design",
      description: "Quick Solar Solutions has in-house designer and experts to provide you CAD...",
      details: "Quick Solar Solutions has in house designer and experts to provide you CAD drawing for roof mounting, wall mounting, metal sheet mounting and custom design speciality solar structures. Our Qualified engineering team designs an optimum racking to provide you most durable solar support structures and flexibility to work with different dimensions of Pv module.",
      image: "./service-1.jpg",
      icon: "fas fa-wind",
    },
    {
      id: 2,
      title: "Installation",
      description: "The company has licenses to work on solar mounting projects...",
      details: "The company has licenses to work on solar mounting projects. Our young and energetic installation crew are trained under expert guidance of Strut Support and work with on-site engineers to mount the solar racking systems",
      image: "./service-2.jpg",
      icon: "fas fa-tools",
    },
    {
      id: 3,
      title: "Technical Support",
      description: "Our highly engineered and robust solar structural systems are backed by...",
      details: "Our highly engineered and robust solar structural systems are backed by excellent end-to-end technical support. All of our support team members have technical background and extensive experience in the solar industry. We are committed to exceed the expectations of our customers.",
      image: "./service-3.jpg",
      icon: "fas fa-headset",
    },
    {
      id: 4,
      title: "Supply",
      description: "Module mounting structure along with accessories supply...",
      details: "Module mounting structure along with accessories supply. With trusted partners, leased units and patented toolings, Its stands out as industry leading solar mounting manufacturers with dedicated and proven supply chain capability of delivering for ultra mega power projects.",
      image: "./service-5.jpg",
      icon: "fas fa-solar-panel",
    },
  ];

  return (
    <section id="AboutUs" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-[#B0D129] font-bold uppercase tracking-wide">Specialize in the Energy Service</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Sustainable Energy Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
            >
              {/* Icon */}
              <div className="p-6 text-center">
                <i className={`${service.icon} text-4xl text-[#B0D129] mb-4`}></i>
                <p className="text-sm font-semibold text-gray-500 uppercase">
                  {`0${service.id} Service`}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />

              {/* Arrow Button */}
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => setSelectedService(service)}
                  className="bg-[#B0D129] text-white p-2 rounded-full hover:bg-[#91B421] transition"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times"></i>
            </button>
            <h3 className="text-2xl font-bold text-[#B0D129] mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedService.details}</p>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
