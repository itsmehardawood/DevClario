const steps = [
  {
    number: "01",
    title: "Business Understanding",
    description: "We start by deeply understanding your business, challenges, and goals.",
  },
  {
    number: "02",
    title: "System Design",
    description: "Architecting scalable solutions that align with your operational needs.",
  },
  {
    number: "03",
    title: "AI Integration",
    description: "Identifying and implementing AI opportunities for maximum impact.",
  },
  {
    number: "04",
    title: "Development",
    description: "Building robust, maintainable systems with modern technologies.",
  },
  {
    number: "05",
    title: "Deployment & Scale",
    description: "Launching and supporting your systems as your business grows.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="min-h-screen flex items-center bg-[#0f172a] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Business Problem to Intelligent System
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A systematic approach to building software that truly serves your business
          </p>
        </div>

        {/* Steps - Desktop Horizontal Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#0f172a] border-2 border-slate-700 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps - Mobile/Tablet Vertical Layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-slate-700 via-slate-600 to-slate-700" />
            
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6">
                  {/* Step Number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#0f172a] border-2 border-slate-700 flex items-center justify-center">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-3">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
