import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bestiary 5e - Dungeon Master Helper',
  description: 'Найди идеальное испытание для своих героев',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
