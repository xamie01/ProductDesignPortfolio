import { GlassCard } from '../components';

export function About() {
  const skills = [
    'UX/UI Design',
    'Design Systems',
    'User Research',
    'Prototyping',
    'Mobile Design',
    'Web Design',
    'Figma',
    'Adobe XD',
    'Interaction Design',
    'Accessibility',
    'Wireframing',
    'User Testing',
  ];

  const values = [
    {
      title: 'User-Centric',
      description: 'Every design decision is rooted in user research and real user needs.',
    },
    {
      title: 'Simplicity',
      description: 'Complex problems require elegant, simple solutions that users love.',
    },
    {
      title: 'Collaboration',
      description: 'Great design happens through cross-functional teamwork and open communication.',
    },
    {
      title: 'Innovation',
      description: 'Constantly exploring new design trends and technologies to stay ahead.',
    },
    {
      title: 'Quality',
      description: 'Attention to detail in every pixel, interaction, and user journey.',
    },
    {
      title: 'Accessibility',
      description: 'Designing for everyone, ensuring inclusive experiences for all users.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h1>

          <p className="text-white/70 text-lg mb-12 max-w-3xl">
            I'm a Product Design Lead passionate about creating beautiful, functional digital
            experiences that solve real problems. With 8+ years in the industry, I've had the
            privilege of working with startups, scale-ups, and established tech companies.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">My Story</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  My journey in design started with a curiosity about how things work. I spent
                  countless hours sketching and prototyping, trying to understand the intersection
                  of art and function.
                </p>
                <p>
                  Over the years, I've evolved from a hands-on designer to a design leader, learning
                  that the greatest impact comes from building strong teams and fostering a culture
                  of design excellence.
                </p>
                <p>
                  Today, I'm committed to mentoring the next generation of designers while pushing
                  the boundaries of what's possible in digital design.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Design Philosophy</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I believe great design is invisible. It should feel natural, intuitive, and
                  effortless. Users shouldn't have to think about the design—they should just
                  experience the value.
                </p>
                <p>
                  My approach combines deep user research, data-driven decision making, and creative
                  problem-solving. I'm obsessed with understanding user behavior and translating
                  those insights into compelling designs.
                </p>
                <p>
                  Every project is an opportunity to push the boundaries of design and create
                  something that leaves a lasting impact.
                </p>
              </div>
            </GlassCard>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <GlassCard key={index}>
                  <h3 className="font-bold text-lg mb-2 text-blue-400">{value.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Education & Certifications</h2>
            <div className="space-y-4">
              <GlassCard>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">Bachelor of Fine Arts in Graphic Design</h3>
                    <p className="text-white/70">California Institute of the Arts</p>
                  </div>
                  <span className="text-cyan-400 font-semibold">2016</span>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">Google UX Design Professional Certificate</h3>
                    <p className="text-white/70">Coursera</p>
                  </div>
                  <span className="text-cyan-400 font-semibold">2019</span>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">Design Systems Certification</h3>
                    <p className="text-white/70">Interaction Design Foundation</p>
                  </div>
                  <span className="text-cyan-400 font-semibold">2021</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
