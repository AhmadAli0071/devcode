
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Nexus Finance Dashboard",
    slug: "nexus-finance-dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive financial analytics platform with real-time data visualization.",
    technologies: ["React", "Node.js", "D3.js", "MongoDB"]
  },
  {
    title: "EcoTrack Mobile App",
    slug: "ecotrack-mobile-app",
    category: "Mobile Application",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Sustainability tracking application that helps users reduce their carbon footprint.",
    technologies: ["React Native", "Firebase", "TensorFlow Lite"]
  },
  {
    title: "SmartHome Hub",
    slug: "smarthome-hub",
    category: "IoT Solution",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Integrated smart home control system with AI-powered automation features.",
    technologies: ["Python", "AWS", "Machine Learning", "C++"]
  },
  {
    title: "Quantum E-commerce Platform",
    slug: "quantum-ecommerce-platform",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Next-generation e-commerce solution with advanced personalization and analytics.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis"]
  },
  {
    title: "MediSync Healthcare App",
    slug: "medisync-healthcare-app",
    category: "Mobile Application",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Patient-doctor communication platform with secure telehealth capabilities.",
    technologies: ["Flutter", "Node.js", "MongoDB", "WebRTC"]
  },
  {
    title: "DataCore Analytics Engine",
    slug: "datacore-analytics-engine",
    category: "Big Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Powerful data processing system for enterprise-level analytics and reporting.",
    technologies: ["Python", "Apache Spark", "Kubernetes", "ElasticSearch"]
  }
];

export const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-black" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-400 text-lg">
            Explore our recent projects and see how we've helped businesses achieve their goals
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden cursor-pointer"
              variants={itemVariants}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <Link to={`/portfolio/${project.slug}`} className="block">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-devcode-blue">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-devcode-purple transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${activeProject === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center text-sm text-devcode-purple hover:text-devcode-blue transition-colors">
                      View Project <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center px-6 py-3 rounded-full border border-devcode-purple text-devcode-purple hover:bg-devcode-purple hover:text-white transition-all"
          >
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
