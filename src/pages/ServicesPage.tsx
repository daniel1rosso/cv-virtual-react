import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageContext";

const ServicesPage = () => {
    const { lang } = useTranslation();

    const services = [
      {
        title: {
          es: "☁️ Consultoría en la Nube",
          en: "☁️ Cloud Consulting"
        },
        description: {
          es: "Diseño, implementación y optimización de infraestructuras en la nube utilizando las mejores prácticas de la industria. Aseguro que tus sistemas sean escalables, seguros y eficientes, adaptados a las necesidades específicas de tu negocio.",
          en: "Design, implementation and optimization of cloud infrastructures using industry best practices. Ensuring your systems are scalable, secure and efficient, tailored to your business needs."
        },
        items: {
          es: [
            "Arquitectura y migración a la nube.",
            "Implementación de soluciones híbridas y multicloud.",
            "Automatización de despliegues y gestión de recursos."
          ],
          en: [
            "Cloud architecture and migration.",
            "Hybrid and multicloud solutions implementation.",
            "Deployment automation and resource management."
          ]
        }
      },
      {
        title: {
          es: "🔄 Automatización y DevOps",
          en: "🔄 Automation and DevOps"
        },
        description: {
          es: "Optimización del ciclo de vida del desarrollo de software mediante la automatización de procesos, integración continua y entrega continua (CI/CD), asegurando despliegues rápidos y confiables.",
          en: "Software development lifecycle optimization through process automation, continuous integration and delivery (CI/CD), ensuring fast and reliable deployments."
        },
        items: {
          es: [
            "Configuración de pipelines CI/CD.",
            "Automatización de pruebas y despliegues.",
            "Monitorización y logging de aplicaciones."
          ],
          en: [
            "CI/CD pipeline setup.",
            "Test and deployment automation.",
            "Application monitoring and logging."
          ]
        }
      },
      {
        title: {
          es: "🔐 Seguridad en la Nube (DevSecOps)",
          en: "🔐 Cloud Security (DevSecOps)"
        },
        description: {
          es: "Integración de prácticas de seguridad desde las primeras etapas del desarrollo hasta la operación, garantizando la protección de tus aplicaciones y datos en entornos cloud.",
          en: "Integration of security practices from early development to operations, ensuring your applications and data are protected in cloud environments."
        },
        items: {
          es: [
            "Implementación de políticas de seguridad y cumplimiento.",
            "Gestión de identidades y accesos (IAM).",
            "Análisis y mitigación de vulnerabilidades."
          ],
          en: [
            "Security and compliance policy implementation.",
            "Identity and access management (IAM).",
            "Vulnerability analysis and mitigation."
          ]
        }
      },
      {
        title: {
          es: "🗄️ Backend y Bases de Datos",
          en: "🗄️ Backend and Databases"
        },
        description: {
          es: "Desarrollo y mantenimiento de sistemas backend robustos y escalables, junto con la gestión eficiente de bases de datos para soportar aplicaciones de alto rendimiento.",
          en: "Development and maintenance of robust, scalable backend systems along with efficient database management to support high-performance applications."
        },
        items: {
          es: [
            "Diseño y desarrollo de APIs RESTful y GraphQL.",
            "Modelado y optimización de bases de datos.",
            "Integración de servicios externos y microservicios."
          ],
          en: [
            "Design and development of RESTful and GraphQL APIs.",
            "Database modeling and optimization.",
            "Integration of external services and microservices."
          ]
        }
      },
      {
        title: {
          es: "🤖 Inteligencia Artificial y Chatbots",
          en: "🤖 Artificial Intelligence and Chatbots"
        },
        description: {
          es: "Creación de soluciones inteligentes que mejoran la interacción con los usuarios mediante chatbots y asistentes virtuales, integrando capacidades de procesamiento de lenguaje natural y aprendizaje automático.",
          en: "Creation of intelligent solutions that enhance user interaction through chatbots and virtual assistants, integrating natural language processing and machine learning capabilities."
        },
        items: {
          es: [
            "Desarrollo de chatbots personalizados.",
            "Integración con plataformas de mensajería.",
            "Automatización de atención al cliente y procesos internos."
          ],
          en: [
            "Custom chatbot development.",
            "Messaging platform integration.",
            "Customer service and internal process automation."
          ]
        }
      },
      {
        title: {
          es: "💰 Optimización de Costos en la Nube",
          en: "💰 Cloud Cost Optimization"
        },
        description: {
          es: "Análisis detallado del uso de recursos en la nube para identificar oportunidades de ahorro, implementando estrategias que reduzcan costos sin comprometer el rendimiento.",
          en: "Detailed analysis of cloud resource usage to identify savings opportunities, implementing strategies that reduce costs without compromising performance."
        },
        items: {
          es: [
            "Auditoría de gastos en la nube.",
            "Recomendaciones de dimensionamiento y uso eficiente.",
            "Implementación de políticas de ahorro y presupuestos."
          ],
          en: [
            "Cloud cost audits.",
            "Sizing recommendations and efficient usage.",
            "Savings policies and budgeting implementation."
          ]
        }
      },
      {
        title: {
          es: "🔌 Integraciones y Soluciones SaaS",
          en: "🔌 SaaS Integrations and Solutions"
        },
        description: {
          es: "Conexión de aplicaciones y servicios para crear ecosistemas digitales integrados que mejoren la eficiencia operativa y la experiencia del usuario.",
          en: "Connecting applications and services to create integrated digital ecosystems that improve operational efficiency and user experience."
        },
        items: {
          es: [
            "Integración de plataformas de pago y comunicación.",
            "Automatización de flujos de trabajo entre aplicaciones.",
            "Desarrollo de conectores personalizados."
          ],
          en: [
            "Integration of payment and communication platforms.",
            "Workflow automation between applications.",
            "Custom connector development."
          ]
        }
      }
    ];

  return (
    <section className="py-20 px-6 bg-blue-50" id="services">
      <motion.h2
        className="text-4xl font-semibold mb-10 text-center text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {lang === "en" ? "Products and Services" : "Productos y Servicios"}
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white p-5 rounded-xl shadow-md border border-blue-100"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title[lang]}</h3>
            <p className="text-gray-700 text-sm mb-4">{service.description[lang]}</p>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              {service.items[lang].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
