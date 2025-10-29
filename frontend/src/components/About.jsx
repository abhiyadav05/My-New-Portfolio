import { User, MapPin, Mail, Download } from 'lucide-react';
import myImage from '../assets/myimg.png';
import resumePDF from '../assets/AbhishekYadav_AI_Engineer.pdf';
export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 border border-slate-700">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-6xl font-bold">
                    <img
          src={myImage}
          alt="Profile"
          className="w-58 h-50 object-cover rounded-full "
        />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">Abhishek Yadav</h3>
                  <p className="text-emerald-400 text-lg font-medium mb-4">MERN Stack Developer</p>
                  <div className="flex items-center justify-center gap-2 text-slate-400 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Lucknow - Uttar Pradesh, INDIA</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <Mail className="w-4 h-4" />
                    <span>abhshekyadav95065@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                About <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Me</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
             
              <p>
                I'm dedicated to continuous learning and staying at the forefront of web development technologies.
                Whether it's implementing complex features, optimizing performance, or mentoring junior developers,
                I bring enthusiasm and expertise to every project.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-emerald-500 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">1+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">700+</div>
                <div className="text-slate-400 text-sm">Problems Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
