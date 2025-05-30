import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageContext";

const ProductsPage = () => {
  const { lang, t } = useTranslation();

  const products = [
    {
      name: "CotizacionYa.ar",
      url: "https://cotizacionya.ar",
      description: {
        es: "Herramienta en tiempo real para consultar cotizaciones financieras, creada para profesionales y usuarios finales.",
        en: "Real-time tool for financial exchange queries, designed for professionals and end users."
      }
    },
    {
      name: "Caxus.net",
      url: "https://caxus.net",
      description: {
        es: "Nuestra consultora tecnológica donde ofrecemos servicios en la nube, automatizaciones y más.",
        en: "Our tech consulting firm offering cloud, automation and DevOps services."
      }
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white" id="products">
      <motion.h2
        className="text-4xl font-semibold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("products_title")}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl shadow-lg p-6 bg-blue-50 border border-blue-100 hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">{product.name}</h3>
            <p className="text-gray-700 text-sm mb-4">
              {product.description[lang]}
            </p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              {t("visit_site")}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
