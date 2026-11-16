import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-8xl font-black text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Oops! Page not found</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
