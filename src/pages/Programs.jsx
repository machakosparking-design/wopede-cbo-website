import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Programs() {
  const { programs } = siteData;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Holistic Empowerment
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Our Training & Community Programs
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Each program combines rigorous practical skills training, trauma-informed support,
            business mentorship, and community peace dialogues.
          </p>
        </div>

        {/* Programs List */}
        <div className="space-y-16">
          {programs.map((prog, idx) => (
            <div
              key={prog.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Media */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 h-80 sm:h-96">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  {prog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {prog.description}
                </p>

                {/* Additional gallery previews */}
                {prog.gallery && prog.gallery.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Workshop & Beneficiary Snapshots</p>
                    <div className="flex space-x-3 overflow-x-auto pb-2">
                      {prog.gallery.slice(0, 4).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="Training snapshot"
                          className="w-20 h-16 rounded-lg object-cover shrink-0 border border-gray-200 dark:border-gray-700 shadow-xs"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
                  >
                    <span>Enroll or Support Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
