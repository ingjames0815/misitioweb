
import React from 'react';
import { AppleIcon } from './icons/AppleIcon';
import { GooglePlayIcon } from './icons/GooglePlayIcon';

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
          La gestión académica, <span className="text-blue-600">finalmente unificada.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          PLANIFICA T centraliza la comunicación y la organización escolar para directivos, docentes, padres y estudiantes. Todo en una sola plataforma intuitiva.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#"
            className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-105"
          >
            <AppleIcon />
            <span>App Store</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 bg-slate-200 text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-all transform hover:scale-105"
          >
            <GooglePlayIcon />
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
