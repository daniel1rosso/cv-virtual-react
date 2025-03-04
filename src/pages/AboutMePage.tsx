import { motion } from 'framer-motion';

const AboutMePage = () => {

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
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          >
            I am a Systems Engineer passionate about the DevSecOps approach in the cloud and an enthusiast of technological revolution. I love leading projects, automating processes, and providing backend solutions for innovative applications.
            With work experience on various projects, I take pride in demonstrating exceptional skills and approaching challenges with dedication, responsibility, and enthusiasm to achieve the most satisfactory resolutions.
            I am excited to continue growing professionally and take on new challenges in the world of technology. I look forward to contributing my passion and expertise to exciting and transformative projects!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage