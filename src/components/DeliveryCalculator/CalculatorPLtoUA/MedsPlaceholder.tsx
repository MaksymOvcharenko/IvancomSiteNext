// "use client";
// import { useMemo, useState } from "react";
// import { useTranslations } from "next-intl";
// import styles from "./styles/MedsPlaceholder.module.css";

// /**
//  * Правила тарифів (PLN) — витяг із твоїх картинок/умов.
//  * Якщо щось підправиш у бізнес-логіці — просто зміни тут.
//  */
// const PRICES = {
//   tablets: [
//     { key: "to20", label: "до 20 шт в уп.", price: 12 },
//     { key: "to50", label: "до 50 шт в уп.", price: 15 }, // якщо у тебе інше значення — підправ тут
//     { key: "gt50", label: "від 50 шт в уп.", price: 18 },
//   ],
//   liquids: [
//     { key: "to100", label: "до 100 мл/гр", price: 9 },
//     { key: "gt100", label: "від 100 мл/гр", price: 12 },
//   ],
//   supplements: [
//     { key: "to100pcs", label: "до 100 шт", price: 12 },
//     { key: "gt100pcs", label: "від 100 шт", price: 24 },
//   ],
//   injectionCosmetics: [
//     { key: "botoxFridge", label: "Ботокс (холодильник)", price: 40 },
//     { key: "to100", label: "Препарати до 100 мл/гр", price: 10 },
//     { key: "100to250", label: "від 100 до 250 мл/гр", price: 12 },
//     { key: "250to500", label: "від 250 до 500 мл/гр", price: 18 },
//     { key: "ampoules", label: "Ампули до 10 мл", price: 6 },
//     { key: "syringes", label: "Шприци/філери/інʼєкції краси", price: 30 },
//   ],
// };

// // доставка по Польщі (доплати)
// const POLAND_COURIER_CITIES = [
//   { city: "Краків", extra: 40 },
//   { city: "Варшава", extra: 30 },
//   { city: "Катовіце", extra: 30 },
//   { city: "Вроцлав", extra: 30 },
//   { city: "Кельце", extra: 0 },
// ];

// // InPost по Польщі — +20 за відправлення (з твоєї таблиці)
// const POLAND_INPOST_EXTRA = 20;

// // Температурний режим 2–8°C (доступний лише до Польщі)
// const TEMP_EXTRA = {
//   ivankom: 50, // до відділення IVANKOM
//   inpost: 110, // InPost
// };

// // Доставка по ЄС (євро)
// const EU_SIZE = [
//   { key: "A", label: "Розмір A (8×38×60)", priceEur: 8 },
//   { key: "B", label: "Розмір B (19×38×60)", priceEur: 13 },
//   { key: "C", label: "Розмір C (38×41×60)", priceEur: 14 },
// ];

// type CategoryKey = "tablets" | "liquids" | "supplements" | "injectionCosmetics";

// interface Item {
//   id: number;
//   category: CategoryKey;
//   optionKey: string;       // ключ із PRICES[category]
//   qty: number;             // кількість упаковок/позицій
//   mushroomExtra: boolean;  // для БАДів/вітамінів +5 за позицію
// }

// export default function MedsCalculator() {
//   const t = useTranslations("CalcMedsUI"); // необов'язково — можна замінити на твої ключі
//   const [items, setItems] = useState<Item[]>([]);
//   const [counter, setCounter] = useState(1);

//   // доставка/доплати
//   const [needTemp, setNeedTemp] = useState<boolean>(false);
//   const [tempMethod, setTempMethod] = useState<"ivankom" | "inpost">("ivankom");

//   const [plDeliveryType, setPlDeliveryType] = useState<"none" | "courier" | "inpost">("none");
//   const [plCourierCity, setPlCourierCity] = useState(POLAND_COURIER_CITIES[0].city);

//   const [euSize, setEuSize] = useState<"" | "A" | "B" | "C">("");

//   // Додати позицію за вибраною категорією/опцією
// //   const addItem = (category: CategoryKey, optionKey: string, mushroomExtra = false) => {
// //     setItems((prev) => [
// //       ...prev,
// //       { id: counter, category, optionKey, qty: 1, mushroomExtra },
// //     ]);
// //     setCounter((n) => n + 1);
// //   };
 
