// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

  interface Translations {
  en: {
    whatsapp_message: string;
    title_description: string;
    title_download_cv: string;
    about_title: string;
    about_description: string;
    certifications_title: string;
    experience_title: string;
    interests_title: string;
    outdoor_title: string;
    outdoor_description: string;
    sport_title: string;
    sport_description: string;
    entertainment_title: string;
    entertainment_description: string;
    emerging_title: string;
    emerging_description: string;
    entrepreneurial_spirit_title: string;
    entrepreneurial_spirit_description: string;
    skills_title: string;
    commitment_title: string;
    commitment_description: string;
    responsibility_title: string;
    responsibility_description: string;
    entrepreneurial_title: string;
    entrepreneurial_description: string;
    implication_title: string;
    implication_description: string;
    positive_title: string;
    positive_description: string;
    proactivity_title: string;
    proactivity_description: string;
    adaptability_title: string;
    adaptability_description: string;
    dedication_title: string;
    dedication_description: string;
    sincerity_title: string;
    sincerity_description: string;
    github_projects_title: string;
    contact_form_title: string;
    contact_form_name: string;
    contact_form_lastname: string;
    contact_form_email: string;
    contact_form_description: string;
    contact_form_send: string;
    products_title: string;
    visit_site: string;
  };
  es: {
    whatsapp_message: string;
    title_description: string;
    title_download_cv: string;
    about_title: string;
    about_description: string;
    certifications_title: string;
    experience_title: string;
    interests_title: string;
    outdoor_title: string;
    outdoor_description: string;
    sport_title: string;
    sport_description: string;
    entertainment_title: string;
    entertainment_description: string;
    emerging_title: string;
    emerging_description: string;
    entrepreneurial_spirit_title: string;
    entrepreneurial_spirit_description: string;
    skills_title: string;
    commitment_title: string;
    commitment_description: string;
    responsibility_title: string;
    responsibility_description: string;
    entrepreneurial_title: string;
    entrepreneurial_description: string;
    implication_title: string;
    implication_description: string;
    positive_title: string;
    positive_description: string;
    proactivity_title: string;
    proactivity_description: string;
    adaptability_title: string;
    adaptability_description: string;
    dedication_title: string;
    dedication_description: string;
    sincerity_title: string;
    sincerity_description: string;
    github_projects_title: string;
    contact_form_title: string;
    contact_form_name: string;
    contact_form_lastname: string;
    contact_form_email: string;
    contact_form_description: string;
    contact_form_send: string;
    products_title: string;
    visit_site: string;
  };
}

