import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { History, Award, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/sound';

interface HistoryEvent {
  id: string;
  year: string;
  order: number;
  title: string;
  detail: string;
}

const ALL_EVENTS: HistoryEvent[] = [
  {
    id: 'e1',
    year: 'M.Ö. 434',
    order: 1,
    title: 'Peloponnesos & Yunan Ateşi',
    detail: 'Kükürt ve zift karışımı ilk yanıcı askeri ateş kullanıldı.'
  },
  {
    id: 'e2',
    year: '10. Yüzyıl',
    order: 2,
    title: 'Çin Kara Barutu Keşfi',
    detail: 'Martı/yarasa dışkılarından güherçile (KNO₃) + kükürt + kömür; 4000 kat duman genişlemesi.'
  },
  {
    id: 'e3',
    year: '1627',
    order: 3,
    title: 'Slovakya Maden Patlatması',
    detail: 'Barutun madencilik ve tünel açma sektöründe ilk kez kullanılması.'
  },
  {
    id: 'e4',
    year: '1846',
    order: 4,
    title: 'Nitroselüloz (Schönbein Kazası)',
    detail: 'Asidi pamuklu önlükle silen Schönbein, önlüğü kuruturken kazara nitroselülozu buldu.'
  },
  {
    id: 'e5',
    year: '1846',
    order: 5,
    title: 'Ascanio Sobrero & Nitrogliserin',
    detail: 'Gliserole asit karışımı ekleyerek kararsız sıvı TNG (C₃H₅N₃O₉) elde etti.'
  },
  {
    id: 'e6',
    year: '1860’lar',
    order: 6,
    title: 'Alfred Nobel & Dinamit',
    detail: 'Nitrogliserini silisli diatome toprağına emdirerek güvenli Dinamiti icat etti.'
  },
  {
    id: 'e7',
    year: '1868',
    order: 7,
    title: 'Nobel Kapsül İcadı',
    detail: 'Emniyetli fitil ile patlatma kapsülü icat edilerek modern ateşleme başladı.'
  },
  {
    id: 'e8',
    year: '1914',
    order: 8,
    title: 'Panama Kanalı Mega Projesi',
    detail: '77 km kanalı açmak için 31 milyon kg dinamit patlatıldı.'
  },
  {
    id: 'e9',
    year: '1945',
    order: 9,
    title: 'Manhattan Projesi & Trinity',
    detail: 'Little Boy (U-235) ve Fat Man (Pu-239) fisyon bombaları.'
  },
  {
    id: 'e10',
    year: '2001',
    order: 10,
    title: 'Eaton & Oktanitrokuban [C₈(NO₂)₈]',
    detail: '10.100 m/s hız ve 2.38x TNT gücüyle dünyanın en güçlü nükleer olmayan patlayıcısı.'
  }
];

export const HistoryTimelineGame: React.FC = () => {
  const [placedEvents, setPlacedEvents] = useState<HistoryEvent[]>([]);
  const [availableEvents, setAvailableEvents] = useState<HistoryEvent[]>(() =>
    [...ALL_EVENTS].sort(() => Math.random() - 0.5)
  );
  const [completed, setCompleted] = useState<boolean>(false);
  const [mistakes, setMistakes] = useState<number>(0);

  const handlePickEvent = (event: HistoryEvent) => {
    const nextExpectedOrder = placedEvents.length + 1;
    if (event.order === nextExpectedOrder) {
      sound.playCorrect();
      const updatedPlaced = [...placedEvents, event];
      setPlacedEvents(updatedPlaced);
      setAvailableEvents((prev) => prev.filter((e) => e.id !== event.id));

      if (updatedPlaced.length === ALL_EVENTS.length) {
        setCompleted(true);
        sound.playCelebration();
        confetti({ particleCount: 120, spread: 70 });
      }
    } else {
      sound.playIncorrect();
      setMistakes((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setPlacedEvents([]);
    setAvailableEvents([...ALL_EVENTS].sort(() => Math.random() - 0.5));
    setCompleted(false);
    setMistakes(0);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <History className="w-4 h-4" />
            <span>Ders Notu 4 · Kronolojik Zaman Çizelgesi</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Patlayıcılar Tarihi Kronoloji Düellosu</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs text-slate-400">
            Hata Sayısı: <span className="text-rose-400 font-bold font-mono">{mistakes}</span>
          </div>
          <button
            onClick={resetGame}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Yeniden Karıştır</span>
          </button>
        </div>
      </div>

      <div className="my-4 p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg text-xs text-amber-200">
        <strong>TALİMAT: </strong> Aşağıda rastgele dağıtılmış tarihi olayları <strong>en eskiden en yeniye doğru (kronolojik)</strong> sırayla seçin!
        Doğru sırayı tamamlayarak 100 tam puanlık tarihçe madalyasını kazanın.
      </div>

      {/* Target Timeline Progress */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span>Kronolojik Sıralama İlerlemesi ({placedEvents.length} / {ALL_EVENTS.length})</span>
          <span className="font-mono text-emerald-400 font-bold">{Math.round((placedEvents.length / ALL_EVENTS.length) * 100)}%</span>
        </div>
        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300"
            style={{ width: `${(placedEvents.length / ALL_EVENTS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Placed Timeline Cards */}
      {placedEvents.length > 0 && (
        <div className="mb-6 space-y-2">
          <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Doğru Yerleştirilen Tarih Çizelgesi:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {placedEvents.map((ev, idx) => (
              <div
                key={ev.id}
                className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-lg flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                  {idx + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-300 font-mono">{ev.year}</span>
                    <span className="text-xs font-bold text-white">{ev.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{ev.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available Cards Pool */}
      {!completed ? (
        <div>
          <div className="text-xs font-semibold text-slate-400 mb-2">
            Sıradaki Olayı Seçiniz: (Şu an beklenen: {placedEvents.length + 1}. olay)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {availableEvents.map((ev) => (
              <button
                key={ev.id}
                onClick={() => handlePickEvent(ev)}
                className="p-3 bg-slate-950/70 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/60 rounded-lg text-left transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 font-mono">{ev.year}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="text-sm font-semibold text-white mt-1">{ev.title}</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{ev.detail}</div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 bg-emerald-950/40 border border-emerald-500 rounded-lg text-center animate-pulse">
          <Award className="w-10 h-10 text-amber-400 mx-auto mb-2" />
          <h3 className="text-lg font-black text-white">TARİHSEL KRONOLOJİ ZAFERİ!</h3>
          <p className="text-xs text-emerald-300 mt-1">
            Yunan Ateşinden Oktanitrokubana uzanan 2500 yıllık patlayıcı evrimini sıfır hatayla kronolojik dizdiniz!
          </p>
          <div className="text-xs font-mono text-slate-400 mt-2">
            Toplam Hata: {mistakes} · Sınav Puanı: {Math.max(70, 100 - mistakes * 5)} / 100
          </div>
        </div>
      )}
    </div>
  );
};
