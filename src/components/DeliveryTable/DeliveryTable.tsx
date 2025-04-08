// import styles from './DeliveryTable.module.css';
// import { FaGlobeEurope } from 'react-icons/fa';

// export type DeliveryRow = {
//   weight: string;
//   price: string;
// };

// export type DeliveryTableData = {
//   title: string;
//   country?: string;
//   rows: DeliveryRow[];
// };

// type Props = {
//   data: DeliveryTableData;
// };

// const DeliveryTable = ({ data }: Props) => {
//   const { title, country, rows } = data;

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.header}>
//         <p className={styles.title}>{title}</p>
//         {country && (
//           <div className={styles.country}>
//             <FaGlobeEurope size={16} />
//             <span>{country}</span>
//           </div>
//         )}
//       </div>

//       <div className={styles.table}>
//         <div className={styles.row}>
//           {rows.map((row, idx) => (
//             <div className={styles.cellHeader} key={idx}>
//               {row.weight}
//             </div>
//           ))}
//         </div>
//         <div className={styles.row}>
//           {rows.map((row, idx) => (
//             <div className={styles.cellBody} key={idx}>
//               {row.price}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeliveryTable;
import styles from './DeliveryTable.module.css';
import { FaGlobeEurope } from 'react-icons/fa';

export type DeliveryRow = {
  weight: string;
  price: string;
};

export type DeliveryTableData = {
  title: string;
  country?: string;
  rows: DeliveryRow[];
  notes?: string[];
};

type Props = {
  data: DeliveryTableData;
};

const DeliveryTable = ({ data }: Props) => {
  const { title, country, rows, notes } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        {country && (
          <div className={styles.country}>
            <FaGlobeEurope size={16} />
            <span>{country}</span>
          </div>
        )}
      </div>

      <div className={styles.table}>
        <div className={styles.row}>
          {rows.map((row, idx) => (
            <div className={styles.cellHeader} key={idx}>
              {row.weight}
            </div>
          ))}
        </div>
        <div className={styles.row}>
          {rows.map((row, idx) => (
            <div className={styles.cellBody} key={idx}>
              {row.price}
            </div>
          ))}
        </div>
      </div>

      {notes && notes.length > 0 && (
        <ul className={styles.notes}>
          {notes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeliveryTable;
