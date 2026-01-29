export default function CTA() {
  return (
    <section
      id="cta"
      className=" flex items-center bg-[#0a0f1a] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font text-white mb-6">
            Let's Build Something Intelligent
          </h2>
          
          {/* Subtext */}
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Ready to transform your business with AI-powered systems? 
            Let's discuss how we can help you achieve your goals.
          </p>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white  bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
          >
            Book a Call
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          {/* Trust Indicator */}
          <p className="mt-8 text-sm text-slate-500">
            No commitment required. Let's start with a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
