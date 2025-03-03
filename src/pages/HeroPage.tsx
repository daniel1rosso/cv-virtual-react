import { motion } from 'framer-motion';
import {Linkedin, Github, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';

const HeroPage = () => {
  return (
    <section id="start" className="bg-gradient-to-r from-blue-100 to-blue-300 py-20 px-8 md:px-24">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Daniel Alberto Rosso
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
        >
          System Engineer, Automator, Entrepreneurship, and Cloud Computing
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
          Download CV
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