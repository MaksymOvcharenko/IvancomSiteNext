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
import FullScreenPopup from "@/components/FullScreenPopup/FullScreenPopup";
import KeyCrmChatWidget from "@/components/KeyCrmChatWidget/KeyCrmChatWidget";
import Script from "next/script";
import GtmPageView from "@/components/analytics/GtmPageView";

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
        {/* GTM head */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K75222W');
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rounded+Mplus+1c:wght@300;400;500;700&family=Inter:wght@300;400;500;700&family=Open+Sans:wght@300;400;600&family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: `
  if (!window.fbq) {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '689234196807365');
    fbq('track', 'PageView');
  }
`}} />

  <noscript>
    <img height="1" width="1" style={{display: "none"}}
      src="https://www.facebook.com/tr?id=689234196807365&ev=PageView&noscript=1"
    />
  </noscript>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K75222W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
            <GtmPageView />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>
            <ReduxProvider>
              <Loader>
                <Header />
                <Analytics />
                <SpeedInsights />
                <FullScreenPopup />
                <div>{children}</div>
                <ScrollToTop />
                <Footer />
              </Loader>
            </ReduxProvider>
          </div>
        </NextIntlClientProvider>
        <KeyCrmChatWidget />
      </body>
    </html>
  );
}
