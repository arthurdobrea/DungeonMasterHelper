# Bestiary 5e - Dungeon Master Helper

Приложение для поиска монстров D&D 5e по уровню угрозы (Challenge Rating).

## Миграция на Next.js

Проект успешно мигрирован с Vite на Next.js 16 с использованием App Router.

### Основные изменения:

1. **Структура проекта:**
   - Добавлена папка `app/` для Next.js App Router
   - `app/layout.tsx` - корневой layout
   - `app/page.tsx` - главная страница (бывший `App.tsx`)
   - `app/globals.css` - глобальные стили
   - Компоненты перемещены в корневую папку `components/`

2. **Конфигурация:**
   - `next.config.ts` - конфигурация Next.js со статическим экспортом
   - `postcss.config.js` - конфигурация PostCSS с @tailwindcss/postcss
   - Обновлен `tsconfig.json` для Next.js
   - Tailwind CSS 4 не требует отдельного конфигурационного файла

3. **Зависимости:**
   - Добавлен `next@16.1.1`
   - Обновлен `react@19` и `react-dom@19`
   - Добавлен `eslint-config-next`
   - Добавлены `autoprefixer` и `postcss`

## Запуск проекта

```bash
# Разработка
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm run start

# Линтинг
npm run lint

# Деплой на GitHub Pages
npm run deploy
```

## Деплой на GitHub Pages

Проект настроен для деплоя на GitHub Pages:

1. Выполните `npm run build` - это создаст статическую версию в папке `out/`
2. Выполните `npm run deploy` - это задеплоит в ветку `gh-pages`

## Технологии

- **Next.js 16** - React фреймворк с App Router
- **React 19** - UI библиотека
- **TypeScript** - типизация
- **Tailwind CSS 4** - стилизация
- **Open5e API** - источник данных о монстрах

## Особенности

- ✅ Статический экспорт для GitHub Pages
- ✅ Server Components по умолчанию
- ✅ Client Components для интерактивности ('use client')
- ✅ Оптимизированная сборка
- ✅ ESLint конфигурация
- ✅ TypeScript строгий режим

## Старые файлы

Следующие файлы больше не используются и могут быть удалены:
- `src/` - старая структура проекта
- `index.html` - не нужен в Next.js
- `vite.config.ts` - заменен на `next.config.ts`
- `tsconfig.node.json` - не нужен в Next.js
- `.vite/` и `dist/` - старые папки сборки

