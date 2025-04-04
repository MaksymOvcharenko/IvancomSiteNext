"use client";

import { LiaCoinsSolid } from "react-icons/lia";
import s from "./EuEuParcels.module.css";
import { CiClock1 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";

import { useParams } from "next/navigation";
import Link from "next/link";

const EuEuParcels = () => {
  const { locale } = useParams();
  return (
    <div className={s.body}>
      <div className={s.header}>
        <p className={s.descr}>
          Пересилайте посилки швидко та зручно між стаіонарними відділеннями
          IVANCOM по всій Польщі! Надійна доставка без зайвих затримок – просто
          принесіть посилку у найближче відділення, а ми подбаємо про решту.
        </p>
        <div className={s.contHeader}>
          <div className={s.tariffs}>
            <h3 className={s.tarifTitle}>
              <LiaCoinsSolid size={30} />
              Тариф
            </h3>
            <p className={s.tarifDesc}>3 зл/кг фактичної або об`ємної ваги</p>
            <ul className={s.tarifList}>
              <li className={s.item}>
                <p className={s.itemTitle}>Страховий платіж </p>
                <p className={s.itemDesc}>1% від оціночної вартості</p>
              </li>
              <li className={s.item}>
                <p className={s.itemTitle}>Мінімальна вартість</p>
                <p className={s.itemDesc}>
                  40 зл до 5 кг фактичної або об`ємної ваги
                </p>
              </li>
            </ul>
          </div>
          <div className={s.tariffs}>
            <h3 className={s.tarifTitle}>
              <FaRegClock size={26} />
              Термін
            </h3>
            <p className={s.tarifDesc}>Термін доставки від 1 до 8 днів</p>
          </div>
        </div>
      </div>
      <div className={s.price}>
        <h3 className={s.priceTitle}>Відділення далеко? Це не проблема!</h3>
        <p className={s.priceDescr}>
          Викличте кур’єра IVANCOM, і ми самі подбаємо про все. Зручність і
          швидкість – це те, що ми гарантуємо!
        </p>
        <div className={s.priceTable}>
          <h4 className={s.tableTitle}>
            Доставка з відділень в Польщі до партнерських відділень в Україні
          </h4>
          <ul className={s.tableList}>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>Краків</div>
              <div className={s.secondColumn}>Від 40 zł</div>
            </li>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>Варшава</div>
              <div className={s.secondColumn}>Від 30 zł</div>
            </li>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>Катовіце</div>
              <div className={s.secondColumn}>Від 30 zł</div>
            </li>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>Вроцлав</div>
              <div className={s.secondColumn}>Від 30 zł</div>
            </li>
            <li className={s.tableItem}>
              <div className={s.firstColumn}>Кельце</div>
              <div className={s.secondColumn}>Безкоштовно</div>
            </li>
          </ul>
          <Link href={`/${locale}/contacts`} className={s.priceBtn}>
            Контакти
          </Link>
        </div>
      </div>
      <div className={s.steps}>
        <h3 className={s.stepTitleMain}>
          Відправляй просто, як раз, два, три!
        </h3>
        <ul className={s.stepsList}>
          <li className={s.stepItem}>
            <div className={s.step}>1</div>
            <div className={s.steptext}>
              <p className={s.stepTitle}>Запакуй</p>
              <p className={s.stepDescr}>
                Запаковуй свою посилку так, як зручно тобі!
              </p>
            </div>
          </li>
          <li className={s.stepItem}>
            <div className={s.step}>2</div>
            <div className={s.steptext}>
              <p className={s.stepTitle}>Відправ</p>
              <p className={s.stepDescr}>
                Принеси посилку, здійсни оплати – і вона вже в дорозі!
              </p>
            </div>
          </li>
          <li className={s.stepItem}>
            <div className={s.step}>3</div>
            <div className={s.steptext}>
              <p className={s.stepTitle}>Ні про що не хвилюйся</p>
              <p className={s.stepDescr}>
                Отримувач отримує смс коли його посилка прибуде до відділення
                IVANCOM
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EuEuParcels;
