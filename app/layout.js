import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'German X',
  description: 'Blog of German X',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
