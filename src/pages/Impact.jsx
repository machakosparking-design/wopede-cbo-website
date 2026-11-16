import React from 'react';
import { Award, Users, TrendingUp, HeartHandshake } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Impact() {
  const { stats } = siteData;

  const stories = [
    {
      title: "From Displacement to Enterprise",
      author: "Marie, Tailoring Graduate",
      story: "Before joining WOPEDE, I struggled to feed my children as an urban refugee. The 6-month tailoring and business mentorship gave me the skills and sewing machine to launch my own tailoring shop in Nairobi.",
      image: "/assets/training1.jpg"
    },
    {
      title: "Healing Trauma Through Community",
      author: "Amina, Weaving Artisan",
      story: "The counseling circles and basketry workshops became my sanctuary. Today, my baskets are sold across Kenya, and I mentor newer arrivals in our community.",
      image: "/assets/waving2.jpg"
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Measurable Change
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Our Impact Across Communities
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Empowering women creates a ripple effect: children stay in school, families achieve food security,
            and sustainable peace takes root.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center space-y-3"
            >
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
                {s.number}
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{s.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 dark:text-white">
            Voices of Resilience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{item.author}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed italic">
                      "{item.story}"
                    </p>
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
