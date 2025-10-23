
import React from 'react';
import { UserRole } from './types';
import { CalendarIcon, BellIcon, ChartBarIcon, MessageIcon } from './components/icons';

export const USER_ROLES = [UserRole.Student, UserRole.Teacher, UserRole.Parent, UserRole.Admin];

export const FEATURES_DATA = [
  {
    IconComponent: CalendarIcon,
    title: 'Gestión Centralizada',
    description: 'Calendarios, horarios y tareas en un solo lugar para una organización impecable.'
  },
  {
    IconComponent: BellIcon,
    title: 'Notificaciones Inteligentes',
    description: 'Alertas en tiempo real sobre entregas, exámenes y anuncios importantes.'
  },
  {
    IconComponent: ChartBarIcon,
    title: 'Seguimiento de Progreso',
    description: 'Visualiza calificaciones y asistencia para un monitoreo académico efectivo.'
  },
  {
    IconComponent: MessageIcon,
    title: 'Comunicación Fluida',
    description: 'Canales de comunicación directos entre todos los miembros de la comunidad educativa.'
  }
];

export const GALLERY_IMAGES = [
    { id: 1, src: "https://picsum.photos/seed/screen1/600/400", alt: "Pantalla de Calificaciones" },
    { id: 2, src: "https://picsum.photos/seed/screen2/600/400", alt: "Pantalla de Mensajería" },
    { id: 3, src: "https://picsum.photos/seed/screen3/600/400", alt: "Perfil de Usuario" },
    { id: 4, src: "https://picsum.photos/seed/screen4/600/400", alt: "Calendario de Eventos" },
    { id: 5, src: "https://picsum.photos/seed/screen5/600/400", alt: "Directorio de Contactos" },
    { id: 6, src: "https://picsum.photos/seed/screen6/600/400", alt: "Reporte de Asistencia" },
];
