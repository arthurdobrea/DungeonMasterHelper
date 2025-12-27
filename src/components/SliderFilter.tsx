import React, { ChangeEvent, useEffect, useState } from 'react';

const CR_VALUES = [
  '0.125',
  '0.25',
  '0.5',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '24',
  '30',
];

interface CRSliderProps {
  onFinalChange: (value: string) => void;
}

export default function SliderFilter({ onFinalChange }: CRSliderProps) {
  const [index, setIndex] = useState(1);

  // Обновляем индекс при движении ползунка (для UI)
  const handleSliderMove = (e: ChangeEvent<HTMLInputElement>) => {
    setIndex(parseInt(e.target.value));
  };

  // Debounce: вызываем onFinalChange через 300ms после последнего изменения
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinalChange(CR_VALUES[index]);
    }, 300);

    return () => clearTimeout(timer);
  }, [index, onFinalChange]);

  return (
    <div className="w-full max-w-sm p-6 bg-slate-800/40 border border-slate-700 rounded-2xl shadow-inner">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Challenge Rating</h3>
          <p className="text-slate-500 text-[10px] leading-tight">Сложность противника</p>
        </div>

        {/* Отображение текущего значения CR */}
        <div className="flex items-baseline gap-1">
          <span className="text-amber-500 font-serif text-4xl font-bold leading-none">{CR_VALUES[index]}</span>
        </div>
      </div>

      <div className="relative flex items-center">
        <input
          type="range"
          min={0}
          max={CR_VALUES.length - 1}
          value={index}
          onChange={handleSliderMove}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all"
        />
      </div>

      {/* Шкала с метками (для красоты) */}
      <div className="flex justify-between mt-3 px-1">
        <span className="text-[10px] font-bold text-slate-600">0</span>
        <span className="text-[10px] font-bold text-slate-600">15</span>
        <span className="text-[10px] font-bold text-slate-600">30</span>
      </div>
    </div>
  );
}
