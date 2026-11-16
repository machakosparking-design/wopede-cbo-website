import React from 'react';
import { ExternalLink, Handshake } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Partners() {
  const { partners } = siteData;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Collective Action
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Our Strategic Partners
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            We partner with leading international humanitarian agencies, non-profits, and grassroots
            organizations to ensure holistic protection and opportunity.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="h-16 flex items-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-14 max-w-[180px] object-contain"
                  />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 dark:bg-blue-900/40 dark:text-blue-300 mb-2">
                    {partner.type}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">{partner.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  <span className="font-bold text-blue-600 dark:text-blue-400">Impact: </span>
                  {partner.impact}
                </p>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Visit Organization</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
