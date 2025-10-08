import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <CompetitiveProgramming />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
