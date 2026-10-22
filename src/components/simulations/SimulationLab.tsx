import React, { useState } from 'react';
import { DetonationSpeedSim } from './DetonationSpeedSim';
import { ArmorBallisticsSim } from './ArmorBallisticsSim';
import { CrystalLatticeSim } from './CrystalLatticeSim';
import { RocketNozzleSim } from './RocketNozzleSim';
import { Zap, Shield, Box, Rocket } from 'lucide-react';
import { sound } from '../../utils/sound';

export const SimulationLab: React.FC = () => {
  const [activeSim, setActiveSim] = useState<'detonation' | 'armor' | 'lattice' | 'rocket'>('detonation');

  const tabs = [
    {
      id: 'detonation',
      label: 'Detonasyon & Şok Odası',
      icon: Zap,
      desc: 'RDX (8750 m/s) vs Oktanitrokuban (10100 m/s)'
    },
    {
      id: 'armor',
      label: 'Balistik Zırh Sahası',
      icon: Shield,
      desc: 'B₄C Seramik + UHMW-PE Kompozit'
    },
    {
      id: 'lattice',
      label: 'Kristal Kafes & Bağlar',
      icon: Box,
      desc: 'Al (12) vs Mg (3) Kayma, Elmas vs Grafit'
    },
    {
      id: 'rocket',
      label: 'Roket Motoru & Lüle',
      icon: Rocket,
      desc: 'Piroteknik Ateşleyici (0.1s) & Nozul Mach 3+'
    }
  ];

  return (
    <div className="space-y-4">
      {/* Simulation Lab Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSel = activeSim === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSim(tab.id as any);
                sound.playClick();
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSel
                  ? 'border-amber-400 bg-slate-800 text-white shadow-lg ring-1 ring-amber-400/40'
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${isSel ? 'text-amber-400' : 'text-slate-500'}`} />
                <span className="font-bold text-xs">{tab.label}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 truncate">{tab.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Render Active Simulation */}
      <div>
        {activeSim === 'detonation' && <DetonationSpeedSim />}
        {activeSim === 'armor' && <ArmorBallisticsSim />}
        {activeSim === 'lattice' && <CrystalLatticeSim />}
        {activeSim === 'rocket' && <RocketNozzleSim />}
      </div>
    </div>
  );
};
