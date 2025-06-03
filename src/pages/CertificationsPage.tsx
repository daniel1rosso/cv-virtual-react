import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

const CertificationsPage = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
            className="text-4xl font-semibold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            {t("certifications_title")}
        </motion.h2>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-4 place-items-center">
          {[
            {
              src: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
              alt: "AWS Solution Architect Associate",
            },
            {
              src: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
              alt: "AWS Certified Cloud Practitioner",
            },
            {
              src: "https://images.credly.com/size/680x680/images/e07c6cc4-b737-4d7e-8ce8-66b6b7a60367/image.png",
              alt: "AWS Knowledge: Serverless",
            },
            {
              src: "https://learn.microsoft.com/es-es/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
              alt: "Azure fundamentals AZ-900",
            },
          ].map((image, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              src={image.src}
              alt={image.alt}
              className="bg-gray-10 rounded w-64 h-64 mb-3 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsPage;