import React, { useState, useEffect } from 'react';
import { CourseModule, SlideContent } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sparkles,
  Award,
  Layers,
  FlaskConical,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';
import { sound } from '../utils/sound';

interface SlideViewerProps {
  modules: CourseModule[];
  currentModuleId: number;
  onSelectModule: (id: number) => void;
  onNavigateToSim: (simId: string) => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  modules,
  currentModuleId,
  onSelectModule,
  onNavigateToSim,
}) => {
  const currentModule = modules.find((m) => m.id === currentModuleId) || modules[0];
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [isQuizChecked, setIsQuizChecked] = useState(false);

  // Reset slide index when module changes
  useEffect(() => {
    setSlideIndex(0);
    setSelectedQuizAnswer(null);
    setIsQuizChecked(false);
  }, [currentModuleId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideIndex, currentModule]);

  const slide = currentModule.slides[slideIndex];

  const nextSlide = () => {
    if (slideIndex < currentModule.slides.length - 1) {
      setSlideIndex((prev) => prev + 1);
      setSelectedQuizAnswer(null);
      setIsQuizChecked(false);
      sound.playClick();
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
      setSelectedQuizAnswer(null);
      setIsQuizChecked(false);
      sound.playClick();
    }
  };

  const handleQuizAnswer = (index: number) => {
    if (isQuizChecked) return;
    setSelectedQuizAnswer(index);
    setIsQuizChecked(true);
    if (slide.quizCheck && index === slide.quizCheck.correctIndex) {
      sound.playCorrect();
    } else {
      sound.playIncorrect();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-950 p-6 overflow-y-auto' : ''}`}>
      {/* Module Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {modules.map((m) => {
            const isSel = m.id === currentModuleId;
            return (
              <button
                key={m.id}
                onClick={() => {
                  onSelectModule(m.id);
                  sound.playClick();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isSel
                    ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{m.code}: </span>
                <span className="font-normal">{m.title.split(' ')[0]} {m.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            {slideIndex + 1} / {currentModule.slides.length} Slayt
          </span>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-md transition-all text-xs flex items-center gap-1"
            title="Tam Ekran Modu"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl relative overflow-hidden min-h-[520px] flex flex-col justify-between">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Slide Top Metadata */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-mono text-amber-400 font-bold">{currentModule.code}</span>
              <span>·</span>
              <span className="text-slate-300">{currentModule.instructor}</span>
              <span>·</span>
              <span className="text-slate-400">{currentModule.institution}</span>
            </div>
            <div className="flex items-center gap-2">
              {slide.badge && (
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded">
                  {slide.badge}
                </span>
              )}
              <span className="text-xs text-slate-400 font-mono">
                Slayt #{slideIndex + 1}
              </span>
            </div>
          </div>

          {/* Slide Title */}
          <div className="mt-4">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="text-sm font-medium text-amber-400/90 mt-1">
                {slide.subtitle}
              </p>
            )}
          </div>

          {/* Golden Exam Tip Banner */}
          {slide.examTip && (
            <div className="mt-4 p-3 bg-gradient-to-r from-amber-950/60 to-red-950/40 border border-amber-500/40 rounded-xl flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                  100 ALDIRAN SINAV TÜYOSU (HOCA NE SORAR?):
                </span>
                <p className="text-xs text-amber-100/90 mt-0.5 font-medium leading-relaxed">
                  {slide.examTip}
                </p>
              </div>
            </div>
          )}

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
            {/* Left Points List */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Temel Ders Maddeleri
              </div>
              <ul className="space-y-2.5">
                {slide.contentPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/40 border border-slate-800/60 rounded-lg p-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-xs font-mono shrink-0 font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Interactive / Visual Panel */}
            <div className="lg:col-span-5 space-y-4">
              {/* Key Takeaway Box */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Anahtar Çıkarım (Key Takeaway)</span>
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {slide.keyTakeaway}
                </p>
              </div>

              {/* Dynamic Diagram Visualizer */}
              {slide.visualType === 'formula' && slide.visualData && (
                <div className="bg-slate-950 border border-cyan-500/30 rounded-xl p-4">
                  <div className="text-[11px] text-cyan-400 font-semibold mb-1 uppercase font-mono">
                    Kritik Formül & Bağıntı
                  </div>
                  <div className="text-sm font-bold font-mono text-white p-2.5 bg-slate-900 rounded border border-slate-800">
                    {slide.visualData.formula}
                  </div>
                  {slide.visualData.highlight && (
                    <div className="text-xs text-amber-300 font-mono mt-2">
                      {slide.visualData.highlight}
                    </div>
                  )}
                </div>
              )}

              {slide.visualType === 'comparison' && slide.visualData && (
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                  <div className="text-xs font-bold text-white mb-2">{slide.visualData.title}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <div className="font-bold text-blue-400 mb-1">{slide.visualData.leftTitle}</div>
                      <div className="text-slate-300 text-[11px] leading-relaxed whitespace-pre-line">{slide.visualData.leftContent}</div>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <div className="font-bold text-amber-400 mb-1">{slide.visualData.rightTitle}</div>
                      <div className="text-slate-300 text-[11px] leading-relaxed whitespace-pre-line">{slide.visualData.rightContent}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Interactive Slide Quiz Check */}
              {slide.quizCheck && (
                <div className="bg-slate-950 border border-indigo-500/40 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>Hızlı Slayt Kontrolü</span>
                  </div>
                  <div className="text-xs text-white font-medium mb-3">
                    {slide.quizCheck.question}
                  </div>
                  <div className="space-y-1.5">
                    {slide.quizCheck.options.map((opt, i) => {
                      const isSel = selectedQuizAnswer === i;
                      const isCorrect = i === slide.quizCheck!.correctIndex;
                      let btnStyle = 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300';
                      if (isQuizChecked) {
                        if (isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-950/60 text-emerald-300 ring-1 ring-emerald-500';
                        } else if (isSel) {
                          btnStyle = 'border-rose-500 bg-rose-950/60 text-rose-300 ring-1 ring-rose-500';
                        }
                      }
                      return (
                        <button
                          key={i}
                          onClick={() => handleQuizAnswer(i)}
                          disabled={isQuizChecked}
                          className={`w-full p-2 rounded text-left text-xs transition-all border ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {isQuizChecked && (
                    <div className="mt-2.5 p-2 bg-slate-900/90 rounded border border-slate-800 text-[11px] text-slate-300 leading-snug">
                      <strong className="text-indigo-300">Açıklama: </strong>
                      {slide.quizCheck.explanation}
                    </div>
                  )}
                </div>
              )}

              {/* Jump to Lab Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigateToSim('lab')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl text-xs font-semibold text-slate-200 transition-all hover:text-white"
                >
                  <FlaskConical className="w-4 h-4 text-amber-400" />
                  <span>Bu Konunun İnteraktif Simülatörünü Aç</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Bottom Navigation Stepper */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={slideIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Önceki Slayt</span>
          </button>

          {/* Stepper Dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-[240px] sm:max-w-md px-2">
            {currentModule.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setSlideIndex(i);
                  setSelectedQuizAnswer(null);
                  setIsQuizChecked(false);
                  sound.playClick();
                }}
                className={`h-2 rounded-full transition-all ${
                  slideIndex === i
                    ? 'w-6 bg-amber-400'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Slayt ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={slideIndex === currentModule.slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 disabled:opacity-30 text-white font-medium rounded-lg text-xs transition-all shadow-md"
          >
            <span>Sonraki Slayt</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
