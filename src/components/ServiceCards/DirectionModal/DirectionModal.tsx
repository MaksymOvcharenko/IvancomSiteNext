// components/DirectionModal.tsx
import { useTranslations } from 'next-intl';
import React from 'react';
import styles from "./DirectionModal.module.css"
import SvgIcon from '@/components/SvgIcon';
import { IoMdClose } from 'react-icons/io';

type DirectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (direction: string) => void;
};

const directions = [
  { id: 'ukraine-to-europe', label: 'ua_to_eu', label2: 'ua_to_eu2', },
  { id: 'europe-to-ukraine', label: 'eu_to_ua', label2: 'eu_to_ua2' },
  { id: 'europe-to-europe', label: 'eu_to_eu', label2: 'eu_to_eu2' },
];

const DirectionModal: React.FC<DirectionModalProps> = ({ isOpen, onClose, onSelect }) => {
const t = useTranslations("IndexPage.directions");

  if (!isOpen) return null;

  return (
      <div className={styles.modal}>
          <div className={styles.closeBtn} onClick={onClose}>
            <IoMdClose size={40}/>
          </div>
         
          <div className={styles.cont}>
              <div className={styles.icon}><SvgIcon name="directions" width={160} height={40}/></div>
              <p className={styles.title}>{t("title")}</p>
          <div>
              {directions.map(direction => (
                <button 
                  key={direction.id} 
                      onClick={() => onSelect(direction.id)}
                      className={styles.btn}
                >
                  <p>{t(direction.label)}</p><SvgIcon name="sparow"  /><p>{t(direction.label2)}</p>
                </button>
              ))}
          </div>
      </div>
    </div>
  );
};

export default DirectionModal;
