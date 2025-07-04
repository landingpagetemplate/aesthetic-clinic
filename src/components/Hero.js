import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.title')}
          </h1>
          <h2 className="hero-subtitle">
            {t('hero.subtitle')}
          </h2>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <button className="hero-cta">
            {t('hero.cta')}
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span className="placeholder-icon">✨</span>
            <p>Beauty & Aesthetics</p>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
    </section>
  );
};

export default Hero; 