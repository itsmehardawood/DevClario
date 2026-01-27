export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[#0a0f1a] pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building Intelligent Digital Systems with AI
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              We design, develop, and automate software platforms using AI and
              Generative AI to help businesses operate smarter and scale faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
              >
                Let's Talk
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-300 rounded-lg border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                View Capabilities
              </a>
            </div>
          </div>

          {/* Right Column - Abstract AI Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Abstract AI System Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Node */}
                <div className="relative">
                  {/* Outer Ring */}
                  <div className="absolute -inset-32 border border-slate-700/50 rounded-full" />
                  <div className="absolute -inset-24 border border-slate-700/30 rounded-full" />
                  <div className="absolute -inset-16 border border-slate-600/40 rounded-full" />
                  
                  {/* Central Core */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-80" />
                  </div>

                  {/* Connection Nodes */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/60" />
                  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500/60" />
                  <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400/60" />
                  <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400/60" />
                  
                  {/* Diagonal Nodes */}
                  <div className="absolute -top-14 -left-14 w-3 h-3 rounded-full bg-blue-500/40" />
                  <div className="absolute -top-14 -right-14 w-3 h-3 rounded-full bg-purple-500/40" />
                  <div className="absolute -bottom-14 -left-14 w-3 h-3 rounded-full bg-purple-500/40" />
                  <div className="absolute -bottom-14 -right-14 w-3 h-3 rounded-full bg-blue-500/40" />

                  {/* Outer Nodes */}
                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-6 h-6 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-6 h-6 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-6 h-6 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-6 h-6 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>

                  {/* Connection Lines (subtle) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-slate-600/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
