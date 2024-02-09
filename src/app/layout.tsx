import type {Metadata} from 'next'
import {Inter as CustomFont} from 'next/font/google';
import './globals.css'

import {SITE} from '@/config.js';

const customFont = CustomFont({subsets: ['latin'], variable: '--font-custom'});

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

import Providers from '@/app/componentsT/atoms/Providers';
import Header from '@/app/componentsT/widgets/Header';
import Announcement from '@/app/componentsT/widgets/Announcement';
import Footer from "@/app/components/footer/page";


export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="tracking-tight antialiased text-gray-900 dark:text-white">

    <Providers>
      <Announcement/>
      <Header/>
      {children}
      <Footer/>
    </Providers>
    </body>
    </html>
  )
}

