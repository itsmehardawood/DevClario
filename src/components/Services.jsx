const services = [
  {
    title: "Software Development",
    description: "Web apps, dashboards, portals, platforms, ERP systems, Ecommerce, ",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    highlighted: false,
  },
  {
    title: "AI & GenAI Automation",
    description: "Chatbots, workflows, GPT systems, AI-Calling Agents",
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
       

        {/* Services Grid - two column: left intro, right stacked services */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Intro / Big Heading */}
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Our Capabilities</p>
            <h2 className="text-5xl md:text-6xl text-white leading-tight mb-4">Software & AI
              <span className="text-blue-400"> Designed to Scale</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">
              End-to-end solutions that combine modern software development with intelligent
              automation — transforming operations, customer experiences, and growth.
            </p>
          </div>

          {/* Right Column - Stacked Service Entries */}
          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl text-slate-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 mb-4">{service.description}</p>
                    <a href="#services" className="text-sm font-medium text-blue-400 hover:text-blue-300">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
