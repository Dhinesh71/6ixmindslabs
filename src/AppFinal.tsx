import { NavigationFinal } from './components/NavigationFinal';
import { HeroFinal } from './components/sections/HeroFinal';
import { ServicesFinal } from './components/sections/ServicesFinal';
import { PortfolioFinal } from './components/sections/PortfolioFinal';
import { TeamFinal } from './components/sections/TeamFinal';
import { ContactFinal } from './components/sections/ContactFinal';
import { FooterFinal } from './components/sections/FooterFinal';

function AppFinal() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <NavigationFinal />
      <main id="hero">
        <HeroFinal />
        <ServicesFinal />
        <PortfolioFinal />
        <TeamFinal />
        <ContactFinal />
      </main>
      <FooterFinal />
    </div>
  );
}

export default AppFinal;
