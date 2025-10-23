
import React from 'react';
import { FEATURES_DATA } from '../constants.tsx';

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Todo lo que necesitas, en un solo lugar</h2>
          <p className="text-slate-600">PLANIFICA T está diseñado para simplificar la vida académica y fortalecer la comunidad escolar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES_DATA.map((feature, index) => {
            const Icon = feature.IconComponent;
            return (
              <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
                <div className="mb-4 bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
