"use client";

import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

import { setLanguage } from "@/app/store/languageSlice.js";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("common");
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useSelector((state) => state.language);

  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
    router.push(pathname, { locale: lang });
  };

  return (
    <header>
      <nav>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("uk")}>UK</button>
        <button onClick={() => changeLanguage("pl")}>PL</button>
      </nav>
      <h1>{t("welcome")}</h1>
    </header>
  );
};

export default Header;
