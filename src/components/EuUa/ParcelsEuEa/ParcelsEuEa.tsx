import AttentionBlock from "@/components/AttentionBlock/AttentionBlock";
import s from "./ParcelsEuEa.module.css";
import DeliveryTable from "@/components/DeliveryTable/DeliveryTable";
import SelectorEuUa from "@/components/SelectorEuUa/SelectorEuUa";
type WarningItem = {
  text: string;
  linkText?: string;
  linkHref?: string;
};
const attentionTexts: WarningItem[] = [
  {
    text: 'Автоматично страхуємо відправлення: +1% від оголошеної вартості до суми доставки.'
  },
  {
    text: 'Вартість доставки рахується на основі фактичної або об\'ємної ваги (обирається більше значення).'
  },
  {
    text: 'В таблиці цін вказані чіткі вагові діапазони (від та до). При перевищенні ваги, відправлення відноситься до наступної категоріїї. Наприклад, вага посилки 10,1 кг = діапазон 10-15 кг.'
  },
  {
    text: 'Ціни включають вартість доставки по Україні до відділення або поштомату (через наших партнерів – Нову Пошту).'
  },
  {
    text: 'Адресна доставка сплачується окремо: + 15 zł за кожне вантажне місце.'
  },
  {
    text: 'На посилки вище 1000 zł є комісія: +10% на всю різницю перевищення. Приклад: 1500-1000=500х10%=50 zł (комісія) + вартість відправлення.'
  },
  {
    text: 'Вартість посилок від одного відправника плюсується, якщо вони їдуть одним рейсом. На суму вище 1000 zł нараховується комісія +10% на всю різницю перевищення.',
    linkText: 'шукай тут',
    linkHref: 'ivancom.eu/uk#schedule'
  },
  {
    text: 'Відправлення комплекта автомобільних номерних знаків коштує 100 зл + 1% страховий платіж від оголошеної вартості.'
  },
  {
    text: 'Є можливість відправити посилку в сумці/валізі (тільки на вантажне відділення НП за доплатою 35-50 зл в залежності від габаритів та ваги посилки).'
  }
];
export type DeliveryRow = {
  weight: string;
  price: string;
};

 

export type DeliveryTableData = {
  title: string;
  country?: string;
    rows: DeliveryRow[];
  notes:  string[]
};

export const deliveryWithNotes: DeliveryTableData = {
  title: 'Доставка з відділень в Польщі до партнерських відділень в Україні',
  rows: [
    { weight: 'до 5 кг', price: '*55 zł' },
    { weight: '5 – 10 кг', price: '*70 zł' },
    { weight: '10 – 15 кг', price: '*90 zł' },
    { weight: '15 – 20 кг', price: '*110 zł' },
    { weight: '20 – 25 кг', price: '*130 zł' },
    { weight: 'Більше 25 кг', price: '*5,5 zł/кг' },
  ],
  notes: [
    '* вартість не включає страховий платіж (1% від оголошеної вартості посилки)',
    '** ціна на великогабаритні цільні посилки (техніка, килим, меблі і т.д.)',
    '*** якщо посилка перевищує 120см, то дораховується +8зл до вартості',
    '**** якщо посилка більше 30кг фактичної або обʼємної ваги, дораховується 12зл до вартості',
  ]
};
const ParcelsEuEa = () => {
  return (
      <div className={s.body}>
          <h3 className={s.title}>Дізнайся вартість доставки з країн Європи до України та відправляй легко!</h3>
          <DeliveryTable data={deliveryWithNotes} />
         <h3 className={s.title}>Термін доставки посилок з Польщі до відділення в Україні до 5 днів від дати рейсу</h3>
          <AttentionBlock items={attentionTexts} /> 
          <h3 className={s.title}>Відправка з IVANCOM: швидко та легко в кілька кроків!</h3>
          <SelectorEuUa/>
    </div>
  );
};

export default ParcelsEuEa;
