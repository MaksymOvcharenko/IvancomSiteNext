"use client";
import { Provider } from "react-redux";
import { notFound } from "next/navigation";

import { store } from "./store/index.js";
import Header from "./components/Header/Header.jsx";
import { NextIntlClientProvider } from "next-intl";
export default function RootLayout({ children, params }) {
  const locale = params?.locale || "en"; // Переконайся, що locale завжди є

  let messages;
  try {
    messages = require(`./locales/${locale}/common.json`); // Завантажуємо відповідний файл локалізації
  } catch (error) {
    return notFound(); // Якщо немає файлу — 404
  }

  return (
    <html lang={locale}>
      <body>
        <Provider store={store}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
