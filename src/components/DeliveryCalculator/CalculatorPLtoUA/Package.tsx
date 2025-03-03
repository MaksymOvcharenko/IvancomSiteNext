

import { useTranslations } from "next-intl";
import styles from "./styles/Package.module.css";

interface PackageProps {
  id: number;
  removePackage: (id: number) => void;
  addPackage: (id: number) => void;
}

const Package: React.FC<PackageProps> = ({ id, removePackage, addPackage }) => {
    const t = useTranslations('Calculator');

  return (
    <div className={styles.package}>
      <h2 className={styles.title}>{t("package")} {id}</h2>
      <div className={styles.dimensions}>
        <label className={styles.label}>{t("length")} (см): <input className={styles.input} type="number" id={`length${id}`} /></label>
        <label className={styles.label}>{t("width")} (см): <input className={styles.input} type="number" id={`width${id}`} /></label>
        <label className={styles.label}>{t("height")} (см): <input className={styles.input} type="number" id={`height${id}`} /></label>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>{t("actualWeight")} (кг): <input className={styles.inputWeight} type="number" id={`weight${id}`} /></label>
      </div>
      <div className={styles.button} >
        <button className={styles.addButton} onClick={() => addPackage(id)}><svg width="17" height="17" viewBox="0 0 17 17" fill="#05173b" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M3.69008 0.265311C6.8869 -0.088437 10.1131 -0.088437 13.3099 0.265311C15.0799 0.463364 16.5079 1.85489 16.7156 3.62808C17.0948 6.86498 17.0948 10.135 16.7156 13.3719C16.5079 15.1451 15.0799 16.5366 13.3099 16.7346C10.1131 17.0885 6.8869 17.0885 3.69008 16.7346C1.92008 16.5366 0.492084 15.1451 0.284395 13.3719C-0.0947984 10.1353 -0.0947984 6.86567 0.284395 3.62911C0.389446 2.76766 0.782828 1.96686 1.40078 1.3565C2.01874 0.74615 2.82506 0.36201 3.68905 0.266343M8.5 3.34957C8.70553 3.34957 8.90264 3.43108 9.04798 3.57617C9.19331 3.72125 9.27496 3.91803 9.27496 4.12321V7.72633H12.8842C13.0897 7.72633 13.2868 7.80784 13.4322 7.95293C13.5775 8.09801 13.6592 8.29479 13.6592 8.49998C13.6592 8.70516 13.5775 8.90194 13.4322 9.04702C13.2868 9.19211 13.0897 9.27362 12.8842 9.27362H9.27496V12.8767C9.27496 13.0819 9.19331 13.2787 9.04798 13.4238C8.90264 13.5689 8.70553 13.6504 8.5 13.6504C8.29447 13.6504 8.09735 13.5689 7.95202 13.4238C7.80669 13.2787 7.72504 13.0819 7.72504 12.8767V9.27362H4.11579C3.91026 9.27362 3.71315 9.19211 3.56782 9.04702C3.42248 8.90194 3.34083 8.70516 3.34083 8.49998C3.34083 8.29479 3.42248 8.09801 3.56782 7.95293C3.71315 7.80784 3.91026 7.72633 4.11579 7.72633H7.72504V4.12321C7.72504 3.91803 7.80669 3.72125 7.95202 3.57617C8.09735 3.43108 8.29447 3.34957 8.5 3.34957Z" fill="#05173B" />
</svg> <p>{t("addPackage")}</p></button>
        <button className={styles.removeButton} onClick={() => removePackage(id)}><svg id ="icon-remove" viewBox="0 0 26 32">
  <path d="M23.116 6.564l-1.242 22.346c-0.046 0.836-0.392 1.621-0.968 2.196s-1.337 0.894-2.128 0.894h-11.205c-0.791 0-1.552-0.32-2.128-0.894s-0.922-1.36-0.968-2.196l-1.239-22.346h-3.24v-1.641c0-0.218 0.082-0.426 0.227-0.58s0.343-0.24 0.548-0.24h24.803c0.206 0 0.403 0.086 0.548 0.24s0.227 0.363 0.227 0.58v1.641h-3.237zM10.076 0h6.201c0.206 0 0.403 0.086 0.548 0.24s0.227 0.363 0.227 0.58v1.641h-7.751v-1.641c0-0.218 0.082-0.426 0.227-0.58s0.342-0.24 0.548-0.24zM8.526 10.667l0.775 14.769h2.325l-0.62-14.769h-2.48zM15.502 10.667l-0.775 14.769h2.325l0.775-14.769h-2.325z"></path>
</svg>{t("removePackage")}</button>
      </div>
    </div>
  );
};

export default Package;
