import Image from "next/image";
import styles from "./SocLink.module.css";
import SvgIcon from "../SvgIcon";
export const SocLink = () => {
  return (
    <div className={styles.soclink}>
      <a href="https://www.facebook.com/ivancom.eu/" target="blank">
        <SvgIcon name="facebook" width={36} height={36} />
      </a>
      <a href="https://www.instagram.com/ivancom.poland/?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="blank">
        <SvgIcon name="instagram" width={36} height={36} />
      </a>
      <a href="https://ru.linkedin.com/company/ivancom" target="blank">
        <SvgIcon name="linkedin" width={36} height={36} />
      </a>
      <a href="https://www.tiktok.com/@ivancom.poland?_t=8iCTrsyAonB" target="blank">
        <SvgIcon name="tiktok" width={36} height={36} />
      </a>
    </div>
  );
};
