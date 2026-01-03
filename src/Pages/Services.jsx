import React from "react";

const Services = () => {
  const ieHubServices = [
    {
      title: "Consulting",
      imgLink: "https://i.ibb.co.com/mC2MXDKp/1624460125127.png",
      description:
        "Navigate the complexities of global trade with confidence. Our experts provide strategic guidance on market analysis, regulatory compliance, and logistics to ensure your import-export business scales efficiently.",
      link: "/services/consulting",
      color: "#F8EDED", // Light Red/Pinkish background like the image
    },
    {
      title: "Training",
      imgLink:
        "https://i.ibb.co.com/XrZp1pFw/organic-flat-people-business-training-illustration-23-2148914456.avif",
      description:
        "Master the fundamentals of international commerce. We offer comprehensive training programs for new importers and exporters, covering everything from documentation to global sourcing and shipping protocols.",
      link: "/services/training",
      color: "#4A708B", // Blue background like the image
    },
    {
      title: "Mentorship",
      imgLink:
        "https://i.ibb.co.com/zTNQjJfs/1706012038-Shutterstock-2104258202.jpg",
      description:
        "Connect with industry veterans who have walked the path. Our mentorship program supports both beginners and experienced traders with personalized insights to overcome operational challenges and grow their network.",
      link: "/services/mentorship",
      color: "#F4F4F4", // Light Grey background like the image
    },
    {
      title: "Interest-Free Loans",
      imgLink: "https://i.ibb.co.com/C39bNqsK/download.jpg",
      description:
        "Empowering new importers with accessible capital. Secure interest-free loans against property mortgage to fuel your first shipment and bridge the financial gap in your growing trade venture.",
      link: "/services/loans",
      color: "#F4F4F4", // Light Grey background
    },
  ];
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 dark:text-white mb-16">
          What services provides {""}
          <span className="italic text-shadow-sm/20">
            IE<span className="text-blue-600">Hub</span>
          </span>
        </h2>

        {/* Timeline Items */}
        <div className="relative space-y-16 md:space-y-24">
          {ieHubServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section - Optimized for different sizes */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white dark:border-gray-800 w-full max-w-[400px] aspect-video"
                  style={{ backgroundColor: service.color }}
                >
                  <img
                    src={service.imgLink}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-2">
                  Service 0{index + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
