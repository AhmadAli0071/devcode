
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = [
    { id: null, name: "All Projects" },
    { id: "web", name: "Web Applications" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "cloud", name: "Cloud Solutions" }
  ];

  const projects = [
    {
      id: 1,
      title: "Nexus Finance Dashboard",
      category: "web",
      description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "D3.js", "MongoDB"]
    },
    {
      id: 2,
      title: "EcoTrack Mobile App",
      category: "mobile",
      description: "Sustainability tracking application that helps users reduce their carbon footprint through personalized recommendations.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "TensorFlow Lite"]
    },
    {
      id: 3,
      title: "SmartHome Hub",
      category: "cloud",
      description: "Integrated smart home control system with AI-powered automation features and cloud-based management.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "AWS", "Machine Learning", "C++"]
    },
    {
      id: 4,
      title: "Quantum E-commerce Platform",
      category: "web",
      description: "Next-generation e-commerce solution with advanced personalization, real-time inventory management, and analytics.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis"]
    },
    {
      id: 5,
      title: "MediSync Healthcare App",
      category: "mobile",
      description: "Patient-doctor communication platform with secure telehealth capabilities and medical record management.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Node.js", "MongoDB", "WebRTC"]
    },
    {
      id: 6,
      title: "DataCore Analytics Engine",
      category: "ai",
      description: "Powerful data processing system for enterprise-level analytics, reporting, and predictive modeling.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Apache Spark", "Kubernetes", "ElasticSearch"]
    },
    {
      id: 7,
      title: "TravelBuddy App",
      category: "mobile",
      description: "All-in-one travel companion app with itinerary planning, local recommendations, and social sharing features.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "GraphQL", "MongoDB", "AWS"]
    },
    {
      id: 8,
      title: "Predictive Maintenance Platform",
      category: "ai",
      description: "Industrial IoT solution that predicts equipment failures before they occur, minimizing downtime and maintenance costs.",
      image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "Azure IoT", "React"]
    },
    {
      id: 9,
      title: "CloudScale Infrastructure",
      category: "cloud",
      description: "Custom cloud architecture that automatically scales with traffic demands while optimizing for cost efficiency.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes"]
    }
  ];

  const filteredProjects = filter
    ? projects.filter(project => project.category === filter)
    : projects;

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
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-devcode-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-devcode-blue/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our <span className="text-gradient-primary">Portfolio</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Explore our latest projects and see how we've helped businesses achieve their goals
              </motion.p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id || 'all'}
                  className={`px-6 py-2 rounded-full transition-all ${
                    filter === category.id 
                      ? 'bg-gradient-to-r from-devcode-purple to-devcode-blue text-white' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                  onClick={() => setFilter(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group"
                  variants={itemVariants}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  </div>
                  
                  <div className="glass-morphism rounded-xl p-6 -mt-10 relative z-10 mx-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-devcode-purple transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    
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
                    
                    <a 
                      href={`/portfolio/${project.id}`} 
                      className="inline-flex items-center text-sm text-devcode-purple hover:text-devcode-blue transition-colors"
                    >
                      View Project <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="glass-morphism rounded-2xl p-10 md:p-16 max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have a project in <span className="text-gradient-primary">mind?</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how we can bring your ideas to life with our expertise in technology and design.
              </p>
              
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 font-medium transition-all"
              >
                Start a Project <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
