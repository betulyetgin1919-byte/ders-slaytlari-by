import React, { useState } from 'react';
import { Box, Layers, Split, Award, HelpCircle } from 'lucide-react';
import { sound } from '../../utils/sound';

type Mode = 'slip_systems' | 'diamond_graphite' | 'ceramic_structures';

export const CrystalLatticeSim: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Mode>('slip_systems');
  const [shearForce, setShearForce] = useState(0); // 0 to 100
  const [selectedSeramic, setSelectedSeramic] = useState<'NaCl' | 'CsCl' | 'CaF2' | 'Perovskit'>('NaCl');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
            <Box className="w-4 h-4" />
            <span>Ders Notu 1 & 2 · Kristalografi & Bağ Fiziği</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Kristal Kafes, Kayma Sistemleri ve Bağ Simülatörü</h2>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => { setActiveTab('slip_systems'); sound.playClick(); }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'slip_systems'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Al (12) vs Mg (3) Kayma
          </button>
          <button
            onClick={() => { setActiveTab('diamond_graphite'); sound.playClick(); }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'diamond_graphite'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Elmas vs Grafit
          </button>
          <button
            onClick={() => { setActiveTab('ceramic_structures'); sound.playClick(); }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'ceramic_structures'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Seramik Kafesleri
          </button>
        </div>
      </div>

      {/* TAB 1: Slip Systems (Al vs Mg) */}
      {activeTab === 'slip_systems' && (
        <div className="space-y-6 my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aluminum (FCC / YMK) */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Alüminyum (Al)</h3>
                  <span className="text-xs text-blue-400 font-mono">YMK / FCC Kristal Kafes</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-400">12</span>
                  <div className="text-[10px] text-slate-400 uppercase">Kayma Sistemi</div>
                </div>
              </div>

              {/* Graphic Unit Cell */}
              <div className="relative h-44 bg-slate-900/50 rounded-lg my-4 flex items-center justify-center border border-slate-800/60 overflow-hidden">
                <svg width="180" height="150" viewBox="0 0 180 150">
                  {/* Cube edges */}
                  <rect x="40" y="40" width="80" height="80" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                  <rect x="70" y="20" width="80" height="80" fill="none" stroke="#0284c7" strokeWidth="2" />
                  <line x1="40" y1="40" x2="70" y2="20" stroke="#38bdf8" strokeWidth="2" />
                  <line x1="120" y1="40" x2="150" y2="20" stroke="#38bdf8" strokeWidth="2" />
                  <line x1="40" y1="120" x2="70" y2="100" stroke="#38bdf8" strokeWidth="2" />
                  <line x1="120" y1="120" x2="150" y2="100" stroke="#38bdf8" strokeWidth="2" />

                  {/* Corner and Face Atoms */}
                  <circle cx="40" cy="40" r="7" fill="#60a5fa" />
                  <circle cx="120" cy="40" r="7" fill="#60a5fa" />
                  <circle cx="40" cy="120" r="7" fill="#60a5fa" />
                  <circle cx="120" cy="120" r="7" fill="#60a5fa" />
                  <circle cx="70" cy="20" r="7" fill="#93c5fd" />
                  <circle cx="150" cy="20" r="7" fill="#93c5fd" />
                  <circle cx="70" cy="100" r="7" fill="#93c5fd" />
                  <circle cx="150" cy="100" r="7" fill="#93c5fd" />

                  {/* Face centered atom highlight */}
                  <circle cx="80" cy="80" r="9" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="95" cy="30" r="8" fill="#38bdf8" />
                  <circle cx="55" cy="80" r="8" fill="#38bdf8" />
                  <circle cx="135" cy="60" r="8" fill="#38bdf8" />
                </svg>

                <div className="absolute bottom-2 left-3 text-[11px] text-slate-400">
                  {`{111} düzlemleri <110> doğrultuları`}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800/80 pb-1">
                  <span className="text-slate-400">Mekanik Karakter:</span>
                  <span className="text-emerald-400 font-semibold">Çok Sünek (Plastik Şekillenir)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-1">
                  <span className="text-slate-400">Çekme Deneyinde:</span>
                  <span className="text-white">Geniş boyun verme ve büyük uzama</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">İmalat Yöntemleri:</span>
                  <span className="text-white">Haddeleme, ekstrüzyon, derin çekme</span>
                </div>
              </div>
            </div>

            {/* Magnesium (HCP / HSP) */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Magnezyum (Mg)</h3>
                  <span className="text-xs text-rose-400 font-mono">HSP / HCP Hegzagonal Sıkı Paket</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-rose-400">3</span>
                  <div className="text-[10px] text-slate-400 uppercase">Kayma Sistemi</div>
                </div>
              </div>

              {/* Graphic Hexagonal Cell */}
              <div className="relative h-44 bg-slate-900/50 rounded-lg my-4 flex items-center justify-center border border-slate-800/60 overflow-hidden">
                <svg width="180" height="150" viewBox="0 0 180 150">
                  {/* Hexagon top */}
                  <polygon points="90,15 130,28 130,55 90,68 50,55 50,28" fill="none" stroke="#f43f5e" strokeWidth="2" />
                  {/* Hexagon bottom */}
                  <polygon points="90,75 130,88 130,115 90,128 50,115 50,88" fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="3 3" />
                  {/* Vertical connectors */}
                  <line x1="50" y1="28" x2="50" y2="88" stroke="#f43f5e" strokeWidth="1.5" />
                  <line x1="130" y1="28" x2="130" y2="88" stroke="#f43f5e" strokeWidth="1.5" />
                  <line x1="90" y1="15" x2="90" y2="75" stroke="#f43f5e" strokeWidth="1.5" />
                  <line x1="90" y1="68" x2="90" y2="128" stroke="#f43f5e" strokeWidth="1.5" />
                  <line x1="50" y1="55" x2="50" y2="115" stroke="#f43f5e" strokeWidth="1.5" />
                  <line x1="130" y1="55" x2="130" y2="115" stroke="#f43f5e" strokeWidth="1.5" />

                  {/* Basal Plane Atoms */}
                  <circle cx="90" cy="41" r="7" fill="#fb7185" />
                  <circle cx="90" cy="101" r="7" fill="#fb7185" />
                </svg>

                <div className="absolute bottom-2 left-3 text-[11px] text-slate-400">
                  {`Sadece (0001) taban düzlemleri`}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800/80 pb-1">
                  <span className="text-slate-400">Mekanik Karakter:</span>
                  <span className="text-rose-400 font-semibold">Gevrek Kırılma (Oda Sıcaklığında)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-1">
                  <span className="text-slate-400">Çekme Deneyinde:</span>
                  <span className="text-white">Çok az uzama, aniden kırılma</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sebep:</span>
                  <span className="text-white">Sadece 3 kayma doğrultusu olması</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200">
              <strong className="text-amber-300 font-bold">VİZE SINAV TAHMİNİ (15 PUAN): </strong>
              Soru: <em>"Çekme deneyinde Alüminyum ve Magnezyum numunelerinin davranışlarını kristal kafes yapıları ve kayma sistemleri açısından karşılaştırınız."</em>
              Cevap: <em>"Alüminyum YMK kafes yapısına sahiptir ve 12 adet kayma sistemine sahip olduğu için dislokasyonlar rahatça kayarak yüksek plastik uzama ve süneklik sağlar. Magnezyum ise HSP yapılıdır ve sadece 3 adet kayma sistemine sahiptir; dislokasyonlar kilitlenir ve oda sıcaklığında gevrek kırılma gösterir."</em>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Diamond vs Graphite */}
      {activeTab === 'diamond_graphite' && (
        <div className="space-y-6 my-4">
          <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-white">Karbon Allotropları: Elmas vs Grafit Kayma Deneyi</h3>
                <p className="text-xs text-slate-400">Kayma kuvveti uygulayarak tabakalar arasındaki Van der Waals zayıf bağının kopuşunu izleyin.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Kayma Gerilmesi (Shear):</span>
                <span className="font-mono text-emerald-400 font-bold text-sm">{shearForce}%</span>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={shearForce}
              onChange={(e) => setShearForce(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Diamond */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sky-300 text-sm">Elmas (Diamond)</span>
                  <span className="text-[11px] text-sky-400 font-mono">Ergime: 3.300 °C</span>
                </div>
                <div className="h-40 bg-slate-950 rounded border border-slate-800/80 flex items-center justify-center relative overflow-hidden">
                  {/* 3D Tetrahedral network */}
                  <svg width="180" height="140" viewBox="0 0 180 140">
                    <line x1="90" y1="30" x2="60" y2="70" stroke="#38bdf8" strokeWidth="3" />
                    <line x1="90" y1="30" x2="120" y2="70" stroke="#38bdf8" strokeWidth="3" />
                    <line x1="90" y1="30" x2="90" y2="105" stroke="#38bdf8" strokeWidth="3" />
                    <line x1="60" y1="70" x2="30" y2="110" stroke="#38bdf8" strokeWidth="3" />
                    <line x1="120" y1="70" x2="150" y2="110" stroke="#38bdf8" strokeWidth="3" />

                    <circle cx="90" cy="30" r="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="60" cy="70" r="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="120" cy="70" r="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="90" cy="105" r="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="30" cy="110" r="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="150" cy="110" r="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                  </svg>
                  <div className="absolute top-2 right-2 text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded">
                    Sıfır Deformasyon (Çok Sert)
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Karbonun tüm değerlik elektronları 3 boyutta güçlü sp³ kovalent bağla kenetlenmiştir. Kesinlikle kaymaz, dünyanın en sert doğal maddesidir (10 Mohs).
                </p>
              </div>

              {/* Graphite */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-amber-300 text-sm">Grafit (Graphite)</span>
                  <span className="text-[11px] text-amber-400 font-mono">Zayıf Van der Waals: &lt;10 kcal/mol</span>
                </div>
                <div className="h-40 bg-slate-950 rounded border border-slate-800/80 flex items-center justify-center relative overflow-hidden">
                  <svg width="220" height="140" viewBox="0 0 220 140">
                    {/* Top Layer shifted by shearForce */}
                    <g transform={`translate(${shearForce * 0.4}, 0)`}>
                      <line x1="30" y1="40" x2="80" y2="40" stroke="#f59e0b" strokeWidth="3" />
                      <line x1="80" y1="40" x2="130" y2="40" stroke="#f59e0b" strokeWidth="3" />
                      <line x1="130" y1="40" x2="180" y2="40" stroke="#f59e0b" strokeWidth="3" />
                      <circle cx="30" cy="40" r="7" fill="#fde68a" />
                      <circle cx="80" cy="40" r="7" fill="#fde68a" />
                      <circle cx="130" cy="40" r="7" fill="#fde68a" />
                      <circle cx="180" cy="40" r="7" fill="#fde68a" />
                      <text x="50" y="30" fill="#fbbf24" fontSize="10">Kovalent Bağlar (Güçlü)</text>
                    </g>

                    {/* Dotted Van der Waals vertical bonds breaking */}
                    <line x1="45" y1="47" x2="45" y2="93" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" opacity={Math.max(0.1, 1 - shearForce / 80)} />
                    <line x1="95" y1="47" x2="95" y2="93" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" opacity={Math.max(0.1, 1 - shearForce / 80)} />
                    <line x1="145" y1="47" x2="145" y2="93" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" opacity={Math.max(0.1, 1 - shearForce / 80)} />

                    {/* Bottom Layer Fixed */}
                    <g transform="translate(0, 0)">
                      <line x1="30" y1="100" x2="80" y2="100" stroke="#f59e0b" strokeWidth="3" />
                      <line x1="80" y1="100" x2="130" y2="100" stroke="#f59e0b" strokeWidth="3" />
                      <line x1="130" y1="100" x2="180" y2="100" stroke="#f59e0b" strokeWidth="3" />
                      <circle cx="30" cy="100" r="7" fill="#fde68a" />
                      <circle cx="80" cy="100" r="7" fill="#fde68a" />
                      <circle cx="130" cy="100" r="7" fill="#fde68a" />
                      <circle cx="180" cy="100" r="7" fill="#fde68a" />
                    </g>
                  </svg>
                  <div className="absolute bottom-2 right-2 text-[10px] text-amber-400 font-semibold bg-amber-950/60 px-1.5 py-0.5 rounded">
                    {shearForce > 30 ? 'Tabakalar Kayıyor!' : 'Denge Hali'}
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Tabaka içinde güçlü kovalent bağ vardır; fakat tabakalar arasında zayıf Van der Waals bağı olduğu için hafif sürtünmede bile tabakalar yaprak gibi kayar. Kurşun kalem ve katı yağlayıcı olarak kullanılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Ceramic Structures */}
      {activeTab === 'ceramic_structures' && (
        <div className="space-y-4 my-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'NaCl', label: 'NaCl / MgO (MX)', desc: 'YMK Kafes' },
              { id: 'CsCl', label: 'CsCl (MX)', desc: 'Basit Kübik' },
              { id: 'CaF2', label: 'CaF₂ Florit (MX₂)', desc: '12 İyonlu Kafes' },
              { id: 'Perovskit', label: 'CaTiO₃ (M\'M\'\'X₃)', desc: 'Piezoelektrik' }
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => { setSelectedSeramic(c.id as any); sound.playClick(); }}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedSeramic === c.id
                    ? 'border-emerald-400 bg-slate-800 text-white ring-1 ring-emerald-400/40'
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold text-sm text-white">{c.label}</div>
                <div className="text-[11px] text-emerald-400 mt-0.5">{c.desc}</div>
              </button>
            ))}
          </div>

          <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-5">
            {selectedSeramic === 'NaCl' && (
              <div>
                <h4 className="font-bold text-white text-base">MX Yapı: NaCl ve Metal Oksitler (MgO, CaO, FeO, NiO)</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  • Yüzey Merkezli Kübik (YMK / FCC) kafes yapısındadır.<br />
                  • Sodyum (Na⁺) iyonları kübün kenar ortalarında ve tam küp merkezinde yer alır.<br />
                  • Klor (Cl⁻) iyonları ise normal YMK kafes noktalarındadır (köşeler ve yüzey merkezleri).<br />
                  • Koordinasyon sayısı 6’dır (her Na⁺ etrafında 6 adet Cl⁻ bulunur).
                </p>
              </div>
            )}
            {selectedSeramic === 'CsCl' && (
              <div>
                <h4 className="font-bold text-white text-base">MX Yapı: Sezyum Klorür (CsCl)</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  • HMK benzeri basit kübik bir yapıdır.<br />
                  • Cl⁻ iyonları kübün 8 köşesinde, büyük Cs⁺ katyonu ise kübün tam merkezinde yer alır.<br />
                  • Koordinasyon sayısı 8’dir (merkezdeki Cs⁺ etrafında 8 köşe klor iyonu bulunur).
                </p>
              </div>
            )}
            {selectedSeramic === 'CaF2' && (
              <div>
                <h4 className="font-bold text-white text-base">MX₂ Yapı: Florit (CaF₂) ve Diğer Oksitler (UO₂, SiO₂, ThO₂)</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  • YMK kafeste her kafes noktasında 1 Ca²⁺ ve 2 F⁻ olmak üzere 3 iyon bulunur.<br />
                  <strong className="text-emerald-400">• Her birim hücrede toplam 12 iyon vardır (4 Ca²⁺ + 8 F⁻).</strong><br />
                  • F⁻ iyonları kübün iç köşegenlerinin 1/4 mesafesinde yer alır.
                </p>
              </div>
            )}
            {selectedSeramic === 'Perovskit' && (
              <div>
                <h4 className="font-bold text-white text-base">M\'M\'\'X₃ Yapı: Perovskit (CaTiO₃ ve BaTiO₃)</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  • Elektroseramik ve piezoelektrik (basınçla elektrik üreten) kritik seramiklerdir.<br />
                  • Köşelerde Ca²⁺, yüzey merkezlerinde O²⁻ ve hacim merkezinde Ti⁴⁺ bulunur.<br />
                  • Her kafes noktasında ve birim hücre başına tam 5 iyon yer alır.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
