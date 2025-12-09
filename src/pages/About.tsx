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
    'Quality Management',
  ];

  const values = [
    {
      title: 'Strategic Clarity',
      description: 'Cut through complexity to identify what actually matters. Business context shapes every decision.',
    },
    {
      title: 'Data-Driven Conviction',
      description: 'Numbers drive actions. Analytics transform from simple scorecards into tools for prediction, which aid in decision-making, and continuous improvement.',
    },
    {
      title: 'Integrated Leadership',
      description: 'Combine PM, BA, QA and DA perspectives to see problems from every angle and solve them completely.',
    },
    {
      title: 'Operational Obsession',
      description: 'Without execution strategy is just a pipe dream. That is why i build teams, processes, and systems that deliver at scale.',
    },
    {
      title: 'Methodological Agility',
      description: 'Whether it is Agile, Waterfall, or Kanban, the right approch is choosen for each challenge.The situation determines the method, not rigid rules '
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
            I'm Perez Opako a strategic orchestrator of complex initiatives who thrives at the intersection of business, data, and technology.
            With 6+ years across startups and enterprises, I've earned a reputation for translating ambitious business visions into scalable,
            operational realities.</p>
            <p className="text-white/70 text-lg mb-12 max-w-3xl -mt-12">
             My superpower? Seeing the complete picture and connecting the dots that others miss.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                 A career originating in operations, solving real and messy world 
                 problems from the ground up showed a truer truth: it is not perfect plans that 
                 drives a business success, 
                 but spotting where things get stuck, reading the 
                 signals in the data understanding what people need, and creating systems  
                 that genuinely work.'    
              
                </p>
                <p>
                   Six years across deliberately varied roles like Operations Specialist, Product Manager, and general manager 
                   each offering a fresh perspective. At FareNow, coordinating operations 
                   for a multi-regions Superapp; at Farerun, streamling logistics networks; 
                   at Softkodes connecting product ideas with technical exection; at
                    Blendko, balancing quality with speed; at DeltaRide, 
                    braving the Govtech challenge as a consultant.
                </p>
                <p>
                  The common thread? Complexity is energizing not intimidating.
                  Hard problems get broken down, leverage points identified, and
                  teams built that move forward with clarity and purpose.
                  This track record shows  strategic adaptability paired with 
                  relentless focus on results that can be measured.
                </p>
              </div>
            </GlassCard>

            <GlassCard>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">My Philosophy</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                   <p>
                    When teams work in seperate bubbles, good outcomes rarely follow.
                    Organizations often have brilliant strategies that clash with technical 
                    realities, or flawless execution that loses sight of the bigger picture.
                     Bridging that gap means weaving together strategy, needs, and data into 
                     one coherent story; always keeping in mind: "Why does this matter? 
                    What does winning look like? How will success be measured?"
                   </p>
                </p>
                <p>
                 <p>
                  There's no room for dogmatic views on methodologies. 
                  Agile isn't always better than Waterfall, and Kanban 
                  doesn't solve every problem. What matters is matching the
                   framework to the challenge, then executing it well.
                    Experience spans scaling teams with Scrum, streamlining 
                    infrastructure with Kanban,
                   and delivering major enterprise projects with Waterfall.
                 </p>
                </p>
               <p>
                Adaptability isn't a compromise; it's an edge.
                Everything centers on one question: <strong>"How does ambition translate into reality?"</strong>
                That drives every decision. The focus isn't perfection; it's impact. 
                Not dwelling in plans, but delivering outcomes
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
