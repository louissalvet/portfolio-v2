import { useTranslation } from "react-i18next";

import { homeHeroData } from "./data/homeHeroData";

import "./css/module.home-hero.css";

const HomeHero = () => {
  const { t } = useTranslation();
  const data = homeHeroData;
  return (
    <section className="hero container">
      <div className="hero-text">
        <div className="hero-text-title">
          <h1 className="hero-text-gradient">{data.title}</h1>
          <h1>{t(data.subtitle1)}</h1>
          <h1>{t(data.subtitle2)}</h1>
        </div>
        <p>{t(data.text)}</p>
      </div>
      <div className="hero-img">
        <img src="/hero.webp" alt="Logo" />
        <div className="hero-img-gradient" />
      </div>
    </section>
  );
};

export default HomeHero;
