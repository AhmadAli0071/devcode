
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Project data - in a real app, this would come from a backend API
const projectsData = [
  {
    slug: "nexus-finance-dashboard",
    title: "Nexus Finance Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights. Nexus Finance Dashboard provides enterprise-level businesses with detailed reports, forecasting tools, and smart alerting systems to optimize financial operations.",
    fullDescription: "Nexus Finance Dashboard transforms how businesses interact with their financial data by providing a real-time, comprehensive view of company finances. The dashboard combines data visualization with AI-powered predictive analytics to give users actionable insights. The system integrates with major banking and accounting platforms to provide a unified view of financial health, cash flow projections, expense tracking, and investment performance.\n\nUsers can customize their dashboard view, set up automated reports, and create alerting systems for specific financial thresholds. The responsive design ensures seamless operation across desktop and mobile devices, allowing executives to monitor financial performance anywhere.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["React", "Node.js", "D3.js", "MongoDB", "AWS", "Redux", "Socket.io"],
    features: [
      "Real-time financial data dashboard",
      "AI-powered forecasting and predictions",
      "Custom report generation",
      "Role-based access control",
      "Integration with major banking platforms",
      "Mobile-responsive design"
    ],
    clientFeedback: {
      quote: "The Nexus Finance Dashboard transformed how we monitor and act on financial data. The forecasting feature alone saved us from several potentially costly decisions.",
      author: "Sarah Johnson",
      position: "CFO, TechCorp Inc."
    },
    projectUrl: "https://nexus-finance.example.com",
    githubUrl: "https://github.com/example/nexus-finance"
  },
  {
    slug: "ecotrack-mobile-app",
    title: "EcoTrack Mobile App",
    category: "Mobile Application",
    description: "Sustainability tracking application that helps users reduce their carbon footprint through personalized recommendations.",
    fullDescription: "EcoTrack is a comprehensive mobile application designed to help environmentally conscious individuals and organizations track, analyze, and reduce their carbon footprint. The app uses advanced algorithms to calculate the environmental impact of daily activities and provides personalized recommendations for more sustainable choices.\n\nUsers can track transportation methods, energy consumption, food choices, and purchasing habits. The gamification elements, including challenges and rewards, encourage continued engagement and progressive improvement in environmental impact. Community features allow users to compare progress and share sustainability tips.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["React Native", "Firebase", "TensorFlow Lite", "Node.js", "MongoDB"],
    features: [
      "Carbon footprint calculator",
      "Personalized sustainability recommendations",
      "Progress tracking and reporting",
      "Gamification elements and challenges",
      "Community sharing and comparisons",
      "Offline functionality"
    ],
    clientFeedback: {
      quote: "EcoTrack has helped our community reduce its collective carbon footprint by over 15% in just six months. The personalized recommendations and gamification features keep users engaged long-term.",
      author: "Michael Green",
      position: "Director, EcoCity Initiative"
    },
    projectUrl: "https://ecotrack-app.example.com",
    githubUrl: null
  },
  {
    slug: "smarthome-hub",
    title: "SmartHome Hub",
    category: "IoT Solution",
    description: "Integrated smart home control system with AI-powered automation features and cloud-based management.",
    fullDescription: "SmartHome Hub is an advanced IoT platform that integrates and centralizes control of various smart home devices. The system uses artificial intelligence to learn user preferences and behavior patterns, automatically adjusting settings for optimal comfort, security, and energy efficiency.\n\nThe hub connects to a wide range of smart devices including thermostats, lighting systems, security cameras, door locks, entertainment systems, and appliances from different manufacturers. The cloud-based architecture allows for remote control via mobile or web applications, while still maintaining critical functions locally in case of internet outages.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Python", "AWS", "Machine Learning", "C++", "MQTT", "React Native"],
    features: [
      "Universal device integration",
      "AI-powered automation",
      "Voice control and natural language processing",
      "Energy usage monitoring and optimization",
      "Advanced security features",
      "Customizable scenes and routines"
    ],
    clientFeedback: {
      quote: "The SmartHome Hub integrated our disparate systems seamlessly. The AI learning capabilities have made home automation truly effortless, and the energy savings have been substantial.",
      author: "David Rodriguez",
      position: "Smart Building Consultant, ModernLiving Inc."
    },
    projectUrl: "https://smarthome-hub.example.com",
    githubUrl: "https://github.com/example/smarthome-hub"
  },
  {
    slug: "quantum-ecommerce-platform",
    title: "Quantum E-commerce Platform",
    category: "Web Application",
    description: "Next-generation e-commerce solution with advanced personalization, real-time inventory management, and analytics.",
    fullDescription: "Quantum E-commerce Platform is a versatile and powerful solution designed to handle the complex needs of modern online retail. Built with scalability in mind, it can accommodate businesses from small boutiques to enterprise-level marketplaces with thousands of products and high transaction volumes.\n\nThe platform features a highly personalized shopping experience through AI-driven recommendation engines and dynamic content presentation. The real-time inventory and order management system connects seamlessly with warehouse management and shipping providers. Advanced analytics provide comprehensive insights into customer behavior, sales trends, and marketing campaign performance.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "Elasticsearch", "Docker", "AWS"],
    features: [
      "AI-powered recommendation engine",
      "Real-time inventory management",
      "Multi-channel selling capabilities",
      "Advanced search functionality",
      "Dynamic pricing system",
      "Comprehensive analytics dashboard",
      "Automated marketing tools"
    ],
    clientFeedback: {
      quote: "Quantum has revolutionized our online retail operations. Sales have increased by 32% in the first quarter after implementation, largely due to the personalization features and improved user experience.",
      author: "Emma Chen",
      position: "E-commerce Director, StyleHaven"
    },
    projectUrl: "https://quantum-ecommerce.example.com",
    githubUrl: "https://github.com/example/quantum-ecommerce"
  },
  {
    slug: "medisync-healthcare-app",
    title: "MediSync Healthcare App",
    category: "Mobile Application",
    description: "Patient-doctor communication platform with secure telehealth capabilities and medical record management.",
    fullDescription: "MediSync is a comprehensive healthcare platform that bridges the communication gap between patients and healthcare providers. The application facilitates secure virtual consultations, appointment scheduling, prescription management, and medical record access in a HIPAA-compliant environment.\n\nPatients can schedule appointments, participate in video consultations, receive and manage prescriptions, access their medical records, and communicate securely with healthcare providers. Doctors can manage their schedules, conduct remote consultations, issue prescriptions, access patient histories, and coordinate with other healthcare professionals. The system integrates with existing hospital management systems and electronic health record platforms.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Flutter", "Node.js", "MongoDB", "WebRTC", "Firebase", "AWS"],
    features: [
      "Secure video consultations",
      "Appointment scheduling system",
      "Electronic prescription management",
      "Medical record access and sharing",
      "Secure messaging system",
      "Reminder and notification system",
      "Integration with medical devices"
    ],
    clientFeedback: {
      quote: "MediSync has transformed our patient engagement and allowed us to continue providing quality care even during the pandemic. The secure and intuitive interface has been praised by both our staff and patients.",
      author: "Dr. James Wilson",
      position: "Medical Director, Metropolitan Health Network"
    },
    projectUrl: "https://medisync-health.example.com",
    githubUrl: null
  },
  {
    slug: "datacore-analytics-engine",
    title: "DataCore Analytics Engine",
    category: "Big Data",
    description: "Powerful data processing system for enterprise-level analytics, reporting, and predictive modeling.",
    fullDescription: "DataCore is a sophisticated big data analytics engine designed to process, analyze, and visualize massive datasets with high performance and scalability. The platform enables organizations to extract valuable insights from structured and unstructured data, supporting informed decision-making and strategic planning.\n\nThe system's architecture is built around a distributed computing framework that allows for parallel processing of data across multiple nodes. Advanced machine learning algorithms identify patterns, anomalies, and correlations within the data, while predictive modeling tools forecast future trends based on historical information. The visualization layer presents complex data in intuitive, interactive formats that are accessible to non-technical users.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Python", "Apache Spark", "Kubernetes", "ElasticSearch", "TensorFlow", "React", "D3.js"],
    features: [
      "Distributed data processing",
      "Advanced machine learning algorithms",
      "Predictive modeling tools",
      "Natural language processing",
      "Interactive data visualization",
      "Automated reporting system",
      "Real-time analytics capabilities"
    ],
    clientFeedback: {
      quote: "DataCore has enabled us to process and analyze customer data at a scale and speed we never thought possible. The insights generated have directly influenced our product development and marketing strategies, resulting in measurable business growth.",
      author: "Laura Martinez",
      position: "Chief Data Officer, Global Retail Corp"
    },
    projectUrl: "https://datacore-analytics.example.com",
    githubUrl: "https://github.com/example/datacore-analytics"
  }
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you are looking for doesn't exist or has been removed.</p>
          <Button asChild variant="outline">
            <Link to="/portfolio">
              <ArrowLeft className="mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-devcode-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-devcode-blue/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Back button and category info */}
              <div className="w-full md:w-1/3 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button asChild variant="outline" className="mb-6">
                    <Link to="/portfolio">
                      <ArrowLeft className="mr-2" />
                      Back to Portfolio
                    </Link>
                  </Button>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-400">Category</h3>
                      <p className="text-xl font-semibold text-devcode-blue">{project.category}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-400">Technologies</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {(project.projectUrl || project.githubUrl) && (
                      <div>
                        <h3 className="text-lg font-medium text-gray-400">Links</h3>
                        <div className="space-y-2 mt-2">
                          {project.projectUrl && (
                            <a 
                              href={project.projectUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-devcode-purple hover:text-devcode-blue transition-colors"
                            >
                              <ExternalLink className="mr-2 w-4 h-4" /> Visit Project
                            </a>
                          )}
                          
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-devcode-purple hover:text-devcode-blue transition-colors"
                            >
                              <ExternalLink className="mr-2 w-4 h-4" /> GitHub Repository
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Main Content */}
              <motion.div 
                className="w-full md:w-2/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
                    {project.fullDescription}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Screenshots</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        {project.clientFeedback && (
          <section className="py-16 bg-black/30">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-3xl mx-auto glass-morphism rounded-2xl p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-8">Client Feedback</h2>
                  <svg className="mx-auto mb-6 text-devcode-purple w-12 h-12 opacity-80" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-200 italic mb-6">
                    "{project.clientFeedback.quote}"
                  </blockquote>
                  <div className="text-devcode-blue font-semibold text-lg">{project.clientFeedback.author}</div>
                  <div className="text-gray-400">{project.clientFeedback.position}</div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="glass-morphism rounded-2xl p-10 max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to start your <span className="text-gradient-primary">next project</span>?
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how we can create something amazing for your business. Our team is ready to bring your ideas to life.
              </p>
              
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 font-medium transition-all"
              >
                Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
