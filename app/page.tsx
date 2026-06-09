"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Award, ChevronRight, Sun, Moon, MapPin } from 'lucide-react';

// Dataset extraído quirúrgicamente de tu perfil de LinkedIn
const METRICAS_JOHNNY = [
  {
    id: 'governance',
    titulo: 'Gobernanza & Calidad del Dato',
    valor: '+6 Años Exp.',
    subtitulo: 'Especialista Informatica Suite',
    descripcion: 'Consultor especialista en Gestión de Datos Maestros (MDM), Gobierno y Calidad del Dato. Diseño e implementación de estrategias de gobernanza en entornos híbridos para el sector bancario (Santander, Falabella) y entidades públicas (SEPE España).',
    icon: Database,
    colorClass: 'text-cyan-500 dark:text-cyan-400',
    strokeColor: '#06b6d4',
    rotate: 'rotate-[0deg]',
    detalles: ['Informatica MDM Hub', 'IDQ (Data Quality)', 'Axon & EDC', 'PowerCenter']
  },
  {
    id: 'engineering',
    titulo: 'Data Engineering & Pipelines',
    valor: '+45 Pipelines',
    subtitulo: 'Orquestación e Integración',
    descripcion: 'Desarrollo robusto de procesos ETL/ELT eficientes. Experiencia consolidada en migraciones cloud, integración de sistemas complejos (SAP, Cobol, Oracle) y automatización de flujos de trabajo de datos avanzados.',
    icon: Cpu,
    colorClass: 'text-blue-500 dark:text-blue-400',
    strokeColor: '#3b82f6',
    rotate: 'rotate-[120deg]',
    detalles: ['Apache Airflow', 'Snowflake Certified', 'Cloud Data Integration (CDI)', 'Oracle PL/SQL']
  },
  {
    id: 'ai_agents',
    titulo: 'GenAI & Inteligencia Artificial',
    valor: 'AI Certified',
    subtitulo: 'MongoDB AI Agents Badge',
    descripcion: 'Especialización certificada en la creación de agentes de IA multi-herramienta autónomos. Capacidad validada para diseñar lógicas de decisión complejas e implementar sistemas de memoria persistente avanzados utilizando MongoDB y LangChain.',
    icon: Award,
    colorClass: 'text-indigo-500 dark:text-indigo-400',
    strokeColor: '#6366f1',
    rotate: 'rotate-[240deg]',
    detalles: ['Building AI Agents', 'MongoDB Atlas', 'LangChain Framework', 'Lógica Autónoma']
  }
];

