import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Zap, Gauge, Flame, ShieldAlert, Award } from 'lucide-react';
import { sound } from '../../utils/sound';

interface ExplosiveItem {
  name: string;
  formula: string;
  speed: number; // m/s
  regime: 'Deflagrasyon (Yanma)' | 'Detonasyon (İnfilak)';
  tntEq: number; // kg TNT / kg
  reactionTime: string;
  category: string;
  description: string;
  color: string;
}

const EXPLOSIVES: ExplosiveItem[] = [
  {
    name: 'Kara Barut (Açık Havada)',
    formula: 'KNO₃ + S + C',
    speed: 400,
    regime: 'Deflagrasyon (Yanma)',
    tntEq: 0.55,
    reactionTime: '~10-100 ms',
    category: 'Geleneksel Sevk Barutu',
    description: 'Açık ortamda sürekli yanar (deflagrasyon), sıkıştırıldığında basınçla patlayıcı davranışı sergiler.',
    color: '#71717a'
  },
  {
    name: 'Roket Yakıtı (AP / HTPB)',
    formula: 'NH₄ClO₄ + Polibütadien',
    speed: 1200,
    regime: 'Deflagrasyon (Yanma)',
    tntEq: 0.8,
    reactionTime: '~1-10 ms',
    category: 'Katı Roket Yakıtı (İtici)',
    description: 'Kontrollü, kararlı ve kesintisiz süpersonik gaz itkisi üretir. Keskin şok dalgası oluşturmaz.',
    color: '#f97316'
  },
  {
    name: 'TNT (Trinitrotoluen)',
    formula: 'C₇H₅N₃O₆',
    speed: 6900,
    regime: 'Detonasyon (İnfilak)',
    tntEq: 1.0,
    reactionTime: '< 1 µs',
    category: 'Konvansiyonel Askeri Patlayıcı',
    description: 'Petrolün enerjisini 100 milyon kat daha hızlı boşaltarak yıkıcı süpersonik şok dalgası üretir.',
    color: '#eab308'
  },
  {
    name: 'RDX (Kraliyet Yıkım Patlayıcısı)',
    formula: 'C₃H₆N₆O₆',
    speed: 8750,
    regime: 'Detonasyon (İnfilak)',
    tntEq: 1.6,
    reactionTime: '< 500 ns',
    category: 'Yüksek Enerjili Patlayıcı (HEM)',
    description: 'Ders notlarında 8.750 m/s yayılma hızıyla vurgulanan modern harp başlığı ve C-4 ana bileşeni.',
    color: '#ef4444'
  },
  {
    name: 'HMX (Yüksek Ergimeli Patlayıcı)',
    formula: 'C₄H₈N₈O₈',
    speed: 9100,
    regime: 'Detonasyon (İnfilak)',
    tntEq: 1.7,
    reactionTime: '< 300 ns',
    category: 'Yüksek Enerjili Patlayıcı (HEM)',
    description: 'Yüksek termal kararlılığa sahip, derin delici füzelerde kullanılan askeri güç.',
    color: '#dc2626'
  },
  {
    name: 'Oktanitrokuban (Dünya Rekortmeni)',
    formula: 'C₈(NO₂)₈',
    speed: 10100,
    regime: 'Detonasyon (İnfilak)',
    tntEq: 2.38,
    reactionTime: '< 100 ns',
    category: 'Nükleer Olmayan En Güçlü Patlayıcı',
    description: 'Eaton & Zhang (2001) sentezi. 90° gerilimli karbon küpüyle 10.100 m/s rekor hız ve 2.38x TNT gücü!',
    color: '#a855f7'
  }
];

