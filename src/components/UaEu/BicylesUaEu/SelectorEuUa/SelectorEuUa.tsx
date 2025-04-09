// "use client"

// import { useState } from 'react';

// import styles from './SelectorEuUa.module.css';
// import FromPolandBlock from './FromPolandBlock/FromPolandBlock';
// import FromEuBlock from './FromEuBlock/FromEuBlock';

// const SelectorEuUa = () => {
//   const [activeTab, setActiveTab] = useState<'pl' | 'eu'>('pl');

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.tabs}>
//         <button
//           className={activeTab === 'pl' ? styles.active : ''}
//           onClick={() => setActiveTab('pl')}
//         >
//           З Польщі
//         </button>
//         <button
//           className={activeTab === 'eu' ? styles.active : ''}
//           onClick={() => setActiveTab('eu')}
//         >
//           З країн ЄС
//         </button>
//       </div>

//       <div className={styles.content}>
//         {activeTab === 'pl' ? <FromPolandBlock /> : <FromEuBlock />}
//       </div>
//     </div>
//   );
// };

// export default SelectorEuUa;
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import styles from './SelectorEuUa.module.css';
import FromPolandBlock from './FromPolandBlock/FromPolandBlock';
import FromEuBlock from './FromEuBlock/FromEuBlock';

const SelectorEuUa = () => {
  const [activeTab, setActiveTab] = useState<'pl' | 'eu'>('pl');
  const t = useTranslations('SelectorEuUABicycles');

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'pl' ? styles.active : ''}
          onClick={() => setActiveTab('pl')}
        >
          {t('tabs.pl')}
        </button>
        <button
          className={activeTab === 'eu' ? styles.active : ''}
          onClick={() => setActiveTab('eu')}
        >
          {t('tabs.eu')}
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'pl' ? <FromPolandBlock /> : <FromEuBlock />}
      </div>
    </div>
  );
};

export default SelectorEuUa;
