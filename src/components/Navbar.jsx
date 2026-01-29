"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    name: "Services",
    href: "#services",
    mega: [
      {
        title: "Product Engineering",
        description: "Platforms, automation, and intelligent operations",
        items: [
          { label: "Generative AI Products", href: "#services" },
          { label: "Automation & DevOps", href: "#services" },
          { label: "Platform Modernization", href: "#services" },
        ],
      },
      {
        title: "Customer Experience",
        description: "Connected journeys powered by AI",
        items: [
          { label: "Conversational Agents", href: "#services" },
          { label: "Personalization", href: "#services" },
          { label: "Data-driven Growth", href: "#services" },
        ],
      },
      {
        title: "Intelligent Operations",
        description: "Systems that learn while they run",
        items: [
          { label: "Workflow Automation", href: "#services" },
          { label: "Observability & Ops", href: "#services" },
          { label: "AI Governance", href: "#services" },
        ],
      },
    ],
  },
  {
    name: "AI & GenAI",
    href: "#ai-focus",
    mega: [
      {
        title: "Foundation Models",
        description: "Building on trusted models and fine-tuning",
        items: [
          { label: "Model Selection", href: "#ai-focus" },
          { label: "Custom Tuning", href: "#ai-focus" },
          { label: "Responsible AI", href: "#ai-focus" },
        ],
      },
      {
        title: "Enterprise AI",
        description: "Embedding intelligence inside core systems",
        items: [
          { label: "Knowledge Graphs", href: "#ai-focus" },
          { label: "AI Copilots", href: "#ai-focus" },
          { label: "Ops Intelligence", href: "#ai-focus" },
        ],
      },
      {
        title: "Enablement",
        description: "Governance, training, and adoption",
        items: [
          { label: "Capability Building", href: "#ai-focus" },
          { label: "Playbooks", href: "#ai-focus" },
          { label: "Program Strategy", href: "#ai-focus" },
        ],
      },
    ],
  },
  { name: "Industries", href: "#industries" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "Company", href: "#why-devclario" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-slate-800/20">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="text-xl font-bold text-white tracking-tight"> 
      <Image src="/images/DevClario_transparent.png" alt="DevClario Logo" width={150} height={200} />

            </Link>
                      </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.mega && setActiveDropdown(link.name)}
                onMouseLeave={() => link.mega && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                >
                  {link.name}
                  {link.mega && (
                    <span className="text-xs text-slate-500">
                      ⌄
                    </span>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Mega Dropdown */}
          {activeDropdown && navLinks.find(l => l.name === activeDropdown)?.mega && (
            <div 
              className="fixed left-0 right-0 top-16 z-40 h-[50vh] border-t border-slate-700/40 bg-gradient-to-b from-slate-900 to-slate-900 backdrop-blur-md shadow-2xl"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto h-full px-8 py-10">
                <div className="grid h-full grid-cols-1 gap-10 md:grid-cols-3">
                  {navLinks.find(l => l.name === activeDropdown)?.mega.map((group) => (
                    <div key={group.title} className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        {group.title}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {group.description}
                      </p>
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-base font-medium text-white hover:text-blue-400 transition-colors duration-200 block"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#cta"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800/20 bg-black/10 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
