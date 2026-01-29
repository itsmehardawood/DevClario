import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0f1a] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-blue-500/20 mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Not Found
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              The service you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#services"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Services
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-slate-800/60 text-white font-semibold rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