// const addItem = (category: CategoryKey, optionKey: string, mushroomExtra = false) => {
//   setItems(prev => {
//     const idx = prev.findIndex(
//       i => i.category === category && i.optionKey === optionKey && i.mushroomExtra === mushroomExtra
//     );
//     if (idx !== -1) {
//       // інкрементуємо кількість
//       const next = [...prev];
//       next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
//       return next;
//     }
//     // додаємо нову позицію, якщо такої ще нема
//     return [...prev, { id: counter, category, optionKey, qty: 1, mushroomExtra }];
//   });
//   setCounter(n => n + 1); // лічильник росте лише коли нова позиція (можна лишити так — не критично)
// };

//   const setQty = (id: number, qty: number) => {
//     setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
//   };

//   const toggleMushroom = (id: number) => {
//     setItems((prev) => prev.map((i) => (i.id === id ? { ...i, mushroomExtra: !i.mushroomExtra } : i)));
//   };

//   const removeItem = (id: number) => {
//     setItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   // прайс за одиницю позиції
//   const priceForOption = (category: CategoryKey, optionKey: string) => {
//     const arr = PRICES[category] as { key: string; price: number }[];
//     const found = arr.find((o) => o.key === optionKey);
//     return found ? found.price : 0;
//   };

//   const calc = useMemo(() => {
//     const perItem = items.map((i) => {
//       const base = priceForOption(i.category, i.optionKey);
//       const mushroom = i.mushroomExtra ? 5 : 0; // +5 zł/позиція, якщо містить грибні екстракти/форми
//       const unit = base + mushroom;
//       return {
//         ...i,
//         unitPrice: unit,
//         sum: unit * i.qty,
//       };
//     });

//     const units = items.reduce((acc, i) => acc + i.qty, 0);
//     let itemsCost = perItem.reduce((acc, r) => acc + r.sum, 0);

//     // Мінімалка: 50 zł до 4 одиниць ліків
//     if (units > 0 && units <= 4 && itemsCost < 50) {
//       itemsCost = 50;
//     }

//     // Температурний режим (доступний тільки до Польщі)
//     let tempExtra = 0;
//     if (needTemp) {
//       tempExtra = tempMethod === "ivankom" ? TEMP_EXTRA.ivankom : TEMP_EXTRA.inpost;
//     }

//     // Доставка по Польщі
//     let polandExtra = 0;
//     if (plDeliveryType === "courier") {
//       const city = POLAND_COURIER_CITIES.find((c) => c.city === plCourierCity);
//       polandExtra = city ? city.extra : 0;
//     } else if (plDeliveryType === "inpost") {
//       polandExtra = POLAND_INPOST_EXTRA;
//     }

//     // Доставка по Європі (євро)
//     let euExtraEur = 0;
//     if (euSize) {
//       const s = EU_SIZE.find((s) => s.key === euSize);
//       euExtraEur = s ? s.priceEur : 0;
//     }

//     const totalPLN = itemsCost + tempExtra + polandExtra;

//     return {
//       perItem,
//       units,
//       itemsCost,
//       tempExtra,
//       polandExtra,
//       euExtraEur,
//       totalPLN,
//     };
//   }, [items, needTemp, tempMethod, plDeliveryType, plCourierCity, euSize]);

//   return (
//     <div className={styles.container}>
//       <h3 className={styles.title}>Калькулятор ліків з України</h3>

//       {/* Блоки швидкого додавання позицій */}
//       <div className={styles.cards}>
//         {/* Таблетки/свічки */}
//         <div className={styles.card}>
//           <div className={styles.cardHead}>Таблетки/свічки</div>
//           <div className={styles.cardBody}>
//             {PRICES.tablets.map((o) => (
//               <button key={o.key} className={styles.addBtn} onClick={() => addItem("tablets", o.key)}>
//                 {o.label} - {o.price} zł
//                  <span className={styles.badge}>×{items.find(i=>i.category==="tablets"&&i.optionKey===o.key)?.qty || 0}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Рідини/мазі/порошки */}
//         <div className={styles.card}>
//           <div className={styles.cardHead}>Рідини/мазі/порошки</div>
//           <div className={styles.cardBody}>
//             {PRICES.liquids.map((o) => (
//               <button key={o.key} className={styles.addBtn} onClick={() => addItem("liquids", o.key)}>
//                 {o.label} — {o.price} zł
//                     <span className={styles.badge}>×{items.find(i=>i.category==="liquids"&&i.optionKey===o.key)?.qty || 0}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* БАДи/вітаміни */}
//         <div className={styles.card}>
//           <div className={styles.cardHead}>БАДи/вітаміни</div>
//           <div className={styles.cardBody}>
//             {PRICES.supplements.map((o) => (
//               <button
//                 key={o.key}
//                 className={styles.addBtn}
//                 onClick={() => addItem("supplements", o.key, false)}
//               >
//                 {o.label} — {o.price} zł
//                 <span className={styles.badge}>×{items.find(i=>i.category==="supplements"&&i.optionKey===o.key&&i.mushroomExtra===false)?.qty || 0}</span>
//               </button>
//             ))}
//             <p className={styles.noteSmall}>* Для грибних екстрактів/форм — +5 zł/позицію</p>
//           </div>
//         </div>

