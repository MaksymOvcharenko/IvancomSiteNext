

import BranchInfo from "@/components/Contacts/Branch/Branch";
import styles from "./style.module.css"
import HeroContacts from '@/components/Contacts/ContactsHero/ContactsHero';
import { useTranslations } from "next-intl";
import DeliveryInstructions from "@/components/DeliveryInstructions/DeliveryInstructions";
export type BranchKey = "krakow" | "wroclaw" | "warsaw" | "katowice" | "kielce";

export interface Branch {
  key: BranchKey;
  city: string;
  schedule: string;
  phone: string;
  viberLink: string;
  telegramLink: string;
  email: string;
  address: string;
  mapImage: string;
  mapLink: string;
}
const Services = () => {
  const t = useTranslations("contacts");
  
// const branches = [
//   {
//     city: t('krakow'),
//     schedule: `${t('monday_to_sunday')}: 09:00 - 18:00`,
//     phone: "+48 570 371 048",
//     viberLink: "viber://chat?number=%2B48570371048",
//     telegramLink: "http://t.me/+48570371048",
//     email: "ivancom.krakow@gmail.com",
//     address: "al. Jana Pawła II 154, 31-982 Kraków, Polska",
//     mapLink: "https://maps.app.goo.gl/ykvjW89CuR5ouPYC7",
//     mapImage: "/image/contacts/krakow.jpg"
//   },
//   {
//     city: t('wroclaw'),
//     schedule: `${t('monday_to_sunday')}: 09:00 - 18:00`,
//     phone: "+48 730 567 890",
//     viberLink: "viber://chat?number=%2B48730567890",
//     telegramLink: "http://t.me/+48730567890",
//     email: "ivancom.wroclaw@gmail.com",
//     address: "al. Armii Krajowej 4A/1 Centrum AB Wrocław, Polska",
//     mapLink: "https://maps.app.goo.gl/dE1qCKRNUS1XYgyB7",
//     mapImage: "/image/contacts/wroclaw.jpg"
//   },
//   {
//     city: t('warsaw'),
//     schedule: `${t('monday_to_sunday')}: 10:00 - 18:00`,
//     phone: "+48 692 736 603",
//     viberLink: "viber://chat?number=%2B48692736603",
//     telegramLink: "http://t.me/+48692736603",
//     email: "ivancom.warszawa@gmail.com",
//     address: "Skierniewicka 21/7, local Ivancom,01-230 Warszawa (станція метро Plocka)",
//     mapLink: "https://maps.app.goo.gl/UhAmnU9uSPM4Fdeo6",
//     mapImage: "/image/contacts/warzsawa.jpg"
//   },
//   {
//     city: t('katowice'),
//     schedule: `${t('monday_to_friday')}: 09:00 - 20:00, ${t('saturday_to_sunday')}: 09:00 - 18:00`,
//     phone: "+48 576 248 744",
//     viberLink: "viber://chat?number=%2B48576248744",
//     telegramLink: "http://t.me/+48576248744",
//     email: "ivancom.katowice@gmail.com",
//     address: "Jana III Sobieskiego 11/1, 40-082 Katowice",
//     mapLink: "https://maps.app.goo.gl/wbyjisu4qewHK4sYA",
//     mapImage: "/image/contacts/katowice.jpg"
//   },
  
// ];
const branches: Branch[] =  [
  {
    key: "krakow", // 👈 NEW
    city: t('krakow'),
    schedule: `${t('monday_to_sunday')}: 09:00 - 18:00`,
    phone: "+48 570 371 048",
    viberLink: "viber://chat?number=%2B48570371048",
    telegramLink: "http://t.me/+48570371048",
    email: "ivancom.krakow@gmail.com",
    address: "al. Jana Pawła II 154, 31-982 Kraków, Polska",
    mapLink: "https://maps.app.goo.gl/ykvjW89CuR5ouPYC7",
    mapImage: "/image/contacts/krakow.jpg"
  },
  {
    key: "wroclaw",
    city: t('wroclaw'),
    schedule: `${t('monday_to_sunday')}: 09:00 - 18:00`,
    phone: "+48 730 567 890",
    viberLink: "viber://chat?number=%2B48730567890",
    telegramLink: "http://t.me/+48730567890",
    email: "ivancom.wroclaw@gmail.com",
    address: "al. Armii Krajowej 4A/1 Centrum AB Wrocław, Polska",
    mapLink: "https://maps.app.goo.gl/dE1qCKRNUS1XYgyB7",
    mapImage: "/image/contacts/wroclaw.jpg"
  },
  {
    key: "warsaw",
    city: t('warsaw'),
    schedule: `${t('monday_to_sunday')}: 10:00 - 18:00`,
    phone: "+48 692 736 603",
    viberLink: "viber://chat?number=%2B48692736603",
    telegramLink: "http://t.me/+48692736603",
    email: "ivancom.warszawa@gmail.com",
    address: "Skierniewicka 21/7, local Ivancom,01-230 Warszawa (станція метро Plocka)",
    mapLink: "https://maps.app.goo.gl/UhAmnU9uSPM4Fdeo6",
    mapImage: "/image/contacts/warzsawa.jpg"
  },
  {
    key: "katowice",
    city: t('katowice'),
    schedule: `${t('monday_to_friday')}: 09:00 - 20:00, ${t('saturday_to_sunday')}: 09:00 - 18:00`,
    phone: "+48 576 248 744",
    viberLink: "viber://chat?number=%2B48576248744",
    telegramLink: "http://t.me/+48576248744",
    email: "ivancom.katowice@gmail.com",
    address: "Jana III Sobieskiego 11/1, 40-082 Katowice",
    mapLink: "https://maps.app.goo.gl/wbyjisu4qewHK4sYA",
    mapImage: "/image/contacts/katowice.jpg"
  },
];



  return <>
    <section id="hero" className={styles.section}><HeroContacts /></section>
    <section id="contacts" className={styles.section}><BranchInfo branches={branches} /></section>
    <section id="contacts"className={styles.section}><DeliveryInstructions/></section>
  </>
};

export default Services;
