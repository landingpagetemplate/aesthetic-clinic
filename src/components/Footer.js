import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-name">{t('header.name')}</span>
              <span className="logo-lastname">{t('header.lastname')}</span>
            </div>
            <p className="footer-description">
              {t('hero.description')}
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">{t('nav.home')}</a></li>
              <li><a href="#services">{t('nav.services')}</a></li>
              <li><a href="#treatments">{t('nav.treatments')}</a></li>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <p>📍 {t('contact.address')}</p>
              <p>📞 {t('contact.phone')}</p>
              <p>✉️ {t('contact.email')}</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright')}</p>
          <div className="footer-legal">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 