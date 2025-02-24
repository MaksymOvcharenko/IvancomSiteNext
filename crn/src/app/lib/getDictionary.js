const dictionaries = {
  uk: {
    title: "Привіт!",
    description: "Це українська версія сайту.",
  },
  en: {
    title: "Hello!",
    description: "This is the English version of the site.",
  },
  pl: {
    title: "Cześć!",
    description: "To jest polska wersja strony.",
  },
};

export default function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.uk;
}
