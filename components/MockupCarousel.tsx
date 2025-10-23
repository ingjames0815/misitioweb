
import React, { useState, useEffect, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { UserRole } from '../types';
import { USER_ROLES } from '../constants.tsx';
import { StudentIcon, TeacherIcon, ParentIcon, AdminIcon, BellIcon, CalendarIcon, CheckCircleIcon } from './icons';

// Helper component defined outside to prevent re-renders
const RoleButton = ({ role, activeRole, onClick, icon }) => (
  <button
    onClick={() => onClick(role)}
    className={`flex-1 p-4 rounded-lg flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 transition-all duration-300 transform hover:scale-105 ${
      activeRole === role ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100'
    }`}
  >
    {icon}
    <span className="font-semibold">{role}</span>
  </button>
);

const MockupCarousel = () => {
  const [activeRole, setActiveRole] = useState(UserRole.Student);
  const activeIndex = USER_ROLES.indexOf(activeRole);

  const nextRole = useCallback(() => {
    const nextIndex = (activeIndex + 1) % USER_ROLES.length;
    setActiveRole(USER_ROLES[nextIndex]);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setTimeout(nextRole, 5000);
    return () => clearTimeout(timer);
  }, [nextRole]);

  const studentTasks = [
    { name: 'Ensayo de Literatura', due: 'Hoy', done: true },
    { name: 'Práctica de Cálculo', due: 'Mañana', done: false },
    { name: 'Proyecto de Química', due: 'Viernes', done: false },
  ];

  const teacherAssignments = [
    { name: 'Ensayo Grado 10A', received: 25, total: 30 },
    { name: 'Proyecto Grado 11B', received: 18, total: 28 },
    { name: 'Tarea Grado 10C', received: 32, total: 32 },
  ];

  const parentData = {
    name: 'Sofia Rodriguez',
    grade: '10A',
    average: 8.8,
    attendance: 95,
  };
    
  const adminChartData = [
      { name: 'Grado 10A', avg: 8.2 },
      { name: 'Grado 10B', avg: 7.9 },
      { name: 'Grado 11A', avg: 9.1 },
      { name: 'Grado 11B', avg: 8.5 },
  ];
  const COLORS = ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8'];

  const roleMocks = {
    [UserRole.Student]: (
      <div className="p-4 bg-slate-50 h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg text-slate-800">Hola, David!</h2>
          <BellIcon className="text-slate-500" />
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg"><CalendarIcon className="text-blue-600"/></div>
            <div>
              <p className="font-semibold text-slate-800">Cálculo Diferencial</p>
              <p className="text-sm text-slate-500">10:00 AM - Aula 301</p>
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-slate-700 mb-2">Tareas Pendientes</h3>
        <div className="space-y-2">
          {studentTasks.map(task => (
            <div key={task.name} className={`p-3 rounded-lg flex items-center justify-between ${task.done ? 'bg-green-50 text-slate-500' : 'bg-amber-50'}`}>
              <div>
                <p className={`font-medium ${task.done ? 'line-through' : 'text-slate-800'}`}>{task.name}</p>
                <p className="text-xs text-slate-500">Vence: {task.due}</p>
              </div>
              {task.done ? <CheckCircleIcon className="text-green-500" /> : <div className="w-5 h-5 border-2 border-slate-300 rounded-full"></div>}
            </div>
          ))}
        </div>
      </div>
    ),
    [UserRole.Teacher]: (
      <div className="p-4 bg-slate-50 h-full">
        <h2 className="font-bold text-lg text-slate-800 mb-4">Gestión de Tareas</h2>
        <div className="space-y-3">
          {teacherAssignments.map(a => (
            <div key={a.name} className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-semibold text-slate-800">{a.name}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-slate-500">Recibidos: {a.received}/{a.total}</p>
                <div className="w-full bg-slate-200 rounded-full h-2.5 ml-4">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(a.received / a.total) * 100}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
         <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">Publicar Nueva Tarea</button>
      </div>
    ),
    [UserRole.Parent]: (
        <div className="p-4 bg-slate-50 h-full">
            <h2 className="font-bold text-lg text-slate-800 mb-4">Progreso Académico</h2>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img src="https://picsum.photos/seed/student/100" alt="Student" className="w-20 h-20 rounded-full mx-auto mb-3" />
                <h3 className="font-bold text-xl text-slate-900">{parentData.name}</h3>
                <p className="text-slate-500 mb-4">Grado: {parentData.grade}</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold text-blue-600">{parentData.average}</p>
                        <p className="text-sm text-slate-500">Promedio</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-blue-600">{parentData.attendance}%</p>
                        <p className="text-sm text-slate-500">Asistencia</p>
                    </div>
                </div>
                 <button className="mt-6 w-full bg-slate-800 text-white font-semibold py-2 rounded-lg hover:bg-slate-900 transition">Contactar Docente</button>
            </div>
        </div>
    ),
    [UserRole.Admin]: (
      <div className="p-4 bg-slate-50 h-full">
        <h2 className="font-bold text-lg text-slate-800 mb-4">Rendimiento General</h2>
         <div className="bg-white p-4 rounded-lg shadow-md h-64">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adminChartData} margin={{ top: 5, right: 0, left: -25, bottom: 5 }}>
                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{fill: 'rgba(241, 245, 249, 0.5)'}} contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}/>
                    <Bar dataKey="avg" radius={[4, 4, 0, 0]}>
                        {adminChartData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
         </div>
         <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">Enviar Comunicado</button>
      </div>
    ),
  };

  const ICONS = {
    [UserRole.Student]: <StudentIcon />,
    [UserRole.Teacher]: <TeacherIcon />,
    [UserRole.Parent]: <ParentIcon />,
    [UserRole.Admin]: <AdminIcon />,
  };

  return (
    <section id="mockups" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Una App, Múltiples Roles</h2>
          <p className="text-slate-600">Cada usuario tiene una experiencia personalizada y adaptada a sus necesidades específicas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-3">
             {USER_ROLES.map(role => <RoleButton key={role} role={role} activeRole={activeRole} onClick={setActiveRole} icon={ICONS[role]} />)}
          </div>
          <div className="lg:col-span-2 h-[600px] relative">
            {USER_ROLES.map((role, index) => (
              <div
                key={role}
                className="absolute inset-0 transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                  opacity: index === activeIndex ? 1 : 0,
                }}
              >
                <div className="w-full max-w-sm mx-auto h-full bg-slate-800 rounded-[40px] p-4 shadow-2xl ring-4 ring-slate-300">
                  <div className="w-full h-full bg-white rounded-[26px] overflow-hidden">
                    <div className="h-full">
                      {roleMocks[role]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupCarousel;
