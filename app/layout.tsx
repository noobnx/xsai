import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'XSAI App',
   description: 'Learn project NextJS on Youtube, src="Dev Xịn Đây"',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body className={inter.className}>{children}</body>
         </html>
      </ClerkProvider>
   );
}
