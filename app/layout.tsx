import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BALISA YESHITILA MARBLE MINING',
  description: 'Premium Ethiopian Marble – Timeless Beauty, Global Excellence'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-navy text-white">{children}</body>
    </html>
  );
}
