import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Impact from './pages/Impact';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