export default function Home() {
  // Estado para controlar el nodo de información seleccionado
  const [nodoActivo, setNodoActivo] = useState(METRICAS_JOHNNY[0]);
  
  // Estado binario de tema: true = Dark Mode (Defecto), false = Light Mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden select-none transition-colors duration-500 ${
      isDarkMode ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Luces de fondo dinámicas (Solo visibles en modo oscuro) */}
      {isDarkMode && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      )}

      {/* HEADER / TOP BAR CONTROLS */}
      <div className="absolute top-6 left-4 right-4 flex items-center justify-between max-w-5xl mx-auto w-full px-4">
        {/* Localización y Rol Actual */}
        <div className={`flex items-center gap-2 border rounded-full px-4 py-1.5 backdrop-blur-md text-xs font-mono transition-colors duration-300 ${
          isDarkMode ? 'border-slate-800/80 bg-slate-900/60 text-slate-400' : 'border-slate-200 bg-white/80 text-slate-600 shadow-sm'
        }`}>
          <MapPin className="w-3.5 h-3.5 text-cyan-500" />
          <span>Barcelona, España</span>
          <span className="text-slate-600 dark:text-slate-700">|</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">Senior Data Engineer @ Minsait</span>
        </div>

        {/* Interruptor de Tema (Light / Dark) */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full border transition-all duration-300 ${
            isDarkMode 
              ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800' 
              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
          }`}
          aria-label="Cambiar tema de color"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative flex flex-col items-center max-w-4xl w-full text-center mt-16 z-10">
        
        {/* Métrica de Impacto Principal */}
        <div className="h-20 md:h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={nodoActivo.id}
              initial={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              transition={{ duration: 0.22 }}
              className={`text-5xl md:text-7xl font-black font-mono tracking-tighter ${nodoActivo.colorClass}`}
            >
              {nodoActivo.valor}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Anillo de Progreso Segmentado */}
        <div className="relative my-6 w-64 h-64 md:w-72 md:h-72 flex items-center justify-center group">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {METRICAS_JOHNNY.map((m) => {
              const esActivo = nodoActivo.id === m.id;
              return (
                <circle
                  key={m.id}
                  cx="50"
                  cy="50"
                  r="43"
                  stroke={m.strokeColor}
                  strokeWidth={esActivo ? "6.5" : "4.5"}
                  fill="transparent"
                  strokeDasharray="264"
                  strokeDashoffset="88" 
                  className={`transform origin-center ${m.rotate} transition-all duration-300 cursor-pointer ${
                    esActivo 
                      ? 'opacity-100 drop-shadow-[0_0_10px_var(--tw-shadow-color)]' 
                      : 'opacity-25 dark:opacity-30 hover:opacity-60'
                  }`}
                  style={{ '--tw-shadow-color': m.strokeColor } as React.CSSProperties}
                  onMouseEnter={() => setMetricaActiva(m)}
                />
              );
            })}
          </svg>

          {/* Silueta de Agente Autónomo / Robot Central con Adaptación de Color */}
          <div className={`w-[78%] h-[78%] rounded-full flex items-center justify-center border-[6px] z-10 shadow-2xl transition-all duration-500 group-hover:scale-105 ${
            isDarkMode ? 'border-slate-950 bg-slate-900 text-slate-500' : 'border-slate-50 bg-slate-200 text-slate-400'
          }`}>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`w-1/2 h-1/2 transition-colors duration-500 ${nodoActivo.colorClass}`}
            >
              {/* Antena / Conector superior */}
              <path d="M12 2v2" />
              <circle cx="12" cy="2" r="0.5" fill="currentColor" />
              {/* Cabeza del Robot */}
              <rect x="5" y="4" width="14" height="11" rx="3" />
              {/* Ojos de matriz de datos */}
              <circle cx="9" cy="9.5" r="1" fill="currentColor" />
              <circle cx="15" cy="9.5" r="1" fill="currentColor" />
              {/* Boca de frecuencia / Conectores */}
              <path d="M9 13h6" />
              {/* Cuello / Chasis superior */}
              <path d="M9 15v2h6v-2" />
              <path d="M7 17h10aa2 2 0 0 1 2 2v3H5v-3a2 2 0 0 1 2-2z" />
            </svg>
          </div>
        </div>

        {/* Nombre y Especialización Semántica */}
        <h1 className={`text-3xl md:text-5xl font-black tracking-tight uppercase font-sans transition-colors duration-300 ${
          isDarkMode ? 'text-slate-100' : 'text-slate-900'
        }`}>
<<<<<<< Updated upstream
          JOHNNY HL
=======
          Daniel Huaman
>>>>>>> Stashed changes
        </h1>
        <p className={`text-xs md:text-sm font-mono tracking-widest uppercase mt-1 transition-colors ${
          isDarkMode ? 'text-slate-500' : 'text-slate-400'
        }`}>
          Estructura de Datos: <span className={nodoActivo.colorClass}>{nodoActivo.titulo}</span>
        </p>
        
        {/* Separador */}
        <div className={`w-16 h-[2px] my-5 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />

        {/* Bloque Informativo */}
        <div className="min-h-[150px] md:min-h-[110px] max-w-2xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={nodoActivo.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center"
            >
              <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {nodoActivo.descripcion}
              </p>
              
              {/* Pills de Competencia */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {nodoActivo.detalles.map((detalle, idx) => (
                  <span 
                    key={idx} 
                    className={`text-[11px] font-mono px-2.5 py-0.5 border rounded-md transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-900/80 border-slate-800 text-slate-300' 
                        : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                    }`}
                  >
                    {detalle}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Grid de Tarjetas de Control Inferior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-10 px-4">
          {METRICAS_JOHNNY.map((m) => {
            const IconComponent = m.icon;
            const esActivo = nodoActivo.id === m.id;
            return (
              <div
                key={m.id}
                onMouseEnter={() => setNodoActivo(m)}
                className={`text-left p-5 rounded-xl border backdrop-blur-sm cursor-pointer transition-all duration-300 group ${
                  esActivo 
                    ? isDarkMode
                      ? 'border-slate-700 bg-slate-900/70 shadow-[0_4px_25px_rgba(0,0,0,0.5)] translate-y-[-4px]'
                      : 'border-slate-300 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)] translate-y-[-4px]'
                    : isDarkMode
                      ? 'border-slate-900 opacity-40 hover:opacity-80 hover:border-slate-800'
                      : 'border-slate-200 bg-slate-100/50 opacity-60 hover:opacity-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <IconComponent className={`w-5 h-5 transition-transform duration-300 ${esActivo ? `${m.colorClass} scale-110` : 'text-slate-400 dark:text-slate-500'}`} />
                  <ChevronRight className={`w-4 h-4 transition-transform ${esActivo ? `${m.colorClass} translate-x-1` : 'text-slate-400 dark:text-slate-700 opacity-0 group-hover:opacity-100'}`} />
                </div>
                <div className={`text-2xl font-bold font-mono transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{m.valor}</div>
                <div className={`text-xs font-semibold mt-1 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{m.subtitulo}</div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}