//         {/* Інʼєкційна косметика */}
//         <div className={styles.card}>
//           <div className={styles.cardHead}>Інʼєкційна косметика</div>
//           <div className={styles.cardBody}>
//             {PRICES.injectionCosmetics.map((o) => (
//               <button key={o.key} className={styles.addBtn} onClick={() => addItem("injectionCosmetics", o.key)}>
//                 {o.label}  <br /> {o.price} zł
//                 <span className={styles.badge}>×{items.find(i=>i.category==="injectionCosmetics"&&i.optionKey===o.key)?.qty || 0}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Список вибраних позицій */}
//       {!!items.length && (
//         <div className={styles.listWrap}>
//           {calc.perItem.map((row) => (
//             <div className={styles.row} key={row.id}>
//               <div className={styles.rowLeft}>
//                 <div className={styles.rowTitle}>
//                   {labelFor(row.category, row.optionKey)}
//                 </div>
//                 {row.category === "supplements" && (
//                   <label className={styles.inlineCheck}>
//                     <input
//                       type="checkbox"
//                       checked={row.mushroomExtra}
//                       onChange={() => toggleMushroom(row.id)}
//                     />
//                     Містить грибні екстракти/форми (+5 zł)
//                   </label>
//                 )}
//               </div>

//               <div className={styles.rowRight}>
//                 <div className={styles.qtyBox}>
//                   <span>К-сть</span>
//                   <input
//                     className={styles.qtyInput}
//                     type="number"
//                     min={1}
//                     value={row.qty}
//                     onChange={(e) => setQty(row.id, Number(e.target.value))}
//                   />
//                 </div>

//                 <div className={styles.money}>
//                   {/* <div className={styles.priceLine}>
//                     {row.unitPrice} zł × {row.qty}
//                   </div> */}
//                   <div className={styles.priceSum}>{row.sum} zł</div>
//                 </div>

//                 <button className={styles.removeBtn} onClick={() => removeItem(row.id)}>
//                   Видалити
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Доплати та доставка */}
//       <div className={styles.options}>
//         <div className={styles.optionCol}>
//           <div className={styles.optTitle}>Температурний режим (2–8°C, тільки до Польщі)</div>
//           <label className={styles.inlineCheck}>
//             <input type="checkbox" checked={needTemp} onChange={() => setNeedTemp(!needTemp)} />
//             Потрібно 2–8°C
//           </label>
//           {needTemp && (
//             <div className={styles.radioGroup}>
//               <label className={styles.radioItem}>
//                 <input
//                   type="radio"
//                   name="temp"
//                   checked={tempMethod === "ivankom"}
//                   onChange={() => setTempMethod("ivankom")}
//                 />
//                 До відділення IVANKOM (+{TEMP_EXTRA.ivankom} zł)
//               </label>
//               <label className={styles.radioItem}>
//                 <input
//                   type="radio"
//                   name="temp"
//                   checked={tempMethod === "inpost"}
//                   onChange={() => setTempMethod("inpost")}
//                 />
//                 InPost (+{TEMP_EXTRA.inpost} zł)
//               </label>
//             </div>
//           )}
//         </div>

