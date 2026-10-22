import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, RotateCcw, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { sound } from '../../utils/sound';

export const OctanitrocubaneGame: React.FC = () => {
  const [attachedCount, setAttachedCount] = useState<number>(0);
  const [nitroSlots, setNitroSlots] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
  const [score, setScore] = useState<number>(0);
  const [failedAttempts, setFailedAttempts] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Corner coordinates on an isometric cube
  const corners = [
    { x: 120, y: 70, label: 'C1' },
    { x: 200, y: 70, label: 'C2' },
    { x: 200, y: 150, label: 'C3' },
    { x: 120, y: 150, label: 'C4' },
    { x: 160, y: 40, label: 'C5' },
    { x: 240, y: 40, label: 'C6' },
    { x: 240, y: 120, label: 'C7' },
    { x: 160, y: 120, label: 'C8' },
  ];

  const currentSpeed = attachedCount === 0 ? 0 : 4000 + Math.round((attachedCount / 8) * 6100);

  const attachNitro = (index: number) => {
    if (nitroSlots[index] || gameOver) return;

    const newSlots = [...nitroSlots];
    newSlots[index] = true;
    setNitroSlots(newSlots);
    const nextCount = attachedCount + 1;
    setAttachedCount(nextCount);
    setScore((prev) => prev + 250);
    sound.playClick();

    if (nextCount === 8) {
      setGameOver(true);
      sound.playDetonation(1.4);
      setTimeout(() => {
        sound.playCelebration();
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 300);
    }
  };

  const handleWrongMolecule = () => {
    if (gameOver) return;
    sound.playIncorrect();
    setFailedAttempts((prev) => prev + 1);
    setScore((prev) => Math.max(0, prev - 100));
  };

  const resetGame = () => {
    setAttachedCount(0);
    setNitroSlots([false, false, false, false, false, false, false, false]);
    setScore(0);
    setFailedAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      {/* Game Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-purple-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Mini Oyun · Sentez Laboratuvarı</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Oktanitrokuban [C₈(NO₂)₈] Sentez Meydan Okuması</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs text-slate-400">Puan: </span>
            <span className="text-lg font-bold text-purple-400 font-mono">{score}</span>
          </div>
          <button
            onClick={resetGame}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Yeniden Başlat</span>
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="my-4 p-3 bg-purple-950/40 border border-purple-500/30 rounded-lg text-xs text-purple-200 flex items-start gap-2">
        <Zap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
        <div>
          <strong>GÖREV: </strong> Philip Eaton’ın 2001 yılındaki tarihi zaferini tekrar yaşayın! Gerilimli 90° karbon kübünün 8 köşesine
          <strong> -NO₂ (Nitro)</strong> gruplarını bağlayın ve patlama hızını dünya rekoru olan <strong>10.100 m/s</strong> seviyesine çıkarın!
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
        {/* Cube Canvas Interactive Arena */}
        <div className="md:col-span-2 bg-slate-950 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center relative min-h-[300px]">
          <svg width="360" height="220" viewBox="0 0 360 220" className="overflow-visible">
            {/* Cubane frame lines */}
            {/* Front face */}
            <polygon points="120,70 200,70 200,150 120,150" fill="none" stroke="#475569" strokeWidth="2.5" />
            {/* Back face */}
            <polygon points="160,40 240,40 240,120 160,120" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
            {/* Connecting lines */}
            <line x1="120" y1="70" x2="160" y2="40" stroke="#475569" strokeWidth="2" />
            <line x1="200" y1="70" x2="240" y2="40" stroke="#475569" strokeWidth="2" />
            <line x1="200" y1="150" x2="240" y2="120" stroke="#475569" strokeWidth="2" />
            <line x1="120" y1="150" x2="160" y2="120" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />

            {/* Clickable / Visual Corners */}
            {corners.map((corner, i) => {
              const hasNitro = nitroSlots[i];
              return (
                <g key={i} className="cursor-pointer" onClick={() => attachNitro(i)}>
                  {/* Bond connector out */}
                  {hasNitro && (
                    <line
                      x1={corner.x}
                      y1={corner.y}
                      x2={corner.x + (i % 2 === 0 ? -25 : 25)}
                      y2={corner.y + (i < 4 ? -20 : 20)}
                      stroke="#a855f7"
                      strokeWidth="3"
                    />
                  )}

                  {/* Carbon atom */}
                  <circle
                    cx={corner.x}
                    cy={corner.y}
                    r="10"
                    fill={hasNitro ? '#a855f7' : '#1e293b'}
                    stroke={hasNitro ? '#ffffff' : '#64748b'}
                    strokeWidth="2"
                    className="transition-all hover:scale-125"
                  />
                  <text
                    x={corner.x - 5}
                    y={corner.y + 4}
                    fill={hasNitro ? '#ffffff' : '#94a3b8'}
                    fontSize="9"
                    fontWeight="bold"
                  >
                    C
                  </text>

                  {/* Attached Nitro group badge */}
                  {hasNitro && (
                    <g transform={`translate(${corner.x + (i % 2 === 0 ? -45 : 25)}, ${corner.y + (i < 4 ? -35 : 20)})`}>
                      <rect width="36" height="18" rx="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                      <text x="5" y="13" fill="#ffffff" fontSize="10" fontWeight="bold">NO₂</text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Speed Indicator Bar */}
          <div className="w-full mt-4 bg-slate-900 border border-slate-800 rounded-lg p-3">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="text-slate-400">Detonasyon Hızı:</span>
              <span className="font-mono font-bold text-base text-purple-400">
                {currentSpeed.toLocaleString('tr-TR')} m/s
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 transition-all duration-300"
                style={{ width: `${(attachedCount / 8) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>0 m/s</span>
              <span>Hedef: 10.100 m/s (Rekor)</span>
            </div>
          </div>
        </div>

        {/* Chemical Reagents Selection Deck */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Reaktif Seç & Köşelere Tıkla
          </div>

          {/* Correct Reagent */}
          <div className="p-3 bg-slate-950 border border-purple-500/50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-sm">Nitro Grubu (-NO₂)</span>
              <span className="text-xs text-purple-400 font-mono font-bold">{8 - attachedCount} Kalan</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Sol taraftaki karbon kübünün boş köşelerine tıklayarak nitro gruplarını bağlayın.
            </p>
          </div>

          {/* Trap / Wrong Reagents */}
          <div className="space-y-2">
            <div className="text-xs text-slate-500">Tuzak Kimyasallar (Tıklamayın):</div>
            <button
              onClick={handleWrongMolecule}
              className="w-full p-2.5 bg-slate-950/60 hover:bg-slate-800 border border-slate-800 rounded-lg text-left text-xs text-slate-400 transition-all"
            >
              <div className="font-semibold text-slate-300">Metil Grubu (-CH₃)</div>
              <div className="text-[10px] text-slate-500">Yanıcı değildir, patlama hızını düşürür (-100 Puan)</div>
            </button>
            <button
              onClick={handleWrongMolecule}
              className="w-full p-2.5 bg-slate-950/60 hover:bg-slate-800 border border-slate-800 rounded-lg text-left text-xs text-slate-400 transition-all"
            >
              <div className="font-semibold text-slate-300">Klorür (-Cl)</div>
              <div className="text-[10px] text-slate-500">Kübik kafeste rezonansı bozar (-100 Puan)</div>
            </button>
          </div>

          {/* Victory Modal State */}
          {gameOver && (
            <div className="p-4 bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-400 rounded-lg text-center animate-bounce mt-4">
              <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-1" />
              <div className="font-black text-white text-base">EFSANEVİ BAŞARI!</div>
              <div className="text-xs text-purple-200 mt-1">
                Dünyanın en güçlü nükleer olmayan patlayıcısı <strong>Oktanitrokuban</strong> başarıyla sentezlendi!
              </div>
              <div className="text-sm font-bold text-amber-300 mt-2 font-mono">10.100 m/s Detonasyon Hızı!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
