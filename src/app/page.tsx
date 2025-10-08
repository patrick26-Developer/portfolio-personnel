"use client";
import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Database, 
  Laptop, 
  ChevronDown, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Smartphone, 
  Globe, 
  Layers, 
  ArrowRight, 
  Menu, 
  X, 
  Download 
} from 'lucide-react';

// Types
interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'web' | 'mobile' | 'data';
  image: string;
  status?: string;
  certified?: boolean;
}

interface Certification {
  name: string;
  org: string;
  date: string;
  verified: boolean;
  url?: string;
}

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string | null;
}

interface StatItem {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

const Portfolio: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [scrollY, setScrollY] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
      
      const sections: string[] = ['accueil', 'compétences', 'projets', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = (): void => {
    const link = document.createElement('a');
    link.href = '/cv-patrick-de-grace.pdf';
    link.download = 'CV_Patrick_de_Grace_FullStack_DataScientist.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills: Record<string, string[]> = {
    frontend: ['Next.js', 'React', 'React Native', 'TypeScript', 'Tailwind CSS'],
    backend: ['NestJS', 'Django', 'Node.js', 'REST APIs'],
    languages: ['JavaScript/TypeScript', 'Python', 'Java', 'C/C++', 'C#'],
    databases: ['PostgreSQL', 'MySQL', 'Oracle'],
    dataScience: ['Data Analysis', 'Data Visualization', 'Predictive Modeling', 'Pandas', 'Matplotlib', 'Seaborn'],
    tools: ['Git/GitHub/GitLab', 'Docker', 'Vercel', 'Jupyter']
  };

  const webProjects: Project[] = [
    {
      title: 'Plateforme de Réservation de Bus',
      description: 'Application web full-stack pour la réservation de billets de bus inter-urbains au Congo avec intégration mobile money et SMS.',
      tech: ['Next.js', 'PostgreSQL', 'Twilio', 'Mobile Money API'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop',
      status: 'En production'
    },
    {
      title: 'Dashboard Analytics E-commerce',
      description: 'Tableau de bord interactif avec visualisations en temps réel des ventes et métriques business.',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      title: 'Système de Gestion Scolaire',
      description: 'Plateforme complète pour la gestion des étudiants, cours, notes et paiements.',
      tech: ['Django', 'PostgreSQL', 'Bootstrap', 'jQuery'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop'
    },
    {
      title: 'Portfolio Dynamique',
      description: 'Site portfolio avec CMS headless pour mise à jour facile du contenu.',
      tech: ['Next.js', 'Strapi', 'TailwindCSS'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'
    },
    {
      title: 'Plateforme de Blog Tech',
      description: 'Blog technique avec système de commentaires, tags et recherche avancée.',
      tech: ['Next.js', 'MDX', 'Vercel', 'PostgreSQL'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop'
    }
  ];

  const mobileProjects: Project[] = [
    {
      title: 'App de Livraison',
      description: 'Application mobile pour commander et suivre des livraisons en temps réel avec géolocalisation.',
      tech: ['React Native', 'Expo', 'Firebase', 'Google Maps API'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop'
    },
    {
      title: 'Fitness Tracker',
      description: 'Suivi d\'activités sportives avec graphiques de progression et objectifs personnalisés.',
      tech: ['React Native', 'SQLite', 'Chart.js'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop'
    },
    {
      title: 'App Météo Intelligente',
      description: 'Prévisions météo avec recommandations personnalisées basées sur vos activités.',
      tech: ['React Native', 'OpenWeather API', 'AsyncStorage'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop'
    },
    {
      title: 'Gestionnaire de Tâches',
      description: 'Application de productivité avec notifications, catégories et synchronisation cloud.',
      tech: ['React Native', 'Expo', 'Firebase'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop'
    },
    {
      title: 'App de Chat',
      description: 'Messagerie instantanée avec appels vocaux, partage de fichiers et groupes.',
      tech: ['React Native', 'Socket.io', 'WebRTC'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop'
    }
  ];

  const dataProjects: Project[] = [
    {
      title: 'Analyse Démographique',
      description: 'Analyse approfondie de données démographiques avec visualisations et insights statistiques.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
      category: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      certified: true
    },
    {
      title: 'Visualisation Données Médicales',
      description: 'Tableaux de bord pour l\'analyse de corrélations dans les données de santé.',
      tech: ['Python', 'Seaborn', 'Pandas', 'Matplotlib'],
      category: 'data',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      certified: true
    },
    {
      title: 'Prédiction du Niveau de la Mer',
      description: 'Modèle prédictif ML utilisant des données historiques pour projections futures.',
      tech: ['Python', 'Scikit-learn', 'Linear Regression'],
      category: 'data',
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b4?w=800&h=600&fit=crop',
      certified: true
    },
    {
      title: 'Séries Temporelles - Vues de Page',
      description: 'Analyse et visualisation de séries temporelles de trafic web.',
      tech: ['Python', 'Pandas', 'Time Series Analysis'],
      category: 'data',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      certified: true
    },
    {
      title: 'Dashboard Business Intelligence',
      description: 'Tableau de bord interactif pour l\'analyse de KPIs d\'entreprise.',
      tech: ['Python', 'Plotly', 'Dash', 'SQL'],
      category: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    }
  ];

  const certifications: Certification[] = [
    { 
      name: 'Data Analysis with Python V7', 
      org: 'freeCodeCamp',
      date: '2024',
      verified: true,
      url: 'https://www.freecodecamp.org/certification/fccd2ead9c3-9411-4503-861e-c4920b34172c/data-analysis-with-python-v7'
    },
    { 
      name: 'Data Visualization', 
      org: 'freeCodeCamp',
      date: '2024',
      verified: true,
      url: 'https://www.freecodecamp.org/certification/fccd2ead9c3-9411-4503-861e-c4920b34172c/data-visualization'
    },
    { 
      name: 'Python Development & Data Science', 
      org: 'Akieni Académie',
      date: '2023-2024',
      verified: true
    }
  ];

  const navItems: Array<{ id: string; label: string }> = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'compétences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
      <div className="h-full">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setSelectedProject(project)}
          className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-200 h-full ${
            isDark ? 'bg-gray-900/50' : 'bg-white border border-gray-200'
          } ${isHovered ? 'scale-102 shadow-xl' : 'scale-100 shadow-lg'}`}
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className={`absolute inset-0 transition-opacity duration-200 ${
              isHovered ? 'opacity-80' : 'opacity-0'
            } bg-gradient-to-t ${isDark ? 'from-gray-900 via-gray-900/50' : 'from-white via-white/50'} to-transparent`} />
            
            {project.certified && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Award className="w-3 h-3" />
                Certifié
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-200">
              {project.title}
            </h3>
            <p className={`mb-4 text-sm flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech: string) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-lg text-xs transition-all duration-200 ${
                    isDark ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className={`px-3 py-1 rounded-lg text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>

          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform transition-transform duration-200 ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`} />
        </div>
      </div>
    );
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'} overflow-x-hidden`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-200 ${
        scrollY > 50 ? (isDark ? 'bg-gray-900/95' : 'bg-white/95') : (isDark ? 'bg-gray-900/80' : 'bg-white/80')
      } border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 transition-all ${
              isDark ? 'ring-blue-500/50' : 'ring-blue-600/50'
            }`}>
              <img
                src="/patrick.jpg"
                alt="Patrick"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-base sm:text-lg">Patrick de Grâce</div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full-Stack & Data Scientist</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? (isDark ? 'text-blue-400' : 'text-blue-600')
                    : (isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600')
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadCV}
              className={`hidden xl:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-t transition-all duration-200 ${
            isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
          }`}>
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? (isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600')
                      : (isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50')
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDark 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <Download className="w-4 h-4" />
                Télécharger CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            isDark ? 'bg-blue-500/20' : 'bg-blue-400/20'
          }`} style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-500/20' : 'bg-purple-400/20'
          }`} style={{ transform: `translateY(${scrollY * -0.15}px)` }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
            <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
              <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-700'
              }`}>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Disponible pour de nouvelles opportunités
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Créateur de
                <span className={`block bg-gradient-to-r ${
                  isDark ? 'from-blue-400 via-purple-500 to-pink-500' : 'from-blue-600 via-purple-700 to-pink-700'
                } bg-clip-text text-transparent`}>
                  Solutions Digitales
                </span>
              </h1>
              
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto md:mx-0`}>
                Développeur Full-Stack & Data Scientist passionné par l'innovation. 
                Je transforme les idées en applications performantes et les données en insights actionnables.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center gap-2 hover:scale-105"
                >
                  Collaborons Ensemble
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button
                  onClick={handleDownloadCV}
                  className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 border-2 border-gray-300'
                  }`}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="hidden sm:inline">Télécharger CV</span>
                  <span className="sm:hidden">CV</span>
                </button>
                
                <a
                  href="https://github.com/patrick26-Developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 ${
                    isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 border-2 border-gray-300'
                  }`}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Voir mon GitHub</span>
                  <span className="sm:hidden">GitHub</span>
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden ring-4 transition-all duration-200 ${
                isDark ? 'ring-gray-800' : 'ring-gray-200'
              }`}>
                <img
                  src="/patrick.jpg"
                  alt="Patrick de Grâce"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {([
              { icon: Code, label: 'Web & Mobile', value: '15+ Projets', color: 'blue' },
              { icon: Database, label: 'Data Science', value: '10+ Analyses', color: 'purple' },
              { icon: Briefcase, label: 'Expérience', value: '3+ Ans', color: 'pink' },
              { icon: Award, label: 'Certifications', value: '3 Obtenues', color: 'green' }
            ] as StatItem[]).map((stat, idx) => (
              <div
                key={idx}
                className={`group p-4 sm:p-6 rounded-2xl transition-all duration-200 hover:scale-105 ${
                  isDark ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-white hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 mb-3 text-${stat.color}-500 group-hover:scale-110 transition-transform duration-200`} />
                <div className={`text-xs sm:text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${isDark ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Compétences Techniques</h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Stack technologique moderne et polyvalente
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-6 sm:p-8 rounded-2xl transition-all duration-200 hover:scale-105 ${
                isDark ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg transition-all duration-200 ${
                    isDark ? 'bg-blue-500/10' : 'bg-blue-100'
                  }`}>
                    {category === 'frontend' ? <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" /> :
                     category === 'backend' ? <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" /> :
                     category === 'languages' ? <Code className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" /> :
                     category === 'databases' ? <Database className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" /> :
                     category === 'dataScience' ? <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" /> :
                     <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {category === 'frontend' ? 'Frontend' :
                     category === 'backend' ? 'Backend' :
                     category === 'languages' ? 'Langages' :
                     category === 'databases' ? 'Bases de Données' :
                     category === 'dataScience' ? 'Data Science' :
                     'Outils'}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill: string) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 hover:scale-105 ${
                        isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Portfolio de Projets</h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Une sélection de mes réalisations web, mobile et data science
            </p>
          </div>

          {/* Web Projects */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              <h3 className="text-2xl sm:text-3xl font-bold">Applications Web</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {webProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>

          {/* Mobile Projects */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
              <h3 className="text-2xl sm:text-3xl font-bold">Applications Mobile</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {mobileProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>

          {/* Data Science Projects */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              <h3 className="text-2xl sm:text-3xl font-bold">Projets Data Science</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {dataProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${isDark ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Formations validées et reconnues
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`group p-6 sm:p-8 rounded-2xl transition-all duration-200 hover:scale-102 ${
                isDark ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 w-full">
                    <div className={`p-3 rounded-xl transition-all duration-200 flex-shrink-0 ${
                      isDark ? 'bg-blue-500/10' : 'bg-blue-100'
                    }`}>
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{cert.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {cert.org}
                        </span>
                        <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>•</span>
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      {cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium hover:bg-green-500/20 transition-colors duration-200 w-full sm:w-auto"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Vérifier
                        </a>
                      ) : (
                        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium w-full sm:w-auto">
                          <ExternalLink className="w-4 h-4" />
                          Vérifié
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 p-6 sm:p-8 rounded-2xl transition-all duration-200 ${
            isDark ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <div className="flex items-start gap-4">
              <GraduationCap className={`w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Formation Académique</h3>
                <p className={`text-base sm:text-lg mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Licence en Génie Informatique
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Institut International Polytechnique Commerce et Juridique • 2021-2024
                </p>
                <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Option: Développement Informatique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Travaillons Ensemble</h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Disponible pour des opportunités de développement full-stack et data science
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {([
              {
                icon: Mail,
                title: 'Email',
                value: 'mb.patrickdegrace@gmail.com',
                href: 'mailto:mb.patrickdegrace@gmail.com'
              },
              {
                icon: Phone,
                title: 'Téléphone',
                value: '+242 05 052 91 68',
                href: 'tel:+242050529168'
              },
              {
                icon: MapPin,
                title: 'Localisation',
                value: 'Pointe-Noire, Congo-Brazzaville',
                href: null
              }
            ] as ContactInfo[]).map((contact, idx) => (
              <div key={idx}>
                <a
                  href={contact.href || '#'}
                  className={`block p-6 sm:p-8 rounded-2xl transition-all duration-200 hover:scale-105 ${
                    isDark ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-white hover:bg-gray-50 border border-gray-200'
                  } ${!contact.href ? 'cursor-default' : ''}`}
                >
                  <contact.icon className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div className="text-center">
                    <div className="font-semibold mb-2 text-sm sm:text-base">{contact.title}</div>
                    <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} break-words`}>
                      {contact.value}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className={`p-6 sm:p-8 rounded-2xl transition-all duration-200 ${
            isDark ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Retrouvez-moi sur</h3>
              <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Suivez mes projets et contributions
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/patrick26-Developer"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 rounded-xl transition-all duration-200 hover:scale-110 ${
                  isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
                }`}
              >
                <Github className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-blue-500 transition-colors duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-de-gr%C3%A2ce-makosso-bayonne-351a1232a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 rounded-xl transition-all duration-200 hover:scale-110 ${
                  isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
                }`}
              >
                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-blue-500 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 sm:py-12 px-4 sm:px-6 border-t transition-colors duration-200 ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 transition-all duration-200 ${
                isDark ? 'ring-blue-500/50' : 'ring-blue-600/50'
              }`}>
                <img
                  src="/patrick.jpg"
                  alt="Patrick"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base">Patrick de Grâce Makosso Bayonne</div>
                <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Développeur Full-Stack & Data Scientist
                </div>
              </div>
            </div>
            <div className={`text-center md:text-right ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="text-xs sm:text-sm">© 2025 Tous droits réservés</p>
              <p className="text-xs mt-1">Conçu avec passion à Pointe-Noire 🇨🇬</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-all duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-w-3xl w-full rounded-3xl overflow-hidden transform transition-all duration-200 max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className="relative h-64 sm:h-80">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className={`text-base sm:text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm sm:text-base">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm ${
                        isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProject.status && (
                <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-200 text-xs sm:text-sm ${
                  isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {selectedProject.status}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full transition-all duration-200 hover:scale-110 ${
            isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white z-40 shadow-lg`}
          aria-label="Scroll to top"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;