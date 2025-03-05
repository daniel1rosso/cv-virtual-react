import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';

const ExperienceSkillPage = () => {
    const { t } = useTranslation();
    
    const experiences = [
        { year: "January 2025 - Current", title: 'Caxus', description: 'Chief Technology Officer', skills: ['Amazon Web Services (AWS)', 'Linux', 'DevOps', 'Mejora de procesos', 'Automatización', 'Liderazgo', 'Migración a la nube', 'Costes', 'Terraform', 'AWS Lambda', 'AWS CLI', 'AWS Identity and Access Management (IAM)', 'GitLab', 'Bitbucket', 'Bash', 'Amazon DynamoDB', 'Amazon Route 53', 'Amazon Connect', 'AWS Glue', 'AWS Route 53', 'AWS Bucket S3', 'AWS Cost Explorer', 'AWS CloudWatch', 'AWS CloudFront', 'AWS RDS', 'AWS VPN', 'AWS WAF', 'AWS Backup', 'AWS DMS', 'Athena', 'Certificate Manager', 'AWS Kinessis', 'AWS Data Firehose', 'AWS Support', 'AWS Service Quotas', 'Microsoft SQL Server', 'Networking and Security', 'Diagramas esquemáticos', 'Diagramas esquemáticos', 'MongoDB', ] },
        { year: "November 2023 - March 2025", title: 'Start University', description: 'SSR DevOps Engineer', skills: ['Amazon Web Services (AWS)', 'Linux', 'DevOps', 'Mejora de procesos', 'Automatización', 'Liderazgo', 'Migración a la nube', 'Costes', 'Terraform', 'AWS Lambda', 'AWS CLI', 'AWS Identity and Access Management (IAM)', 'GitLab', 'Bash', 'Amazon DynamoDB', 'Amazon Route 53', 'Amazon Connect', 'AWS Glue', 'AWS Route 53', 'AWS Bucket S3', 'AWS Cost Explorer', 'AWS CloudWatch', 'AWS CloudFront', 'AWS RDS', 'AWS VPN', 'AWS WAF', 'AWS Backup', 'AWS DMS', 'Athena', 'Certificate Manager', 'AWS Kinessis', 'AWS Data Firehose', 'AWS Support', 'AWS Service Quotas', 'Microsoft SQL Server', 'Networking and Security'] },
        { year: "July 2023 - November 2023", title: 'Start University', description: 'JR DevOps Engineer', skills: ['Amazon Web Services (AWS)', 'Linux', 'DevOps', 'Mejora de procesos', 'Automatización', 'Liderazgo', 'Migración a la nube', 'Costes', 'Terraform', 'AWS Lambda', 'AWS CLI', 'AWS Identity and Access Management (IAM)', 'GitLab', 'Bash', 'Amazon DynamoDB', 'Amazon Route 53', 'Amazon Connect', 'AWS Glue', 'AWS Route 53', 'AWS Bucket S3', 'AWS Cost Explorer', 'AWS CloudWatch', 'AWS CloudFront', 'AWS RDS', 'AWS VPN', 'AWS WAF', 'AWS Backup', 'AWS DMS', 'Athena', 'Certificate Manager', 'AWS Kinessis', 'AWS Data Firehose', 'AWS Support', 'AWS Service Quotas', 'Microsoft SQL Server', 'Networking and Security'] },
        { year: "September 2022 - July 2023", title: 'Start University', description: 'System Engineer', skills: ['AWS', 'Bitbucket', '.NET', 'Net Core', 'HTML', 'CSS', 'Entre otros servicios como mensajería, emails, whatsapp', 'Amazon Web Services (AWS)', 'Amazon Connect', 'Capacidad de análisis', 'NoSQL', 'Arquitectura', 'Amazon S3', 'Linux', 'ASP.NET', 'Conflict Resolution', 'Implementación de estrategias'] },
        { year: "March 2022 - September 2022", title: 'Start University', description: 'Full Stack Developer', skills: ['Model MVC', 'Capacidad de análisis', 'SQL', 'Node.js', 'Programación orientada a objetos (OOP)', 'SQL Server Management Studio', 'Desarrollo Full Stack', 'Desarrollo de API', 'Desarrollo de páginas web (Back-End)', 'Arquitectura', 'Git', 'Amazon S3', 'JavaScript', 'C#', 'ASP.NET', 'Conflict Resolution', 'Implementación de estrategias', 'AJAX', 'Trabajo en equipo', 'HTML5', 'Amazon Web Services (AWS)', '.NET Framework', 'Bootstrap', 'Css', '.NET Core', 'Scrum', 'JSON', 'jQuery', 'Amazon Connect'] },
        { year: "August 2021 - March 2022", title: 'Innovus Software', description: 'Desarrollador full stack', skills: ['Model MVC', 'Capacidad de análisis', 'SQL', 'PHP', 'Node.js', 'Desarrollo Full Stack', 'Desarrollo de API', 'Liderazgo de equipos', 'Desarrollo de páginas web (Back-End)', 'Java', 'Arquitectura', 'Git', 'Linux', 'JavaScript', 'Conflict Resolution', 'Implementación de estrategias', 'AJAX', 'Trabajo en equipo', 'HTML5', 'Bootstrap', 'MySQL', 'Css', 'Scrum', 'JSON', 'AngularJS', 'TypeScript'] },
        { year: "January 2019 - July 2020", title: 'Telepathic Soft', description: 'Back-end Developer', skills: ['Modelo–vista–controlador', 'Capacidad de análisis', 'SQL', 'PHP', 'Node.js', 'Desarrollo de API', 'Desarrollo de páginas web (Back-End)', 'Arquitectura', 'Git', 'Linux', 'JavaScript', 'GitLab', 'Conflict Resolution', 'Implementación de estrategias', 'AJAX', 'Trabajo en equipo', 'HTML5', 'Bootstrap', 'MySQL', 'Css', 'Scrum', 'JSON', 'jQuery'] },
    ];

    return (
        <section id="experience" className="py-16 px-8 md:px-24 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                    {t("experience_title")}
                </h2>
                <div className="relative">
                    <div className="absolute left-1/2 h-full border border-gray-300 transform -translate-x-1/2"></div>
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-8">
                            <div className="flex items-center">
                                <div className="w-1/2 text-right pr-4">
                                    <motion.div
                                        className="text-lg font-semibold text-gray-700"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeInOut' }}
                                    >
                                        {exp.title}
                                    </motion.div>
                                    <motion.div
                                        className="text-gray-500"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.1, ease: 'easeInOut' }}
                                    >
                                        {exp.year}
                                    </motion.div>
                                </div>
                                <div className="w-1/2 text-left pl-4">
                                    <motion.div
                                        className="text-gray-600"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeInOut' }}
                                    >
                                        {exp.description}
                                    </motion.div>
                                    <motion.div className="flex flex-wrap mt-2">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-blue-200 text-blue-700 py-1 px-3 rounded-full mr-2 mb-2 text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSkillPage;