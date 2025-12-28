import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Для статического экспорта (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/DungeonMasterHelper' : '',
  images: {
    unoptimized: true, // Необходимо для статического экспорта
  },
};

export default nextConfig;
