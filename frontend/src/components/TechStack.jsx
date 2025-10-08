import { Database, Server, Code, Layers, Coffee,FileCode,Palette,Wind, Code2 } from 'lucide-react';

const techStack = [
  {
    category: 'HTML5',
    icon: FileCode,
    color: 'from-amber-400 to-orange-500',
  },
  {
    category: 'CSS',
    icon: Palette,
    color: 'from-sky-400 to-indigo-600',
  },
   {
    category: 'Tailwind CSS',
    icon: Wind,
    color: 'from-cyan-400 to-blue-600',
  },
   {
    category: 'JavaScript',
    icon: Code2,
    color: 'from-yellow-300 to-amber-500',
  },
   {
    category: 'Express.js',
    icon: Server,
    color: 'from-gray-400 to-slate-600',
  },
  {
    category: 'MongoDB',
    icon: Database,
    color: 'from-green-400 to-emerald-600',
  },
  {
    category: 'Node.js',
    icon: Layers,
    color: 'from-green-500 to-lime-600',
  },
    {
    category: 'C++',
    icon: Code,
    color: 'from-sky-400 to-blue-600',
  },
   {
    category: 'Java',
    icon: Coffee,
    color: 'from-orange-400 to-red-600',
  },
  {
    category: 'Python',
    icon: Code,
    color: 'from-sky-400 to-indigo-600',
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Tech <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={tech.category}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>

              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-4 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{tech.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
