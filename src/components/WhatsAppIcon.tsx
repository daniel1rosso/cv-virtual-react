import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from '../context/LanguageContext';

const WhatsAppIcon = () => {
  const { t } = useTranslation();
  
  const phoneNumber = "543537512557";
  const message = t("whatsapp_message");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce">
      <button
        onClick={handleClick}
        aria-label="Chat en WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg focus:outline-none transition transform hover:scale-105"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppIcon;