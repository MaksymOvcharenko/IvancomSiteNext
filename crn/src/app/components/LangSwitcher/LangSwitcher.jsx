"use client";
import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/navigation";
import { setLocale } from "@/app/store/localeSlice.js";

export default function LanguageSwitcher() {
  const router = useRouter();
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);

  const changeLanguage = (newLocale) => {
    dispatch(setLocale(newLocale));
    router.push(`/${newLocale}`);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("uk")}>🇺🇦 Українська</button>
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => changeLanguage("pl")}>🇵🇱 Polski</button>
    </div>
  );
}
