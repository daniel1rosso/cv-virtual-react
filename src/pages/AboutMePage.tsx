import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

const AboutMePage = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-8 md:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <motion.img
            src="./daniel-rosso.webp"
            alt="Daniel Alberto Rosso"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </div>
        <div className="md:order-1">
          <motion.h2
            className="text-3xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("about_title")}
          </motion.h2>
          <motion.h2
            className="text-3xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          >
            {t("about_description")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage