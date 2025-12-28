import React from 'react';

export default function StatsUiComponent(data: any, icon: any, name: string): JSX.Element {
  return (
    <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
      <span className="text-xs text-slate-500 font-bold uppercase mb-1">{name}</span>
      <div className="flex items-center gap-1">
        <span className="text-slate-400 text-sm">{icon}</span>
        <span className="text-white font-mono font-bold">{data}</span>
      </div>
    </div>
  );
}
