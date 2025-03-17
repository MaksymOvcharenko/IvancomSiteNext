"use client"
import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import styles from './Faq.module.css';

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className={styles.disclosureButton}>
          <span>{t('faq.question1.question')}</span>
          <ChevronDownIcon className={`${open ? styles.iconOpen : styles.iconClosed}`} />
        </Disclosure.Button>
        <Disclosure.Panel className={styles.disclosurePanel}>
          <p>{t('faq.question1.answer')}</p>
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
          <p>{t('faq.question2.answer')}</p>
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
          <p>{t('faq.question3.answer')}</p>
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
          <p>{t('faq.question4.answer')}</p>
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
          <p>{t('faq.question5.answer')}</p>
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
          <p>{t('faq.question6.answer')}</p>
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
          <p>{t('faq.question7.answer')}</p>
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
          <p>{t('faq.question8.answer')}</p>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
</div>

  );
};

export default Faq;
