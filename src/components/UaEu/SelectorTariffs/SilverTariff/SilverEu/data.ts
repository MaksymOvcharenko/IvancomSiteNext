
import { DeliveryTableData } from "@/components/DeliveryTable/DeliveryTable";

export type DeliveryEntry = {
  country: string;
  data: DeliveryTableData;
};

const sharedData = {
  title: 'Вартість доставки партнером INPOST по Європі (кур’єр/поштомат)',
  rows: [
    { weight: 'до 2 кг', price: '€18' },
    { weight: '2–5 кг', price: '€23' },
    { weight: '5–10 кг', price: '€34' },
    { weight: '10–15 кг', price: '€41' },
    { weight: '15–20 кг', price: '€45' },
    { weight: '20–25 кг', price: '€53' },
  ],
  notes: [
    'Термін доставки рахується з дня виїзду посилки з України.',
    'Термін відбору з поштомату: 5 днів',
    'Термін зберігання в поштопункті: 5 днів',
    'Обмеження за розмірами та вагою: максимальні габарити: 39 × 38 × 64 см; максимальна вага: 25 кг',
    
    'У вартість тарифу включене страхування €150.',
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
        'Термін відбору з поштомату: 7 днів',
        'Термін відбору з поштопункту: 7 днів',
        ...sharedData.notes.slice(3),
      ],
    },
  },
];
