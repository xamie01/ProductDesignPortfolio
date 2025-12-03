import { useState } from 'react';
import { GlassCard } from '../components';
import { X, ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  type: string;
  role: string;
  description: string;
  impact: string;
  keyAchievements: string[];
  focus: string;
  image_color: string;
  image_url: string;
}

export function Portfolio() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const companies: Company[] = [
    {
      id: '1',
      name: 'FareNow',
      type: 'Logistics & Superapps',
      role: 'Head of Operations',
      description:
        'Orchestrated end-to-end operations for a multi-service superapp scaling across multiple regions. Built operational frameworks that balanced rapid growth with quality assurance.',
      impact:
        'Achieved 40% operational efficiency improvement, reduced service delivery time by 30%, and established scalable operational processes supporting 10+ regional markets.',
      keyAchievements: [
        'Designed and implemented operations strategy for multi-service superapp',
        'Built cross-regional operational teams and coordination systems',
        'Reduced operational bottlenecks by 35% through process optimization',
        'Established KPIs and dashboards for real-time operational visibility',
      ],
      focus: 'Operations, Strategy, Process Optimization',
      image_color: 'from-cyan-500 to-blue-500',
      image_url: '/Farenow.jpg',
    },
    {
      id: '2',
      name: 'Farerun',
      type: 'Logistics & Delivery',
      role: 'Operations Specialist',
      description:
        'Transformed logistics operations by identifying efficiency gaps and implementing data-driven optimization strategies. Redesigned delivery workflows and optimization algorithms.',
      impact:
        'Reduced delivery times by 25%, improved fleet utilization by 20%, and saved operational costs through intelligent routing and resource allocation.',
      keyAchievements: [
        'Analyzed and optimized logistics workflows using data analytics',
        'Implemented new delivery routing algorithms reducing travel time',
        'Built performance dashboards for real-time tracking and optimization',
        'Increased driver utilization efficiency by 18% through better scheduling',
      ],
      focus: 'Logistics, Data Analysis, Operations',
      image_color: 'from-blue-500 to-purple-500',
      image_url: '/Farerun.jpg',
    },
    {
      id: '3',
      name: 'Softkodes Technologies',
      type: 'Software Development',
      role: 'General Manager & Product Manager',
      description:
        'Managed overall business operations and product strategy. Bridged product vision with technical execution, led cross-functional teams, and delivered scalable software solutions.',
      impact:
        'Grew product portfolio by 60%, improved time-to-market by 35%, and built a high-performing engineering and product team of 15+ members.',
      keyAchievements: [
        'Defined product strategy aligned with business objectives',
        'Led product delivery across 5+ enterprise software solutions',
        'Reduced time-to-market by implementing Agile methodologies',
        'Built and mentored cross-functional product and engineering teams',
      ],
      focus: 'Product Management, Team Leadership, Software Strategy',
      image_color: 'from-purple-500 to-pink-500',
      image_url: '/Softkodes.jpg',
    },
    {
      id: '4',
      name: 'Blendko',
      type: 'Fashion Tech & Design',
      role: 'Quality Specialist',
      description:
        'Ensured product excellence without compromising speed to market. Implemented quality frameworks and testing methodologies that balanced rapid iteration with high standards.',
      impact:
        'Reduced post-launch defects by 45%, improved customer satisfaction score from 7.2 to 8.8, and enabled weekly deployment cycles without quality degradation.',
      keyAchievements: [
        'Designed and implemented comprehensive quality assurance framework',
        'Established automated testing and CI/CD pipelines',
        'Reduced critical bugs in production by 50%',
        'Built quality culture balancing speed with excellence',
      ],
      focus: 'Quality Assurance, Testing Strategy, Process Excellence',
      image_color: 'from-pink-500 to-red-500',
      image_url: '/Blendko.jpg',
    },
    {
      id: '5',
      name: 'Delta Ride',
      type: 'GovTech & Transportation',
      role: 'Technical Consultant',
      description:
        'Navigated complex regulatory and technical requirements in the government tech space. Advised on system architecture, delivery strategy, and multi-stakeholder alignment.',
      impact:
        'Successfully delivered compliance-heavy platform serving 50+ government agencies, managed regulatory documentation for 8 different jurisdictions.',
      keyAchievements: [
        'Architected solutions meeting complex regulatory requirements',
        'Coordinated with 15+ stakeholders across government bodies',
        'Established compliance documentation and audit frameworks',
        'Reduced implementation time for regulatory changes by 40%',
      ],
      focus: 'GovTech, Compliance, Stakeholder Management',
      image_color: 'from-red-500 to-orange-500',
      image_url: '/DeltaRide.jpg',
    },
    {
      id: '6',
      name: 'CleanEarth',
      type: 'Waste Disposal & Environmental',
      role: 'Strategic Consultant',
      description:
        'Consulted on operational excellence and technology strategy for environmental waste management. Optimized collection routes, resource allocation, and sustainability metrics.',
      impact:
        'Improved collection efficiency by 28%, reduced environmental footprint by 15%, and implemented data-driven sustainability tracking systems.',
      keyAchievements: [
        'Optimized waste collection routes using data analytics',
        'Implemented environmental impact tracking systems',
        'Reduced operational costs by 22% through process optimization',
        'Built sustainability reporting dashboard for stakeholders',
      ],
      focus: 'Operations, Sustainability, Data Strategy',
      image_color: 'from-green-500 to-emerald-500',
      image_url: '/CleanEarth.jpg',
    },
  ];

  const categories = ['All', 'Logistics', 'Software', 'Other'];

  const handleFilter = (category: string) => {
    setActiveFilter(category);
  };

  const getCompaniesForFilter = () => {
    if (activeFilter === 'All') return companies;
    if (activeFilter === 'Logistics')
      return companies.filter((c) => c.type.includes('Logistics') || c.type.includes('GovTech'));
    if (activeFilter === 'Software') return companies.filter((c) => c.type.includes('Software'));
    return companies.filter((c) => !c.type.includes('Logistics') && !c.type.includes('Software'));
  };

  const filteredCompanies = getCompaniesForFilter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-80 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Companies & Impact
          </h1>

          <p className="text-white/70 text-lg mb-12">
            Explore the companies I've worked with and the transformative impact I've delivered
            across operations, technology, and strategy.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCompanies.map((company, index) => (
              <div
                key={company.id}
                className="animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <GlassCard
                  onClick={() => setSelectedCompany(company)}
                  className="h-full cursor-pointer overflow-hidden group"
                >
                  <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={company.image_url} 
                      alt={company.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">{company.name}</h3>
                      <p className="text-white/90 text-sm drop-shadow-md">{company.type}</p>
                    </div>
                  </div>

                  <p className="text-sm text-cyan-400 font-semibold mb-2">{company.role}</p>

                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">{company.description}</p>

                  <div className="flex items-start gap-2 p-3 bg-white/5 rounded-lg mb-4">
                    <TrendingUp size={16} className="text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-white/60 text-xs">{company.impact}</p>
                  </div>

                  <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold text-cyan-400 transition-all flex items-center justify-center gap-2">
                    View Details
                    <ExternalLink size={14} />
                  </button>
                </GlassCard>
              </div>
            ))}
          </div>

          {selectedCompany && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <GlassCard className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="float-right text-white/70 hover:text-white transition-colors mb-4"
                >
                  <X size={24} />
                </button>

                <div className="relative h-56 rounded-xl mb-6 overflow-hidden">
                  <img 
                    src={selectedCompany.image_url} 
                    alt={selectedCompany.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                    <h2 className="text-4xl font-bold text-white drop-shadow-lg">{selectedCompany.name}</h2>
                    <p className="text-white/90 drop-shadow-md">{selectedCompany.type}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
                      <Users size={20} />
                      Role
                    </h3>
                    <p className="text-white/70">{selectedCompany.role}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Overview</h3>
                    <p className="text-white/70 leading-relaxed">{selectedCompany.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
                      <TrendingUp size={20} />
                      Impact & Results
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-4">{selectedCompany.impact}</p>
                    <div className="space-y-2">
                      {selectedCompany.keyAchievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                          <Zap size={16} className="text-cyan-400 flex-shrink-0 mt-1" />
                          <p className="text-white/70 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Focus Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCompany.focus.split(', ').map((area, i) => (
                        <span key={i} className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCompany(null)}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mt-6"
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
