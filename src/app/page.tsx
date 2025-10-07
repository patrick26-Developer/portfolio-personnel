"use client";
import React, { useState, useEffect, useRef } from 'react';
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

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['accueil', 'compétences', 'projets', 'certifications', 'contact'];
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

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
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

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'compétences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  // Composant d'animation optimisé
  const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
    children, 
    delay = 0, 
    className = "" 
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Réduction du délai pour des animations plus rapides
            const timer = setTimeout(() => setIsInView(true), delay);
            return () => clearTimeout(timer);
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '-50px 0px -50px 0px' // Déclenche plus tôt
        }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [delay]);

    return (
      <div
        ref={ref}
        className={`transform transition-all duration-500 ease-out ${className} ${
          isInView 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}
      >
        {children}
      </div>
    );
  };

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <AnimatedSection delay={index * 50} className="h-full"> {/* Réduction du délai */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setSelectedProject(project)}
          className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 h-full ${
            isDark ? 'bg-gray-900/50' : 'bg-white border border-gray-200'
          } ${isHovered ? 'scale-102 shadow-xl' : 'scale-100 shadow-lg'}`}
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className={`absolute inset-0 transition-opacity duration-300 ${
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
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">
              {project.title}
            </h3>
            <p className={`mb-4 text-sm flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech: string) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-lg text-xs transition-all duration-300 ${
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

          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform transition-transform duration-300 ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`} />
        </div>
      </AnimatedSection>
    );
  };

  const scrollToSection = (sectionId: string) => {
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
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrollY > 50 ? (isDark ? 'bg-gray-900/95' : 'bg-white/95') : (isDark ? 'bg-gray-900/80' : 'bg-white/80')
      } border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className={`w-12 h-12 rounded-full overflow-hidden ring-2 transition-all ${
              isDark ? 'ring-blue-500/50' : 'ring-blue-600/50'
            }`}>
              <img
                src="/patrick.jpg"
                alt="Patrick"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-lg">Patrick de Grâce</div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full-Stack & Data Scientist</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? (isDark ? 'text-blue-400' : 'text-blue-600')
                    : (isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600')
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Bouton Télécharger CV */}
            <button
              onClick={handleDownloadCV}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
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
          <div className={`md:hidden border-t transition-all duration-300 ${
            isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
          }`}>
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? (isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600')
                      : (isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50')
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Bouton Télécharger CV version mobile */}
              <button
                onClick={handleDownloadCV}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
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
      <section id="accueil" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            isDark ? 'bg-blue-500/20' : 'bg-blue-400/20'
          }`} style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-500/20' : 'bg-purple-400/20'
          }`} style={{ transform: `translateY(${scrollY * -0.15}px)` }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-700'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Disponible pour de nouvelles opportunités
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Créateur de
                  <span className={`block bg-gradient-to-r ${
                    isDark ? 'from-blue-400 via-purple-500 to-pink-500' : 'from-blue-600 via-purple-700 to-pink-700'
                  } bg-clip-text text-transparent`}>
                    Solutions Digitales
                  </span>
                </h1>
                
                <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Développeur Full-Stack & Data Scientist passionné par l'innovation. 
                  Je transforme les idées en applications performantes et les données en insights actionnables.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group px-8 py-4 rounded-xl font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center gap-2 hover:scale-105"
                  >
                    Collaborons Ensemble
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  {/* Bouton Télécharger CV dans Hero */}
                  <button
                    onClick={handleDownloadCV}
                    className={`group px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 ${
                      isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 border-2 border-gray-300'
                    }`}
                  >
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Télécharger CV
                  </button>
                  
                  <a
                    href="https://github.com/patrick26-Developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 ${
                      isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 border-2 border-gray-300'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    Voir mon GitHub
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                <div className={`relative w-80 h-80 rounded-3xl overflow-hidden ring-4 transition-all duration-300 ${
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
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
              {([
                { icon: Code, label: 'Web & Mobile', value: '15+ Projets', color: 'blue' },
                { icon: Database, label: 'Data Science', value: '10+ Analyses', color: 'purple' },
                { icon: Briefcase, label: 'Expérience', value: '3+ Ans', color: 'pink' },
                { icon: Award, label: 'Certifications', value: '3 Obtenues', color: 'green' }
              ] as StatItem[]).map((stat, idx) => (
                <div
                  key={idx}
                  className={`group p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <stat.icon className={`w-10 h-10 mb-3 text-${stat.color}-500 group-hover:scale-110 transition-transform duration-300`} />
                  <div className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className={`py-24 px-6 ${isDark ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Compétences Techniques</h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Stack technologique moderne et polyvalente
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <AnimatedSection key={category} delay={idx * 50}>
                <div className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-gray-50 hover:bg-gray-100'
                }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isDark ? 'bg-blue-500/10' : 'bg-blue-100'
                    }`}>
                      {category === 'frontend' ? <Globe className="w-6 h-6 text-blue-500" /> :
                       category === 'backend' ? <Layers className="w-6 h-6 text-purple-500" /> :
                       category === 'languages' ? <Code className="w-6 h-6 text-pink-500" /> :
                       category === 'databases' ? <Database className="w-6 h-6 text-green-500" /> :
                       category === 'dataScience' ? <Award className="w-6 h-6 text-yellow-500" /> :
                       <Laptop className="w-6 h-6 text-blue-500" />}
                    </div>
                    <h3 className="text-xl font-semibold">
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
                        className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 ${
                          isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio de Projets</h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Une sélection de mes réalisations web, mobile et data science
              </p>
            </div>
          </AnimatedSection>

          {/* Web Projects */}
          <div className="mb-20">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-8 h-8 text-blue-500" />
                <h3 className="text-3xl font-bold">Applications Web</h3>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </div>

          {/* Mobile Projects */}
          <div className="mb-20">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <Smartphone className="w-8 h-8 text-purple-500" />
                <h3 className="text-3xl font-bold">Applications Mobile</h3>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </div>

          {/* Data Science Projects */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <Database className="w-8 h-8 text-green-500" />
                <h3 className="text-3xl font-bold">Projets Data Science</h3>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-24 px-6 ${isDark ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Formations validées et reconnues
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-102 ${
                  isDark ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-gray-50 hover:bg-gray-100'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isDark ? 'bg-blue-500/10' : 'bg-blue-100'
                      }`}>
                        <Award className="w-8 h-8 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                        <div className="flex items-center gap-4">
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
                      <div className="flex items-center gap-2">
                        {cert.url ? (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium hover:bg-green-500/20 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Vérifier
                          </a>
                        ) : (
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                            <ExternalLink className="w-4 h-4" />
                            Vérifié
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200}>
            <div className={`mt-12 p-8 rounded-2xl transition-all duration-300 ${
              isDark ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'
            }`}>
              <div className="flex items-start gap-4">
                <GraduationCap className={`w-8 h-8 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Formation Académique</h3>
                  <p className={`text-lg mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Travaillons Ensemble</h2>
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Disponible pour des opportunités de développement full-stack et data science
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              <AnimatedSection key={idx} delay={idx * 50}>
                <a
                  href={contact.href || '#'}
                  className={`block p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-white hover:bg-gray-50 border border-gray-200'
                  } ${!contact.href ? 'cursor-default' : ''}`}
                >
                  <contact.icon className={`w-10 h-10 mx-auto mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div className="text-center">
                    <div className="font-semibold mb-2">{contact.title}</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} break-words`}>
                      {contact.value}
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={150}>
            <div className={`p-8 rounded-2xl transition-all duration-300 ${
              isDark ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'
            }`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2">Retrouvez-moi sur</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Suivez mes projets et contributions
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/patrick26-Developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-xl transition-all duration-300 hover:scale-110 ${
                    isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <Github className="w-8 h-8 group-hover:text-blue-500 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/patrick-de-gr%C3%A2ce-makosso-bayonne-351a1232a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-xl transition-all duration-300 hover:scale-110 ${
                    isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <Linkedin className="w-8 h-8 group-hover:text-blue-500 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t transition-colors duration-300 ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full overflow-hidden ring-2 transition-all duration-300 ${
                isDark ? 'ring-blue-500/50' : 'ring-blue-600/50'
              }`}>
                <img
                  src="/patrick.jpg"
                  alt="Patrick"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Patrick de Grâce Makosso Bayonne</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Développeur Full-Stack & Data Scientist
                </div>
              </div>
            </div>
            <div className={`text-center md:text-right ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="text-sm">© 2025 Tous droits réservés</p>
              <p className="text-xs mt-1">Conçu avec passion à Pointe-Noire 🇨🇬</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-w-3xl w-full rounded-3xl overflow-hidden transform transition-all duration-300 ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className="relative h-80">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProject.status && (
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
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
          className={`fixed bottom-8 right-8 p-4 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white z-40`}
          aria-label="Scroll to top"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;