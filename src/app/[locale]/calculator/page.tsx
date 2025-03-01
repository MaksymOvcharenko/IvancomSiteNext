"use client";
import DeliveryCalculator from '@/components/DeliveryCalculator/DeliveryCalculator';
import { useParams } from 'next/navigation';
import styles from "./page.module.css";
const Services = () => {
  const params = useParams();
  console.log('Rendering Services for locale:', params.locale); // locale тепер у params

  return <>
   <div className={styles.body}>
      
      <DeliveryCalculator />
   </div>
  </>
};

export default Services;
