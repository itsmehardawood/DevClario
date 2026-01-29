export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay for fade effect */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
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
        </div>
      </div>
    </section>
  );
}
