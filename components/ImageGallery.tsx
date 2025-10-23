
import React from 'react';
import { GALLERY_IMAGES } from '../constants.tsx';

const ImageGallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explora la Interfaz</h2>
          <p className="text-slate-600">Un diseño limpio, moderno e intuitivo pensado para una experiencia de usuario excepcional.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              className={`overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 group ${
                index === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
