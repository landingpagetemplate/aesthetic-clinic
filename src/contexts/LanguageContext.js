import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const [enResponse, ptResponse] = await Promise.all([
          fetch('/data/en.json'),
          fetch('/data/pt.json')
        ]);
        
        const enData = await enResponse.json();
        const ptData = await ptResponse.json();
        
        setTranslations({ en: enData, pt: ptData });
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, []);

  // Detect user's language based on location
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'BR') {
          setLanguage('pt');
        } else {
          setLanguage('en');
        }
      } catch (error) {
        console.log('Could not detect location, using browser language');
        const browserLang = navigator.language || navigator.userLanguage;
        setLanguage(browserLang.startsWith('pt') ? 'pt' : 'en');
      }
    };

    detectLanguage();
  }, []);

  // Translation function
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value;
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
  };

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 