const translations: Translations = {
  en: {
    whatsapp_message: "Hello, how can I help you?",
    title_description: "Systems engineer specialized in automation, cloud computing, and scalable solutions. Passionate about technological innovation and digital entrepreneurship",
    title_download_cv: "Download CV",
    about_title: "About Me",
    about_description: "I am a Systems Engineer passionate about the DevSecOps approach in the cloud and an enthusiast of technological revolution. I love leading projects, automating processes, and providing backend solutions for innovative applications. With work experience on various projects, I take pride in demonstrating exceptional skills and approaching challenges with dedication, responsibility, and enthusiasm to achieve the most satisfactory resolutions. I am excited to continue growing professionally and take on new challenges in the world of technology. I look forward to contributing my passion and expertise to exciting and transformative projects!",
    certifications_title: "Certifications",
    experience_title: "Experience & Skills",
    interests_title: "Interests",
    outdoor_title: "Outdoor Exploration",
    outdoor_description: "I enjoy spending time outdoors and exploring new places through travel.",
    sport_title: 'Sports Activities',
    sport_description: 'I am passionate about cycling, playing paddle, and staying physically active.',
    entertainment_title: 'Entertainment and Relaxation',
    entertainment_description: 'I like to relax by watching series in my leisure time, finding a balance between work and rest.',
    emerging_title: 'Emerging Technology',
    emerging_description: 'Keeping up-to-date with the latest emerging technologies and their application in various fields is one of my priorities. I am always eager to learn and apply new tools and solutions to enhance my skills and knowledge.',
    entrepreneurial_spirit_title: 'Entrepreneurial Spirit',
    entrepreneurial_spirit_description: 'I am motivated by the entrepreneurial spirit. I love exploring opportunities to develop innovative projects and contribute to the growth and success of business initiatives.',
    skills_title: 'Skills and Qualities',
    commitment_title: 'Commitment',
    commitment_description: 'I dedicate my energy and time to achieve established goals, showing perseverance and dedication in my work.',
    responsibility_title: 'Responsibility',
    responsibility_description: 'I commit to fulfilling my responsibilities and assigned tasks, taking ownership of my actions and decisions.',
    entrepreneurial_title: 'Entrepreneurial',
    entrepreneurial_description: 'I constantly seek new opportunities and creative solutions to challenges, demonstrating initiative and business vision.',
    implication_title: 'Implication',
    implication_description: 'I actively engage in projects and activities, showing genuine interest and contributing to team success.',
    positive_title: 'Positive Attitude',
    positive_description: 'I maintain an optimistic and constructive attitude, inspiring others and overcoming obstacles with a progressive mindset.',
    proactivity_title: 'Proactivity',
    proactivity_description: 'I anticipate needs and potential problems, taking preventive measures and actively seeking ways to improve efficiency and quality.',
    adaptability_title: 'Adaptability',
    adaptability_description: 'I easily adjust to new situations and challenges, being flexible and open to change to achieve established goals.',
    dedication_title: 'Dedication',
    dedication_description: 'I commit to achieving excellence in all my activities, demonstrating perseverance and constant effort to attain the best results.',
    sincerity_title: 'Sincerity',
    sincerity_description: 'I act with honesty and transparency in all my interactions, maintaining integrity and trust in all professional relationships.',
    github_projects_title: "Featured GitHub Projects",
    contact_form_title: "Contact Me",
    contact_form_name: "Name",
    contact_form_lastname: "Last name",
    contact_form_email: "Email",
    contact_form_description: "Description",
    contact_form_send: "Send",
    products_title: "Products",
    visit_site: "Visit site"
  },
  es: {
    whatsapp_message: "Hola, ¿Cómo puedo ayudarte?",
    title_description: "Ingeniero de sistemas especializado en automatización, computación en la nube y soluciones escalables. Apasionado por la innovación tecnológica y el emprendimiento digital",
    title_download_cv: "Descargar CV",
    about_title: "Sobre Mí",
    about_description: "Soy un Ingeniero de Sistemas apasionado por el enfoque DevSecOps en la nube y entusiasta de la revolución tecnológica. Me encanta liderar proyectos, automatizar procesos y brindar soluciones backend para aplicaciones innovadoras. Con experiencia laboral en diversos proyectos, me enorgullece demostrar habilidades excepcionales y abordar los desafíos con dedicación, responsabilidad y entusiasmo para lograr las resoluciones más satisfactorias. Estoy entusiasmado por seguir creciendo profesionalmente y asumir nuevos desafíos en el mundo de la tecnología. ¡Espero aportar mi pasión y experiencia a proyectos emocionantes y transformadores!",
    certifications_title: "Certificationes",
    experience_title: "Experiencia y habilidades",
    interests_title: "Intereses",
    outdoor_title: "Exploración al aire libre",
    outdoor_description: "Disfruto pasar tiempo al aire libre y explorar nuevos lugares a través de viajes.",
    sport_title: 'Activitidades Deportivas',
    sport_description: 'Me apasiona el ciclismo, jugar al pádel y mantenerme activo físicamente.',
    entertainment_title: 'Entretenimiento y relajación',
    entertainment_description: 'Me gusta relajarme viendo series en mi tiempo libre, encontrando un equilibrio entre trabajo y descanso.',
    emerging_title: 'Tecnología emergente',
    emerging_description: 'Mantenerme actualizado con las últimas tecnologías emergentes y su aplicación en diversos campos es una de mis prioridades. Siempre estoy ansioso por aprender y aplicar nuevas herramientas y soluciones para mejorar mis habilidades y conocimientos.',
    entrepreneurial_spirit_title: 'Espíritu emprendedor',
    entrepreneurial_spirit_description: 'Me motiva el espíritu emprendedor. Me encanta explorar oportunidades para desarrollar proyectos innovadores y contribuir al crecimiento y éxito de iniciativas empresariales.',
    skills_title: 'Habilidades y Cualidades',
    commitment_title: 'Compromiso',
    commitment_description: 'Dedico mi energía y tiempo a lograr las metas establecidas, mostrando perseverancia y dedicación en mi trabajo.',
    responsibility_title: 'Responsabilidad',
    responsibility_description: 'Me comprometo a cumplir con mis responsabilidades y tareas asignadas, asumiendo la propiedad de mis acciones y decisiones.',
    entrepreneurial_title: 'Emprendedor',
    entrepreneurial_description: 'Busco constantemente nuevas oportunidades y soluciones creativas a los desafíos, demostrando iniciativa y visión de negocio.',
    implication_title: 'Implicación',
    implication_description: 'Participo activamente en proyectos y actividades, mostrando interés genuino y contribuyendo al éxito del equipo.',
    positive_title: 'Actitud Positiva',
    positive_description: 'Mantengo una actitud optimista y constructiva, inspirando a otros y superando obstáculos con una mentalidad progresista.',
    proactivity_title: 'Proactividad',
    proactivity_description: 'Anticipo necesidades y problemas potenciales, tomando medidas preventivas y buscando activamente formas de mejorar la eficiencia y la calidad.',
    adaptability_title: 'Adaptabilidad',
    adaptability_description: 'Me adapto fácilmente a nuevas situaciones y retos, siendo flexible y abierto al cambio para alcanzar las metas establecidas.',
    dedication_title: 'Dedicación',
    dedication_description: 'Me comprometo a alcanzar la excelencia en todas mis actividades, demostrando perseverancia y esfuerzo constante para alcanzar los mejores resultados.',
    sincerity_title: 'Sinceridad',
    sincerity_description: 'Actúo con honestidad y transparencia en todas mis interacciones, manteniendo la integridad y la confianza en todas las relaciones profesionales.',
    github_projects_title: "Proyectos destacados de GitHub",
    contact_form_title: "Contactame",
    contact_form_name: "Nombre",
    contact_form_lastname: "Apellido",
    contact_form_email: "Email",
    contact_form_description: "Descripción",
    contact_form_send: "Enviar",
    products_title: "Productos",
    visit_site: "Visitar sitio"
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