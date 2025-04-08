
import styles from "./styles.module.css";
import Sidebar from "@/components/SideBar/SideBar";
import HeroServices from "@/components/HeroServices/HeroServices";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import EuEuParcels from "@/components/EuEu/EuEuParcels/EuEuParcels";
import TransfersEuEu from "@/components/EuEu/TransfersEuEu/TransfersEuEu";
import PackItButton from "@/components/PackIt/PackItButton/PackItButton";
import SelectorEuUa from "@/components/SelectorEuUa/SelectorEuUa";
import ParcelsEuEa from "@/components/EuUa/ParcelsEuEa/ParcelsEuEa";
import MedicinesEuEa from "@/components/EuUa/MedicinesEuEa/MedicinesEuEa";
import AnimalsEuUa from "@/components/EuUa/AnimalsEuUa/AnimalsEuUa";
import GeneratorsEuUa from "@/components/EuUa/GeneratorsEuUa/GeneratorsEuUa";

type Props = {
  searchParams: {
    section?: string;
  };
};

const EuropeToEuropePage = ({ searchParams }: Props) => {
  const openedSection = searchParams.section ?? null;

  return (
    <div className={styles.container}>
      <div className={styles.SideBar}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <section id="hero" className={styles.sectionHero}>
          <HeroServices
            title="Комфортна та безпечна доставка – наш пріоритет"
            imageSrc="/image/eueu/hero.jpg"
          />
        </section>
        <section id="parcels" className={styles.section}>
          <details
            open={openedSection === "parcels"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
              Доставка посилок
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}>
              <ParcelsEuEa/>
              
            </div>
          </details>
        </section>
        <section id="medicines" className={styles.section}>
          <details
            open={openedSection === "medicines"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
              Ліки та ін’єкційна косметика
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}>
              <MedicinesEuEa/>
            </div>
          </details>
        </section>
        <section id="animals" className={styles.section}>
          <details
            open={openedSection === "animals"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
             Перевезення тварин
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}>
              <AnimalsEuUa/>
            </div>
          </details>
        </section>
        <section id="generators" className={styles.section}>
          <details
            open={openedSection === "generators"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
               Генератори
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}>
              <GeneratorsEuUa/>
            </div>
          </details>
        </section>
        <section id="move" className={styles.section}>
          <details
            open={openedSection === "move"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
              Переїзд з України в Європу
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}></div>
          </details>
        </section>
        <section id="wheels" className={styles.section}>
          <details
            open={openedSection === "wheels"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
              Шини та диски
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}></div>
          </details>
        </section>
        <section id="bicycles" className={styles.section}>
          <details
            open={openedSection === "bicycles"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
              Велосипеди
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}></div>
          </details>
        </section>
        <section id="documents" className={styles.section}>
          <details
            open={openedSection === "documents"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
              Доставка документів
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}></div>
          </details>
        </section>
      </div>
    </div>
  );
};

export default EuropeToEuropePage;
