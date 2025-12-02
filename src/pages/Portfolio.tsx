import { useEffect, useState } from 'react';
import { GlassCard } from '../components';
import { supabase } from '../lib/supabase';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  case_study: string;
  tools_used: string[];
  outcomes: string;
  display_order: number;
}

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Mobile Design', 'Web Design', 'Design Systems'];

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('display_order', { ascending: true });
      if (data) {
        setProjects(data);
        setFilteredProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-80 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio & Projects
          </h1>

          <p className="text-white/70 text-lg mb-12">
            Explore some of my recent work showcasing my approach to product design, user
            experience, and digital innovation.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50'
                    : 'backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-80 bg-white/5 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <GlassCard
                    onClick={() => setSelectedProject(project)}
                    className="h-full cursor-pointer overflow-hidden group"
                  >
                    <div className="relative h-64 overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-semibold flex items-center gap-2">
                          View Case Study
                          <ExternalLink size={16} />
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-cyan-400 font-semibold mb-2">{project.category}</p>

                    <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tools_used.slice(0, 3).map((tool, i) => (
                        <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-white/70">
                          {tool}
                        </span>
                      ))}
                      {project.tools_used.length > 3 && (
                        <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/70">
                          +{project.tools_used.length - 3}
                        </span>
                      )}
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          )}

          {selectedProject && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <GlassCard className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="float-right text-white/70 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <img
                  src={selectedProject.image_url}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-xl mb-6"
                />

                <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-cyan-400 mb-2">Overview</h3>
                <p className="text-white/70 leading-relaxed mb-6">{selectedProject.description}</p>

                <h3 className="text-xl font-bold text-cyan-400 mb-2">Case Study</h3>
                <p className="text-white/70 leading-relaxed mb-6">{selectedProject.case_study}</p>

                <h3 className="text-xl font-bold text-cyan-400 mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tools_used.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-cyan-400 mb-2">Outcomes & Results</h3>
                <p className="text-white/70 leading-relaxed mb-6">{selectedProject.outcomes}</p>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Close
                </button>
              </GlassCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
