import { Inter, Cairo } from 'next/font/google';
import { languages } from '../i18n/settings';
import { dir } from 'i18next';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={lng === 'ar' ? cairo.className : inter.className}>
        {children}
      </body>
    </html>
  );
}