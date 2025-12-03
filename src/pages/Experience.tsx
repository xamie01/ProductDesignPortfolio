import { GlassCard } from '../components';
import { Briefcase } from 'lucide-react';

interface WorkExperience {
  position: string;
  company: string;
  focus: string;
  description: string;
}

export function Experience() {
  const experiences: WorkExperience[] = [
    {
      position: 'Head of Operations',
      company: 'FareNow Limited',
      focus: '(Superapps)',
      description: 'Orchestrated operations for a multi-service superapp scaling across regions. Optimized workflows, built operational strategy, and ensured quality at scale.',
    },
    {
      position: 'Operations Specialist',
      company: 'Farerun Limited',
      focus: '(Logistics)',
      description: 'Transformed logistics operations by identifying efficiency gaps, redesigning processes, and implementing data-driven optimization strategies.',
    },
    {
      position: 'General Manager',
      company: 'Softkodes Technologies',
      focus: '(Software Development)',
      description: 'Managed overall operations and strategy. Built teams, optimized processes, and ensured alignment between business objectives and technical execution.',
    },
    {
      position: 'Product Manager',
      company: 'Softkodes Technologies',
      focus: '(Software Development)',
      description: 'Bridged product vision and technical execution. Managed roadmaps, led cross-functional teams, and delivered software solutions aligned with business strategy.',
    },
    {
      position: 'Quality Specialist',
      company: 'Blendko',
      focus: '(Fashion Tech)',
      description: 'Ensured product excellence without sacrificing speed. Implemented quality frameworks that balanced rapid iteration with high standards.',
    },
    {
      position: 'Technical Consultant',
      company: 'Delta Ride',
      focus: '(GovTech)',
      description: 'Navigated complex regulatory and technical requirements. Advised on architecture, delivery strategy, and stakeholder alignment in the government tech space.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h1>

          <p className="text-white/70 text-lg mb-16">
            Six years of orchestrating complex SDLC initiatives across diverse industries. From startups to enterprises,
            I've translated ambitious business goals into scalable operations while managing strategy, data, and execution.
            Every position taught me something new. Every project delivered measurable impact.
          </p>

          <div className="space-y-8 relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-24 animate-in fade-in slide-in-from-left" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase size={24} className="text-white" />
                </div>

                <GlassCard className="group hover:shadow-xl">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-cyan-400">{exp.position}</h3>
                    <p className="text-white/70 font-semibold">{exp.company} <span className="text-white/50">{exp.focus}</span></p>
                  </div>

                  <p className="text-white/70 leading-relaxed">{exp.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>

          <GlassCard className="mt-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">What I Bring</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>See the complete picture. Strategy flows into requirements, requirements map to execution, and execution feeds back into strategy. That integration is where impact lives.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>Context over dogma. Agile for speed, Waterfall for complexity, Kanban for flow. I don't force methodology instead I match it to your reality.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>Numbers tell the truth. Every decision is backed by data, every trade-off is measured, every outcome is connected to business reality.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>Built startup MVPs and scaled enterprise platforms. I know how to translate vision into sustainable systems that actually work under pressure.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>Lead by clarity, not control. Simplify complex problems. Align teams around outcomes. Drive accountability through transparency, not micromanagement.</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
