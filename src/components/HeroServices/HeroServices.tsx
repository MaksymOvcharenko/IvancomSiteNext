'use client';

import Image from 'next/image';
import s from './HeroServices.module.css';
import CalculateButton from '@/components/CalculateButton/CalculateButton';

import { useTranslations } from 'next-intl';
import FormHeroBtn from './FormHeroBtn';

type HeroServicesProps = {
  title: string;
  imageSrc: string;
};

const HeroServices = ({ title, imageSrc }: HeroServicesProps) => {
  const t = useTranslations('HeroServices');

  return (
    <div className={s.body}>
      <div className={s.cont}>
        <div className={s.textCont}>
          <h1 className={s.title}>{title}</h1>
          <div className={s.btnCont}>
            <CalculateButton>{t('calculate')}</CalculateButton>
            <FormHeroBtn>{t('apply')}</FormHeroBtn>
          </div>
        </div>

        <div className={s.imgCont}>
          <Image
            alt="Відправити посилку з Польщі"
            src={imageSrc}
            className={s.img}
            width={636}
            height={460}
             quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
