import "@fortawesome/fontawesome-free/css/all.min.css";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: "fas fa-briefcase", // Icon for Successful Projects
      title: "Successful Project",
    },
    {
      id: 2,
      icon: "fas fa-map", // Icon for States
      title: "States",
    },
    {
      id: 3,
      icon: "fas fa-user", // Icon for Client Satisfaction
      title: "Client Satisfaction",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-start bg-[#F0F6D6] rounded-lg shadow-sm"
            >
              {/* Left Icon Section */}
              <div className="bg-[#D4E472] p-6 flex justify-center items-center rounded-l-lg">
                <i className={`${stat.icon} text-4xl text-gray-700`}></i>
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col justify-center items-center w-full p-4">
                <span className="text-gray-600 text-2xl font-bold mb-2">+</span>
                <p className="text-gray-700 text-lg font-medium">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
