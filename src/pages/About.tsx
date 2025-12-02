import { GlassCard } from '../components';

export function About() {
  const skills = [
    'Strategic Planning',
    'Product Management',
    'Project Management',
    'Business Analysis',
    'Data Analysis',
    'Agile/Scrum',
    'Kanban',
    'Waterfall',
    'Requirements Definition',
    'Stakeholder Management',
    'Operations Optimization',
    'Team Leadership',
  ];

  const values = [
    {
      title: 'Strategic Clarity',
      description: 'Cut through complexity to identify what actually matters. Business context shapes every decision.',
    },
    {
      title: 'Data-Driven Conviction',
      description: 'Let metrics tell the story. I use analytics not just to report—but to predict, influence, and optimize.',
    },
    {
      title: 'Integrated Leadership',
      description: 'Combine PM, BA, and DA perspectives to see problems from every angle and solve them completely.',
    },
    {
      title: 'Operational Obsession',
      description: 'Strategy without execution is fantasy. I build systems, processes, and teams that deliver at scale.',
    },
    {
      title: 'Methodological Agility',
      description: 'Agile, Waterfall, Kanban—use the right tool for the challenge. Context drives methodology, not dogma.',
    },
    {
      title: 'Relentless Impact',
      description: 'Measure twice, optimize always. Every initiative must move the needle on business outcomes.',
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
            I'm Perez Opako—a strategic orchestrator of complex initiatives who thrives at the intersection of business, data, and technology.
            With 6+ years across startups and enterprises, I've earned a reputation for translating ambitious business visions into scalable,
            operational realities. My superpower? Seeing the complete picture and connecting the dots that others miss.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I started my career in operations, solving messy real-world problems on the ground floor. That experience taught me
                  something invaluable: business excellence isn't about perfect planning—it's about understanding the friction points,
                  data signals, and stakeholder needs, then building systems that actually work.
                </p>
                <p>
                  Over six years, I've played different roles deliberately—from operations specialist to product manager to general manager.
                  Each position taught me a new lens. At FareNow, I orchestrated operations for a superapp scaling across regions. At Farerun,
                  I optimized logistics networks. At Softkodes, I bridged the gap between product vision and technical reality. At Blendko,
                  I ensured quality didn't compromise speed. At Delta Ride, I consulted on govtech complexities.
                </p>
                <p>
                  The pattern? I'm energized by complexity. I don't run from the hard problems—I break them down, find the leverage points,
                  and build teams that execute with clarity and purpose. My career is a testament to strategic flexibility and obsessive focus
                  on measurable outcomes.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">My Philosophy</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I've learned that the best outcomes happen when you refuse to silo strategy, requirements, and data.
                  Too many organizations have brilliant strategies disconnected from technical reality, or flawless execution without strategic alignment.
                  I bridge that gap by integrating all three—always asking: <em>"Why are we doing this? What will success look like? How do we measure it?"</em>
                </p>
                <p>
                  I'm also a methodology pragmatist. Agile isn't always better than Waterfall—context matters. What matters is choosing the right
                  framework for your reality, then executing with discipline. I've scaled teams using Scrum, optimized large infrastructure projects
                  with Kanban, and delivered complex enterprise initiatives with Waterfall. Flexibility is a feature, not a flaw.
                </p>
                <p>
                  At my core, I'm obsessed with this question: <strong>"How do we turn ambition into reality?"</strong> That's what gets me out of bed.
                  Not perfection—impact. Not plans—outcomes. Not activity—results.
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
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Professional Roles & Positions</h2>
            <div className="space-y-4">
              <GlassCard>
                <div>
                  <h3 className="font-bold text-lg">Head of Operations</h3>
                  <p className="text-white/70">FareNow Limited (Superapps)</p>
                  <p className="text-white/60 text-sm mt-2">Orchestrated operations for a multi-service superapp scaling across regions. Optimized workflows, built operational strategy, and ensured quality at scale.</p>
                </div>
              </GlassCard>

              <GlassCard>
                <div>
                  <h3 className="font-bold text-lg">Operations Specialist</h3>
                  <p className="text-white/70">Farerun Limited (Logistics)</p>
                  <p className="text-white/60 text-sm mt-2">Transformed logistics operations by identifying efficiency gaps, redesigning processes, and implementing data-driven optimization strategies.</p>
                </div>
              </GlassCard>

              <GlassCard>
                <div>
                  <h3 className="font-bold text-lg">General Manager & Product Manager</h3>
                  <p className="text-white/70">Softkodes Technologies (Software Development)</p>
                  <p className="text-white/60 text-sm mt-2">Bridged product vision and technical execution. Managed roadmaps, led cross-functional teams, and delivered software solutions aligned with business strategy.</p>
                </div>
              </GlassCard>

              <GlassCard>
                <div>
                  <h3 className="font-bold text-lg">Quality Specialist</h3>
                  <p className="text-white/70">Blendko (Fashion Tech)</p>
                  <p className="text-white/60 text-sm mt-2">Ensured product excellence without sacrificing speed. Implemented quality frameworks that balanced rapid iteration with high standards.</p>
                </div>
              </GlassCard>

              <GlassCard>
                <div>
                  <h3 className="font-bold text-lg">Technical Consultant</h3>
                  <p className="text-white/70">Delta Ride (GovTech)</p>
                  <p className="text-white/60 text-sm mt-2">Navigated complex regulatory and technical requirements. Advised on architecture, delivery strategy, and stakeholder alignment in the government tech space.</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
