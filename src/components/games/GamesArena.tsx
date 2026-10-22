import React, { useState } from 'react';
import { OctanitrocubaneGame } from './OctanitrocubaneGame';
import { MoleCalculationGame } from './MoleCalculationGame';
import { HistoryTimelineGame } from './HistoryTimelineGame';
import { Sparkles, Calculator, History, Gamepad2 } from 'lucide-react';
import { sound } from '../../utils/sound';

export const GamesArena: React.FC = () => {
  const [activeGame, setActiveGame] = useState<'octanitrocubane' | 'mole_calc' | 'timeline'>('octanitrocubane');

  const games = [
    {
      id: 'octanitrocubane',
      title: 'Molekül Bombacısı: Oktanitrokuban Sentezi',
      icon: Sparkles,
      desc: 'Küp kafese 8 nitro grubu bağla, 10.100 m/s patlama hızına ulaş!'
    },
    {
      id: 'mole_calc',
      title: 'Mol & Avogadro Hesaplama Yarışı',
      icon: Calculator,
      desc: '100g Ag ve 1g Cu klasik vize problemlerini zamanla yarışarak çöz!'
    },
    {
      id: 'timeline',
      title: 'Tarihsel Patlama Kronoloji Düellosu',
      icon: History,
      desc: 'M.Ö. 434 Peloponnesos’tan 2001 Oktanitrokubana tarihi olayları doğru sırala!'
    }
  ];

  return (
    <div className="space-y-4">
      {/* Game Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {games.map((g) => {
          const Icon = g.icon;
          const isSel = activeGame === g.id;
          return (
            <button
              key={g.id}
              onClick={() => {
                setActiveGame(g.id as any);
                sound.playClick();
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                isSel
                  ? 'border-purple-500 bg-slate-800 text-white shadow-lg ring-1 ring-purple-500/40'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${isSel ? 'text-purple-400' : 'text-slate-500'}`} />
                <span className="font-bold text-xs">{g.title}</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{g.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Render Active Game */}
      <div>
        {activeGame === 'octanitrocubane' && <OctanitrocubaneGame />}
        {activeGame === 'mole_calc' && <MoleCalculationGame />}
        {activeGame === 'timeline' && <HistoryTimelineGame />}
      </div>
    </div>
  );
};
