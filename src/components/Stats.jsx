'use client'
export default function Stats() {
  const stats = [
    {
      number: "48+",
      label: "Years of continual excellence",
    },
    {
      number: "7700+",
      label: "Change makers driving revolution",
    },
    {
      number: "16+",
      label: "Countries with our presence and clientele",
    },
    {
      number: "300+",
      label: "Active clients across the globe",
    },
  ];

  const technologies = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
    "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
    "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
    "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  ];

  return (
    <section
      id="stats"
      className="min-h-screen flex flex-col justify-center bg-[#0a0f1a] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Main Content - Text Left, Stats Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Translating technology into a positive impact
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our approach allows us to deliver exceptional experiences that
              drive growth and success for all stakeholders. Let's rise to new
              heights with the power of digital transformation.
            </p>
            <div className="gap-0">
              <a
                href="#cta"
                className="inline-flex items-center px-0 py-0 text-base text-orange-400 hover:text-orange-300 rounded-lg transition-all duration-200"
              >
                LEARN MORE -&gt;
              </a>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mb-12">
          <p className="text-3xl text-slate-400 max-w-3xl mx-auto">
            We rethink business growth for you through our collective experience
            with strategic partner ecosystem.
          </p>
        </div>

        {/* Technology Brand Bar - Auto Scrolling */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0f1a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0f1a] to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex gap-12 animate-scroll">
            {/* First Set */}
            {technologies.map((tech, index) => (
              <div
                key={`tech-1-${index}`}
                className="flex-shrink-0 w-14 h-14 flex items-center justify-center opacity-100 transition-all duration-300"
              >
                <img
                  src={tech}
                  alt={`Technology ${index + 1}`}
                  width="60"
                  height="60"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {technologies.map((tech, index) => (
              <div
                key={`tech-2-${index}`}
                className="flex-shrink-0 w-14 h-14 flex items-center justify-center opacity-100 transition-all duration-300"
              >
                <img
                  src={tech}
                  alt={`Technology ${index + 1}`}
                  width="48"
                  height="48"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