//         <div className={styles.optionCol}>
//           <div className={styles.optTitle}>Доставка по Польщі</div>
//           <div className={styles.radioGroup}>
//             <label className={styles.radioItem}>
//               <input
//                 type="radio"
//                 name="pld"
//                 checked={plDeliveryType === "none"}
//                 onChange={() => setPlDeliveryType("none")}
//               />
//               Без доплати
//             </label>
//             <label className={styles.radioItem}>
//               <input
//                 type="radio"
//                 name="pld"
//                 checked={plDeliveryType === "courier"}
//                 onChange={() => setPlDeliveryType("courier")}
//               />
//               Курʼєр IVANKOM (місто)
//             </label>
//             {plDeliveryType === "courier" && (
//               <select
//                 className={styles.select}
//                 value={plCourierCity}
//                 onChange={(e) => setPlCourierCity(e.target.value)}
//               >
//                 {POLAND_COURIER_CITIES.map((c) => (
//                   <option key={c.city} value={c.city}>
//                     {c.city} — від {c.extra} zł
//                   </option>
//                 ))}
//               </select>
//             )}
//             <label className={styles.radioItem}>
//               <input
//                 type="radio"
//                 name="pld"
//                 checked={plDeliveryType === "inpost"}
//                 onChange={() => setPlDeliveryType("inpost")}
//               />
//               InPost (+{POLAND_INPOST_EXTRA} zł)
//             </label>
//           </div>
//         </div>

//         <div className={styles.optionCol}>
//           <div className={styles.optTitle}>Доставка по Європі (євро)</div>
//           <select
//             className={styles.select}
//             value={euSize}
//             onChange={(e) => setEuSize(e.target.value as any)}
//           >
//             <option value="">Без доставки по ЄС</option>
//             {EU_SIZE.map((s) => (
//               <option key={s.key} value={s.key}>
//                 {s.label} — €{s.priceEur}
//               </option>
//             ))}
//           </select>
//           <p className={styles.noteSmall}>* Терміни рахуються з дня виїзду з України.</p>
//         </div>
//       </div>

//       {/* Результат */}
//       <div className={styles.result}>
//         <div className={styles.resultRow}>
//           <span>Одиниць ліків:</span>
//           <b>{calc.units}</b>
//         </div>
//         <div className={styles.resultRow}>
//           <span>Послуга за ліки (з мінімалкою):</span>
//           <b>{calc.itemsCost} zł</b>
//         </div>
//         {calc.tempExtra > 0 && (
//           <div className={styles.resultRow}>
//             <span>Температурний режим:</span>
//             <b>{calc.tempExtra} zł</b>
//           </div>
//         )}
//         {calc.polandExtra > 0 && (
//           <div className={styles.resultRow}>
//             <span>Доставка по Польщі:</span>
//             <b>{calc.polandExtra} zł</b>
//           </div>
//         )}
//         {calc.euExtraEur > 0 && (
//           <div className={styles.resultRow}>
//             <span>Доставка по Європі:</span>
//             <b>€{calc.euExtraEur}</b>
//           </div>
//         )}
//         <div className={styles.total}>
//           Разом (PLN): <span>{calc.totalPLN} zł</span>
//         </div>
//       </div>

//       {/* Важливо */}
//       <div className={styles.alert}>
//         <b>ВАЖЛИВО:</b>
//         <ul>
//           <li>Заборонено надсилати ліки, що містять наркотичні речовини.</li>
//           <li>Для грибних екстрактів/форм застосовується тариф БАДів/вітамінів +5 zł/позицію.</li>
//           <li>Мінімальна вартість послуги — 50 zł до 4 одиниць ліків.</li>
//           <li>Адресна курʼєрська доставка оплачується додатково.</li>
//           <li>Ліки мають бути у заводській упаковці (без розсипання з блістерів).</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// function labelFor(category: CategoryKey, optionKey: string) {
//   const map: Record<CategoryKey, { key: string; label: string }[]> = {
//     tablets: PRICES.tablets as any,
//     liquids: PRICES.liquids as any,
//     supplements: PRICES.supplements as any,
//     injectionCosmetics: PRICES.injectionCosmetics as any,
//   };
//   const found = map[category].find((o) => o.key === optionKey);
//   return `${titleForCat(category)}\n${found?.label ?? ""}`;;
// }

// function titleForCat(c: CategoryKey) {
//   switch (c) {
//     case "tablets": return "Таблетки/свічки";
//     case "liquids": return "Рідини/мазі/порошки";
//     case "supplements": return "БАДи/вітаміни";
//     case "injectionCosmetics": return "Інʼєкційна косметика";
//   }
// }
"use client";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./styles/MedsPlaceholder.module.css";

