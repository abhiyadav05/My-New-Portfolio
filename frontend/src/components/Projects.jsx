import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Real-time Chat Application',
    description: 'Full-stack chat app with WebSocket integration, JWT authentication, and MongoDB storage',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'E-commerce Platform',
    description: 'Scalable online store with payment integration, inventory management, and admin dashboard',
    tech: ['Next.js', 'Express', 'Stripe', 'Redux'],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Algorithm Visualizer',
    description: 'Interactive tool to visualize sorting and graph algorithms with step-by-step execution',
    tech: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative workspace with real-time updates, task tracking, and team communication',
    tech: ['MERN', 'WebRTC', 'Redis', 'Docker'],
    gradient: 'from-orange-500 to-red-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">Building innovative solutions with modern technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`}></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white font-medium transition-all duration-300 hover:scale-105">
                      <Github className="w-5 h-5" />
                      Code
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
