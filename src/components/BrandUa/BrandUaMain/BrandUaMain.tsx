


import Image from 'next/image'
import s from './BrandUaMain.module.css'
import { useTranslations } from 'next-intl'


const BrandUaMain = () => {
  const  t  = useTranslations()

  const partners = [
    { img: "/image/brandUa/partners/Nesha.jpg", name: "nesha.com.ua", url: "https://nesha.com.ua/", desc: t('brandua.partner1') },
    { img: "/image/brandUa/partners/Addict.jpg", name: "addict.com.ua", url: "https://addict.com.ua/", desc: t('brandua.partner2') },
    { img: "/image/brandUa/partners/Navigator.jpg", name: "navigator.in.ua", url: "https://navigator.in.ua/", desc: t('brandua.partner3') },
    { img: "/image/brandUa/partners/FastLineStudio.jpg", name: "Fastline Studio", url: "https://fastlinestudio.pl/", desc: t('brandua.partner4') },
    { img: "/image/brandUa/partners/SushiStory.jpg", name: "Sushi Story", url: "https://pl.sushistory.com/var/", desc: t('brandua.partner5') },
    { img: "/image/brandUa/partners/VeanTattoo.jpg", name: "VEAN TATTOO", url: "https://veantattoo.com", desc: t('brandua.partner6') },
    { img: "/image/brandUa/partners/TwojLekarz.jpg", name: "Twój Lekarz", url: "https://krakow.twojlekarz-wawa.pl/", desc: t('brandua.partner7') },
    { img: "/image/brandUa/partners/Mistodent.jpg", name: "Mistodent", url: "https://www.instagram.com/quick_instal_pl/", desc: t('brandua.partner8') },
  { img: "/image/brandUa/partners/QuickInstal.jpg", name: "QuickInstal", url: "https://navigator.in.ua/", desc: t('brandua.partner9') },
    { img: "/image/brandUa/partners/Bizzroll1.png", name: "Bizzroll", url: "https://www.instagram.com/bizzroll.club/", desc: t('brandua.partner10') },
    { img: "/image/brandUa/partners/center1.png", name: "CENTER", url: "https://center-krakow.pl/?fbclid=PAZXh0bgNhZW0CMTEAAacyNb6AcMRRE7K5_PF3IxMoTntMH5TDiq3kb_tmQfBOX9jtvqTsyhkDbCIDxQ_aem_8QkizxYoKhF3BMdh4Qawsw", desc: t('brandua.partner11') },
    // { img: "/image/brandUa/partners/Armacar.jpg", name: "Armacar", url: "https://armacar.pl/", desc: t('brandua.partner12') },
    { img: "/image/brandUa/partners/CufuSushi.png", name: "Cufu Sushi", url: "https://cufusushiwroclaw.pl/", desc: t('brandua.partner13') },
    // { img: "/image/brandUa/partners/CULT.jpg", name: "CULT", url: "https://cultkrakow.choiceqr.com/takeaway?fbclid=PAZXh0bgNhZW0CMTEAAacxGmLOCSlzEtsa1SzJ7qhyq_OtIUvkEvyAMVvssq5He61Yd5oeX_urbblTaA_aem_PF3CK3gWr0BJR4ZLT1aZJA", desc: t('brandua.partner14') }
  ];

  return (
    <div className={s.body}>
      <div className={s.partners}>
        <div className={s.textCont}>
          <h3 className={s.title}>{t('brandua.partners_title')}</h3>
          <p className={s.descr}>{t('brandua.partners_descr')}</p>
        </div>
        <div className={s.contBrands}>
          <ul className={s.list}>
            {partners.map((partner, i) => (
              <li key={i} className={s.item}>
                <div className={s.imgWrap}>
                  <Image src={partner.img} alt={partner.name} width={80} height={80} className={s.img} />
                </div>
                <a href={partner.url} target="_blank" rel="noreferrer" className={s.name}>
                  {partner.name}
                </a>
                <p className={s.descrBrand}>{partner.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.bottomInfo}>
          <h3 className={s.bottomTitle}>{t('brandua.how_title')}</h3>
          <p className={s.bottomSubtitle}>{t('brandua.how_subtitle')}</p>
          <ol className={s.stepsList}>
            <li className={s.step}>
              <span className={s.stepNum}>1</span>
              <div>
                <h3 className={s.listTitle}><strong>{t('brandua.step1_title')}</strong></h3>
                <p>{t('brandua.step1_sub')}</p>
                <ul>
                  <li><strong>{t('brandua.step1_code')}</strong></li>
                  <li>{t('brandua.step1_note')}<br /><br /></li>
                </ul>
                <p>{t('brandua.step1_check')}<br /></p>
                <p><strong>{t('brandua.step1_info')} <br />{t('brandua.step1_info1')}<br /> {t('brandua.step1_info2')}<br /> {t('brandua.step1_info3')}</strong></p>
              </div>
            </li>
            <li className={s.step}>
              <span className={s.stepNum}>2</span>
              <div>
                <h3 className={s.listTitle}><strong><a href="#">{t('brandua.step2_title')}</a></strong></h3>
                <p>{t('brandua.step2_sub')}</p>
                <p>{t('brandua.step2_sub1')}</p>
              </div>
            </li>
            <li className={s.step}>
              <span className={s.stepNum}>3</span>
              <div>
                <h3 className={s.listTitle}><strong>{t('brandua.step3_title')}</strong></h3>
                
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BrandUaMain