/** Прайси (без текстів — усі тексти підтягуємо з перекладів) */
const PRICES = {
  tablets: [
    { key: "to20", price: 12 },
    { key: "to50", price: 15 },
    { key: "gt50", price: 18 },
  ],
  liquids: [
    { key: "to100", price: 9 },
    { key: "gt100", price: 12 },
  ],
  supplements: [
    { key: "to100pcs", price: 12 },
    { key: "gt100pcs", price: 24 },
  ],
  injectionCosmetics: [
    { key: "botoxFridge", price: 40 },
    { key: "to100",       price: 10 },
    { key: "100to250",    price: 12 },
    { key: "250to500",    price: 18 },
    { key: "ampoules",    price: 6 },
    { key: "syringes",    price: 30 },
  ],
} as const;

// доставка по Польщі (доплати)
const POLAND_COURIER_CITIES = [
  { city: "Краків", extra: 40 },
  { city: "Варшава", extra: 30 },
  { city: "Катовіце", extra: 30 },
  { city: "Вроцлав", extra: 30 },
  { city: "Кельце", extra: 0 },
];

// InPost по Польщі — +20 за відправлення
const POLAND_INPOST_EXTRA = 20;

// Температурний режим 2–8°C (доступний лише до Польщі)
const TEMP_EXTRA = {
  ivankom: 50, // до відділення IVANKOM
  inpost: 110, // InPost
};

// Доставка по ЄС (євро)
const EU_SIZE = [
  { key: "A", labelKey: "options.eu.sizeA", priceEur: 8 },
  { key: "B", labelKey: "options.eu.sizeB", priceEur: 13 },
  { key: "C", labelKey: "options.eu.sizeC", priceEur: 14 },
];

type CategoryKey = "tablets" | "liquids" | "supplements" | "injectionCosmetics";

interface Item {
  id: number;
  category: CategoryKey;
  optionKey: string;   // ключ з PRICES[category]
  qty: number;         // кількість
  mushroomExtra: boolean; // для БАДів/вітамінів +5/позицію
}

