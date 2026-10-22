import React, { useState } from 'react';
import { BookOpen, Copy, Check, Printer, Award, Zap, Shield, Flame, Star } from 'lucide-react';
import { sound } from '../../utils/sound';

export const CheatSheetView: React.FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    sound.playClick();
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Nokta Atışı Vize & Final Özeti</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">100 Alma Garantili "Hoca Ne Sorar?" Sınav Özeti</h2>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-all"
        >
          <Printer className="w-4 h-4" />
          <span>Yazdır / PDF Kaydet</span>
        </button>
      </div>

      {/* Grid of Key High-Yield Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Block 1: 14 Critical Energetic Properties */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-400" />
              <h3 className="text-sm font-bold text-white">Patlayıcı & Enerjetiklerin 14 Kritik Özelliği</h3>
            </div>
            <button
              onClick={() => copyToClipboard(
                '1. Ağırlık Kuvveti, 2. Hacim Kuvveti, 3. Yoğunluk, 4. Detonasyon Hızı, 5. Duyarlılık, 6. Suya Direnç, 7. Duman Karakteri, 8. Raf Ömrü, 9. Desensitizasyon Direnci, 10. Çevre Sıcaklığına Duyarlılık, 11. Patlama Hızı ve Basıncı, 12. Patlama Empedansı, 13. Oksijen Balans Değeri, 14. Patlayıcı Gücü ve Güç İndeksi',
                'p14'
              )}
              className="text-xs text-slate-400 hover:text-white"
            >
              {copiedSection === 'p14' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-[11px] text-amber-400 font-semibold">
            *Hoca klasik sınavda: "En az 5 veya 7 tanesini yazınız" diye sorar.
          </p>
          <ol className="grid grid-cols-2 gap-1.5 text-xs text-slate-300 font-mono list-decimal list-inside bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <li>Ağırlık Kuvveti</li>
            <li>Hacim Kuvveti</li>
            <li>Yoğunluk</li>
            <li>Detonasyon Hızı</li>
            <li>Duyarlılık</li>
            <li>Suya Direnç</li>
            <li>Duman Karakteri</li>
            <li>Raf Ömrü</li>
            <li>Desensitizasyon Direnci</li>
            <li>Çevre Sıcaklığına Duyarlılık</li>
            <li>Patlama Hızı & Basıncı</li>
            <li>Patlama Empedansı</li>
            <li>Oksijen Balansı (OB)</li>
            <li>Patlayıcı Gücü / İndeksi</li>
          </ol>
        </div>

        {/* Block 2: 5 Mandatory Explosive Criteria */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-bold text-white">Patlayıcı Kabul Edilme 5 Zorunlu Kriteri</h3>
            </div>
            <button
              onClick={() => copyToClipboard(
                '1. Doğal değil insan yapımı olmalı\n2. Dış etki olmadıkça kendiliğinden başlamamalı\n3. Ekzotermik olmalı\n4. Reaksiyon çok hızlı gerçekleşmeli\n5. Başladıktan sonra dış müdahalesiz kendiliğinden tamamlanmalı',
                'crit5'
              )}
              className="text-xs text-slate-400 hover:text-white"
            >
              {copiedSection === 'crit5' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-[11px] text-amber-400 font-semibold">
            *Ders Notu 4, Slayt 4: 15-20 puanlık garanti klasik soru!
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="p-2 bg-slate-900 rounded border border-slate-800">
              <strong className="text-white">a) İnsan Müdahalesi: </strong> Doğal yoldan değil, özel amaçla tasarlanmış olmalı.
            </li>
            <li className="p-2 bg-slate-900 rounded border border-slate-800">
              <strong className="text-white">b) Dış Etki Şartı: </strong> Fiziksel dış etki (kimyasal) veya nötron (nükleer) olmadıkça kendiliğinden başlamamalı.
            </li>
            <li className="p-2 bg-slate-900 rounded border border-slate-800">
              <strong className="text-white">c) Ekzotermik: </strong> Çevreye büyük miktarda ısı ve enerji vermeli.
            </li>
            <li className="p-2 bg-slate-900 rounded border border-slate-800">
              <strong className="text-white">d) Hızlı Tepkime: </strong> Çok kısa sürede gaz ürünlerine dönüşmeli.
            </li>
            <li className="p-2 bg-slate-900 rounded border border-slate-800">
              <strong className="text-white">e) Kendi Kendini Tamamlama: </strong> Başladıktan sonra dışarıdan fiziksel/kimyasal desteğe ihtiyaç duymamalı.
            </li>
          </ul>
        </div>

        {/* Block 3: Kimyasal vs Nükleer Matrisi */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <h3 className="text-sm font-bold text-white">Kimyasal vs Nükleer Patlayıcı Karşılaştırması</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-800">
              <thead className="bg-slate-900 text-slate-400">
                <tr>
                  <th className="p-2 border-b border-slate-800">Kriter</th>
                  <th className="p-2 border-b border-slate-800 text-amber-300">Kimyasal Patlayıcı</th>
                  <th className="p-2 border-b border-slate-800 text-cyan-300">Nükleer Patlayıcı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr>
                  <td className="p-2 font-semibold">Dış Etki</td>
                  <td className="p-2">Fiziksel (darbe, kıvılcım, ısı)</td>
                  <td className="p-2">Yüksek sıcaklık, basınç, nötron</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Açığa Çıkan Enerji</td>
                  <td className="p-2">Kimyasal bağ enerjisi (elektronlar)</td>
                  <td className="p-2">Çekirdek nükleer bağ enerjisi</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Patlama Ürünleri</td>
                  <td className="p-2">Isı, ışık, ses, şok dalgası, gaz (N₂, CO, CO₂)</td>
                  <td className="p-2">Gama radyasyonu, nötronlar, 3.000-4.000°C ısı</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Block 4: Sayısal Formül ve Hesaplama Özeti */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Vize Sayısal Problem Çözüm Formülleri</h3>
          </div>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
              <div className="font-bold text-emerald-400 font-mono">1. Kütleden Atom Sayısı:</div>
              <div className="font-mono text-white mt-1">N = (m × N_A) / M_A</div>
              <div className="text-[11px] text-slate-400 mt-1">Örn: 100g Ag → (100 × 6.023×10²³) / 107.868 = <strong>5.58 × 10²³ atom</strong></div>
            </div>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
              <div className="font-bold text-emerald-400 font-mono">2. Tek Bir Atomun Kütlesi:</div>
              <div className="font-mono text-white mt-1">m₁ = M_A / N_A</div>
              <div className="text-[11px] text-slate-400 mt-1">Örn: 1 Cu atomu → 63.54 / (6.02×10²³) = <strong>1.05 × 10⁻²² gram</strong></div>
            </div>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
              <div className="font-bold text-emerald-400 font-mono">3. 1 Gramdaki Atom Sayısı:</div>
              <div className="font-mono text-white mt-1">N = N_A / M_A</div>
              <div className="text-[11px] text-slate-400 mt-1">Örn: 1g Cu → (6.02×10²³) / 63.54 = <strong>9.47 × 10²¹ atom</strong></div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 5: Tarihsel Kilometre Taşları & Mucitler */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Star className="w-4 h-4 text-amber-400" />
          <span>Sınavda Sorulan Tarihsel Keşifler ve Kimyagerler</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
          <div className="p-3 bg-slate-900 rounded border border-slate-800">
            <span className="font-bold text-amber-400">Çin Kara Barutu (10. yy)</span>
            <p className="text-[11px] text-slate-400 mt-1">Güherçile (KNO₃) + Kükürt + Kömür. Duman hacmi 4000 KAT artar.</p>
          </div>
          <div className="p-3 bg-slate-900 rounded border border-slate-800">
            <span className="font-bold text-cyan-400">Schönbein (1846)</span>
            <p className="text-[11px] text-slate-400 mt-1">Nitroselüloz (dumansız barut). Asit dökülen pamuk önlük kazasıyla keşfetti.</p>
          </div>
          <div className="p-3 bg-slate-900 rounded border border-slate-800">
            <span className="font-bold text-red-400">Alfred Nobel (1860'lar)</span>
            <p className="text-[11px] text-slate-400 mt-1">Dinamit (diatome toprağına emdirme), 1868 patlatma kapsülü, 1875 jelatin dinamit.</p>
          </div>
          <div className="p-3 bg-slate-900 rounded border border-slate-800">
            <span className="font-bold text-purple-400">Philip Eaton (2001)</span>
            <p className="text-[11px] text-slate-400 mt-1">Oktanitrokuban [C₈(NO₂)₈]. 10.100 m/s patlama hızıyla nükleer olmayan en güçlü patlayıcı.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
