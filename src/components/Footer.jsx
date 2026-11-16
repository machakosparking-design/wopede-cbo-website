import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const { organization } = siteData;

  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/assets/logo.png" alt="WOPEDE Logo" className="h-10 w-auto" />
              <span className="font-extrabold text-xl text-white tracking-tight">WOPEDE</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering refugee women, youth, and survivors of violence through vocational training,
              peacebuilding, and sustainable livelihoods in Kenya.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Our Story</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Vocational Programs</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Artisanal Products</Link></li>
              <li><Link to="/impact" className="hover:text-blue-400 transition-colors">Our Impact</Link></li>
              <li><Link to="/partners" className="hover:text-blue-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Community Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{organization.location}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href={`mailto:${organization.email}`} className="hover:text-white transition-colors">
                  {organization.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Support */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Support Our Cause</h4>
            <p className="text-sm text-gray-400">
              Every contribution helps a woman gain independence, heal trauma, and support her family.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
            >
              <Heart className="w-4 h-4" />
              <span>Get Involved</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-2">
          <p className="text-blue-400 text-xs font-semibold">
            "{organization.tagline}"
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} WOPEDE CBO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
