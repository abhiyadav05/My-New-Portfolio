import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Real-time Chat/Image Application",
    description:
      "Full-stack chat app with opneai integration, JWT authentication, and MongoDB storage",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Openai",
      "JWT",
      "TailwindCSS",
    ],
    gradient: "from-emerald-500 to-teal-600",
    githubLink: "https://github.com/abhiyadav05/My-GPT",
    liveDemoLink: "https://github.com/abhiyadav05/My-GPT",
  },
  {
    title: "Placement Portal",
    description:
      "Recruiter,Student and Admin dashboard where Student apply for the job and recruiter post the job.",
    tech: [
      "HTML",
      "CSS",
      "Bootsrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "XAMP Server",
    ],
    gradient: "from-blue-500 to-cyan-600",
    githubLink: "https://github.com/abhiyadav05/Placement-Portal",
    liveDemoLink: "https://github.com/abhiyadav05/Placement-Portal",
  },
  {
    title: "Video Streaming Platform",
    description:
      "A video streaming platform with user authentication, video upload, and playback features.",
    tech: ["Express.Js", "Node.js", "MongoDB", "Cloudinary"],
    gradient: "from-blue-500 to-cyan-600",
    githubLink: "https://github.com/abhiyadav05/Video_Stream",
    liveDemoLink: "https://github.com/abhiyadav05/Video_Stream",
  },
  {
    title: "Github Profile Finder",
    description:
      "An application that fetches and displays GitHub user profiles based on username input.",
    tech: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS", "GitHub API"],
    gradient: "from-emerald-500 to-teal-600",
    githubLink: "https://github.com/abhiyadav05/findGithubProfile",
    liveDemoLink: "https://github.com/abhiyadav05/findGithubProfile",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Building innovative solutions with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`}
                ></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

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
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white font-medium transition-all duration-300 hover:scale-105">
                        <Github className="w-5 h-5" />
                        Code
                      </button>
                    </a>
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {console.log(projects.liveDemoLink)}
                      <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50">
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </button>
                    </a>
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
