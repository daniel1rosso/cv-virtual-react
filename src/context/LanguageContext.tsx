// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

  interface Translations {
  en: {
    whatsapp_message: string;
    contact_form_title: string;
    contact_form_name: string;
    contact_form_lastname: string;
    contact_form_email: string;
    contact_form_description: string;
    contact_form_send: string;
  };
  es: {
    whatsapp_message: string;
    contact_form_title: string;
    contact_form_name: string;
    contact_form_lastname: string;
    contact_form_email: string;
    contact_form_description: string;
    contact_form_send: string;
  };
}

const translations: Translations = {
  en: {
    whatsapp_message: "Hello, how can I help you?",
    contact_form_title: "Contact us",
    contact_form_name: "Name",
    contact_form_lastname: "Last name",
    contact_form_email: "Email",
    contact_form_description: "Description",
    contact_form_send: "Send"
  },
  es: {
    whatsapp_message: "Hola, ¿Cómo puedo ayudarte?",
    contact_form_title: "Contactanos",
    contact_form_name: "Nombre",
    contact_form_lastname: "Apellido",
    contact_form_email: "Email",
    contact_form_description: "Descripcion",
    contact_form_send: "Enviar"
  }
};

interface LanguageContextProps {
  lang: keyof Translations;
  setLang: React.Dispatch<React.SetStateAction<keyof Translations>>;
  t: (key: keyof Translations['en']) => string;
}

// Se inicializa en undefined para forzar el uso del Provider.
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<keyof Translations>("en");

  const t = (key: keyof Translations['en']): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};