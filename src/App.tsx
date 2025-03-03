import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { LanguageProvider } from './context/LanguageContext';

import HeroPage from "./pages/HeroPage";
import AboutMePage from "./pages/AboutMePage";
import ExperienceSkillPage from "./pages/ExperienceSkillPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CertificationsPage from "./pages/CertificationsPage";

const App = () => {
    return (
        <div className="font-sans flex flex-col min-h-screen">
            <LanguageProvider>
                
                <HeroPage />
                <AboutMePage />
                <CertificationsPage />
                <ExperienceSkillPage />
                <ProjectsPage />
                <BlogPage />
                <ContactPage />
                
                <Footer />
                <WhatsAppIcon />
            </LanguageProvider>
        </div>
    );
};

export default App;