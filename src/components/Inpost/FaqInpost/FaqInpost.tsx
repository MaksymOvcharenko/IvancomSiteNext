"use client"
import React from 'react'
import styles from "./FaqInpost.module.css"
import { useTranslations } from 'next-intl';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import FormattedText from '@/components/FormattedText/FormattedText';
const FaqInpost = () => {
    const t = useTranslations('inpost.faq');
      const faqData = [
    { id: 1, question: t('question1'), answer: t('answer1') },
    { id: 2, question: t('question2'), answer: t('answer2') },
    { id: 3, question: t('question3'), answer: t('answer3') },
    { id: 4, question: t('question4'), answer: t('answer4') },
    { id: 5, question: t('question5'), answer: <FormattedText>{t.raw('answer5')}</FormattedText> },
    { id: 6, question: t('question6'), answer: <FormattedText>{t.raw('answer6')}</FormattedText> },
    { id: 7, question: t('question7'), answer: t('answer7') },
    { id: 8, question: t('question8'), answer: t('answer8') },
    { id: 9, question: t('question9'), answer: t('answer9') },
    { id: 10, question: t('question10'), answer: t('answer10') },
  ];
  return (
      <div className={styles.cont}>
          <h2 className={styles.title}>{t("title")}</h2>
          <div className={styles.accordion}>
      {faqData.map(({ id, question, answer }) => (
        <Disclosure key={id}>
          {({ open }) => (
            <div className={styles.item}>
              <Disclosure.Button className={styles.button}>
                {question}
                <span className={open ? styles.iconOpen : styles.iconClosed}><ChevronDownIcon/></span>
              </Disclosure.Button>
              <Disclosure.Panel className={styles.panel}>
                {answer}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
          </div>
          <h2 className={styles.title}>{t("titleVideo")}</h2>
          <div className={styles.videoCont}><iframe className={styles.video} src="https://www.youtube.com/embed/HAKYnpv2cU8"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>

    </div>
  )
}

export default FaqInpost