import Link from "next/link";
import { servicesData } from "@/data/servicesData";

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
            {servicesData.map((service, index) => (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl text-slate-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 mb-4">{service.description}</p>
                    <Link href={`/services/${service.slug}`} className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                      Learn more →
                    </Link>
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
