import type { Metadata } from 'next';
import './globals.css';
import Navbar from './(sections)/Navbar';
import { ScrollProgress } from '@/components/scroll-progress';

export const metadata: Metadata = {
  title: 'Faisal Odunuga',
  description: 'Software Engineer',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link href='https://fonts.cdnfonts.com/css/cabinet-grotesk' rel='stylesheet' />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        />
      </head>
      <body className={``}>
        <ScrollProgress />
        <Navbar />
        <main className=' max-w-7xl mx-auto px-4 md:px-10 space-y-[10rem]'>{children}</main>
      </body>
    </html>
  );
}
