import React, { useState } from 'react';
import { Shield, Crosshair, RefreshCw, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { sound } from '../../utils/sound';

type ArmorPreset = 'modern_composite' | 'pure_steel' | 'unarmored';
type ThreatLevel = 'ap_bullet' | 'fragmentation' | 'rocket_shrapnel';

export const ArmorBallisticsSim: React.FC = () => {
  const [armorType, setArmorType] = useState<ArmorPreset>('modern_composite');
  const [threat, setThreat] = useState<ThreatLevel>('ap_bullet');
  const [isFiring, setIsFiring] = useState(false);
  const [fired, setFired] = useState(false);
  const [projectilePos, setProjectilePos] = useState(0); // 0 to 100%

  const threatDetails = {
    ap_bullet: {
      name: '7.62×51mm Zırh Delici Mermi',
      speed: '850 m/s',
      energy: '3.600 Joule',
      mass: '9.7 g'
    },
    fragmentation: {
      name: 'Yüksek Hızlı El Bombası Şarapneli',
      speed: '1.200 m/s',
      energy: '1.800 Joule',
      mass: '2.5 g'
    },
    rocket_shrapnel: {
      name: 'Topçu Roketi Parçacık Saçılımı',
      speed: '1.600 m/s',
      energy: '5.200 Joule',
      mass: '4.1 g'
    }
  };

  const fireTest = () => {
    setIsFiring(true);
    setFired(false);
    setProjectilePos(0);
    sound.playDetonation(0.8);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 65) { // Impact point around 65%
        clearInterval(interval);
        setProjectilePos(65);
        setIsFiring(false);
        setFired(true);
        if (armorType === 'modern_composite') {
          sound.playCorrect();
        } else if (armorType === 'pure_steel' && threat === 'ap_bullet') {
          sound.playIncorrect();
        } else {
          sound.playDetonation(1.2);
        }
      } else {
        setProjectilePos(progress);
      }
    }, 25);
  };

  const resetTest = () => {
    setFired(false);
    setIsFiring(false);
    setProjectilePos(0);
  };

  // Outcome calculation
  const getOutcome = () => {
    if (!fired) return null;
    if (armorType === 'modern_composite') {
      return {
        stopped: true,
        summary: 'Mermi Başarıyla Durduruldu!',
        explanation: 'B₄C Seramik yüzey çelik mermi çekirdeğini anında parçalayarak mantarlaştırdı. Arkasındaki UHMW-PE (PE-1000) tabakası yüksek kinetik enerjiyi emdi ve tüm şarapnelleri içeri saçılmadan yakaladı.',
        statusColor: 'text-emerald-400',
        bgColor: 'bg-emerald-950/40 border-emerald-500/40'
      };
    } else if (armorType === 'pure_steel') {
      if (threat === 'ap_bullet' || threat === 'rocket_shrapnel') {
        return {
          stopped: false,
          summary: 'Kritik Delinme & İç Şarapnel!',
          explanation: 'Geleneksel homojen çelik zırh, sert çekirdekli AP mermisini durduramadı veya arka yüzeyinden ölümcül çelik şarapneller (spalling) kopararak personeli hayati tehlikeye soktu.',
          statusColor: 'text-rose-400',
          bgColor: 'bg-rose-950/40 border-rose-500/40'
        };
      } else {
        return {
          stopped: true,
          summary: 'Şarapnel Durduruldu (Fakat Ağır Ağırlık)',
          explanation: 'Küçük şarapneli durdurdu ancak çelik zırhın aşırı ağırlığı aracın hareket kabiliyetini ve yakıt tüketimini olumsuz etkiledi.',
          statusColor: 'text-amber-400',
          bgColor: 'bg-amber-950/40 border-amber-500/40'
        };
      }
    } else {
      return {
        stopped: false,
        summary: 'Tamamen Delindi!',
        explanation: 'Korumasız gövde mermi tarafından tamamen delindi. Zırh koruması olmadan araç ve personel doğrudan vuruldu.',
        statusColor: 'text-rose-500',
        bgColor: 'bg-rose-950/60 border-rose-600/50'
      };
    }
  };

  const outcome = getOutcome();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Ders Notu 1 · Balistik Kompozit Mimarisi</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Zırh Balistik Test Sahası (B₄C Seramik + UHMW-PE)</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fireTest}
            disabled={isFiring}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold rounded-lg text-sm transition-all shadow-md active:scale-95"
          >
            <Crosshair className="w-4 h-4" />
            <span>Atış Yap (Test Fire)</span>
          </button>
          <button
            onClick={resetTest}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition-all"
            title="Sıfırla"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Control Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            1. Zırh Mimarisi Seçimi
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => { setArmorType('modern_composite'); resetTest(); sound.playClick(); }}
              className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                armorType === 'modern_composite'
                  ? 'border-blue-500 bg-blue-950/40 text-blue-300 ring-1 ring-blue-500/40'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <div className="font-bold text-white">Hibrit Kompozit</div>
              <div className="text-[11px] text-blue-400 mt-1">B₄C + PE-1000 + PC</div>
            </button>
            <button
              onClick={() => { setArmorType('pure_steel'); resetTest(); sound.playClick(); }}
              className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                armorType === 'pure_steel'
                  ? 'border-slate-400 bg-slate-800 text-white ring-1 ring-slate-400/40'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <div className="font-bold text-white">Klasik Çelik Zırh</div>
              <div className="text-[11px] text-slate-400 mt-1">Homojen Çelik Levha</div>
            </button>
            <button
              onClick={() => { setArmorType('unarmored'); resetTest(); sound.playClick(); }}
              className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                armorType === 'unarmored'
                  ? 'border-red-500 bg-red-950/40 text-red-300 ring-1 ring-red-500/40'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <div className="font-bold text-white">Korumasız Gövde</div>
              <div className="text-[11px] text-red-400 mt-1">İnce Sac Plaka</div>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            2. Tehdit Mühimmatı Seçimi
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(threatDetails) as ThreatLevel[]).map((key) => {
              const t = threatDetails[key];
              const isSel = threat === key;
              return (
                <button
                  key={key}
                  onClick={() => { setThreat(key); resetTest(); sound.playClick(); }}
                  className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                    isSel
                      ? 'border-amber-500 bg-amber-950/40 text-amber-300 ring-1 ring-amber-500/40'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <div className="font-bold text-white truncate">{t.name.split(' ')[0]}</div>
                  <div className="text-[11px] text-amber-400 mt-1">{t.speed}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ballistic Cross-Section Arena */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-lg p-6 min-h-[200px] flex items-center justify-between overflow-hidden">
        {/* Left: Gun Barrel */}
        <div className="flex flex-col items-center z-10">
          <div className="w-16 h-7 bg-slate-700 border-2 border-slate-600 rounded-r-md shadow-inner flex items-center justify-end px-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          </div>
          <span className="text-[10px] text-slate-400 mt-1 font-mono">Balistik Namlu</span>
        </div>

        {/* Projectile In Flight */}
        <div
          className="absolute z-20 transition-all duration-75 flex items-center"
          style={{
            left: `${15 + (projectilePos * 0.5)}%`,
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: projectilePos > 0 ? 1 : 0
          }}
        >
          <div className="w-6 h-3 bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 rounded-r-full shadow-lg shadow-amber-500/50" />
          {isFiring && (
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-amber-500" />
          )}
        </div>

        {/* Right: Armor Target Cross-Section */}
        <div className="relative flex items-center gap-1 z-10 mr-6">
          {armorType === 'modern_composite' ? (
            <>
              {/* Layer 1: Ceramic B4C */}
              <div className="w-10 h-36 bg-gradient-to-b from-slate-600 to-slate-800 border-2 border-slate-500 rounded-l flex flex-col justify-between items-center py-2 shadow-lg">
                <span className="text-[10px] font-bold text-slate-200 rotate-90 whitespace-nowrap">B₄C Seramik</span>
                {fired && (
                  <div className="w-4 h-4 rounded-full bg-slate-300 border border-white animate-ping" />
                )}
                <span className="text-[9px] text-slate-400 font-mono">15mm</span>
              </div>

              {/* Layer 2: UHMW-PE */}
              <div className="w-12 h-36 bg-gradient-to-b from-cyan-900 to-blue-950 border-2 border-cyan-500/70 flex flex-col justify-between items-center py-2 shadow-lg">
                <span className="text-[10px] font-bold text-cyan-200 rotate-90 whitespace-nowrap">PE-1000 Darbe</span>
                {fired && (
                  <span className="text-[9px] text-emerald-400 font-bold">Tuttu</span>
                )}
                <span className="text-[9px] text-cyan-400 font-mono">25mm</span>
              </div>

              {/* Layer 3: Polycarbonate / Support */}
              <div className="w-8 h-36 bg-gradient-to-b from-emerald-900/60 to-teal-950 border-2 border-emerald-500/60 rounded-r flex flex-col justify-between items-center py-2 shadow-lg">
                <span className="text-[10px] font-bold text-emerald-300 rotate-90 whitespace-nowrap">PC Taşıyıcı</span>
                <span className="text-[9px] text-emerald-400 font-mono">10mm</span>
              </div>
            </>
          ) : armorType === 'pure_steel' ? (
            <div className="w-20 h-36 bg-gradient-to-b from-zinc-500 to-zinc-700 border-2 border-zinc-400 rounded flex flex-col justify-between items-center py-2 shadow-lg">
              <span className="text-[11px] font-bold text-zinc-100 rotate-90 whitespace-nowrap">Homojen Çelik</span>
              {fired && threat === 'ap_bullet' && (
                <div className="text-[10px] text-red-300 font-bold bg-red-950/80 px-1 rounded">DELİNDİ</div>
              )}
              <span className="text-[9px] text-zinc-300 font-mono">30mm</span>
            </div>
          ) : (
            <div className="w-3 h-36 bg-zinc-600 border border-zinc-500 rounded flex flex-col justify-between items-center py-2">
              <span className="text-[10px] text-red-400 font-bold rotate-90 whitespace-nowrap">İnce Sac</span>
              {fired && <div className="text-[10px] text-red-400 font-bold">DELİK</div>}
            </div>
          )}

          {/* Protected Zone Indicator */}
          <div className="ml-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center text-xs text-slate-400">
              Mürettebat
            </div>
            <span className="text-[10px] text-slate-500 mt-1">İç Kabin</span>
          </div>
        </div>
      </div>

      {/* Outcome Banner */}
      {outcome && (
        <div className={`mt-4 p-4 rounded-lg border ${outcome.bgColor} transition-all`}>
          <div className="flex items-center gap-2">
            {outcome.stopped ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-400" />
            )}
            <h4 className={`text-sm font-bold ${outcome.statusColor}`}>{outcome.summary}</h4>
          </div>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">{outcome.explanation}</p>
        </div>
      )}

      {/* Scientific Lecture Takeaway Box */}
      <div className="mt-4 p-3 bg-slate-950/80 border border-slate-800 rounded-lg flex items-start gap-3">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 space-y-1">
          <span className="font-semibold text-white">Ders Notu 1, Slayt 18-19 Özeti: </span>
          <span className="text-slate-400">
            "Metal ve seramik zırh sistemleri mermi delip geçmesini engellemeye odaklanırken; teknik plastikler (UHMW-PE ve Polikarbonat)
            hafiflik, şeffaflık, şarapnel tutma ve darbe (enerji) emilimi gerektiren kritik bölgelerde devreye girer."
          </span>
        </div>
      </div>
    </div>
  );
};
