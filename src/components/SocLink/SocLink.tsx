import Image from "next/image";
import styles from "./SocLink.module.css";
export const SocLink = () => {
  return (
    <div className={styles.soclink}>
      <a href="https://www.facebook.com/ivancom.eu/">
        <Image
          src="/icons/facebook.png"
          alt="Facebook"
          width={36}
          height={36}
        />
      </a>
      <a href="https://www.instagram.com/ivancom.poland/?igshid=NGVhN2U2NjQ0Yg%3D%3D">
        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          width={36}
          height={36}
        />
      </a>
      <a href="https://ru.linkedin.com/company/ivancom">
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          width={36}
          height={36}
        />
      </a>
      <a href="https://www.tiktok.com/@ivancom.poland?_t=8iCTrsyAonB">
        <Image src="/icons/tiktok.png" alt="TikTok" width={36} height={36} />
      </a>
    </div>
  );
};
