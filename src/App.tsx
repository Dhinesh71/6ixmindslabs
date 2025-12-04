import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
