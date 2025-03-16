// components/ServiceCards.tsx
"use client"
import React, { useState } from 'react';



import { useTranslations } from 'next-intl';
import DirectionModal from './DirectionModal/DirectionModal';
import { useParams, useRouter } from 'next/navigation';
import Modal from '../Modal/Modal';
import styles from "./ServiceCards.module.css"

type ServiceCardsProps = {};

const services = [
  { id: 'parcels', label: 'parcels' },
  { id: 'medicines', label: 'medicines' },
//   { id: 'cosmetics', label: 'cosmetics' },
  { id: 'animals', label: 'animals' },
  { id: 'generators', label: 'generators' },
  { id: 'move', label: 'move' },
  { id: 'wheels', label: 'wheels' },
  { id: 'bicycles', label: 'bicycles' },
  { id: 'documents', label: 'documents' },
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
          {services.map(service => (
            <button 
              key={service.id} 
                  onClick={() => handleSelectService(service.id)}
                  className={styles.card}
            >
              <img src='/image/services/package.jpg' className={styles.img} /><div><p>{t(service.label)}</p> <div className={styles.cardBtn}>Обрати</div></div>
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
