
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Check, ArrowRight, Code, Smartphone, Cloud, BarChart4, Globe, Database,
  Users, Building, MapPin, FileCheck, BriefcaseBusiness, BuildingOffice2 
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const Services = () => {
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

  const softwareServices = [
    {
      id: "web-development",
      icon: Code,
      title: "Web Development",
      description: "We build responsive, fast, and secure web applications that provide an exceptional user experience across all devices. Our web solutions are designed to meet your specific business needs.",
      features: [
        "Custom web application development",
        "Progressive Web Apps (PWAs)",
        "E-commerce platforms",
        "Content management systems",
        "Web portals and dashboards",
        "API development and integration"
      ],
      technologies: ["React", "Angular", "Vue.js", "Node.js", "Django", "Laravel"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-purple to-devcode-blue"
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "Mobile Applications",
      description: "We develop native and cross-platform mobile applications that deliver seamless user experiences. Our mobile solutions are built with performance, security, and scalability in mind.",
      features: [
        "iOS and Android app development",
        "Cross-platform development",
        "UI/UX design for mobile",
        "Mobile app testing and QA",
        "App store optimization",
        "Ongoing maintenance and support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-blue to-devcode-pink"
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      title: "Cloud Solutions",
      description: "We design and implement scalable cloud architectures that grow with your business. Our cloud solutions optimize performance, reduce costs, and enhance security.",
      features: [
        "Cloud migration strategies",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Serverless architecture",
        "DevOps automation",
        "Cloud security management"
      ],
      technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1603695576504-b2b22b530232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-pink to-devcode-purple"
    },
    {
      id: "ai-ml",
      icon: BarChart4,
      title: "AI & Machine Learning",
      description: "We develop intelligent systems that learn and adapt to provide actionable insights. Our AI solutions help businesses automate processes and make data-driven decisions.",
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision systems",
        "Recommendation engines",
        "Chatbots and virtual assistants",
        "Machine learning model development"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI", "IBM Watson"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-purple to-devcode-orange"
    },
    {
      id: "digital-transformation",
      icon: Globe,
      title: "Digital Transformation",
      description: "We help businesses modernize their processes, systems, and customer experiences through strategic digital transformation initiatives.",
      features: [
        "Digital strategy consulting",
        "Process automation",
        "Legacy system modernization",
        "Digital customer experience design",
        "Business intelligence implementation",
        "Organizational change management"
      ],
      technologies: ["RPA", "BPM", "CRM", "ERP", "Business Intelligence Tools"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-orange to-devcode-blue"
    },
    {
      id: "data-analytics",
      icon: Database,
      title: "Data Analytics",
      description: "We transform raw data into valuable business insights with advanced analytics. Our data solutions help you make informed decisions and identify new opportunities.",
      features: [
        "Data warehouse design",
        "ETL process development",
        "Business intelligence dashboards",
        "Real-time analytics",
        "Big data processing",
        "Data visualization"
      ],
      technologies: ["Hadoop", "Spark", "Tableau", "Power BI", "Snowflake", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-blue to-devcode-purple"
    }
  ];

  const recruitmentServices = [
    {
      id: "tech-talent",
      icon: Users,
      title: "Tech Talent Sourcing",
      description: "We help companies find and recruit top-tier technology professionals across all specializations, from junior developers to senior architects and executives.",
      features: [
        "Software developers and engineers",
        "DevOps and SRE professionals",
        "Data scientists and analysts",
        "Product managers and designers",
        "Technical leads and architects",
        "CTO and IT executive search"
      ],
      technologies: ["Technical assessment", "Cultural fit evaluation", "Market mapping", "Talent pool building"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-purple to-devcode-blue"
    },
    {
      id: "remote-staffing",
      icon: Building,
      title: "Remote & Onsite Staffing",
      description: "We provide flexible staffing solutions for both remote teams and onsite positions, helping companies scale their workforce according to project needs.",
      features: [
        "Remote team building",
        "Contract and full-time placements",
        "Team augmentation",
        "Project-based staffing",
        "Dedicated development teams",
        "Nearshore and offshore options"
      ],
      technologies: ["Remote work platforms", "Team collaboration tools", "Performance tracking", "Resource management"],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-blue to-devcode-pink"
    },
    {
      id: "relocation",
      icon: MapPin,
      title: "Relocation Support",
      description: "We offer comprehensive immigration and relocation assistance for professionals moving to the UK, USA, and Canada, making international hiring seamless.",
      features: [
        "Visa sponsorship guidance",
        "Work permit applications",
        "Housing assistance",
        "Family relocation support",
        "Cultural integration programs",
        "Legal compliance advisory"
      ],
      technologies: ["Immigration systems", "Relocation management", "Cross-border compliance", "International payroll"],
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-pink to-devcode-purple"
    },
    {
      id: "cv-interview",
      icon: FileCheck,
      title: "CV & Interview Preparation",
      description: "We provide professional guidance to job seekers to optimize their CVs and prepare for technical interviews, increasing their chances of landing their dream jobs.",
      features: [
        "Resume optimization and tailoring",
        "LinkedIn profile enhancement",
        "Mock technical interviews",
        "Behavioral interview coaching",
        "Portfolio review and improvement",
        "Salary negotiation guidance"
      ],
      technologies: ["ATS optimization", "Technical assessment preparation", "Presentation skills", "Negotiation techniques"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-purple to-devcode-orange"
    },
    {
      id: "industry-hiring",
      icon: BriefcaseBusiness,
      title: "Industry-Specific Hiring",
      description: "We offer specialized recruitment services for various industries including IT, Finance, Healthcare, and other sectors, with deep understanding of each field's requirements.",
      features: [
        "Industry-specific talent pools",
        "Specialized skill assessment",
        "Compliance and regulatory expertise",
        "Industry trend insights",
        "Competitive analysis",
        "Market rate benchmarking"
      ],
      technologies: ["Healthcare IT", "FinTech", "EdTech", "E-commerce", "Manufacturing", "Energy"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-orange to-devcode-blue"
    },
    {
      id: "employer-branding",
      icon: BuildingOffice2,
      title: "Employer Branding",
      description: "We help companies develop and promote their employer brand to attract and retain top talent in competitive markets.",
      features: [
        "Employer value proposition development",
        "Recruitment marketing strategies",
        "Candidate experience optimization",
        "Employee testimonial campaigns",
        "Social media presence enhancement",
        "Recruitment event planning"
      ],
      technologies: ["Brand analytics", "Content marketing", "Social media strategies", "Candidate journey mapping"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: "from-devcode-blue to-devcode-purple"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We begin by understanding your business goals, requirements, and challenges to develop a strategic roadmap for your project."
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers create intuitive user interfaces and experience flows, which we refine through iterative prototyping and feedback."
    },
    {
      number: "03",
      title: "Development",
      description: "Our engineers build your solution using agile methodologies, ensuring quality code and regular progress updates."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "We rigorously test all aspects of your application to ensure it performs flawlessly across all platforms and use cases."
    },
    {
      number: "05",
      title: "Deployment",
      description: "We safely deploy your solution to production environments, ensuring a smooth transition and minimal disruption."
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "We provide ongoing support, maintenance, and updates to ensure your solution continues to perform optimally."
    }
  ];

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
                Our <span className="text-gradient-primary">Services</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Comprehensive technology solutions and recruitment services tailored to your business needs
              </motion.p>
              
              <Tabs defaultValue="software" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-black/20 backdrop-blur-sm border border-white/10">
                    <TabsTrigger 
                      value="software"
                      className={cn("data-[state=active]:bg-gradient-to-r data-[state=active]:from-devcode-purple/20 data-[state=active]:to-devcode-blue/20 data-[state=active]:text-white")}
                    >
                      Software Development
                    </TabsTrigger>
                    <TabsTrigger 
                      value="recruitment"
                      className={cn("data-[state=active]:bg-gradient-to-r data-[state=active]:from-devcode-blue/20 data-[state=active]:to-devcode-purple/20 data-[state=active]:text-white")}
                    >
                      Recruitment Agency
                    </TabsTrigger>
                  </TabsList>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Services Tabs Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="software" className="w-full">
              <TabsContent value="software" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                {softwareServices.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`mb-24 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:items-center`}
                    id={service.id}
                  >
                    <motion.div
                      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <div>
                        <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                        
                        <p className="text-gray-300 mb-8">
                          {service.description}
                        </p>
                        
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <Check className="h-5 w-5 text-devcode-blue mr-2 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <a 
                            href={`/contact?service=${service.id}`} 
                            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 transition-opacity"
                          >
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="relative perspective">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-20 blur-xl`}></div>
                        
                        <div className="glass-morphism rounded-xl overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="recruitment" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                {recruitmentServices.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`mb-24 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:items-center`}
                    id={service.id}
                  >
                    <motion.div
                      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <div>
                        <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                        
                        <p className="text-gray-300 mb-8">
                          {service.description}
                        </p>
                        
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <Check className="h-5 w-5 text-devcode-blue mr-2 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Expertise Areas</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <a 
                            href={`/contact?service=${service.id}`} 
                            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 transition-opacity"
                          >
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="relative perspective">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-20 blur-xl`}></div>
                        
                        <div className="glass-morphism rounded-xl overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Our Process
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our systematic approach to delivering successful projects
              </motion.p>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-devcode-purple via-devcode-blue to-devcode-pink"></div>
              
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`relative ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:col-start-2'}`}
                    variants={itemVariants}
                  >
                    {/* Connection dot */}
                    <div className="hidden lg:block absolute top-10 w-4 h-4 rounded-full bg-gradient-to-r from-devcode-purple to-devcode-blue -ml-2 lg:ml-0 lg:mr-0" style={{
                      [index % 2 === 0 ? 'right' : 'left']: '-8px'
                    }}></div>
                    
                    <div className="glass-morphism rounded-xl p-8 h-full">
                      <span className="text-4xl font-bold text-gradient-primary block mb-4">{step.number}</span>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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
                Ready to <span className="text-gradient-primary">transform</span> your business?
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss your project requirements and see how our services can help you achieve your business goals.
              </p>
              
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 font-medium transition-all"
              >
                Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
