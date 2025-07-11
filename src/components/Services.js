import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Services.css';

const Services = () => {
  const { t, loading } = useLanguage();

  // Don't render if still loading
  if (loading) {
    return (
      <section id="services" className="services">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  const servicesItems = t('services.items');
  
  // Check if servicesItems is an array before mapping
  if (!Array.isArray(servicesItems)) {
    return (
      <section id="services" className="services">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">{t('services.title')}</h2>
            <p className="services-subtitle">{t('services.subtitle')}</p>
          </div>
          <div className="services-grid">
            <p>Services loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{t('services.title')}</h2>
          <p className="services-subtitle">{t('services.subtitle')}</p>
        </div>
        
        <div className="services-grid">
          {servicesItems.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 