export const monsterFetchService = {
  fetchMonsters: async (selectedCr: string, selectedSpeedType: string) => {
    const response = await fetch(`https://api.open5e.com/monsters/?cr=${selectedCr}?=`);

    if (!response.ok) throw new Error('Ошибка при загрузке данных');

    const data = await response.json();

    let filteredItems = data.results;

    return filteredItems;
  },
};
