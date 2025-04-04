import { GetServerSideProps } from 'next';
  // Компонент для сайдбару
import styles from './styles.module.css';
import Sidebar from '@/components/SideBar/SideBar';



const UaToEu = () => {
  return (
    <div className={styles.container}>
     
 <div className={styles.SideBar}><Sidebar /></div>
      <div className={styles.content}>
        <h1>Доставка з України в Європу</h1>
        
        <section id="parcels" className={styles.section}>
          <h2>Parcels</h2>
          <p>Тут буде інформація про доставку посилок.</p>
        </section>

        <section id="medicines" className={styles.section}>
          <h2>Medicines</h2>
          <p>Тут буде інформація про доставку ліків.</p>
        </section>

        <section id="animals" className={styles.section}>
          <h2>Animals</h2>
          <p>Тут буде інформація про перевезення тварин.</p>
        </section>

        <section id="generators" className={styles.section}>
          <h2>Generators</h2>
          <p>Тут буде інформація про транспортування генераторів.</p>
        </section>

        <section id="move" className={styles.section}>
          <h2>Move</h2>
          <p>Тут буде інформація про переїзди.</p>
        </section>

        <section id="wheels" className={styles.section}>
          <h2>Wheels</h2>
          <p>Тут буде інформація про доставку коліс та шин.</p>
        </section>

        <section id="bicycles" className={styles.section}>
          <h2>Bicycles</h2>
          <p>Тут буде інформація про перевезення велосипедів.</p>
        </section>

        <section id="documents" className={styles.section}>
          <h2>Documents</h2>
          <p>Тут буде інформація про доставку документів.</p>
        </section>
      </div>
      
    </div>
  );
};



export default UaToEu;
// import styles from './styles.module.css';
// import Sidebar from '@/components/SideBar/SideBar';

// type Props = {
//   searchParams: {
//     section?: string;
//   };
// };

// const EuropeToEuropePage = ({ searchParams }: Props) => {
//   const openedSection = searchParams.section ?? null;

//   return (
//     <div className={styles.container}>
//       <div className={styles.SideBar}>
//         <Sidebar />
//       </div>

//       <div className={styles.content}>
//         <h1>Доставка По Польщі</h1>

//         <section id="hero" className={styles.section}>
//           <h2>Головна</h2>
//           <p>хіро секція</p>
//         </section>

//         <section id="parcels" className={styles.section}>
//           <details open={openedSection === 'parcels'}>
//             <summary className={styles.accordionTitle}>По Польщі</summary>
//             <div className={styles.accordionContent}>
//               <p>Розкриваючийся аккордеон посилок по Польщі.</p>
//               {/* Тут може бути хоч fetch() на сервері */}
//             </div>
//           </details>
//         </section>

//         <section id="move" className={styles.section}>
//           <details open={openedSection === 'move'}>
//             <summary className={styles.accordionTitle}>Переїзди</summary>
//             <div className={styles.accordionContent}>
//               <p>Розкриваючийся аккордеон переїздів по Польщі.</p>
//               {/* Тут теж серверний контент */}
//             </div>
//           </details>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default EuropeToEuropePage;
