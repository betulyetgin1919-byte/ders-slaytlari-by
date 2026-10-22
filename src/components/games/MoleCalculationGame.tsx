import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calculator, CheckCircle2, XCircle, RotateCcw, Zap, HelpCircle } from 'lucide-react';
import { sound } from '../../utils/sound';

interface MathQuestion {
  id: number;
  title: string;
  given: string;
  target: string;
  formulaPrompt: string;
  correctAnswer: string;
  options: string[];
  stepByStep: string[];
}

const MATH_QUESTIONS: MathQuestion[] = [
  {
    id: 1,
    title: 'Gümüş (Ag) Atom Sayısı Hesabı',
    given: 'Kütle m = 100 gram, M_A(Ag) = 107.868 g/mol, N_A = 6.023 × 10²³ atom/mol',
    target: '100 gram gümüş içerisindeki gümüş atomlarının sayısı nedir?',
    formulaPrompt: 'N = (m × N_A) / M_A',
    correctAnswer: '5.58 × 10²³ atom',
    options: ['5.58 × 10²³ atom', '1.05 × 10²² atom', '9.47 × 10²¹ atom', '6.02 × 10²³ atom'],
    stepByStep: [
      '1. Adım: Mol sayısını bulunuz → n = m / M_A = 100 / 107.868 = 0.927 mol',
      '2. Adım: Avogadro sabitiyle çarpınız → N = n × N_A',
      '3. Adım: N = 0.927 × 6.023 × 10²³ = 5.58 × 10²³ atom!'
    ]
  },
  {
    id: 2,
    title: 'Tekil Bakır (Cu) Atomunun Kütlesi',
    given: 'M_A(Cu) = 63.54 g/mol, N_A = 6.02 × 10²³ atom/mol',
    target: '1 adet tekil bakır atomunun gram cinsinden kütlesi nedir?',
    formulaPrompt: 'm₁ = M_A / N_A',
    correctAnswer: '1.05 × 10⁻²² gram',
    options: ['1.05 × 10⁻²² gram', '6.35 × 10⁻²⁴ gram', '9.47 × 10⁻²¹ gram', '1.67 × 10⁻²⁴ gram'],
    stepByStep: [
      '1. Adım: 1 mol (63.54 g) bakırda 6.02 × 10²³ adet atom vardır.',
      '2. Adım: 1 tek atomun kütlesi = 63.54 / (6.02 × 10²³)',
      '3. Adım: Sonuç = 1.05 × 10⁻²² gram!'
    ]
  },
  {
    id: 3,
    title: '1 Gram Bakırdaki Atom Sayısı',
    given: 'Kütle m = 1 gram, M_A(Cu) = 63.54 g/mol, N_A = 6.02 × 10²³ atom/mol',
    target: '1 gram bakırda kaç adet bakır atomu vardır?',
    formulaPrompt: 'N = (1 × N_A) / 63.54',
    correctAnswer: '9.47 × 10²¹ atom',
    options: ['9.47 × 10²¹ atom', '5.58 × 10²³ atom', '3.12 × 10²⁰ atom', '6.02 × 10²² atom'],
    stepByStep: [
      '1. Adım: 1 g bakırın mol sayısı: n = 1 / 63.54 = 0.0157 mol',
      '2. Adım: N = 0.0157 × 6.02 × 10²³',
      '3. Adım: Sonuç = 9.47 × 10²¹ atom!'
    ]
  },
  {
    id: 4,
    title: 'Demir (Fe) 55.85 g Atom Sayısı',
    given: 'Kütle m = 55.85 gram, M_A(Fe) = 55.85 g/mol',
    target: '55.85 gram saf demirdeki atom sayısı nedir?',
    formulaPrompt: 'n = 55.85 / 55.85 = 1 mol',
    correctAnswer: '6.02 × 10²³ atom (Tam 1 mol)',
    options: [
      '6.02 × 10²³ atom (Tam 1 mol)',
      '1.20 × 10²⁴ atom',
      '3.01 × 10²³ atom',
      '10⁻²² atom'
    ],
    stepByStep: [
      '1. Adım: Kütle mol ağırlığına eşit olduğundan tam 1 mol maddedir.',
      '2. Adım: 1 mol herhangi bir element daima Avogadro sayısı (N_A) kadar atom içerir.',
      '3. Adım: Sonuç = 6.02 × 10²³ atom!'
    ]
  }
];

export const MoleCalculationGame: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showSteps, setShowSteps] = useState(false);

  const currentQ = MATH_QUESTIONS[currentIndex];

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQ.correctAnswer;
    if (isCorrect) {
      sound.playCorrect();
      setScore((prev) => prev + 250 + streak * 50);
      setStreak((prev) => prev + 1);
      if (currentIndex === MATH_QUESTIONS.length - 1) {
        confetti({ particleCount: 100, spread: 60 });
      }
    } else {
      sound.playIncorrect();
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setShowSteps(false);
    if (currentIndex < MATH_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Sayısal Sınav Antrenmanı · Mol & Avogadro</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Atomik Kütle & Mol Hesaplama Arenası</h2>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <span className="text-xs text-slate-400">Seri: </span>
            <span className="text-sm font-bold text-amber-400 font-mono">{streak} 🔥</span>
          </div>
          <div>
            <span className="text-xs text-slate-400">Puan: </span>
            <span className="text-lg font-bold text-emerald-400 font-mono">{score}</span>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="my-5 bg-slate-950 border border-slate-800 rounded-lg p-5">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="font-semibold text-emerald-400">Soru {currentIndex + 1} / {MATH_QUESTIONS.length}</span>
          <span className="font-mono text-slate-500">Ders Notu 2, Slayt 15</span>
        </div>
        <h3 className="text-base font-bold text-white">{currentQ.title}</h3>
        <div className="p-3 bg-slate-900 rounded border border-slate-800 my-3 text-xs font-mono text-cyan-300">
          <strong>Verilenler: </strong> {currentQ.given}
        </div>
        <div className="text-sm text-slate-200 font-medium">
          {currentQ.target}
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {currentQ.options.map((opt) => {
            const isSel = selectedOption === opt;
            const isCorrect = opt === currentQ.correctAnswer;
            let btnClass = 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200';
            if (isAnswered) {
              if (isCorrect) {
                btnClass = 'border-emerald-500 bg-emerald-950/60 text-emerald-300 ring-1 ring-emerald-500';
              } else if (isSel) {
                btnClass = 'border-rose-500 bg-rose-950/60 text-rose-300 ring-1 ring-rose-500';
              }
            }

            return (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={isAnswered}
                className={`p-3 rounded-lg border text-left font-mono text-xs font-semibold transition-all ${btnClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Feedback & Steps */}
        {isAnswered && (
          <div className="mt-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {selectedOption === currentQ.correctAnswer ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" /> Doğru Çözüm! (+250 Puan)
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                    <XCircle className="w-4 h-4" /> Hatalı Sonuç! Adımları inceleyiniz.
                  </span>
                )}
              </div>
              <button
                onClick={() => setShowSteps(!showSteps)}
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                {showSteps ? 'Adımları Gizle' : 'Çözüm Adımlarını Göster'}
              </button>
            </div>

            {showSteps && (
              <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-1.5 text-xs text-slate-300">
                {currentQ.stepByStep.map((step, idx) => (
                  <div key={idx} className="font-mono">{step}</div>
                ))}
              </div>
            )}

            <div className="mt-3 text-right">
              <button
                onClick={nextQuestion}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow"
              >
                {currentIndex < MATH_QUESTIONS.length - 1 ? 'Sonraki Problem →' : 'Baştan Tekrar Et ↺'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
