"use client"
import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import styles from './Faq.module.css';

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import FormattedText from '../FormattedText/FormattedText';


interface AccordionComponentProps {}

const Faq: FC<AccordionComponentProps> = () => {
  const t = useTranslations('IndexPage');

  const questions = [
    'question1',
    'question2',
    'question3',
    'question4',
    'question5',
    'question6',
    'question7',
    'question8'
  ];

  return (
    <div className={styles.accordionWrapper}>
      <h2 className={styles.title}>{t("faq.faq1")}</h2>
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question1.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <FormattedText>{t.raw('faq.question1.answer')}</FormattedText>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question2.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <FormattedText>{t.raw('faq.question2.answer')}</FormattedText>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question3.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <FormattedText>{t.raw('faq.question3.answer')}</FormattedText>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question4.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <FormattedText>{t.raw('faq.question4.answer')}</FormattedText>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question5.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <FormattedText>{t.raw('faq.question5.answer')}</FormattedText>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question6.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <FormattedText>{t.raw('faq.question6.answer')}</FormattedText>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question7.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <FormattedText>{t.raw('faq.question7.answer')}</FormattedText>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question8.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <FormattedText>{t.raw('faq.question8.answer')}</FormattedText>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
</div>

  );
};

export default Faq;
