
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center bg-blue-600 text-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-blue-200">
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comienza a usar PLANIFICA T Hoy</h2>
            <p className="text-blue-100 max-w-md">Únete a la revolución de la gestión académica. Regístrate para una prueba gratuita y descubre todo el potencial.</p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white text-slate-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-1">Prueba Gratuita</h3>
                <p className="text-slate-500 text-center mb-6">Todas las funciones incluidas.</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-2"><CheckCircleIcon className="text-blue-500" /> <span>Acceso multi-rol</span></li>
                    <li className="flex items-center space-x-2"><CheckCircleIcon className="text-blue-500" /> <span>Notificaciones ilimitadas</span></li>
                    <li className="flex items-center space-x-2"><CheckCircleIcon className="text-blue-500" /> <span>Soporte 24/7</span></li>
                </ul>
                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                    USO GRATIS
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
