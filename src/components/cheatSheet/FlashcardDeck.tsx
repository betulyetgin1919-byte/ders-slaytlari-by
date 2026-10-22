import React, { useState } from 'react';
import { flashcardsBank } from '../../data/flashcardsData';
import { Flashcard } from '../../types';
import { Layers, RotateCcw, Check, Sparkles, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/sound';

export const FlashcardDeck: React.FC = () => {
  const [filterModule, setFilterModule] = useState<number>(0); // 0 = all
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const filteredCards: Flashcard[] = flashcardsBank.filter((card) => {
    if (filterModule === 0) return true;
    return card.moduleId === filterModule;
  });

  const card = filteredCards[currentIdx] || filteredCards[0];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    sound.playClick();
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIdx < filteredCards.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setCurrentIdx(0);
    }
    sound.playClick();
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    } else {
      setCurrentIdx(filteredCards.length - 1);
    }
    sound.playClick();
  };

  const toggleMastered = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = new Set(masteredIds);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
      sound.playCorrect();
    }
    setMasteredIds(updated);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Hafıza & Tekrar Modu · Spaced Repetition</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">3D Akıllı Hafıza Kartları (Flashcards)</h2>
        </div>

        {/* Module Filter buttons */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          {[
            { id: 0, label: 'Tümü' },
            { id: 1, label: 'Ders 1' },
            { id: 2, label: 'Ders 2' },
            { id: 3, label: 'Ders 3' },
            { id: 4, label: 'Ders 4' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setFilterModule(item.id);
                setCurrentIdx(0);
                setIsFlipped(false);
                sound.playClick();
              }}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                filterModule === item.id
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="flex justify-between items-center text-xs text-slate-400 my-4">
        <span>Kart {currentIdx + 1} / {filteredCards.length}</span>
        <span className="text-emerald-400 font-mono font-bold">
          Öğrenildi: {masteredIds.size} / {flashcardsBank.length}
        </span>
      </div>

      {/* 3D Flip Card Container */}
      <div className="max-w-xl mx-auto my-6 perspective">
        <div
          onClick={handleFlip}
          className={`cursor-pointer min-h-[300px] rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 transform select-none shadow-2xl relative ${
            isFlipped
              ? 'bg-gradient-to-br from-slate-900 to-indigo-950 border-indigo-500/60'
              : 'bg-gradient-to-br from-slate-900 to-slate-950 border-amber-500/40 hover:border-amber-400'
          }`}
        >
          {/* Card Top Label */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">
              DERS NOTU {card.moduleId} · {card.category}
            </span>
            <button
              onClick={(e) => toggleMastered(card.id, e)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                masteredIds.has(card.id)
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{masteredIds.has(card.id) ? 'Öğrenildi' : 'Öğrenildi Olarak İşaretle'}</span>
            </button>
          </div>

          {/* Card Content (Front vs Back) */}
          <div className="py-6 text-center">
            {!isFlipped ? (
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">SORU / KAVRAM</div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                  {card.front}
                </h3>
                <div className="text-xs text-amber-400/80 mt-4 flex items-center justify-center gap-1">
                  <span>Cevabı görmek için karta tıklayın</span>
                  <RotateCcw className="w-3.5 h-3.5" />
                </div>
              </div>
            ) : (
              <div>
                <div className="text-xs uppercase tracking-widest text-indigo-400 mb-2">100 PUANLIK CEVAP & DETAY</div>
                <div className="text-sm sm:text-base font-semibold text-slate-100 whitespace-pre-line leading-relaxed text-left bg-slate-950/60 p-4 rounded-xl border border-indigo-500/30">
                  {card.back}
                </div>
              </div>
            )}
          </div>

          {/* Card Warning Footer */}
          {card.examWarning && (
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-lg">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{card.examWarning}</span>
            </div>
          )}
        </div>
      </div>

      {/* Deck Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all"
          title="Önceki Kart"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleFlip}
          className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl text-xs flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Kardı Çevir</span>
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 text-white rounded-full transition-all shadow-md"
          title="Sonraki Kart"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
