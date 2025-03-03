// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  en: {
    whatsapp_message: string;
    nav_home: string;
    nav_services: string;
    nav_solutions: string;
    nav_about: string;
    nav_contact: string;
    home_welcome: string;
    home_h2: string;
    home_description: string;
    home_cloud_title: string;
    home_cloud_description: string;
    home_security_title: string;
    home_security_description: string;
    home_automation_title: string;
    home_automation_description: string;
    home_ia_data_title: string;
    home_ia_data_description: string;
    home_phrase: string;
    home_client_title: string;
    home_client_description: string;
    service_title: string;
    service_devops_description: string;
    service_security_title: string;
    service_security_description: string;
    service_migration_title: string;
    service_migration_description: string;
    service_modernization_title: string;
    service_modernization_description: string;
    service_data_machine_title: string;
    service_data_machine_description: string;
    service_generative_title: string;
    service_generative_description: string;
    solution_title: string;
    solution_app_platform_title: string;
    solution_app_platform_description: string;
    solution_marketing_camp_title: string;
    solution_marketing_camp_description: string;
    solution_robotize_title: string;
    solution_robotize_description: string;
    about_title: string;
    about_empowering_title: string;
    about_empowering_description: string;
    about_stream_title: string;
    about_stream_description: string;
    about_accelereting_title: string;
    about_accelereting_description: string;
    about_founder_title: string;
    about_founder_description: string;
    about_founder_apaulet: string;
    about_founder_drosso: string;
    about_certification_title: string;
    about_certification_description: string;
    contact_title: string;
    contact_description: string;
    contact_info_title: string;
    contact_info_description: string;
    contact_devops_description: string;
    contact_socialmedia_title: string;
    contact_socialmedia_description: string;
    contact_form_title: string;
    contact_form_name: string;
    contact_form_lastname: string;
    contact_form_email: string;
    contact_form_description: string;
    contact_form_send: string;
  };
  es: {
    whatsapp_message: string;
    nav_home: string;
    nav_services: string;
    nav_solutions: string;
    nav_about: string;
    nav_contact: string;
    home_welcome: string;
    home_h2: string;
    home_description: string;
    home_cloud_title: string;
    home_cloud_description: string;
    home_security_title: string;
    home_security_description: string;
    home_automation_title: string;
    home_automation_description: string;
    home_ia_data_title: string;
    home_ia_data_description: string;
    home_phrase: string;
    home_client_title: string;
    home_client_description: string;
    service_title: string;
    service_devops_description: string;
    service_security_title: string;
    service_security_description: string;
    service_migration_title: string;
    service_migration_description: string;
    service_modernization_title: string;
    service_modernization_description: string;
    service_data_machine_title: string;
    service_data_machine_description: string;
    service_generative_title: string;
    service_generative_description: string;
    solution_title: string;
    solution_app_platform_title: string;
    solution_app_platform_description: string;
    solution_marketing_camp_title: string;
    solution_marketing_camp_description: string;
    solution_robotize_title: string;
    solution_robotize_description: string;
    about_title: string;
    about_empowering_title: string;
    about_empowering_description: string;
    about_stream_title: string;
    about_stream_description: string;
    about_accelereting_title: string;
    about_accelereting_description: string;
    about_founder_title: string;
    about_founder_description: string;
    about_founder_apaulet: string;
    about_founder_drosso: string;
    about_certification_title: string;
    about_certification_description: string;
    contact_title: string;
    contact_description: string;
    contact_info_title: string;
    contact_info_description: string;
    contact_devops_description: string;
    contact_socialmedia_title: string;
    contact_socialmedia_description: string;
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
    whatsapp_message: "Welcome to Caxus, leaders in cloud computing and AI solutions. How can we help you boost your business?",
    nav_home: "Home",
    nav_services: "Services",
    nav_solutions: "Solutions",
    nav_about: "About",
    nav_contact: "Contact",
    home_welcome: "Welcome to Caxus.net LLC",
    home_h2: "Unlock the power of the cloud with secure, scalable, and automated AWS solutions.",
    home_description: "Helping businesses unlock the full potential of AWS. We specialize in secure, scalable, and automated solutions that drive growth and simplify operations. Whether you're looking to optimize your infrastructure, enhance security, or accelerate your digital transformation, our team of experts is here to guide you every step of the way.",
    home_cloud_title: "Cloud Expertise",
    home_cloud_description: "Tailored solutions leveraging the best of AWS Cloud technologies.",
    home_security_title: "Security First",
    home_security_description: "Advanced security measures designed to protect your data and systems.",
    home_automation_title: "Automation & Innovation",
    home_automation_description: "Automating processes to help your business move faster and more efficiently.",
    home_ia_data_title: "Generative AI & Data Insights",
    home_ia_data_description: "Harness the power of AI and data analytics to drive innovation and smarter decisions.",
    home_phrase: "We are ready to help you achieve your goals.",
    home_client_title: "Our clients",
    home_client_description: "Our clients trust us to power their AWS cloud infrastructure, enabling them to accelerate growth and streamline operations with minimal complexity. Partner with us to leverage the full potential of AWS Cloud and drive your business forward.",
    service_title: "Ours services",
    service_devops_description: "We implement DevOps practices that merge development and operations to speed up the delivery of applications and services. Using tools like GitLab, Terraform, Ansible, Docker, and Kubernetes, we automate processes and optimize the software lifecycle, ensuring continuous integration and delivery (CI/CD), which improves efficiency and reduces errors. Our expertise enables companies to launch new features quickly and with less risk.",
    service_security_title: "Security",
    service_security_description: "Security in the cloud is our top priority. We protect your systems and data with advanced cybersecurity solutions in AWS, utilizing strategies such as encryption, identity management, firewalls, and continuous monitoring. We implement security controls that meet the highest standards, safeguarding your applications and services from threats and vulnerabilities while maintaining a proactive approach to ensure security at all levels.",
    service_migration_title: "AWS migrations",
    service_migration_description: "Migrating to the AWS cloud can be challenging, but at CAXUS.NET, we simplify the process. We assess your current infrastructure, design a tailored migration strategy, and manage the entire process, from planning to implementation. Whether you're looking to enhance performance, reduce costs, or scale your operations, we ensure a smooth transition with minimal disruption and a high level of security.",
    service_modernization_title: "AWS Modernization and Automation",
    service_modernization_description: "In a constantly changing business environment, modernizing and automating cloud applications is key to staying competitive. At CAXUS.NET, we use the most advanced AWS services to transform your applications, optimizing their performance and reducing the need for manual intervention. Through automation, we minimize errors and improve scalability, helping businesses respond more quickly to market demands.",
    service_data_machine_title: "Data Analytics & Machine Learning",
    service_data_machine_description: "Data analytics and machine learning are essential for making informed decisions. At CAXUS.NET, we offer Data Analytics and Machine Learning solutions that allow you to gain valuable insights from your data. Whether through predictive analytics, machine learning models, or analyzing large datasets, we use AWS and other advanced tools to generate reports and optimize processes that drive your business growth.",
    service_generative_title: "Generative AI",
    service_generative_description: "Generative AI is revolutionizing how businesses innovate. At CAXUS.NET, we integrate Generative AI into your projects, helping you create content, optimize creative processes, and improve operational efficiency. Whether you're looking to generate images, texts, or AI-based solutions, we implement the most advanced tools and algorithms so your company can benefit from the future of automation.",
    solution_title: "Solutions",
    solution_app_platform_title: "AWS Secure and Scalable Web Application Platform",
    solution_app_platform_description: "We offer a secure and scalable web application platform using AWS infrastructure, including load balancing, scaling, domain management, and SSL certification.",
    solution_marketing_camp_title: "Marketing Campaigns (Mailing and WhatsApp)",
    solution_marketing_camp_description: "We automate and optimize email and WhatsApp campaigns through AWS service integration, providing real-time tracking and synchronization.",
    solution_robotize_title: "Robotize Monitoring and Support Actions",
    solution_robotize_description: "Our solution automates monitoring and support for websites using GitLab pipelines, minimizing downtime and ensuring rapid responses to technical issues.",
    about_title: "About Us",
    about_empowering_title: "Empowering your cloud journey",
    about_empowering_description: "We deliver secure, scalable, and automated solutions using AWS Cloud to transform your business.",
    about_stream_title: "Streamlining Operations",
    about_stream_description: "Our expert team provides serverless solutions to optimize performance and efficiency.",
    about_accelereting_title: "Accelerating Growth",
    about_accelereting_description: "Leverage the cloud to scale faster and grow your business with minimal complexity.",
    about_founder_title: "Our Founders",
    about_founder_description: "We are a USA-based company, registered as an LLC in the state of Florida, ensuring transparency and trust for our clients. Caxus.net LLC was founded by two partners, each bringing their expertise to drive the company's success:",
    about_founder_apaulet: "As the CEO of Caxus.net LLC, Augusto leads the company's vision, strategy, and growth, ensuring the highest standards of cloud technology and business transformation for clients.",
    about_founder_drosso: "Daniel, as the CTO, drives the technological strategy at Caxus.net LLC, with a focus on implementing cutting-edge cloud solutions and ensuring technical excellence in all projects.",
    about_certification_title: "Certifications",
    about_certification_description: "At Caxus.net LLC, we firmly believe that staying up to date with the latest technologies is essential for delivering innovative and high-quality solutions. Certifications not only validate our knowledge but also reflect our commitment to excellence and continuous improvement in a rapidly evolving technological landscape. These credentials allow us to assure our clients that we have the expertise and skills required to implement and manage industry best practices in IT.",
    contact_title: "Get in Touch",
    contact_description: "We are here to assist you with any questions or support you may need. Feel free to reach out to us through any of the following channels:",
    contact_info_title: "Info",
    contact_info_description: "If you want to know more about our services or have general inquiries, feel free to contact us. We're here to help you explore how Caxus.net LLC can support your cloud transformation journey.",
    contact_devops_description: "Our DevOps team is ready to assist with any technical support or project development questions. We're committed to ensuring the success of your cloud-based infrastructure.",
    contact_socialmedia_title: "Social Media",
    contact_socialmedia_description: "Follow us on LinkedIn to stay updated on the latest cloud trends and innovations. Connect with our team and explore how we can collaborate on your next big project.",
    contact_form_title: "Contact us",
    contact_form_name: "Name",
    contact_form_lastname: "Last name",
    contact_form_email: "Email",
    contact_form_description: "Description",
    contact_form_send: "Send"
  },
  es: {
    whatsapp_message: "Bienvenido a Caxus, líderes en computación en la nube y soluciones de inteligencia artificial. ¿Cómo podemos ayudarte a impulsar tu negocio?",
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_solutions: "Soluciones",
    nav_about: "Sobre",
    nav_contact: "Contactos",
    home_welcome: "Bienvenido a Caxus.net LLC",
    home_h2: "Libere el poder de la nube con soluciones de AWS seguras, escalables y automatizadas.",
    home_description: "Ayudar a las empresas a desbloquear todo el potencial de AWS. Nos especializamos en soluciones seguras, escalables y automatizadas que impulsan el crecimiento y simplifican las operaciones. Ya sea que esté buscando optimizar su infraestructura, mejorar la seguridad o acelerar su transformación digital, nuestro equipo de expertos está aquí para guiarlo en cada paso del camino.",
    home_cloud_title: "Experiencia en la nube",
    home_cloud_description: "Soluciones personalizadas que aprovechan lo mejor de las tecnologías de la nube de AWS.",
    home_security_title: "La seguridad es lo primero",
    home_security_description: "Medidas de seguridad avanzadas diseñadas para proteger sus datos y sistemas.",
    home_automation_title: "Automatización e Innovación",
    home_automation_description: "Automatizar procesos para ayudar a que su negocio avance más rápido y de manera más eficiente.",
    home_ia_data_title: "Inteligencia generativa e información sobre datos",
    home_ia_data_description: "Aproveche el poder de la IA y el análisis de datos para impulsar la innovación y tomar decisiones más inteligentes.",
    home_phrase: "Estamos listos para ayudarte a alcanzar tus objetivos.",
    home_client_title: "Nuestros clientes",
    home_client_description: "Nuestros clientes confían en nosotros para impulsar su infraestructura de nube de AWS, permitiéndoles acelerar el crecimiento y optimizar las operaciones con una complejidad mínima. Asóciese con nosotros para aprovechar todo el potencial de la nube de AWS e impulsar su negocio.",
    service_title: "Nuestros Servicios",
    service_devops_description: "Implementamos prácticas de DevOps que fusionan desarrollo y operaciones para acelerar la entrega de aplicaciones y servicios. Utilizando herramientas como GitLab, Terraform, Ansible, Docker y Kubernetes, automatizamos procesos y optimizamos el ciclo de vida del software, asegurando una integración y entrega continua (CI/CD), lo que mejora la eficiencia y reduce los errores. Nuestra experiencia permite a las empresas lanzar nuevas funciones rápidamente y con menos riesgo.",
    service_security_title: "Seguridad",
    service_security_description: "La seguridad en la nube es nuestra máxima prioridad. Protegemos sus sistemas y datos con soluciones avanzadas de ciberseguridad en AWS, utilizando estrategias como cifrado, gestión de identidades, firewalls y monitoreo continuo. Implementamos controles de seguridad que cumplen con los más altos estándares, salvaguardando sus aplicaciones y servicios de amenazas y vulnerabilidades mientras mantenemos un enfoque proactivo para garantizar la seguridad en todos los niveles.",
    service_migration_title: "Migraciones de AWS",
    service_migration_description: "Migrar a la nube de AWS puede ser un desafío, pero en CAXUS.NET simplificamos el proceso. Evaluamos su infraestructura actual, diseñamos una estrategia de migración personalizada y gestionamos todo el proceso, desde la planificación hasta la implementación. Ya sea que busque mejorar el rendimiento, reducir costos o escalar sus operaciones, garantizamos una transición fluida con interrupciones mínimas y un alto nivel de seguridad.",
    service_modernization_title: "Modernización y automatización de AWS",
    service_modernization_description: "En un entorno empresarial en constante cambio, modernizar y automatizar las aplicaciones en la nube es clave para seguir siendo competitivo. En CAXUS.NET utilizamos los servicios de AWS más avanzados para transformar sus aplicaciones, optimizando su rendimiento y reduciendo la necesidad de intervención manual. A través de la automatización, minimizamos los errores y mejoramos la escalabilidad, ayudando a las empresas a responder más rápidamente a las demandas del mercado.",
    service_data_machine_title: "Análisis de datos y aprendizaje automático",
    service_data_machine_description: "El análisis de datos y el aprendizaje automático son esenciales para tomar decisiones informadas. En CAXUS.NET, ofrecemos soluciones de análisis de datos y aprendizaje automático que le permiten obtener información valiosa a partir de sus datos. Ya sea a través de análisis predictivos, modelos de aprendizaje automático o análisis de grandes conjuntos de datos, utilizamos AWS y otras herramientas avanzadas para generar informes y optimizar procesos que impulsan el crecimiento de su negocio.",
    service_generative_title: "IA generativa",
    service_generative_description: "La IA generativa está revolucionando la forma en que las empresas innovan. En CAXUS.NET integramos IA generativa en tus proyectos, ayudándote a crear contenido, optimizar procesos creativos y mejorar la eficiencia operativa. Ya sea que esté buscando generar imágenes, textos o soluciones basadas en IA, implementamos las herramientas y algoritmos más avanzados para que su empresa pueda beneficiarse del futuro de la automatización.",
    solution_title: "Soluciones",
    solution_app_platform_title: "Plataforma de aplicaciones web segura y escalable de AWS",
    solution_app_platform_description: "Ofrecemos una plataforma de aplicaciones web segura y escalable que utiliza la infraestructura de AWS, incluido el equilibrio de carga, el escalado, la administración de dominios y la certificación SSL.",
    solution_marketing_camp_title: "Campañas de Marketing (Mailing y WhatsApp)",
    solution_marketing_camp_description: "Automatizamos y optimizamos campañas de correo electrónico y WhatsApp a través de la integración de servicios de AWS, brindando seguimiento y sincronización en tiempo real.",
    solution_robotize_title: "Robotizar acciones de seguimiento y soporte",
    solution_robotize_description: "Nuestra solución automatiza el monitoreo y el soporte para sitios web que utilizan canalizaciones de GitLab, minimizando el tiempo de inactividad y garantizando respuestas rápidas a problemas técnicos.",
    about_title: "Sobre Nosotros",
    about_empowering_title: "Potenciando su viaje a la nube",
    about_empowering_description: "Ofrecemos soluciones seguras, escalables y automatizadas utilizando la nube de AWS para transformar su negocio.",
    about_stream_title: "Agilización de operaciones",
    about_stream_description: "Nuestro equipo de expertos proporciona soluciones sin servidor para optimizar el rendimiento y la eficiencia.",
    about_accelereting_title: "Acelerar el crecimiento",
    about_accelereting_description: "Aproveche la nube para escalar más rápido y hacer crecer su negocio con una complejidad mínima.",
    about_founder_title: "Nuestros fundadores",
    about_founder_description: "Somos una empresa con sede en Estados Unidos, registrada como LLC en el estado de Florida, garantizando transparencia y confianza a nuestros clientes. Caxus.net LLC fue fundada por dos socios, cada uno de los cuales aporta su experiencia para impulsar el éxito de la empresa:",
    about_founder_apaulet: "Como director ejecutivo de Caxus.net LLC, Augusto lidera la visión, la estrategia y el crecimiento de la empresa, garantizando los más altos estándares de tecnología en la nube y transformación empresarial para los clientes.",
    about_founder_drosso: "Daniel, como CTO, impulsa la estrategia tecnológica en Caxus.net LLC, con un enfoque en implementar soluciones en la nube de vanguardia y garantizar la excelencia técnica en todos los proyectos.",
    about_certification_title: "Certificaciones",
    about_certification_description: "En Caxus.net LLC, creemos firmemente que mantenerse actualizado con las últimas tecnologías es esencial para ofrecer soluciones innovadoras y de alta calidad. Las certificaciones no solo validan nuestro conocimiento sino que también reflejan nuestro compromiso con la excelencia y la mejora continua en un panorama tecnológico en rápida evolución. Estas credenciales nos permiten asegurar a nuestros clientes que tenemos la experiencia y las habilidades necesarias para implementar y gestionar las mejores prácticas de la industria en TI.",
    contact_title: "Ponte en contacto",
    contact_description: "Estamos aquí para ayudarle con cualquier pregunta o apoyo que pueda necesitar. No dude en comunicarse con nosotros a través de cualquiera de los siguientes canales:",
    contact_info_title: "Info",
    contact_info_description: "Si desea saber más sobre nuestros servicios o tiene consultas generales, no dude en contactarnos. Estamos aquí para ayudarlo a explorar cómo Caxus.net LLC puede respaldar su viaje de transformación a la nube.",
    contact_devops_description: "Nuestro equipo de DevOps está listo para ayudar con cualquier soporte técnico o pregunta sobre desarrollo de proyectos. Estamos comprometidos a garantizar el éxito de su infraestructura basada en la nube.",
    contact_socialmedia_title: "Redes Sociales",
    contact_socialmedia_description: "Síganos en LinkedIn para mantenerse actualizado sobre las últimas tendencias e innovaciones en la nube. Conéctese con nuestro equipo y explore cómo podemos colaborar en su próximo gran proyecto.",
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