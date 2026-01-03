import React, { useRef } from "react";

const AboutUs = () => {
  const missionRef = useRef(null);

  //   scroll function
  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white dark:bg-gray-950">

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Empowering Your <br />
                <span className="text-primary">Global Trade</span> Journey
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At <span className="font-bold">IEHub</span>, we are more than
                just a trade facilitator; we are your strategic partner in the
                global marketplace. Based on a foundation of trust and
                expertise, we simplify the complexities of international trade
                for businesses of all sizes.
              </p>
              <div className="flex gap-4">
                <button className="btn btn-primary text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg">
                  Learn More
                </button>
                <button
                  onClick={scrollToMission}
                  className="border-2 btn border-gray-200 dark:border-gray-800 px-6 py-3 rounded-lg font-semibold dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                >
                  Our Mission
                </button>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661932036915-4fd90bec6e8a?q=80&w=1470&auto=format&fit=crop"
                  alt="About IEHub"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute  -bottom-6 md:-left-6 left-4 -rotate-1 hover:rotate-0 bg-white dark:bg-gray-800 md:p-6 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <p className="md:text-3xl text-xl font-bold text-primary">
                  10+
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={missionRef}
        className="py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-4"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 italic">
              "To create a seamless trading ecosystem where barriers to entry
              are minimized, and global growth is accessible to every
              entrepreneur."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We believe in transparent dealings and ethical trade practices.",
              },
              {
                title: "Innovation",
                desc: "Constantly adapting to new market trends and tax laws.",
              },
              {
                title: "Commitment",
                desc: "Your success is our primary metric. We grow when you grow.",
              },
              {
                title: "Accessibility",
                desc: "Breaking financial barriers with interest-free support.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition"
              >
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 bg-blue-600 rounded-4xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why IEHub is Your Best Choice?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-2xl font-bold">Training</h5>
                <p className="opacity-80 mt-2 text-sm">
                  Nurturing new importers with step-by-step guidance.
                </p>
              </div>
              <div>
                <h5 className="text-2xl font-bold">Mentorship</h5>
                <p className="opacity-80 mt-2 text-sm">
                  Direct connection with industry veterans.
                </p>
              </div>
              <div>
                <h5 className="text-2xl font-bold">Interest-Free Loan</h5>
                <p className="opacity-80 mt-2 text-sm">
                  Capital support to start your first shipment.
                </p>
              </div>
            </div>
          </div>
          {/* Decorative background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
