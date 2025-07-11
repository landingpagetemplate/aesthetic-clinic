import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Treatments.css';

const Treatments = () => {
  const { t, loading } = useLanguage();

  // Don't render if still loading
  if (loading) {
    return (
      <section id="treatments" className="treatments">
        <div className="treatments-container">
          <div className="treatments-header">
            <h2 className="treatments-title">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  const treatmentsItems = t('treatments.items');
  
  // Check if treatmentsItems is an array before mapping
  if (!Array.isArray(treatmentsItems)) {
    return (
      <section id="treatments" className="treatments">
        <div className="treatments-container">
          <div className="treatments-header">
            <h2 className="treatments-title">{t('treatments.title')}</h2>
            <p className="treatments-subtitle">{t('treatments.subtitle')}</p>
          </div>
          <div className="treatments-grid">
            <p>Treatments loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="treatments" className="treatments">
      <div className="treatments-container">
        <div className="treatments-header">
          <h2 className="treatments-title">{t('treatments.title')}</h2>
          <p className="treatments-subtitle">{t('treatments.subtitle')}</p>
        </div>
        
        <div className="treatments-grid">
          {treatmentsItems.map((treatment, index) => (
            <div key={index} className="treatment-card">
              <div className="treatment-content">
                <h3 className="treatment-title">{treatment.title}</h3>
                <p className="treatment-description">{treatment.description}</p>
                <div className="treatment-price">{treatment.price}</div>
              </div>
              <button className="treatment-cta">
                {t('header.cta')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments; 