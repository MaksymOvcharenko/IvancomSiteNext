"use client";
import FormWorldUA from '@/components/FormWorldUa/FormWorldUa';
import { useParams } from 'next/navigation';

const Services = () => {
  const params = useParams();
  console.log('Rendering Services for locale:', params.locale); // locale тепер у params

  return <></>;
};

export default Services;
