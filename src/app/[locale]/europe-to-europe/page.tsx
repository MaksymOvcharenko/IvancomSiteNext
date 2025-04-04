
import styles from "./styles.module.css";
import Sidebar from "@/components/SideBar/SideBar";
import HeroServices from "@/components/HeroServices/HeroServices";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import EuEuParcels from "@/components/EuEu/EuEuParcels/EuEuParcels";
import TransfersEuEu from "@/components/EuEu/TransfersEuEu/TransfersEuEu";

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
              Доставка відправлень між відділеннями Ivancom
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}>
              <EuEuParcels />
            </div>
          </details>
        </section>

        <section id="move" className={styles.section}>
          <details
            open={openedSection === "move"}
            className={styles.accordionCont}
          >
            <summary className={styles.accordionTitle}>
              Переїзди
              <FiChevronDown
                size={32}
                className={styles.arrow}
                aria-hidden="true"
              />
            </summary>
            <div className={styles.accordionContent}>
              <TransfersEuEu/>
            </div>
          </details>
        </section>
      </div>
    </div>
  );
};

export default EuropeToEuropePage;
