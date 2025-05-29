import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageContext";

const ProfileHighlights = () => {
  const { lang } = useTranslation();

  const content = {
    es: {
      valueTitle: "Propuesta de Valor Comercial",
      values: [
        {
          subtitle: "Transformación Digital Integral",
          text: "Soluciones completas: migración cloud, modernización de infraestructura y eficiencia digital end-to-end."
        },
        {
          subtitle: "Automatización y Seguridad",
          text: "Pipelines CI/CD robustos y DevSecOps para despliegues rápidos, seguros y confiables."
        },
        {
          subtitle: "Inteligencia Artificial y Chatbots",
          text: "Asistentes virtuales personalizados con OpenAI, Gemini, WhatsApp, Telegram y más."
        },
        {
          subtitle: "Optimización de Costos en la Nube",
          text: "Auditorías y estrategias de ahorro en AWS y Azure sin sacrificar performance."
        }
      ]
    },
    en: {
      valueTitle: "Value Proposition",
      values: [
        {
          subtitle: "Full Digital Transformation",
          text: "End-to-end solutions: cloud migration, infrastructure modernization, and digital efficiency."
        },
        {
          subtitle: "Automation & Security",
          text: "Robust CI/CD pipelines and DevSecOps for fast, secure, and reliable deployments."
        },
        {
          subtitle: "AI and Chatbots",
          text: "Personalized virtual assistants with OpenAI, Gemini, WhatsApp, Telegram, and more."
        },
        {
          subtitle: "Cloud Cost Optimization",
          text: "Audits and saving strategies across AWS and Azure without performance loss."
        }
      ]
    }
  };

  const langContent = content[lang || "es"];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="profile">
      <motion.h2
        className="text-3xl font-semibold mb-12 text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {langContent.valueTitle}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {langContent.values.map((val, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white p-5 rounded-xl shadow-md border border-blue-100"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="text-blue-700 font-semibold mb-2 text-lg">
              {val.subtitle}
            </div>
            <p className="text-gray-700 text-sm">{val.text}</p>
            {idx !== langContent.values.length - 1 && (
              <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="w-8 h-0.5 bg-blue-300 dotted-line animate-pulse"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfileHighlights;