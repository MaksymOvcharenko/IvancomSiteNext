
import { DeliveryTableData } from "@/components/DeliveryTable/DeliveryTable";

export type DeliveryEntry = {
  country: string;
  data: DeliveryTableData;
};

const sharedData = {
  title: 'Вартість доставки партнером INPOST по Європі (кур’єр/поштомат)',
  rows: [
    { weight: 'до 2 кг', price: '€33' },
    { weight: '2–5 кг', price: '€38-47€' },
    { weight: '5–10 кг', price: '€58-€78' },
    { weight: '10–15 кг', price: '€85-€104' },
    { weight: '15–20 кг', price: '€109-€129' },
    { weight: '20–25 кг', price: '€134-€153' },
  ],
  notes: [
    'Термін доставки: 5 днів',
    'Термін відбору з поштомату: 5 днів',
    'Термін відбору з поштопункту: 5 днів',
    '* Термін доставки рахучи з дня рейсу з України',
    '** Максимальні габарити для відправки на поштомат/поштопункт 39 х 38 х 64 см. Максимальна вага 25 кг',
    '*** Страхова вартість, яка включена в тарив €150',
  ],
};

export const europeDeliveryList: DeliveryEntry[] = [
  {
    country: 'Бельгія',
    data: { ...sharedData, country: 'Бельгія' },
  },
  {
    country: 'Франція',
    data: { ...sharedData, country: 'Франція' },
  },
  {
    country: 'Нідерланди',
    data: { ...sharedData, country: 'Нідерланди' },
  },
  {
    country: 'Люксембург',
    data: { ...sharedData, country: 'Люксембург' },
  },
  {
    country: 'Іспанія',
    data: {
      title: sharedData.title,
      country: 'Іспанія',
      rows: sharedData.rows,
      notes: [
        'Термін доставки: 6 днів',
        'Термін відбору з поштомату: 8 днів',
        'Термін відбору з поштопункту: 8 днів',
        ...sharedData.notes.slice(3), // зірочкові примітки
      ],
    },
  },
  {
    country: 'Італія',
    data: {
      title: sharedData.title,
      country: 'Італія',
      rows: sharedData.rows,
      notes: [
        'Термін доставки: 7 днів',
        'Термін відбору з поштомату: 7 днів',
        'Термін відбору з поштопункту: 7 днів',
        ...sharedData.notes.slice(3),
      ],
    },
  },
  {
    country: 'Португалія',
    data: {
      title: sharedData.title,
      country: 'Португалія',
      rows: sharedData.rows,
      notes: [
        'Термін доставки: 7 днів',
        'Термін відбору з поштомату: 8 днів',
        'Термін відбору з поштопункту: 8 днів',
        ...sharedData.notes.slice(3),
      ],
    },
  },
];
