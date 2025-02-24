export async function getDictionary(locale) {
  try {
    const data = await import(`@/locales/${locale}.json`);
    return data.default;
  } catch (error) {
    console.error("Помилка завантаження локалізації:", error);
    return {};
  }
}
