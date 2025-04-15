import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rounded+Mplus+1c:wght@300;400;500;700&family=Inter:wght@300;400;500;700&family=Open+Sans:wght@300;400;600&family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>
            <ReduxProvider>
              <Loader>
                <Header />
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
