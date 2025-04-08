import { useTranslations } from 'next-intl';
import styles from './AttentionBlock.module.css';
import { FiInfo } from 'react-icons/fi';

type WarningItem = {
  text: string;
  linkText?: string;
  linkHref?: string;
};

type Props = {
  items: WarningItem[];
};

const AttentionBlock = ({ items }: Props) => {
  const t = useTranslations('EuUa.AnimalsEuUa');
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <FiInfo size={28} />
        <p>{ t("important.title")}</p>
      </div>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>
            {item.text}{' '}
            {item.linkHref && item.linkText && (
              <a href={item.linkHref} target="_blank" rel="noopener noreferrer">
                {item.linkText}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttentionBlock;
