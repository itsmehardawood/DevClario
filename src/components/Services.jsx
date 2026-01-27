const services = [
  {
    title: "Software Development",
    description: "Web apps, dashboards, portals, platforms",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    highlighted: false,
  },
  {
    title: "AI & GenAI Automation",
    description: "Chatbots, workflows, GPT systems",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    highlighted: true,
  },
  {
    title: "Business Systems",
    description: "CRM, integrations, internal tools",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    highlighted: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center bg-[#0f172a] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Capabilities
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            End-to-end solutions that combine modern software development with intelligent automation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                service.highlighted
                  ? "bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30"
                  : "bg-slate-800/50 border border-slate-700/50 hover:border-slate-600"
              }`}
            >
              {/* Highlight Badge */}
              {service.highlighted && (
                <div className="absolute -top-3 left-8 px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  Core Focus
                </div>
              )}

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                  service.highlighted
                    ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-blue-400"
                    : "bg-slate-700/50 text-slate-300"
                }`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-semibold mb-3 ${
                  service.highlighted ? "text-white" : "text-slate-100"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
