import { useEffect, useState } from 'react';
import { GlassCard } from '../components';
import { supabase } from '../lib/supabase';
import { Briefcase, Calendar } from 'lucide-react';

interface WorkExperience {
  id: string;
  company_name: string;
  position: string;
  description: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  display_order: number;
}

export function Experience() {
  const [experiences, setExperiences] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      const { data } = await supabase
        .from('work_experience')
        .select('*')
        .order('display_order', { ascending: true });
      if (data) {
        setExperiences(data);
      }
      setLoading(false);
    };

    fetchExperiences();
  }, []);

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

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
            My professional journey across leading companies and startups, building exceptional
            products and teams.
          </p>

          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-40 bg-white/5 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-8 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400" />

              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-24 animate-in fade-in slide-in-from-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>

                  <GlassCard className="group hover:shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">{exp.position}</h3>
                        <p className="text-white/70 font-semibold">{exp.company_name}</p>
                      </div>
                      <div
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300 whitespace-nowrap"
                      >
                        {exp.is_current ? 'Current' : 'Past'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                      <Calendar size={16} />
                      {formatDate(exp.start_date)} -{' '}
                      {exp.end_date ? formatDate(exp.end_date) : 'Present'}
                    </div>

                    <p className="text-white/70 leading-relaxed">{exp.description}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          )}

          <GlassCard className="mt-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Key Achievements</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>Led design teams through transformative product redesigns resulting in 25-40% improvements in key metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>Established and scaled design systems used across 50+ products, improving design consistency and speed</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>Mentored 15+ junior designers, fostering a culture of continuous learning and design excellence</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <span>Pioneered user research methodologies that informed strategic design decisions across organizations</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
