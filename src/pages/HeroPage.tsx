// src/pages/HeroPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from '../context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

const HeroPage = () => {
  const { lang, setLang, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const changeLanguage = (newLang: 'en' | 'es') => {
    setLang(newLang);

    const pathWithoutLang = location.pathname.replace(/^\/(en)(\/|$)/, '/');
    const newPath = newLang === 'en' ? `/en${pathWithoutLang}` : pathWithoutLang;

    navigate(newPath);
    setLangDropdownOpen(false);
  };

  const languageItems = [
    { code: 'es', label: 'Español', countryCode: 'ES' },
    { code: 'en', label: 'English', countryCode: 'US' }
  ];

  return (
    <section
      id="start"
      className="relative bg-gradient-to-r from-blue-100 to-blue-300 py-20 px-8 md:px-24"
    >
      {/* Botón de idioma posicionado en la esquina superior derecha */}
      <div className="absolute top-4 right-4">
        <div className="relative">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center space-x-2 hover:text-gray-700 focus:outline-none"
          >
            <ReactCountryFlag
              countryCode={lang === 'en' ? 'US' : 'ES'}
              svg
              style={{ width: '1.5em', height: '1.5em' }}
              title={lang === 'en' ? 'English' : 'Español'}
            />
          </button>
          {langDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-36 bg-white text-black rounded shadow-lg z-10">
              {languageItems.map((item) => (
                <li key={item.code} className="text-center">
                  <button
                    onClick={() => changeLanguage(item.code as 'en' | 'es')}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <ReactCountryFlag
                      countryCode={item.countryCode}
                      svg
                      style={{ width: '1.5em', height: '1.5em' }}
                      title={item.label}
                    />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="container mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Daniel Alberto Rosso
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
        >
          {t('title_description')}
        </motion.p>
        <motion.a
          href="./cv-danielalbertorosso.pdf"
          target="_blank"
          download="cv-danielalbertorosso.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
        >
          {t('title_download_cv')}
        </motion.a>

        <motion.div
          className="mt-10 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/daniel-alberto-rosso-444305170/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/daniel1rosso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900"
          >
            <Github size={32} />
          </a>
          <a
            href="https://t.me/danielrosso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <Send size={32} />
          </a>
          <a
            href="https://wa.link/tzstnj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600"
          >
            <MessageCircle size={32} />
          </a>
          <a
            href="https://www.instagram.com/daniel_rosso_/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.facebook.com/rocho13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900"
          >
            <Facebook size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;