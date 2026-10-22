import React, { useState, useEffect } from 'react';
import { Rocket, Flame, Gauge, Play, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';

export const RocketNozzleSim: React.FC = () => {
  const [stage, setStage] = useState<'idle' | 'igniter' | 'combustion' | 'supersonic'>('idle');
  const [chamberPressure, setChamberPressure] = useState(0); // bar
  const [gasVelocity, setGasVelocity] = useState(0); // m/s
  const [thrust, setThrust] = useState(0); // kN

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (stage === 'igniter') {
      sound.playClick();
      setChamberPressure(15);
      setGasVelocity(200);
      setThrust(10);
      timer = setTimeout(() => {
        setStage('combustion');
      }, 900);
    } else if (stage === 'combustion') {
      sound.playDetonation(0.6);
      setChamberPressure(70);
      setGasVelocity(1100);
      setThrust(85);
      timer = setTimeout(() => {
        setStage('supersonic');
      }, 1200);
    } else if (stage === 'supersonic') {
      sound.playDetonation(1.1);
      setChamberPressure(110);
      setGasVelocity(2850);
      setThrust(240);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  const launchSequence = () => {
    setStage('igniter');
  };

  const resetSequence = () => {
    setStage('idle');
    setChamberPressure(0);
    setGasVelocity(0);
    setThrust(0);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-orange-400 font-semibold uppercase tracking-wider">
            <Rocket className="w-4 h-4" />
            <span>Ders Notu 3 · Sevk Barutları & İtki Fiziği</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Roket Motoru, Piroteknik Ateşleyici ve Lüle (Nozul) Simülatörü</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={launchSequence}
            disabled={stage !== 'idle'}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 disabled:opacity-50 text-white font-semibold rounded-lg text-sm transition-all shadow-md active:scale-95"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Ateşleme Sırasını Başlat</span>
          </button>
          <button
            onClick={resetSequence}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-all"
            title="Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stage Flow Indicator */}
      <div className="grid grid-cols-3 gap-2 my-5">
        <div className={`p-3 rounded-lg border transition-all ${
          stage === 'igniter'
            ? 'border-amber-400 bg-amber-950/40 text-amber-200 ring-1 ring-amber-400'
            : stage === 'combustion' || stage === 'supersonic'
            ? 'border-emerald-500/40 bg-slate-950/80 text-emerald-400'
            : 'border-slate-800 bg-slate-950/40 text-slate-500'
        }`}>
          <div className="text-[10px] uppercase font-mono">1. Aşama (0.1 sn)</div>
          <div className="font-bold text-xs mt-0.5">Piroteknik Ateşleyici (ZPP)</div>
        </div>

        <div className={`p-3 rounded-lg border transition-all ${
          stage === 'combustion'
            ? 'border-orange-500 bg-orange-950/40 text-orange-200 ring-1 ring-orange-500'
            : stage === 'supersonic'
            ? 'border-emerald-500/40 bg-slate-950/80 text-emerald-400'
            : 'border-slate-800 bg-slate-950/40 text-slate-500'
        }`}>
          <div className="text-[10px] uppercase font-mono">2. Aşama (Deflagrasyon)</div>
          <div className="font-bold text-xs mt-0.5">Katı Yakıt (AP + HTPB)</div>
        </div>

        <div className={`p-3 rounded-lg border transition-all ${
          stage === 'supersonic'
            ? 'border-red-500 bg-red-950/40 text-red-200 ring-1 ring-red-500 animate-pulse'
            : 'border-slate-800 bg-slate-950/40 text-slate-500'
        }`}>
          <div className="text-[10px] uppercase font-mono">3. Aşama (Mach 3+)</div>
          <div className="font-bold text-xs mt-0.5">Nozul (Lüle) Süpersonik İtki</div>
        </div>
      </div>

      {/* Interactive Rocket Cutaway Graphic */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-lg p-6 min-h-[220px] flex items-center justify-center overflow-hidden">
        <svg width="600" height="180" viewBox="0 0 600 180" className="w-full max-w-[600px]">
          {/* Rocket Nose Cone (Warhead/Tapa) */}
          <polygon points="50,90 120,40 120,140" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <text x="65" y="93" fill="#94a3b8" fontSize="9" fontWeight="bold">TAPA & HARP</text>

          {/* Motor Chamber */}
          <rect x="120" y="40" width="280" height="100" fill="#0f172a" stroke="#475569" strokeWidth="2" rx="4" />

          {/* Igniter Spark */}
          {stage !== 'idle' && (
            <g>
              <circle cx="140" cy="90" r="10" fill="#f59e0b" className="animate-ping" opacity="0.6" />
              <circle cx="140" cy="90" r="6" fill="#fbbf24" />
              <text x="130" y="115" fill="#fde68a" fontSize="8">Ateşleyici</text>
            </g>
          )}

          {/* Solid Propellant Grain (AP + HTPB) */}
          <rect x="160" y="45" width="230" height="90" fill="#334155" stroke="#64748b" strokeWidth="1" rx="2" />
          <text x="210" y="95" fill="#cbd5e1" fontSize="11" fontWeight="bold">
            {stage === 'idle' ? 'KATI YAKIT TAHILI (AP / HTPB)' : 'YANMA ODASI (DEFLAGRASYON)'}
          </text>

          {/* Flames inside chamber */}
          {(stage === 'combustion' || stage === 'supersonic') && (
            <rect x="160" y="75" width="230" height="30" fill="url(#fireGradient)" opacity="0.8" />
          )}

          {/* De Laval Nozzle (Daralan - Genişleyen Lüle) */}
          <polygon points="400,60 440,75 480,50 480,130 440,105 400,120" fill="#1e293b" stroke="#f97316" strokeWidth="2" />
          <text x="415" y="93" fill="#f97316" fontSize="8" fontWeight="bold">NOZUL</text>

          {/* Exhaust Jet Plume */}
          {stage === 'supersonic' && (
            <g className="animate-pulse">
              <polygon points="480,50 580,25 550,90 580,155 480,130" fill="url(#exhaustGradient)" />
              {/* Shock Diamonds */}
              <polygon points="500,85 510,90 500,95 490,90" fill="#ffffff" />
              <polygon points="525,85 535,90 525,95 515,90" fill="#ffffff" />
              <polygon points="550,85 560,90 550,95 540,90" fill="#ffffff" />
            </g>
          )}

          <defs>
            <linearGradient id="fireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="exhaustGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="70%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Physics Readouts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3">
          <div className="text-xs text-slate-400">Oda Basıncı (Chamber Pressure)</div>
          <div className="text-2xl font-black text-amber-400 font-mono mt-1">{chamberPressure} bar</div>
          <div className="text-[11px] text-slate-500 mt-1">Katı yakıt yanmasıyla oluşan gaz sıkışması</div>
        </div>
        <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3">
          <div className="text-xs text-slate-400">Nozul Çıkış Hızı (Exhaust Velocity)</div>
          <div className="text-2xl font-black text-cyan-400 font-mono mt-1">{gasVelocity.toLocaleString('tr-TR')} m/s</div>
          <div className="text-[11px] text-slate-500 mt-1">Daralan-genişleyen lüle ile süpersonik akış (Mach {(gasVelocity / 343).toFixed(1)})</div>
        </div>
        <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3">
          <div className="text-xs text-slate-400">Üretilen İtki (Thrust)</div>
          <div className="text-2xl font-black text-emerald-400 font-mono mt-1">{thrust} kN</div>
          <div className="text-[11px] text-slate-500 mt-1">Newton’un 3. yasası (etki-tepki) itki gücü</div>
        </div>
      </div>

      {/* Exam Note Box */}
      <div className="mt-4 p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300">
          <strong className="text-white">Ders Notu 3, Slayt 6: </strong>
          "Piroteknik Ateşleyici, roket motorundaki katı yakıtı tutuşturmak için gereken ilk yüksek ısı ve basıncı üreten zincirin ilk halkasıdır. Elektrikli bir sinyalle tetiklenir ve saniyenin onda biri gibi kısa sürede ana yakıtı ateşler. Nozul (Lüle), motor arkasında yer alan daralan ve genişleyen yapıdır; yanan gazların hızını süpersonik seviyelere çıkararak zıt yönde itme kuvveti sağlar."
        </div>
      </div>
    </div>
  );
};
