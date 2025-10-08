import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header/>
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
