import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { LanguageProvider } from './context/LanguageContext';

import HeroPage from "./pages/HeroPage";
import AboutMePage from "./pages/AboutMePage";
import ExperienceSkillPage from "./pages/ExperienceSkillPage";
import InterestsAndSkillsPage from "./pages/InterestsAndSkillsPage";
import GitHubProjectsPage from "./pages/GitHubProjectsPage";
import ContactPage from "./pages/ContactPage";
import CertificationsPage from "./pages/CertificationsPage";
import ServicesPage from "./pages/ServicesPage";
// import ProductsPage from "./pages/ProductsPage";
import ProfileHighlights from "./pages/ProfileHighlightsPage";

const App = () => {
    return (
        <div className="font-sans flex flex-col min-h-screen">
            <LanguageProvider>
                
                <HeroPage />
                <AboutMePage />
                <ProfileHighlights />
                <ServicesPage />
                <CertificationsPage />
                {/* <ProductsPage /> */}
                <GitHubProjectsPage />
                <InterestsAndSkillsPage />
                <ExperienceSkillPage />
                <ContactPage />
                
                <Footer />
                <WhatsAppIcon />
            </LanguageProvider>
        </div>
    );
};

export default App;