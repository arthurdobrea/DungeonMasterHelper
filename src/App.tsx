import React, { useEffect, useState } from 'react';
import MonsterCard, { Monster } from './components/MonsterCard';
import SliderFilter from './components/SliderFilter';
import PostFetchCheckBoxFilter from './components/PostFetchCheckBoxFilter';

export default function App() {
  // --- СОСТОЯНИЕ (State) ---

  // Храним список монстров
  const [monsters, setMonsters] = useState<Monster[]>([]);
  // Храним текущее значение CR (из фильтра)
  const [selectedCr, setSelectedCr] = useState('1');
  const [selectedSpeedType, setSelectedSpeedType] = useState('');
  // Статус загрузки
  const [isLoading, setIsLoading] = useState(false);
  // Статус ошибки
  const [error, setError] = useState<string | null>(null);

  // --- ЛОГИКА (Logic) ---

  // Функция для запроса к API
  // Она будет срабатывать каждый раз, когда меняется selectedCr
  useEffect(() => {
    const fetchMonsters = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Используем Open5e API с фильтром по challenge_rating
        const response = await fetch(`https://api.open5e.com/monsters/?cr=${selectedCr}`);

        if (!response.ok) throw new Error('Ошибка при загрузке данных');

        const data = await response.json();

        let filteredItems = data.results;

        if (selectedSpeedType.length !== 0) {
          filteredItems = data.results.filter((monster: Monster) => {
            return monster.speed.hasOwnProperty(selectedSpeedType.toLowerCase());
          });
        }
        setMonsters(filteredItems || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла ошибка');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMonsters();
  }, [selectedCr, selectedSpeedType]); // <--- Это "зависимость": useEffect перезапустится при изменении CR

  // --- ВЕРСТКА (UI) ---

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* Шапка */}
      <header className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-5xl font-serif font-bold text-amber-500 mb-4 uppercase tracking-tighter">Bestiary 5e</h1>
        <p className="text-slate-400">Найди идеальное испытание для своих героев</p>
      </header>
      {/* Секция фильтров */}
      <section className="max-w-7xl mx-auto mb-12 flex justify-center">
        <SliderFilter onFinalChange={(val: string) => setSelectedCr(val)} />
      </section>
      <section className="max-w-7xl mx-auto mb-12 flex justify-center">
        <PostFetchCheckBoxFilter onFinalChange={(val: string) => setSelectedSpeedType(val)} />
      </section>

      {/* Основной контент */}
      <main className="max-w-7xl mx-auto">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-amber-500 mb-4"></div>
            <p className="text-amber-500 animate-pulse">Магия поиска в процессе...</p>
          </div>
        ) : error ? (
          <div className="text-center p-10 bg-red-900/20 border border-red-900 rounded-xl">
            <p className="text-red-400">⚠️ {error}</p>
          </div>
        ) : monsters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {monsters.map((monster) => (
              <MonsterCard key={monster.slug} data={monster} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-xl font-serif">Монстры с таким уровнем угрозы не найдены в свитках...</p>
          </div>
        )}
      </main>
    </div>
  );
}
