import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Home() {
  const { stats, programs, partners } = siteData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/40 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-100/80 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Empowering Women Across Kenya</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]">
                Building Peace & Self-Reliance Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">Vocational Skills</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                WOPEDE is a community-based organization dedicated to uplifting refugee women, youth,
                and survivors of violence through vocational trades, trauma counseling, and micro-enterprise development.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/programs"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Support Our Mission</span>
                </Link>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80 dark:border-gray-800">
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-blue-600 dark:text-blue-400">1,200+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Women Empowered</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">95%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Completion Rate</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-amber-600 dark:text-amber-400">350+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Businesses Started</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src="/assets/waving.jpg"
                  alt="WOPEDE Artisanal Weaving Training"
                  className="w-full h-[450px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="text-xs uppercase tracking-wider text-sky-300 font-semibold">Community In Action</p>
                    <p className="text-lg font-bold">Vocational Weaving & Skills Workshop</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                  25+
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Community Legacy</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Years of Community Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Our Core Pillars</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Practical Skills for Sustainable Futures
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              From tailoring to culinary arts and peacebuilding, our initiatives provide holistic support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((prog) => (
              <div
                key={prog.id}
                className="group rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300 hover:bg-blue-100 transition-colors"
            >
              <span>View All 7 Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase font-bold tracking-widest text-gray-400 mb-8">
            Trusted Partners & Collaborators
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity">
            {partners.map((p) => (
              <img
                key={p.id}
                src={p.logo}
                alt={p.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