export const DetonationSpeedSim: React.FC = () => {
  const [selected, setSelected] = useState<ExplosiveItem>(EXPLOSIVES[3]); // RDX default
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [shockRadius, setShockRadius] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const triggerDetonation = () => {
    setIsPlaying(true);
    setProgress(0);
    setShockRadius(0);
    const intensity = selected.speed / 5000;
    sound.playDetonation(intensity);
  };

  const resetSim = () => {
    setIsPlaying(false);
    setProgress(0);
    setShockRadius(0);
  };

  // Animation frame loop
  useEffect(() => {
    if (!isPlaying) return;
    let animId: number;
    const duration = Math.max(400, 3000 - (selected.speed / 10100) * 2500); // Higher speed = faster visual wavefront
    const startTime = performance.now();

    const loop = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      setProgress(t);
      setShockRadius(t);

      if (t < 1) {
        animId = requestAnimationFrame(loop);
      } else {
        setIsPlaying(false);
      }
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, selected]);

  // Canvas visualizer for shockwave
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Background grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Origin position (left tube ignition or center)
    const originX = 60;
    const originY = height / 2;

    // Tube chamber
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.fillRect(40, originY - 35, width - 80, 70);
    ctx.strokeRect(40, originY - 35, width - 80, 70);

    // Explosive core before / during blast
    const tubeWidth = width - 100;
    const waveX = originX + tubeWidth * progress;

    // Unreacted explosive material
    if (progress < 1) {
      ctx.fillStyle = '#334155';
      ctx.fillRect(waveX, originY - 30, tubeWidth * (1 - progress), 60);
    }

    // Reacted plasma/gas
    const grad = ctx.createLinearGradient(originX, 0, waveX, 0);
    grad.addColorStop(0, '#f97316');
    grad.addColorStop(0.7, selected.color);
    grad.addColorStop(1, '#ffffff');
    ctx.fillStyle = grad;
    ctx.fillRect(originX, originY - 30, tubeWidth * progress, 60);

    // Shockwave wavefront line
    if (progress > 0 && progress < 1) {
      ctx.beginPath();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 15;
      ctx.moveTo(waveX, originY - 33);
      ctx.lineTo(waveX, originY + 33);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Particle sparks
      for (let i = 0; i < 8; i++) {
        const px = waveX - Math.random() * 25;
        const py = originY + (Math.random() - 0.5) * 50;
        ctx.fillStyle = Math.random() > 0.5 ? '#fef08a' : '#fb923c';
        ctx.beginPath();
        ctx.arc(px, py, 2 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Sensor markers
    const sensors = [0.25, 0.5, 0.75, 1.0];
    sensors.forEach((s) => {
      const sx = originX + tubeWidth * s;
      const triggered = progress >= s;
      ctx.fillStyle = triggered ? '#22c55e' : '#64748b';
      ctx.beginPath();
      ctx.arc(sx, originY - 42, 4, 0, Math.PI * 2);
      ctx.fill();

      // Distance tag
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px monospace';
      ctx.fillText(`${(s * 10).toFixed(1)}m`, sx - 10, originY + 52);
    });

  }, [progress, selected]);

  const soundSpeed = 343; // m/s
  const machNumber = (selected.speed / soundSpeed).toFixed(1);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>İnteraktif Balistik Laboratuvarı</span>
            <span>·</span>
            <span>Detonasyon & Deflagrasyon Analizi</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Patlama ve Dalga İlerleme Simülatörü</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={triggerDetonation}
            disabled={isPlaying}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 disabled:opacity-50 text-white font-semibold rounded-lg text-sm transition-all shadow-md active:scale-95"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Ateşle (Detonate)</span>
          </button>
          <button
            onClick={resetSim}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-all"
            title="Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Compound Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 my-5">
        {EXPLOSIVES.map((exp) => {
          const isSel = selected.name === exp.name;
          return (
            <button
              key={exp.name}
              onClick={() => {
                setSelected(exp);
                resetSim();
                sound.playClick();
              }}
              className={`p-3 rounded-lg text-left transition-all border ${
                isSel
                  ? 'border-amber-400 bg-slate-800/90 shadow-md ring-1 ring-amber-400/30'
                  : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/50 hover:border-slate-700'
              }`}
            >
              <div className="text-xs text-slate-400 font-mono truncate">{exp.formula}</div>
              <div className="text-sm font-bold text-white mt-0.5 truncate">{exp.name.split(' ')[0]}</div>
              <div className="text-xs font-semibold mt-2" style={{ color: exp.color }}>
                {exp.speed.toLocaleString('tr-TR')} m/s
              </div>
            </button>
          );
        })}
      </div>

      {/* Visual Canvas Tube */}
      <div className="relative bg-slate-950 rounded-lg p-2 border border-slate-800 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={760}
          height={160}
          className="w-full h-40 block"
        />

        {/* Realtime Speed HUD */}
        <div className="absolute top-3 right-3 bg-slate-900/90 border border-slate-700/70 rounded-md px-3 py-1.5 backdrop-blur-sm flex items-center gap-4 text-xs">
          <div>
            <span className="text-slate-400">Şok Hızı: </span>
            <span className="font-mono font-bold text-amber-400">{selected.speed.toLocaleString('tr-TR')} m/s</span>
          </div>
          <div>
            <span className="text-slate-400">Mach: </span>
            <span className="font-mono font-bold text-emerald-400">M {machNumber}</span>
          </div>
        </div>
      </div>

      {/* Metrics & Comparison Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {/* Metric 1 */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-amber-400" /> Reaksiyon Rejimi</span>
            <span className="text-slate-500 font-mono">{selected.reactionTime}</span>
          </div>
          <div className="text-base font-bold text-white mt-1">{selected.regime}</div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">{selected.description}</p>
        </div>

        {/* Metric 2 */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-red-400" /> TNT Eşdeğeri Güç</span>
            <span className="text-slate-500 font-mono">1 kg başına</span>
          </div>
          <div className="text-2xl font-black text-amber-400 mt-1">
            {selected.tntEq} <span className="text-sm font-normal text-slate-400">× TNT Gücü</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 mt-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-red-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (selected.tntEq / 2.5) * 100)}%` }}
            />
          </div>
        </div>

        {/* Metric 3: Speed Benchmark */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5 text-blue-400" /> Hız Kıyaslaması</span>
            <span className="text-emerald-400 text-xs font-semibold">Ses Hızı = 343 m/s</span>
          </div>
          <div className="space-y-2 mt-2">
            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-0.5">
                <span>Ses Hızı (Mach 1)</span>
                <span>343 m/s</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-full" style={{ width: `${(343 / 10100) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-0.5">
                <span>RDX Harp Başlığı</span>
                <span>8.750 m/s</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-red-400 h-full" style={{ width: `${(8750 / 10100) * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-amber-300 font-medium mb-0.5">
                <span>Oktanitrokuban [C₈(NO₂)₈]</span>
                <span>10.100 m/s</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vize/Final Exam Pro Tip */}
      <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3">
        <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-200">
          <strong className="text-amber-300 font-bold">VİZE / FİNAL SINAV NOTU: </strong>
          Hoca mutlaka sorar: "Petrolün enerjisi TNT'den 6 kat fazladır. Peki neden TNT tahrip gücüne sahiptir?"
          Cevap: <em>"TNT enerjisini petrolden 100 MİLYON KAT daha hızlı açığa çıkarır. Tahrip gücünü belirleyen toplam enerji değil, enerjinin yayılma hızı ve süpersonik şok dalgasıdır!"</em>
        </div>
      </div>
    </div>
  );
};
