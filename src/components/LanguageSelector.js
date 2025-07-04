import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        🇺🇸 US
      </button>
      <button
        className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
        onClick={() => changeLanguage('pt')}
      >
        🇧🇷 BR
      </button>
    </div>
  );
};

export default LanguageSelector; 