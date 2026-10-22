import React, { useState } from 'react';
import { ViewMode } from './types';
import { courseModules } from './data/modulesData';
import { Header } from './components/Header';
import { SlideViewer } from './components/SlideViewer';
import { SimulationLab } from './components/simulations/SimulationLab';
import { GamesArena } from './components/games/GamesArena';
import { ExamCenter } from './components/exam/ExamCenter';
import { CheatSheetView } from './components/cheatSheet/CheatSheetView';
import { FlashcardDeck } from './components/cheatSheet/FlashcardDeck';
import {
  Sparkles,
  Flame,
  Award,
  BookOpen,
  Gamepad2,
  GraduationCap,
  Layers,
  ArrowRight
} from 'lucide-react';
import { sound } from './utils/sound';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('slides');
  const [currentModuleId, setCurrentModuleId] = useState<number>(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Header
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
      />

      {/* Hero Quick Jump Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div className="text-xs text-slate-300">
              <strong className="text-white">Ders: </strong> Enerjetik Malzemeler ve Malzeme Bilimi
              <span className="text-slate-500 mx-2">·</span>
              <span className="text-amber-400 font-medium">Hitit Üniversitesi Metalurji ve Malzeme Mühendisliği</span>
            </div>
          </div>

          {/* Quick Stat Highlights */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="text-slate-400">
              <span className="text-white font-bold">4</span> Modül
            </div>
            <span className="text-slate-700">|</span>
            <div className="text-slate-400">
              <span className="text-amber-400 font-bold">40+</span> Canlı Slayt
            </div>
            <span className="text-slate-700">|</span>
            <div className="text-slate-400">
              <span className="text-cyan-400 font-bold">4</span> Simülatör
            </div>
            <span className="text-slate-700">|</span>
            <div className="text-slate-400">
              <span className="text-purple-400 font-bold">3</span> Oyun
            </div>
            <span className="text-slate-700">|</span>
            <div className="text-slate-400">
              <span className="text-emerald-400 font-bold">100</span> Garanti Sınav
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {currentView === 'slides' && (
          <SlideViewer
            modules={courseModules}
            currentModuleId={currentModuleId}
            onSelectModule={(id) => setCurrentModuleId(id)}
            onNavigateToSim={() => {
              setCurrentView('simulations');
              sound.playClick();
            }}
          />
        )}

        {currentView === 'simulations' && <SimulationLab />}

        {currentView === 'games' && <GamesArena />}

        {currentView === 'exam' && <ExamCenter />}

        {currentView === 'cheatsheet' && <CheatSheetView />}

        {currentView === 'flashcards' && <FlashcardDeck />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500" />
            <span className="font-bold text-slate-300">Enerjetik Akademi</span>
            <span>—</span>
            <span>Doç. Dr. Kubilay KARACİF ders notlarından geliştirilmiştir.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Hitit Üniversitesi Mühendislik Fakültesi</span>
            <span>·</span>
            <span>Metalurji ve Malzeme Mühendisliği Bölümü</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
