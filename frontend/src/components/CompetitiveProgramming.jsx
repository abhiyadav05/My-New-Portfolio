import { Award, TrendingUp, Code2, Zap } from 'lucide-react';

const achievements = [
  {
    platform: 'LeetCode',
    rating: '1562+',
    problems: '400+',
    icon: Code2,
    color: 'from-orange-400 to-yellow-500',
    link :'https://leetcode.com/u/abhshekyadav95065/',
  },
  {
    platform: 'Codeforces',
    rating: 'PUPIL',
    problems: '300+',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-500',
     link :'https://codeforces.com/profile/abhshekyadav95065',
  },
  {
    platform: 'CodeChef',
    rating: '3 Star',
    problems: '100+',
    icon: Award,
    color: 'from-emerald-400 to-green-500',
     link :'https://www.codechef.com/users/abhishek95065',
  },
  
];

const skills = [
  { name: 'Data Structures & Algorithm', level: 95 },
  { name: 'Database Management System', level: 90 },
  { name: 'Operating System', level: 92 },
  { name: 'Computer Network', level: 88 },
  { name: 'Object-Oriented Programming', level: 94 },
  { name: 'Dynamic Programming', level: 85 },
];

export default function CompetitiveProgramming() {
  return (
    <section id="competitive" className="py-24 px-6 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Competitive <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Programming</span>
          </h2>
          <p className="text-slate-400 text-lg">Solving complex problems with efficient algorithms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.platform}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{achievement.platform}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.rating}
                  </span>
                  <span className="text-slate-400 text-sm">Rating</span>
                </div>
                <p className="text-slate-300 text-sm">{achievement.problems} Problems Solved</p>
                 <button className="group relative px-4 py-2 my-3 bg-slate-800 border-2 border-emerald-500 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:bg-emerald-500/10">
            <span className="relative z-10 flex items-center gap-2">
             
             <a
                href={`${achievement.link}`}
                target="_blank"
                rel="noopener noreferrer"
                
              >
               See Profile
              </a>
            </span>
          </button>
              </div>
              
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Knowledge</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-200 font-medium">{skill.name}</span>
                  <span className="text-emerald-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-progress"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
