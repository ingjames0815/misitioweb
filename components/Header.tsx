
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className="text-2xl font-bold text-slate-800">PLANIFICA T</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Características</a>
          <a href="#gallery" className="text-slate-600 hover:text-blue-600 transition-colors">Galería</a>
          <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Precios</a>
        </nav>
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
            Iniciar Sesión
          </button>
        </div>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
            <a href="#features" className="block px-6 py-3 text-slate-600 hover:bg-slate-100" onClick={() => setIsMenuOpen(false)}>Características</a>
            <a href="#gallery" className="block px-6 py-3 text-slate-600 hover:bg-slate-100" onClick={() => setIsMenuOpen(false)}>Galería</a>
            <a href="#pricing" className="block px-6 py-3 text-slate-600 hover:bg-slate-100" onClick={() => setIsMenuOpen(false)}>Precios</a>
            <div className="px-6 py-4">
              <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Iniciar Sesión
              </button>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
