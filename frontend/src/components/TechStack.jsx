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
    category: 'Node.js',
    icon: Layers,
    color: 'from-green-500 to-lime-600',
  },
  {
    category: 'RabbitMQ',
    icon: Server,
    color: 'from-orange-500 to-orange-600',
  },
  {
    category: 'Redis',
    icon: Layers,
    color: 'from-red-500 to-orange-600',
  },
  {
    category: 'MongoDB',
    icon: Database,
    color: 'from-green-400 to-emerald-600',
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
    <section id="tech-stack" className="py-8 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Tech <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={tech.category}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-y-1 inset-x-2 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-25 blur-lg transition-all duration-500`}></div>

              <div className="relative flex items-center gap-2 bg-slate-900/70 backdrop-blur-xl rounded-full px-3 py-2 border border-slate-700/70 hover:border-slate-400/80 transition-all duration-500 ease-out transform group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-emerald-500/20">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${tech.color} shadow-md shadow-slate-900/60 group-hover:shadow-emerald-500/40 transition-all duration-500 group-hover:rotate-6`}>
                  <tech.icon className="w-4 h-4 text-white" />
                </div>

                <h3 className="text-xs font-semibold tracking-wide text-slate-50">
                  {tech.category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
