"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Disclosure } from "@headlessui/react"; // Імпортуємо компонент Disclosure для аккордеону
import styles from "./Branch.module.css";
import { ChevronDown, LucideMapPin } from "lucide-react";
import { CiClock2, CiMail, CiMap } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaViber } from "react-icons/fa6";
import { PiMapPinLight, PiTelegramLogoLight } from "react-icons/pi";
import Image from "next/image";

// Оголошуємо типи для пропсів
interface Branch {
  city: string;
  schedule: string;
  phone: string;
  viberLink: string;
  telegramLink: string;
  email: string;
  address: string;
  mapImage: string;
  mapLink: string;
}

interface BranchInfoProps {
  branches: Branch[];
}

const BranchInfo: React.FC<BranchInfoProps> = ({ branches }) => {
  const t = useTranslations("contacts");
const mobileBranches = 
    {
    city: t('kielce'),
    schedule: `${t('arrange_with_courier')}`,
    phone: "+48 730 036 262",
    viberLink: "https://viber.com/ivancom.kielce",
    telegramLink: "https://t.me/ivancom.kielce",
    email: "",
    address: "",
    mapLink: "",
    mapImage: ""
  }
  
  return (
    <div className={styles.branchContainer}>
      <h3 className={styles.branchTitle}>{t("stationary_branches")}</h3>
      {/* Комп'ютерна версія */}
      <div className={styles.desktopOnly}>
        {branches.map((branch, index) => (
          <div key={index} className={styles.branchCard}>
            <div className={styles.branchHeader}>
              <h3 className={styles.branchCity}>{branch.city}</h3>
              
            </div>
            <div className={styles.branchCont}>
              <div className={styles.branchDetails}>
                <p className={styles.branchSchedule}><CiClock2  size={20} />{branch.schedule}</p>
                <p className={styles.branchPhone}>
                  <a href={`tel:${branch.phone}`}><BsTelephone size={20}  />{branch.phone}</a>
                </p>
                
                <p className={styles.branchContacts}>
                  <a
                    href={branch.viberLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <FaViber  size={20} /> Viber
                  </a></p>
                   <p className={styles.branchContacts}>
                  <a
                    href={branch.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiTelegramLogoLight size={20}  />Telegram
                  </a>
                </p>
                <p className={styles.branchEmail}>
                  <a href={`mailto:${branch.email}`}><CiMail size={20}  />{branch.email}</a>
                </p>
                <p className={styles.branchAddress}><PiMapPinLight size={24} />{branch.address}</p>
              </div>
              <div className={styles.branchMap}>
                
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.findOnMapBtn}
                >
                  <p className={styles.branchMapAddress}><CiMap  size={24}/>{t("find_on_map")}</p>
                <img
                  src={branch.mapImage}
                  alt="Map"
                  className={styles.branchMapImage}
                />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Мобільна версія (аккордеон) */}
      <div className={styles.mobileOnly}>
        
        {branches.map((branch, index) => (
          <Disclosure key={index}>
            {() => (
              <>
                <Disclosure.Button className={styles.accordionButton}>
                  <div className={styles.branchHeader}>
                    <h3 className={styles.branchCity}>{branch.city}</h3>
                    <ChevronDown size={24} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className={styles.accordionPanel}>
                  <div className={styles.branchDetails}>
                    <p className={styles.branchSchedule}>
                      <CiClock2  size={20} />
                      {branch.schedule}
                    </p>
                    <p className={styles.branchPhone}>
                      <a href={`tel:${branch.phone}`}>
                        <BsTelephone size={20}  />
                        {branch.phone}
                      </a>
                    </p>

                    <p className={styles.branchContacts}>
                      <a
                        href={branch.viberLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaViber  size={20} />
                        Viber
                      </a>
                    </p>
                    <p className={styles.branchContacts}>
                      <a
                        href={branch.telegramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PiTelegramLogoLight size={20}  />
                        Telegram
                      </a>
                    </p>
                    <p className={styles.branchEmail}>
                      <a href={`mailto:${branch.email}`}>
                        <CiMail size={20}  />
                        {branch.email}
                      </a>
                    </p>
                    <p className={styles.branchAddress}>
                      <PiMapPinLight size={24} />
                      {branch.address}
                    </p>
                  </div>
                  <div className={styles.branchMap}>
                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.findOnMapBtn}
                    >
                       <p className={styles.branchMapAddress}>
                      <CiMap  size={24}/>
                      {t("find_on_map")}
                    </p>
                      
                      <img
                        src={branch.mapImage}
                        alt="Map"
                        className={styles.branchMapImage}
                      />
                    </a>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
       
      </div>
      <div className={styles.mobileBranches}>
        <h3 className={styles.branchTitle}>{t("mobile_branches")}</h3>
        <p className={styles.branchdescr}>{t("no_need_to_search")}</p>
        <div className={styles.mobileBranchesCont}>
          <h3 className={styles.branchMobileCity}>{mobileBranches.city}</h3>
         <div className={styles.mobileBranchesDetail}>
            <p className={styles.branchSchedule}><CiClock2 size={20} /><p>{t("monday_to_sunday") }</p><p>{mobileBranches.schedule}</p></p>
                      <p className={styles.branchPhone}>
                        <a href={`tel:${mobileBranches.phone}`}><BsTelephone size={20}  />{mobileBranches.phone}</a>
                      </p>
         </div>
        </div>
      </div>
      
    </div>
  );
};

export default BranchInfo;
