import React from 'react';

export interface Monster {
  slug: string;
  name: string;
  challenge_rating: string;
  type: string;
  size: string;
  hit_points: number;
  armor_class: number;
  alignment: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  perception: number;
  actions: Actions[];
  special_abilities: SpecialAbilities[];
}
interface MonsterCardProps {
  data: Monster;
}
interface Speed {
  walk: number;
}
interface Actions {
  name: string;
  desc: string;
}
interface SpecialAbilities {
  name: string;
  desc: string;
}

export default function MonsterCard({ data }: MonsterCardProps) {
  return (
    // 1. ГЛАВНЫЙ КОНТЕЙНЕР (ОБЕРТКА)
    // - bg-slate-800: Темный фон карточки
    // - rounded-xl: Скругленные углы
    // - overflow-hidden: Чтобы картинка или контент не вылезали за скругления
    // - border-slate-700: Тонкая серая рамка
    // - hover:border-amber-500: При наведении рамка станет оранжевой
    // - hover:-translate-y-1: При наведении карточка чуть всплывет вверх
    // - transition-all: Чтобы все эффекты были плавными
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-amber-500 hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
      {/* 2. ЗАГЛУШКА ДЛЯ КАРТИНКИ (ВЕРХНЯЯ ЧАСТЬ) */}
      {/* Градиент вместо фото. group-hover увеличивает иконку при наведении на карточку */}
      <div className="h-32 bg-gradient-to-br from-indigo-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
        <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">👾</span>
        {/* Декоративная полоска снизу картинки */}
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
      </div>

      {/* 3. КОНТЕНТ (НИЖНЯЯ ЧАСТЬ) */}
      <div className="p-5">
        {/* Заголовок и CR */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-white leading-tight truncate pr-2" title={data.name}>
            {data.name}
          </h2>

          {/* Бейдж для Уровня Угрозы (CR) */}
          <div className="flex flex-col items-end shrink-0">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">CR</span>
            <span className="text-amber-400 font-mono font-bold text-lg leading-none">{data.challenge_rating}</span>
          </div>
        </div>

        {/* Описание (Размер, Тип, Мировоззрение) */}
        {/* capitalize делает первую букву заглавной (beast -> Beast) */}
        <p className="text-slate-400 text-sm mb-4 italic capitalize border-b border-slate-700/50 pb-3">
          {data.size} {data.type}, {data.alignment}
        </p>

        {/* 4. СЕТКА ХАРАКТЕРИСТИК (AC и HP) */}
        <div className="grid grid-cols-2 gap-3">
          {/* Блок Брони (AC) */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-xs text-slate-500 font-bold uppercase mb-1">Armor Class</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">🛡️</span>
              <span className="text-white font-mono font-bold">{data.armor_class}</span>
            </div>
          </div>
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-xs text-slate-500 font-bold uppercase mb-1">Speed</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">🛡️</span>
              <span className="text-white font-mono font-bold">{data.speed.walk}</span>
            </div>
          </div>

          {/* Блок Здоровья (HP) */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-xs text-slate-500 font-bold uppercase mb-1">Hit Points</span>
            <div className="flex items-center gap-1">
              <span className="text-red-400 text-sm">❤️</span>
              {/* Если HP > 100, цвет зеленый, иначе белый */}
              <span className={`font-mono font-bold ${data.hit_points > 100 ? 'text-green-400' : 'text-white'}`}>
                {data.hit_points}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
