import { Database, Server, Code, Layers } from 'lucide-react';

const techStack = [
  {
    category: 'MongoDB',
    icon: Database,
    color: 'from-green-400 to-emerald-600',
    skills: ['NoSQL', 'Aggregation', 'Mongoose', 'Atlas'],
  },
  {
    category: 'Express.js',
    icon: Server,
    color: 'from-gray-400 to-slate-600',
    skills: ['REST APIs', 'Middleware', 'Authentication', 'Routing'],
  },
  {
    category: 'React',
    icon: Code,
    color: 'from-cyan-400 to-blue-600',
    skills: ['Hooks', 'Redux', 'Next.js', 'TypeScript'],
  },
  {
    category: 'Node.js',
    icon: Layers,
    color: 'from-green-500 to-lime-600',
    skills: ['Express', 'APIs', 'Socket.io', 'Microservices'],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Tech <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-slate-400 text-lg">Mastering the MERN ecosystem</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={tech.category}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>

              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{tech.category}</h3>

                <div className="space-y-2">
                  {tech.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center text-slate-300 text-sm"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.color} mr-2`}></div>
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full animate-progress`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
