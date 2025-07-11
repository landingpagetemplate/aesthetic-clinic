import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t, loading } = useLanguage();

  // Don't render if still loading
  if (loading) {
    return (
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">Loading...</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const highlights = t('about.highlights');
  
  // Check if highlights is an array before mapping
  if (!Array.isArray(highlights)) {
    return (
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">{t('about.title')}</h2>
              <p className="about-description">{t('about.content')}</p>
              <div className="about-highlights">
                <p>Highlights loading...</p>
              </div>
            </div>
            
            <div className="about-image">
              <div className="about-placeholder">
                <span className="placeholder-icon">🏥</span>
                <p>Professional Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">{t('about.title')}</h2>
            <p className="about-description">{t('about.content')}</p>
            
            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-placeholder">
              <span className="placeholder-icon">🏥</span>
              <p>Professional Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 