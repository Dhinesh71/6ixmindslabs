import { Navigation } from './components/Navigation';
import { HeroEnhanced } from './components/HeroEnhanced';
import { ServicesEnhanced } from './components/ServicesEnhanced';
import { PortfolioEnhanced } from './components/PortfolioEnhanced';
import { TeamEnhanced } from './components/TeamEnhanced';
import { ContactEnhanced } from './components/ContactEnhanced';
import { Footer } from './components/Footer';

function AppEnhanced() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroEnhanced />
        <ServicesEnhanced />
        <PortfolioEnhanced />
        <TeamEnhanced />
        <ContactEnhanced />
      </main>
      <Footer />
    </div>
  );
}

export default AppEnhanced;
