'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-teal-100">
            JagaJiwa
          </Link>
          
          {/* Hamburger menu button - visible on mobile only */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          {/* Desktop menu - hidden on mobile */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-teal-100 font-medium">
              Beranda
            </Link>
            <Link href="/skrining" className="hover:text-teal-100 font-medium">
              Skrining Mandiri
            </Link>
            <Link href="/layanan" className="hover:text-teal-100 font-medium">
              Pusat Layanan
            </Link>
            <Link href="/edukasi" className="hover:text-teal-100 font-medium">
              Edukasi
            </Link>
            <Link href="/kontak" className="hover:text-teal-100 font-medium">
              Kontak & Bantuan
            </Link>
          </div>
        </div>

        {/* Mobile menu - shown when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-teal-400">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="hover:text-teal-100 font-medium py-2 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/skrining" 
                className="hover:text-teal-100 font-medium py-2 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skrining Mandiri
              </Link>
              <Link 
                href="/layanan" 
                className="hover:text-teal-100 font-medium py-2 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pusat Layanan
              </Link>
              <Link 
                href="/edukasi" 
                className="hover:text-teal-100 font-medium py-2 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Edukasi
              </Link>
              <Link 
                href="/kontak" 
                className="hover:text-teal-100 font-medium py-2 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak & Bantuan
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