export default function MedsCalculator() {
  const t = useTranslations("CalcMeds");

  const [items, setItems] = useState<Item[]>([]);
  const [counter, setCounter] = useState(1);

  // доставка/доплати
  const [needTemp, setNeedTemp] = useState(false);
  const [tempMethod, setTempMethod] = useState<"ivankom" | "inpost">("ivankom");

  const [plDeliveryType, setPlDeliveryType] = useState<"none" | "courier" | "inpost">("none");
  const [plCourierCity, setPlCourierCity] = useState(POLAND_COURIER_CITIES[0].city);

  const [euSize, setEuSize] = useState<"" | "A" | "B" | "C">("");

  // Додати позицію (інкрементуємо, якщо така вже є)
  const addItem = (category: CategoryKey, optionKey: string, mushroomExtra = false) => {
    setItems(prev => {
      const idx = prev.findIndex(
        i => i.category === category && i.optionKey === optionKey && i.mushroomExtra === mushroomExtra
      );
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { id: counter, category, optionKey, qty: 1, mushroomExtra }];
    });
    setCounter(n => n + 1);
  };

  const setQty = (id: number, qty: number) => {
    setItems(prev => prev.map(i => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  };

  const toggleMushroom = (id: number) => {
    setItems(prev => prev.map(i => (i.id === id ? { ...i, mushroomExtra: !i.mushroomExtra } : i)));
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  // прайс за одиницю позиції
  const priceForOption = (category: CategoryKey, optionKey: string) => {
    // @ts-expect-error index by category
    const arr: { key: string; price: number }[] = PRICES[category];
    const found = arr.find(o => o.key === optionKey);
    return found ? found.price : 0;
  };

  const calc = useMemo(() => {
    const perItem = items.map(i => {
      const base = priceForOption(i.category, i.optionKey);
      const mushroom = i.mushroomExtra ? 5 : 0; // +5 zł/позиція
      const unit = base + mushroom;
      return { ...i, unitPrice: unit, sum: unit * i.qty };
    });

    const units = items.reduce((acc, i) => acc + i.qty, 0);
    let itemsCost = perItem.reduce((acc, r) => acc + r.sum, 0);

    // Мінімалка: 50 zł до 4 одиниць ліків
    if (units > 0 && units <= 4 && itemsCost < 50) itemsCost = 50;

    // Температурний режим (тільки Польща)
    let tempExtra = 0;
    if (needTemp) tempExtra = tempMethod === "ivankom" ? TEMP_EXTRA.ivankom : TEMP_EXTRA.inpost;

    // Доставка по Польщі
    let polandExtra = 0;
    if (plDeliveryType === "courier") {
      const city = POLAND_COURIER_CITIES.find(c => c.city === plCourierCity);
      polandExtra = city ? city.extra : 0;
    } else if (plDeliveryType === "inpost") {
      polandExtra = POLAND_INPOST_EXTRA;
    }

    // Доставка по Європі (EUR)
    let euExtraEur = 0;
    if (euSize) {
      const s = EU_SIZE.find(s => s.key === euSize);
      euExtraEur = s ? s.priceEur : 0;
    }

    const totalPLN = itemsCost + tempExtra + polandExtra;

    return { perItem, units, itemsCost, tempExtra, polandExtra, euExtraEur, totalPLN };
  }, [items, needTemp, tempMethod, plDeliveryType, plCourierCity, euSize]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t("title")}</h3>

      {/* Блоки швидкого додавання */}
      <div className={styles.cards}>
        {/* Таблетки/свічки */}
        <div className={styles.card}>
          <div className={styles.cardHead}>{t("cat.tablets")}</div>
          <div className={styles.cardBody}>
            {PRICES.tablets.map(o => (
              <button key={o.key} className={styles.addBtn} onClick={() => addItem("tablets", o.key)}>
                {t(`prices.tablets.${o.key}`)} — {o.price} zł
                <span className={styles.badge}>
                  ×{items.find(i => i.category === "tablets" && i.optionKey === o.key)?.qty || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Рідини/мазі/порошки */}
        <div className={styles.card}>
          <div className={styles.cardHead}>{t("cat.liquids")}</div>
          <div className={styles.cardBody}>
            {PRICES.liquids.map(o => (
              <button key={o.key} className={styles.addBtn} onClick={() => addItem("liquids", o.key)}>
                {t(`prices.liquids.${o.key}`)} — {o.price} zł
                <span className={styles.badge}>
                  ×{items.find(i => i.category === "liquids" && i.optionKey === o.key)?.qty || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* БАДи/вітаміни */}
        <div className={styles.card}>
          <div className={styles.cardHead}>{t("cat.supplements")}</div>
          <div className={styles.cardBody}>
            {PRICES.supplements.map(o => (
              <button
                key={o.key}
                className={styles.addBtn}
                onClick={() => addItem("supplements", o.key, false)}
              >
                {t(`prices.supplements.${o.key}`)} — {o.price} zł
                <span className={styles.badge}>
                  ×{items.find(i => i.category === "supplements" && i.optionKey === o.key && i.mushroomExtra === false)?.qty || 0}
                </span>
              </button>
            ))}
            <p className={styles.noteSmall}>{t("badges.mushroomNote")}</p>
          </div>
        </div>

        {/* Інʼєкційна косметика */}
        <div className={styles.card}>
          <div className={styles.cardHead}>{t("cat.injectionCosmetics")}</div>
          <div className={styles.cardBody}>
            {PRICES.injectionCosmetics.map(o => (
              <button key={o.key} className={styles.addBtn} onClick={() => addItem("injectionCosmetics", o.key)}>
                {t(`prices.injectionCosmetics.${o.key}`)} — {o.price} zł
                <span className={styles.badge}>
                  ×{items.find(i => i.category === "injectionCosmetics" && i.optionKey === o.key)?.qty || 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Список вибраних позицій */}
      {!!items.length && (
        <div className={styles.listWrap}>
          {calc.perItem.map(row => (
            <div className={styles.row} key={row.id}>
              <div className={styles.rowLeft}>
                <div className={styles.rowTitle}>
                  {`${t(`cat.${row.category}`)}\n${t(`prices.${row.category}.${row.optionKey}`)}`}
                </div>
                {row.category === "supplements" && (
                  <label className={styles.inlineCheck}>
                    <input
                      type="checkbox"
                      checked={row.mushroomExtra}
                      onChange={() => toggleMushroom(row.id)}
                    />
                    {t("selectedList.mushroomExtra")}
                  </label>
                )}
              </div>

              <div className={styles.rowRight}>
                <div className={styles.qtyBox}>
                  <span>{t("selectedList.qty")}</span>
                  <input
                    className={styles.qtyInput}
                    type="number"
                    min={1}
                    value={row.qty}
                    onChange={e => setQty(row.id, Number(e.target.value))}
                  />
                </div>

                <div className={styles.money}>
                  <div className={styles.priceLine}>
                    {row.unitPrice} zł × {row.qty}
                  </div>
                  <div className={styles.priceSum}>{row.sum} zł</div>
                </div>

                <button className={styles.removeBtn} onClick={() => removeItem(row.id)}>
                  {t("buttons.delete")}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Доплати та доставка */}
      <div className={styles.options}>
        <div className={styles.optionCol}>
          <div className={styles.optTitle}>{t("options.temp.title")}</div>
          <label className={styles.inlineCheck}>
            <input type="checkbox" checked={needTemp} onChange={() => setNeedTemp(!needTemp)} />
            {t("options.temp.need")}
          </label>
          {needTemp && (
            <div className={styles.radioGroup}>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="temp"
                  checked={tempMethod === "ivankom"}
                  onChange={() => setTempMethod("ivankom")}
                />
                {t("options.temp.ivankom", { price: TEMP_EXTRA.ivankom })}
              </label>
              <label className={styles.radioItem}>
                <input
                  type="radio"
                  name="temp"
                  checked={tempMethod === "inpost"}
                  onChange={() => setTempMethod("inpost")}
                />
                {t("options.temp.inpost", { price: TEMP_EXTRA.inpost })}
              </label>
            </div>
          )}
        </div>

        <div className={styles.optionCol}>
          <div className={styles.optTitle}>{t("options.pl.title")}</div>
          <div className={styles.radioGroup}>
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="pld"
                checked={plDeliveryType === "none"}
                onChange={() => setPlDeliveryType("none")}
              />
              {t("options.pl.none")}
            </label>
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="pld"
                checked={plDeliveryType === "courier"}
                onChange={() => setPlDeliveryType("courier")}
              />
              {t("options.pl.courier")}
            </label>
            {plDeliveryType === "courier" && (
              <select
                className={styles.select}
                value={plCourierCity}
                onChange={e => setPlCourierCity(e.target.value)}
              >
                {POLAND_COURIER_CITIES.map(c => (
                  <option key={c.city} value={c.city}>
                    {t("options.pl.cityPrice", { city: c.city, price: c.extra })}
                  </option>
                ))}
              </select>
            )}
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="pld"
                checked={plDeliveryType === "inpost"}
                onChange={() => setPlDeliveryType("inpost")}
              />
              {t("options.pl.inpost", { price: POLAND_INPOST_EXTRA })}
            </label>
          </div>
        </div>

        <div className={styles.optionCol}>
          <div className={styles.optTitle}>{t("options.eu.title")}</div>
          <select
            className={styles.select}
            value={euSize}
            onChange={e => setEuSize(e.target.value as any)}
          >
            <option value="">{t("options.eu.none")}</option>
            {EU_SIZE.map(s => (
              <option key={s.key} value={s.key}>
                {t(s.labelKey)} — €{s.priceEur}
              </option>
            ))}
          </select>
          <p className={styles.noteSmall}>{t("options.eu.note")}</p>
        </div>
      </div>

      {/* Результат */}
      <div className={styles.result}>
        <div className={styles.resultRow}>
          <span>{t("result.units")}</span>
          <b>{calc.units}</b>
        </div>
        <div className={styles.resultRow}>
          <span>{t("result.itemsCost")}</span>
          <b>{calc.itemsCost} zł</b>
        </div>
        {calc.tempExtra > 0 && (
          <div className={styles.resultRow}>
            <span>{t("result.temp")}</span>
            <b>{calc.tempExtra} zł</b>
          </div>
        )}
        {calc.polandExtra > 0 && (
          <div className={styles.resultRow}>
            <span>{t("result.pl")}</span>
            <b>{calc.polandExtra} zł</b>
          </div>
        )}
        {calc.euExtraEur > 0 && (
          <div className={styles.resultRow}>
            <span>{t("result.eu")}</span>
            <b>€{calc.euExtraEur}</b>
          </div>
        )}
        <div className={styles.total}>
          {t("result.totalPln")} <span>{calc.totalPLN} zł</span>
        </div>
      </div>

      {/* Важливо */}
      <div className={styles.alert}>
        <b>{t("alert.title")}</b>
        <ul>
          <li>{t("alert.item1")}</li>
          <li>{t("alert.item2")}</li>
          <li>{t("alert.item3")}</li>
          <li>{t("alert.item4")}</li>
          <li>{t("alert.item5")}</li>
        </ul>
      </div>
    </div>
  );
}
