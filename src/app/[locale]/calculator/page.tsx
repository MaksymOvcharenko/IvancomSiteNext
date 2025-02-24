"use client";
import { useParams } from 'next/navigation';

const Services = () => {
  const params = useParams();
  console.log('Rendering Services for locale:', params.locale); // locale тепер у params

  return <h1>Сторінка Калькулятор для {params.locale}</h1>;
};

export default Services;
