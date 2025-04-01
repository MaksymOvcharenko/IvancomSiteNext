


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
    { img: "/image/brandUa/partners/Mistodent.jpg", name: "Mistodent", url: "https://www.mistodent.pl/uk/index.html", desc: t('brandua.partner8') }
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
              </div>
            </li>
            <li className={s.step}>
              <span className={s.stepNum}>3</span>
              <div>
                <h3 className={s.listTitle}><strong>{t('brandua.step3_title')}</strong></h3>
                <p>{t('brandua.step3_sub')}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BrandUaMain
