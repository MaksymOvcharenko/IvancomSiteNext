

import styles from "./styles.module.css";
import Sidebar from "@/components/SideBar/SideBar";
import HeroServices from "@/components/HeroServices/HeroServices";
import { FiChevronDown } from "react-icons/fi";
import { useTranslations } from "next-intl";
import ParcelsUaEu from "@/components/UaEu/ParcelsUaEu/ParcelsUaEu";
import MedicinesUaEu from "@/components/UaEu/MedicinesUaEu/MedicinesUaEu";
import AnimalsUaEu from "@/components/UaEu/AnimalsUaEu/AnimalsUaEu";




type Props = {
  searchParams: {
    section?: string;
  };
};

const EuropeToEuropePage = ({ searchParams }: Props) => {
  const openedSection = searchParams.section ?? null;
  const t = useTranslations("EuUa.EuropeToEuropePage");

  return (
    <div className={styles.container}>
      <div className={styles.SideBar}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <section id="hero" className={styles.sectionHero}>
          <HeroServices
            title={t("heroTitle")}
            imageSrc="/image/eueu/hero.jpg"
          />
        </section>

        <section id="parcels" className={styles.section}>
          <details open={openedSection === "parcels"} className={styles.accordionCont}>
            <summary className={styles.accordionTitle}>
              {t("sections.parcels")}
              <FiChevronDown size={32} className={styles.arrow} aria-hidden="true" />
            </summary>
            <div className={styles.accordionContent}>
   <ParcelsUaEu/>
            </div>
          </details>
        </section>

        <section id="medicines" className={styles.section}>
          <details open={openedSection === "medicines"} className={styles.accordionCont}>
            <summary className={styles.accordionTitle}>
              {t("sections.medicines")}
              <FiChevronDown size={32} className={styles.arrow} aria-hidden="true" />
            </summary>
            <div className={styles.accordionContent}>
<MedicinesUaEu/>
            </div>
          </details>
        </section>

        <section id="animals" className={styles.section}>
          <details open={openedSection === "animals"} className={styles.accordionCont}>
            <summary className={styles.accordionTitle}>
              {t("sections.animals")}
              <FiChevronDown size={32} className={styles.arrow} aria-hidden="true" />
            </summary>
            <div className={styles.accordionContent}>
 <AnimalsUaEu/>
            </div>
          </details>
        </section>

        <section id="generators" className={styles.section}>
          <details open={openedSection === "generators"} className={styles.accordionCont}>
            <summary className={styles.accordionTitle}>
              {t("sections.generators")}
              <FiChevronDown size={32} className={styles.arrow} aria-hidden="true" />
            </summary>
            <div className={styles.accordionContent}>

            </div>
          </details>
        </section>

        <section id="move" className={styles.section}>
          <details open={openedSection === "move"} className={styles.accordionCont}>
            <summary className={styles.accordionTitle}>
              {t("sections.move")}
              <FiChevronDown size={32} className={styles.arrow} aria-hidden="true" />
            </summary>
            <div className={styles.accordionContent}>

            </div>
          </details>
        </section>

        <section id="wheels" className={styles.section}>
          <details open={openedSection === "wheels"} className={styles.accordionCont}>
            <summary className={styles.accordionTitle}>
              {t("sections.wheels")}
              <FiChevronDown size={32} className={styles.arrow} aria-hidden="true" />
            </summary>
            <div className={styles.accordionContent}>

            </div>
          </details>
        </section>

        <section id="bicycles" className={styles.section}>
          <details open={openedSection === "bicycles"} className={styles.accordionCont}>
            <summary className={styles.accordionTitle}>
              {t("sections.bicycles")}
              <FiChevronDown size={32} className={styles.arrow} aria-hidden="true" />
            </summary>
            <div className={styles.accordionContent}>

            </div>
          </details>
        </section>

        <section id="documents" className={styles.section}>
          <details open={openedSection === "documents"} className={styles.accordionCont}>
            <summary className={styles.accordionTitle}>
              {t("sections.documents")}
              <FiChevronDown size={32} className={styles.arrow} aria-hidden="true" />
            </summary>
            <div className={styles.accordionContent}>
           
            </div>
          </details>
        </section>
      </div>
    </div>
  );
};

export default EuropeToEuropePage;
