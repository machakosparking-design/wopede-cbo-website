import React, { useState } from 'react';
import { Play, Eye, X } from 'lucide-react';

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    { type: 'image', src: '/assets/waving.jpg', title: 'Traditional Basket Weaving Workshop' },
    { type: 'image', src: '/assets/training1.jpg', title: 'Vocational Tailoring Cohort' },
    { type: 'image', src: '/assets/training2.jpg', title: 'Embroidery & Pattern Design' },
    { type: 'image', src: '/assets/hair1.jpg', title: 'Cosmetology & Hair Beauty Class' },
    { type: 'image', src: '/assets/sewing.jpg', title: 'Industrial Sewing Machine Practice' },
    { type: 'image', src: '/assets/c1.jpg', title: 'Culinary Arts & Catering Event' },
    { type: 'image', src: '/assets/artdis1.jpg', title: 'Community Handcraft Exhibition' },
    { type: 'image', src: '/assets/bus1.jpg', title: 'Micro-Enterprise & Market Sales Day' },
    { type: 'image', src: '/assets/f2.jpg', title: 'Psychosocial Support & Peer Dialogue' },
    { type: 'image', src: '/assets/stakeholders.jpg', title: 'Stakeholder & Community Consultations' },
    { type: 'image', src: '/assets/waving4.jpg', title: 'Artisanal Fiber Weaving Practice' },
    { type: 'video', src: '/assets/VID-20250715-WA0009.mp4', title: 'WOPEDE Workshop In Action' }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Moments of Growth
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Community & Training Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            A visual showcase of workshops, graduations, community dialogues, and handcrafted products in Nairobi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMedia(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100 dark:bg-gray-800 h-64"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full relative bg-slate-900 flex items-center justify-center">
                  <video src={item.src} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-semibold leading-snug">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-2">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full max-h-[75vh] object-contain rounded-xl"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full max-h-[75vh] rounded-xl"
                />
              )}
              <p className="p-4 text-center font-semibold text-gray-900 dark:text-white">
                {selectedMedia.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
