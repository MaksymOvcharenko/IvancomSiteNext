// components/ServiceCards.tsx
"use client"
import React, { useState } from 'react';



import { useTranslations } from 'next-intl';
import DirectionModal from './DirectionModal/DirectionModal';
import { useParams, useRouter } from 'next/navigation';
import Modal from '../Modal/Modal';
import styles from "./ServiceCards.module.css"
import Image from 'next/image';

type ServiceCardsProps = {};

const services = [
  { id: 'parcels', label: 'parcels', img: '/image/services/package2.png' },
  { id: 'medicines', label: 'medicines', img: '/image/services/medicines1.png' },
  // { id: 'cosmetics', label: 'cosmetics', img: '/image/services/cosmetics.jpg' },
  { id: 'animals', label: 'animals', img: '/image/services/animals1.png' },
  { id: 'generators', label: 'generators', img: '/image/services/generator1.png' },
  { id: 'move', label: 'move', img: '/image/services/move1.png' },
  { id: 'wheels', label: 'wheels', img: '/image/services/wheels1.png' },
  { id: 'bicycles', label: 'bicycles', img: '/image/services/bicycles1.png' },
  { id: 'documents', label: 'documents', img: '/image/services/documents1.png' },
];


const ServiceCards: React.FC<ServiceCardsProps> = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
const t = useTranslations("IndexPage.services");
 const { locale } = useParams();
  const handleSelectService = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsModalOpen(true);
  };

  const handleSelectDirection = (direction: string) => {
    if (selectedService) {
      // Направление + услуга передается в URL с учётом локали
      router.push(`/${locale}/${direction}?section=${selectedService}`);
      setIsModalOpen(false);
      setSelectedService(null);
    }
  };

  return (
      <div className={styles.body}>
          <h2 className={styles.title}>{ t("services")}</h2>
      <div className={styles.services}>
          {/* {services.map(service => (
            <button 
              key={service.id} 
                  onClick={() => handleSelectService(service.id)}
                  className={styles.card}
            >
              <img src='/image/services/package.jpg' className={styles.img} /><div><p>{t(service.label)}</p> <div className={styles.cardBtn}>Обрати</div></div>
            </button>
          ))} */}
        {services.map(service => (
  <button 
    key={service.id} 
    onClick={() => handleSelectService(service.id)}
    className={styles.card}
  >
    <div className={styles.imgWrapper}>
      <Image 
        src={service.img} 
        alt={service.label} 
        width={306} 
        height={393} 
        className={styles.img}
      />
    </div>
    <div>
      <p>{t(service.label)}</p>
      <div className={styles.cardBtn}>Обрати</div>
    </div>
  </button>
))}
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} ><DirectionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelect={handleSelectDirection} 
      /></Modal>
    </div>
  );
};

export default ServiceCards;
