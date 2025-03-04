import { motion } from 'framer-motion';
import { CheckCheck } from 'lucide-react';

const InterestsAndSkills = () => {
    const interests = [
        {
            title: 'Outdoor Exploration',
            description: 'I enjoy spending time outdoors and exploring new places through travel.',
        },
        {
            title: 'Sports Activities',
            description: 'I am passionate about cycling, playing paddle, and staying physically active.',
        },
        {
            title: 'Entertainment and Relaxation',
            description: 'I like to relax by watching series in my leisure time, finding a balance between work and rest.',
        },
        {
            title: 'Emerging Technology',
            description: 'Keeping up-to-date with the latest emerging technologies and their application in various fields is one of my priorities. I am always eager to learn and apply new tools and solutions to enhance my skills and knowledge.',
        },
        {
            title: 'Entrepreneurial Spirit',
            description: 'I am motivated by the entrepreneurial spirit. I love exploring opportunities to develop innovative projects and contribute to the growth and success of business initiatives.',
        },
    ];

    const skills = [
        {
            title: 'Commitment',
            description: 'I dedicate my energy and time to achieve established goals, showing perseverance and dedication in my work.',
        },
        {
            title: 'Responsibility',
            description: 'I commit to fulfilling my responsibilities and assigned tasks, taking ownership of my actions and decisions.',
        },
        {
            title: 'Entrepreneurial',
            description: 'I constantly seek new opportunities and creative solutions to challenges, demonstrating initiative and business vision.',
        },
        {
            title: 'Involvement',
            description: 'I actively engage in projects and activities, showing genuine interest and contributing to team success.',
        },
        {
            title: 'Positive Attitude',
            description: 'I maintain an optimistic and constructive attitude, inspiring others and overcoming obstacles with a progressive mindset.',
        },
        {
            title: 'Proactivity',
            description: 'I anticipate needs and potential problems, taking preventive measures and actively seeking ways to improve efficiency and quality.',
        },
        {
            title: 'Adaptability',
            description: 'I easily adjust to new situations and challenges, being flexible and open to change to achieve established goals.',
        },
        {
            title: 'Dedication',
            description: 'I commit to achieving excellence in all my activities, demonstrating perseverance and constant effort to attain the best results.',
        },
        {
            title: 'Sincerity',
            description: 'I act with honesty and transparency in all my interactions, maintaining integrity and trust in all professional relationships.',
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
