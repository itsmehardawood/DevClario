const aiUseCases = [
  "AI chatbots for leads & support",
  "Workflow automation",
  "AI summaries from forms",
  "WhatsApp & email automation",
  "Custom GPT-based systems",
];

export default function AIFocus() {
  return (
    <section
      id="ai-focus"
      className="min-h-screen flex items-center bg-[#0a0f1a] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 break-words px-2">
            AI That Works Inside Your Business
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Explanation */}
          <div className="space-y-6" data-aos="fade-right">
            <p className="text-lg text-slate-300 leading-relaxed">
              We don't just build software — we integrate intelligence into it.
              Our AI solutions are designed to work within your existing
              operations, automating repetitive tasks, enhancing decision-making,
              and creating new capabilities that weren't possible before.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              From customer-facing chatbots to internal workflow automation, we
              implement practical AI that delivers measurable results without
              disrupting your business.
            </p>
            
            {/* Subtle Visual Element */}
            <div className="pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Powered by Modern AI</p>
                  <p className="text-sm text-slate-500">GPT-4, Claude, Custom Models</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Use Cases */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8" data-aos="fade-left">
            <h3 className="text-lg font-semibold text-white mb-6">
              What We Build
            </h3>
            <ul className="space-y-4">
              {aiUseCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-300">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
