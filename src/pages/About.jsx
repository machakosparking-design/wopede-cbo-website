import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function About() {
  const { leadership } = siteData;

  const pillars = [
    { icon: Target, title: "Our Mission", desc: "To empower refugee women, youth, and survivors of violence through vocational training, peacebuilding, psychosocial support, and micro-enterprise development." },
    { icon: Eye, title: "Our Vision", desc: "A peaceful, inclusive society where every displaced woman has the skills, dignity, and economic power to rebuild her life and lead her community." },
    { icon: ShieldCheck, title: "Core Values", desc: "Dignity, empathy, peace, cultural preservation, transparency, and sustainable self-reliance in all community programs." }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            About WOPEDE CBO
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Transforming Trauma into Self-Reliance & Peace
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Women for Peace and Development (WOPEDE) is a community-based organization founded in Kenya
            by dedicated humanitarian advocates. We provide a safe haven and launchpad for marginalized refugee women.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Leadership Team */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Leadership Team</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Passionate leaders with decades of combined frontline experience in community development and refugee protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col">
                <div className="h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{member.role}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
