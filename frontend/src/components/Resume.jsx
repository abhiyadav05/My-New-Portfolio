import { Briefcase, GraduationCap, Award, Download, Calendar } from 'lucide-react';

const experience = [
  {
    title: 'TRAINEE',
    company: 'Bharat Electronic Limited',
    period: '2023 - November',
    description: 'Leading as a trainee in company and working major on python how to integrate the python with machines.',
    achievements: [
      'I was awarded by the completion certificate.',
      
    ],
  },
  
];

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Institute of Engineering & Technology, Lucknow',
    period: '2023 - 2027',
    details: 'CGPA: 9.13/10.0 ',
  },
];


export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={job.title}
                  className="relative group animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full"></div>

                  <div className="ml-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{job.title}</h4>
                        <p className="text-emerald-400 font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 text-sm">{job.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{job.description}</p>

                    <div className="space-y-2">
                      {job.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></div>
                          <p className="text-slate-400 text-sm flex-1">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 mb-3 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <p className="text-slate-300 text-sm">{edu.details}</p>
                </div>
              ))}
            </div>

            <div>
              

            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Collaborate?</h3>
          <p className="text-slate-300 mb-6">
            With 1+ years of experience in MERN stack development and competitive programming,
            I'm ready to bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl text-white font-medium hover:scale-105 transition-transform duration-300">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium hover:border-emerald-500 transition-colors duration-300">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
