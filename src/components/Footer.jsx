import Image from "next/image";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "About", href: "#why-devclario" },
      { name: "How We Work", href: "#how-we-work" },
      { name: "Careers", href: "#" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { name: "Software Development", href: "#services" },
      { name: "Business Systems", href: "#services" },
      { name: "Consulting", href: "#" },
    ],
  },
  aiGenai: {
    title: "AI & GenAI",
    links: [
      { name: "AI Chatbots", href: "#ai-focus" },
      { name: "Workflow Automation", href: "#ai-focus" },
      { name: "Custom GPT Systems", href: "#ai-focus" },
    ],
  },
  industries: {
    title: "Industries",
    links: [
      { name: "Real Estate", href: "#industries" },
      { name: "Service Providers", href: "#industries" },
      { name: "Enterprises", href: "#industries" },
      { name: "NGOs", href: "#industries" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#070a10] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="text-xl font-bold text-white tracking-tight">
      <Image src="/images/DevClario_transparent.png" alt="DevClario Logo" width={200} height={100} />
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
              Building intelligent digital systems with AI. We design, develop,
              and automate software platforms for modern businesses.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} DevClario. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-slate-500">
            <a
              href="mailto:hello@devclario.com"
              className="flex items-center gap-2 hover:text-slate-300 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@devclario.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
