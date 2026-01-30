import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/servicesData";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | DevClario`,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0f1a]">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-16 sm:py-24 pt-24 sm:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <Link 
                href="/#services" 
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 mb-6 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Services
              </Link>
              
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 mb-6">
                {service.icon}
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 break-words">
                {service.heroTitle}
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                {service.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24 bg-[#0a0f1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Capabilities</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 break-words px-2">
                What We Deliver
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 sm:py-24 bg-[#1e293b]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 break-words px-2">
                Technologies We Use
              </h2>
              <p className="text-lg text-slate-400">
                Industry-leading tools and frameworks
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  className="px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 font-medium hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 bg-[#0a0f1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Benefits</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 break-words">
                  Why Choose Our {service.title}
                </h2>
                <p className="text-lg text-slate-400 mb-8">
                  Transform your business with solutions designed for real-world impact
                </p>
              </div>

              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 break-words">
              {service.cta.title}
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              {service.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 bg-blue-500/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-blue-500/30 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
