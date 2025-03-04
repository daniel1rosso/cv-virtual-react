import { motion } from 'framer-motion';

const CertificationsPage = () => {

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-3 place-items-center">
          {[
            {
              src: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
              alt: "AWS Certified Cloud Practitioner",
            },
            {
              src: "https://images.credly.com/size/110x110/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
              alt: "AWS Solution Architect Associate",
            },
            {
              src: "https://images.credly.com/size/680x680/images/e07c6cc4-b737-4d7e-8ce8-66b6b7a60367/image.png",
              alt: "AWS Knowledge: Serverless",
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
              className="bg-gray-10 rounded w-32 h-32 mb-3 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsPage;