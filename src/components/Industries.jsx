const industries = [
  {
    title: "Real Estate",
    description: "Streamline property management with automated lead capture, client portals for seamless communication, listing integrations, tenant management systems, and data-driven insights that help you close deals faster and scale operations efficiently.",
    image: "/images/service_img1.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Service Providers",
    description: "Transform your service business with intelligent scheduling systems, comprehensive customer relationship management, automated invoicing and payments, workflow optimization tools, and integrated communication platforms that enhance customer satisfaction and operational efficiency.",
    image: "/images/service_img2.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Enterprises",
    description: "Empower your organization with custom internal tools, enterprise-grade data systems, cross-department automation workflows, advanced analytics dashboards, secure integrations with existing infrastructure, and scalable solutions that drive productivity across all levels of your business.",
    image: "/images/service_img1.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "NGOs",
    description: "Maximize your mission impact with comprehensive donor management systems, real-time impact tracking and reporting, volunteer coordination platforms, grant management tools, and operational efficiency solutions that help you focus more resources on what matters most—making a difference.",
    image: "/images/service_img2.png",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="min-h-screen flex items-center bg-[#0a0f1a] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font text-white mb-4">
            Designed for Complex Business Environments
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our solutions adapt to the unique challenges of different sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="relative h-[420px] p-8 bg-slate-900/80 border border-slate-700/30 transition-all duration-500 flex flex-col overflow-hidden group"
            >
              {/* Background Image - Appears on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              
              {/* Dark Overlay for Better Text Visibility */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content Wrapper */}
              <div className="relative flex flex-col h-full z-10">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center mb-6 text-slate-300 group-hover:text-blue-400 transition-colors duration-300">
                  {industry.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-200 leading-relaxed transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>

                {/* Bottom Accent - minimal */}
                <div className="mt-auto pt-6">
                  <div className="h-px bg-slate-700 group-hover:bg-blue-500/50 w-full transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
