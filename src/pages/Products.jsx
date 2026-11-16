import React, { useState } from 'react';
import { ShoppingBag, Search, Filter } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Products() {
  const { products } = siteData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Bags', 'Weaving', 'Beadwork', 'Catering'];

  const filtered = products.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Artisan Handcrafts
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Ethical Products Made with Dignity
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            100% of proceeds directly support the refugee women artisans, providing living wages,
            healthcare, and education for their families.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-56 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {prod.category}
                  </span>
                  <h3 className="font-bold text-base text-gray-900 dark:text-white mt-1">
                    {prod.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                  <span className="font-extrabold text-blue-600 dark:text-blue-400 text-sm">
                    {prod.price}
                  </span>
                  <a
                    href="mailto:wopedecbo223@gmail.com?subject=Inquiry about product"
                    className="inline-flex items-center space-x-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 hover:bg-blue-100"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
