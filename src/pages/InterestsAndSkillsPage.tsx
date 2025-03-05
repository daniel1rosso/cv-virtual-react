import { motion } from 'framer-motion';
import { CheckCheck } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const InterestsAndSkills = () => {
    const { t } = useTranslation();

    const interests = [
        {
            title: t("outdoor_title"),
            description: t("outdoor_description"),
        },
        {
            title: t("sport_title"),
            description: t("sport_description"),
        },
        {
            title: t("entertainment_title"),
            description: t("entertainment_description"),
        },
        {
            title: t("emerging_title"),
            description: t("emerging_description"),
        },
        {
            title: t("entrepreneurial_spirit_title"),
            description: t("entrepreneurial_spirit_description"),
        },
    ];

    const skills = [
        {
            title: t("commitment_title"),
            description: t("commitment_description"),
        },
        {
            title: t("responsibility_title"),
            description: t("responsibility_description"),
        },
        {
            title: t("entrepreneurial_title"),
            description: t("entrepreneurial_description"),
        },
        {
            title: t("implication_title"),
            description: t("implication_description"),
        },
        {

            title: t("positive_title"),
            description: t("positive_description"),
        },
        {

            title: t("positive_title"),
            description: t("positive_description"),
        },
        {
            title: t("adaptability_title"),
            description: t("adaptability_description"),
        },
        {
            title: t("dedication_title"),
            description: t("dedication_description"),
        },
        {
            title: t("sincerity_title"),
            description: t("sincerity_description"),
        },
    ];


    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-semibold text-gray-800 mb-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Interests
                </motion.h2>
                <ul className="space-y-4">
                    {interests.map((interest, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <CheckCheck size={32} className="mr-2" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{interest.title}</h3>
                                <p>{interest.description}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
                <motion.h2
                    className="text-3xl font-semibold text-gray-800 mt-16 mb-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Skills and Qualities
                </motion.h2>
                <ul className="space-y-4">
                    {skills.map((skill, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <CheckCheck size={32} className="mr-2" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
                                <p>{skill.description}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default InterestsAndSkills;