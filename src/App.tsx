import React, { useEffect, useState } from 'react';
import MonsterCard, { Monster } from './components/MonsterCard';

export default function App() {
  // Состояние для хранения списка из 20 монстров
  const [monsters, setMonsters] = useState<Monster[]>([]);
  // Состояние загрузки, чтобы показать спиннер
  const [isLoading, setIsLoading] = useState(true);
  const [monster] = useState<Monster[]>([]);

  // 2. useEffect срабатывает один раз при запуске компонента (пустой массив [])
  useEffect(() => {
    const fetchAndShuffleMonsters = async () => {
      setIsLoading(true);
      try {
        // Запрашиваем сразу 100 монстров, чтобы было из чего выбирать
        const response = await fetch('https://api.open5e.com/monsters/?limit=100');
        const data = await response.json();

        // Получаем массив результатов
        const allMonsters = data.results;

        // 3. Магия перемешивания (простой способ перемешать массив)
        const shuffled = [...allMonsters].sort(() => 0.5 - Math.random());

        // 4. Берем первые 20 элементов из перемешанного массива
        const selectedTwenty = shuffled.slice(0, 20);

        // Сохраняем их в состояние
        setMonsters(selectedTwenty);
      } catch (error) {
        console.error('Ошибка при загрузке монстров:', error);
      } finally {
        // Выключаем загрузку в любом случае
        setIsLoading(false);
      }
    };

    fetchAndShuffleMonsters();
  }, []);

  // Отображение загрузки
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  // Главный рендер
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl mb-8">Поиск Монстров</h1>

      {/* Зона фильтров */}
      {/*<div className="mb-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700">*/}
      {/*    <CRSlider*/}
      {/*        initialValue={filters.cr}*/}
      {/*        onChange={handleCrChange}*/}
      {/*    />*/}
      {/*    /!* Сюда потом добавишь <TypeFilter /> *!/*/}
      {/*</div>*/}

      {/* Зона контента */}
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {monsters.map((m) => (
            <MonsterCard key={m.slug} data={m} />
          ))}
        </div>
      )}
    </div>
  );
}
