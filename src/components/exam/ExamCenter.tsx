import React, { useState } from 'react';
import { ExamQuestion } from '../../types';
import { examQuestionBank } from '../../data/examQuestions';
import {
  GraduationCap,
  Timer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Award,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

type ExamFilter = 'vize' | 'final' | 'all';

export const ExamCenter: React.FC = () => {
  const [examType, setExamType] = useState<ExamFilter>('vize');
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  // Filter questions based on examType
  const questions: ExamQuestion[] = examQuestionBank.filter((q) => {
    if (examType === 'vize') return q.examType === 'vize' || q.moduleId <= 2;
    if (examType === 'final') return true; // Final covers everything
    return true;
  });

  const startExam = (type: ExamFilter) => {
    setExamType(type);
    setIsExamStarted(true);
    setIsFinished(false);
    setCurrentQIndex(0);
    setUserAnswers({});
    sound.playClick();
  };

  const currentQ = questions[currentQIndex];

  const handleSelectOption = (optIndex: number) => {
    if (isFinished) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIndex
    }));
    sound.playClick();
  };

  const finishExam = () => {
    setIsFinished(true);
    let correctCount = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);
    if (score >= 90) {
      sound.playCelebration();
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.5 }
      });
    } else if (score >= 70) {
      sound.playCorrect();
    } else {
      sound.playIncorrect();
    }
  };

  const getScoreDetails = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
    const score = Math.round((correctCount / questions.length) * 100);

    let letterGrade = 'FF';
    let gradeLabel = 'Kaldı (Tekrar Çalış)';
    let color = 'text-rose-400';

    if (score >= 90) {
      letterGrade = 'AA';
      gradeLabel = 'Mükemmel! Vize/Final 100 Cepte!';
      color = 'text-emerald-400';
    } else if (score >= 85) {
      letterGrade = 'BA';
      gradeLabel = 'Çok İyi Başarı';
      color = 'text-emerald-300';
    } else if (score >= 80) {
      letterGrade = 'BB';
      gradeLabel = 'İyi Düzeyde';
      color = 'text-blue-400';
    } else if (score >= 70) {
      letterGrade = 'CC';
      gradeLabel = 'Geçer Düzey';
      color = 'text-amber-400';
    }

    return { score, correctCount, total: questions.length, letterGrade, gradeLabel, color };
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Hitit Üniversitesi Sınav Hazırlık Merkezi</span>
            <span>·</span>
            <span>Doç. Dr. Kubilay Karacif Müfredatı</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">100 Puan Garantili Vize ve Final Sınav Simülatörü</h2>
        </div>

        {isExamStarted && !isFinished && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-mono">
              {Object.keys(userAnswers).length} / {questions.length} Cevaplandı
            </span>
            <button
              onClick={finishExam}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold rounded-lg text-xs transition-all shadow-md"
            >
              Sınavı Tamamla & Puanla
            </button>
          </div>
        )}
      </div>

      {/* Start Selection Screen */}
      {!isExamStarted ? (
        <div className="my-8 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-white">Sınav Modunu Seçiniz</h3>
            <p className="text-xs text-slate-400">
              Gerçek sınav formatında hazırlanmış sorular, anında puanlama, harf notu ve hoca çözümleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vize Card */}
            <div className="p-6 bg-slate-950 border border-slate-800 hover:border-amber-500/60 rounded-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">Ders Notu 1 & 2</span>
                  <span className="text-xs text-slate-500">10 Soru</span>
                </div>
                <h4 className="text-lg font-bold text-white mt-2">Vize Sınavı Simülatörü</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  • Malzeme Bilimi & Malzeme Mühendisliği tanımları<br />
                  • Metaller, Seramik Kristal Yapıları (MX, Florit 12 iyon, Perovskit)<br />
                  • Kompozit vs Alaşım farkı & Zırh sistemleri (B₄C + UHMW-PE)<br />
                  • Alüminyum 12 vs Magnezyum 3 kayma sistemi<br />
                  • 100g Ag ve 1g Cu mol hesaplamaları, Bağ enerjileri
                </p>
              </div>
              <button
                onClick={() => startExam('vize')}
                className="mt-6 w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-lg text-xs transition-all shadow"
              >
                Vize Sınavına Başla →
              </button>
            </div>

            {/* Final Card */}
            <div className="p-6 bg-slate-950 border border-slate-800 hover:border-red-500/60 rounded-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-red-400 font-bold uppercase">Tüm 4 Ders Notu (Kapsamlı)</span>
                  <span className="text-xs text-slate-500">{examQuestionBank.length} Soru</span>
                </div>
                <h4 className="text-lg font-bold text-white mt-2">Final Sınavı Master Simülatörü</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  • Vize konularının tamamı<br />
                  • Enerjetik Malzemeler, 14 Kritik Özellik listesi<br />
                  • Petrol vs TNT 100 milyon kat yayılma hızı<br />
                  • Patlayıcı 5 zorunlu kabul kriteri & DuPont tanımı<br />
                  • Tarihçe: Peloponnesos, Çin barutu, Schönbein, Nobel, Manhattan, Eaton Oktanitrokuban
                </p>
              </div>
              <button
                onClick={() => startExam('final')}
                className="mt-6 w-full py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black rounded-lg text-xs transition-all shadow"
              >
                Final Sınavına Başla (100 Hedefi) →
              </button>
            </div>
          </div>
        </div>
      ) : !isFinished ? (
        /* Active Exam View */
        <div className="my-4 space-y-6">
          {/* Question Navigator Palette */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
            {questions.map((q, idx) => {
              const isAnswered = userAnswers[q.id] !== undefined;
              const isCurrent = idx === currentQIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all shrink-0 ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950 ring-2 ring-white shadow'
                      : isAnswered
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Active Question Box */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 border-b border-slate-800 pb-3">
              <span className="font-semibold text-amber-400">
                Soru {currentQIndex + 1} / {questions.length}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                  {currentQ.category}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  Zorluk: {currentQ.difficulty}
                </span>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mt-4 leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-2.5 mt-6">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full p-3.5 rounded-lg border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-amber-400 bg-amber-950/40 text-amber-100 ring-1 ring-amber-400/50'
                        : 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                      isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Question Controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  if (currentQIndex > 0) setCurrentQIndex((prev) => prev - 1);
                }}
                disabled={currentQIndex === 0}
                className="flex items-center gap-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white rounded-lg text-xs"
              >
                <ArrowLeft className="w-4 h-4" /> Önceki
              </button>

              <button
                onClick={() => {
                  if (currentQIndex < questions.length - 1) {
                    setCurrentQIndex((prev) => prev + 1);
                  } else {
                    finishExam();
                  }
                }}
                className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-bold rounded-lg text-xs shadow"
              >
                {currentQIndex < questions.length - 1 ? (
                  <>Sonraki <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>Sınavı Bitir ve Notumu Hesapla</>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="my-6 space-y-6 max-w-3xl mx-auto">
          {(() => {
            const stats = getScoreDetails();
            return (
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
                <Trophy className="w-14 h-14 text-amber-400 mx-auto" />
                <h3 className="text-2xl font-black text-white">Sınav Tamamlandı!</h3>
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <div className="text-xs text-slate-400">Puanınız</div>
                    <div className={`text-5xl font-black font-mono ${stats.color}`}>
                      {stats.score} <span className="text-lg text-slate-500">/ 100</span>
                    </div>
                  </div>
                  <div className="h-12 w-px bg-slate-800" />
                  <div>
                    <div className="text-xs text-slate-400">Harf Notu</div>
                    <div className={`text-5xl font-black font-mono ${stats.color}`}>
                      {stats.letterGrade}
                    </div>
                  </div>
                </div>
                <div className={`text-sm font-bold ${stats.color}`}>
                  {stats.gradeLabel}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Doğru: {stats.correctCount} / {stats.total} Soru
                </div>

                <div className="flex justify-center gap-3 pt-4">
                  <button
                    onClick={() => startExam(examType)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs shadow"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Sınavı Tekrar Çöz</span>
                  </button>
                  <button
                    onClick={() => setIsExamStarted(false)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-xs"
                  >
                    Mod Seçimine Dön
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Full Question Review List */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Detaylı Çözümler ve Hoca Açıklamaları
            </h4>
            {questions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border ${
                    isCorrect
                      ? 'bg-slate-950 border-emerald-500/40'
                      : 'bg-slate-950 border-rose-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-white">Soru {idx + 1}</span>
                    <span className={`font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      {isCorrect ? 'Doğru' : 'Yanlış'}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {q.question}
                  </div>
                  <div className="mt-2 text-xs space-y-1">
                    <div className="text-slate-400">
                      Sizin Cevabınız: <span className="font-mono text-slate-200">{userAns !== undefined ? q.options[userAns] : 'Boş Bırakıldı'}</span>
                    </div>
                    {!isCorrect && (
                      <div className="text-emerald-400">
                        Doğru Cevap: <span className="font-mono font-bold">{q.options[q.correctIndex]}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-3 p-2.5 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
                    <strong className="text-amber-400">Hoca Notu / Çözüm: </strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
