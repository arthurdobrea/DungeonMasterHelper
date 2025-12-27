import { defineConfig } from 'vite';
// @ts-ignore
import react from '@vitejs/plugin-react';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/DungeonMasterHelper/', // <--- ВОТ ЭТА СТРОКА КРИТИЧЕСКИ ВАЖНА
});