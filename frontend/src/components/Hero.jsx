import { Code2, Terminal, Trophy, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import About from './About';
import resumePDF from '../assets/AbhishekYadav_AI_Engineer.pdf';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-8 animate-slide-down">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            MERN Stack
            <span className="block bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Competitive Programmer | Full Stack Engineer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2">
              <Code2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg">Full Stack Developer</h3>
              <p className="text-slate-400 text-sm mt-2">MERN Expert</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
              <Terminal className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg">Problem Solver</h3>
              <p className="text-slate-400 text-sm mt-2">Data Structures</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
              <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg">Competitive</h3>
              <p className="text-slate-400 text-sm mt-2">Algorithm Master</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-bounce-slow">
          <a href="#projects" className="group relative inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50">
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <button className="group relative px-8 py-4 bg-slate-800 border-2 border-emerald-500 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:bg-emerald-500/10">
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
             <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Download Resume
              </a>
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
   
  );
}
