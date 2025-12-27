import React from 'react';
import StatsUiComponent from './StatsUiComponent';

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
export const STAT_ICONS = {
  speed: '💨',
  strength: '💪',
  dexterity: '🏹',
  constitution: '🩸',
  intelligence: '🧠',
  wisdom: '🦉',
  charisma: '🎭',
  perception: '👁️',
  actions: '⚔️',
  special_abilities: '✨',
} as const; // as const делает поля read-only
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
        <div className="grid grid-cols-3 gap-2 mb-4">
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

          {/* --- 1. ОСНОВНЫЕ ХАРАКТЕРИСТИКИ (СЕТКА 3x2) --- */}
          {/* Strength (Твой пример) */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">STR</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">{STAT_ICONS.strength}</span>
              <span className="text-white font-mono font-bold">{data.strength}</span>
            </div>
          </div>

          {/* Dexterity */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">DEX</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">{STAT_ICONS.dexterity}</span>
              <span className="text-white font-mono font-bold">{data.dexterity}</span>
            </div>
          </div>

          {/* Constitution */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">CON</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">{STAT_ICONS.constitution}</span>
              <span className="text-white font-mono font-bold">{data.constitution}</span>
            </div>
          </div>

          {/* Intelligence */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">INT</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">{STAT_ICONS.intelligence}</span>
              <span className="text-white font-mono font-bold">{data.intelligence}</span>
            </div>
          </div>

          {/* Wisdom */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">WIS</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">{STAT_ICONS.wisdom}</span>
              <span className="text-white font-mono font-bold">{data.wisdom}</span>
            </div>
          </div>

          {/* Charisma */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">CHA</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">{STAT_ICONS.charisma}</span>
              <span className="text-white font-mono font-bold">{data.charisma}</span>
            </div>
          </div>
        </div>

        {/* --- 2. ДОПОЛНИТЕЛЬНЫЕ ПАРАМЕТРЫ --- */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          {/* Perception */}
          {/* Проверяем, есть ли perception (иногда оно null) */}
          {data.perception !== undefined && (
            <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
              <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">Passive Perception</span>
              <div className="flex items-center gap-1">
                <span className="text-slate-400 text-sm">{STAT_ICONS.perception}</span>
                <span className="text-white font-mono font-bold">{data.perception}</span>
              </div>
            </div>
          )}

          {/* Speed (Добавил, так как это важно) */}
          <div className="bg-slate-900/50 p-2 rounded-lg flex flex-col items-center border border-slate-700/50">
            <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">Speed</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-sm">{STAT_ICONS.speed}</span>
              {/* API может возвращать объект или строку, лучше привести к строке если что */}
              <span className="text-white font-mono font-bold text-xs truncate max-w-[100px] text-center">
                {typeof data.speed === 'object'
                  ? JSON.stringify(data.speed).replace(/[{"}]/g, '').replace(/:/g, ' ')
                  : data.speed}
              </span>
            </div>
          </div>
        </div>

        {/* --- 3. СПОСОБНОСТИ (SPECIAL ABILITIES) --- */}
        {/* Рендерим только если массив не пустой */}
        {data.special_abilities && data.special_abilities.length > 0 && (
          <div className="mb-4">
            <h3 className="text-amber-500 font-bold text-sm mb-2 flex items-center gap-2">
              {STAT_ICONS.special_abilities} Special Abilities
            </h3>
            <div className="space-y-2">
              {data.special_abilities.map((ability: any) => (
                // Используем тот же стиль контейнера, но с items-start и w-full
                <div key={ability.name} className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 text-sm">
                  <span className="text-purple-400 font-bold block mb-1">{ability.name}</span>
                  <p className="text-slate-300 leading-relaxed text-xs">{ability.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 4. ДЕЙСТВИЯ (ACTIONS) --- */}
        {data.actions && data.actions.length > 0 && (
          <div>
            <h3 className="text-amber-500 font-bold text-sm mb-2 flex items-center gap-2">
              {STAT_ICONS.actions} Actions
            </h3>
            <div className="space-y-2">
              {data.actions.map((action: any) => (
                <div key={action.name} className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 text-sm">
                  <span className="text-white font-bold block mb-1 border-b border-slate-700 pb-1">{action.name}</span>
                  <p className="text-slate-300 leading-relaxed text-xs mt-1">{action.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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
  );
}
