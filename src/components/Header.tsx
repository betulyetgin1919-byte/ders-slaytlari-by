import React, { useState } from 'react';
import { ViewMode } from '../types';
import {
  Presentation,
  Flame,
  Gamepad2,
  GraduationCap,
  FileText,
  Layers,
  Volume2,
  VolumeX,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/sound';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      sound.playClick();
    }
  };

  const navItems: { id: ViewMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'slides', label: 'Modern Slaytlar', icon: Presentation },
    { id: 'simulations', label: 'Laboratuvar & Simülatör', icon: Flame },
    { id: 'games', label: 'Eğitici Oyunlar', icon: Gamepad2 },
    { id: 'exam', label: 'Vize & Final Sınavı', icon: GraduationCap },
    { id: 'cheatsheet', label: 'Hoca Ne Sorar?', icon: FileText },
    { id: 'flashcards', label: 'Hafıza Kartları', icon: Layers }
  ];

  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Course Subtitle */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black text-white tracking-tight">ENERJETİK AKADEMİ</h1>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 border border-amber-500/40 px-1.5 py-0.2 rounded font-bold">
                  100 Hedefi
                </span>
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                Hitit Ünv. · Metalurji ve Malzeme Müh. · Doç. Dr. Kubilay KARACİF
              </div>
            </div>
          </div>

          {/* Sound Toggle Mobile */}
          <button
            onClick={toggleSound}
            className="md:hidden p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg text-xs"
            title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Segmented Controls */}
        <nav className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onViewChange(item.id);
                  sound.playClick();
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-md shadow-red-900/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Sound Toggle Desktop */}
          <button
            onClick={toggleSound}
            className="hidden md:flex items-center p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-all ml-1"
            title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>
        </nav>
      </div>
    </header>
  );
};
