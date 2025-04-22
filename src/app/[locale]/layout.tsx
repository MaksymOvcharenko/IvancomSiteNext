import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import { Analytics } from '@vercel/analytics/next';
 import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "../Provider";
import dynamic from "next/dynamic";
import Loader from "@/components/SiteLoader/Loader";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const availableLocales = ["en", "uk", "pl"];
  if (!availableLocales.includes(locale)) {
    notFound();
  }

  // ОТРИМУЄМО ПЕРЕКЛАДИ
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
          <title>IVANCOM</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rounded+Mplus+1c:wght@300;400;500;700&family=Inter:wght@300;400;500;700&family=Open+Sans:wght@300;400;600&family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>
            <ReduxProvider>
              <Loader>
                <Header />
                <Analytics />
                <SpeedInsights />
                <div>{children}</div>
                <ScrollToTop />
                <Footer />
              </Loader>
            </ReduxProvider>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
