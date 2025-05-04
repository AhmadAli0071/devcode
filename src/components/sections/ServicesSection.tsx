
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, BarChart4, Globe, Database, Users, Building, MapPin, FileCheck, BriefcaseBusiness, Building2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const softwareServices = [
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive, fast, and secure web applications built with the latest technologies.",
    color: "from-devcode-purple to-devcode-blue",
    details: {
      fullDescription: "We build responsive, fast, and secure web applications that provide an exceptional user experience across all devices. Our web solutions are designed to meet your specific business needs.",
      features: [
        "Custom web application development",
        "Progressive Web Apps (PWAs)",
        "E-commerce platforms",
        "Content management systems",
        "Web portals and dashboards",
        "API development and integration"
      ],
      technologies: ["React", "Angular", "Vue.js", "Node.js", "Django", "Laravel"],
    }
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that provide seamless user experience.",
    color: "from-devcode-blue to-devcode-pink",
    details: {
      fullDescription: "We develop native and cross-platform mobile applications that deliver seamless user experiences. Our mobile solutions are built with performance, security, and scalability in mind.",
      features: [
        "iOS and Android app development",
        "Cross-platform development",
        "UI/UX design for mobile",
        "Mobile app testing and QA",
        "App store optimization",
        "Ongoing maintenance and support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
    }
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud architecture designed to grow with your business needs.",
    color: "from-devcode-pink to-devcode-purple",
    details: {
      fullDescription: "We design and implement scalable cloud architectures that grow with your business. Our cloud solutions optimize performance, reduce costs, and enhance security.",
      features: [
        "Cloud migration strategies",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Serverless architecture",
        "DevOps automation",
        "Cloud security management"
      ],
      technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"],
    }
  },
  {
    icon: BarChart4,
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn and adapt to provide actionable insights.",
    color: "from-devcode-purple to-devcode-orange",
    details: {
      fullDescription: "We develop intelligent systems that learn and adapt to provide actionable insights. Our AI solutions help businesses automate processes and make data-driven decisions.",
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision systems",
        "Recommendation engines",
        "Chatbots and virtual assistants",
        "Machine learning model development"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI", "IBM Watson"],
    }
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Strategic consulting to modernize your business processes and technologies.",
    color: "from-devcode-orange to-devcode-blue",
    details: {
      fullDescription: "We help businesses modernize their processes, systems, and customer experiences through strategic digital transformation initiatives.",
      features: [
        "Digital strategy consulting",
        "Process automation",
        "Legacy system modernization",
        "Digital customer experience design",
        "Business intelligence implementation",
        "Organizational change management"
      ],
      technologies: ["RPA", "BPM", "CRM", "ERP", "Business Intelligence Tools"],
    }
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into valuable business insights with advanced analytics.",
    color: "from-devcode-blue to-devcode-purple",
    details: {
      fullDescription: "We transform raw data into valuable business insights with advanced analytics. Our data solutions help you make informed decisions and identify new opportunities.",
      features: [
        "Data warehouse design",
        "ETL process development",
        "Business intelligence dashboards",
        "Real-time analytics",
        "Big data processing",
        "Data visualization"
      ],
      technologies: ["Hadoop", "Spark", "Tableau", "Power BI", "Snowflake", "MongoDB"],
    }
  }
];

const recruitmentServices = [
  {
    icon: Users,
    title: "Tech Talent Sourcing",
    description: "Find and recruit top-tier tech professionals across all specializations.",
    color: "from-devcode-purple to-devcode-blue",
    details: {
      fullDescription: "We help companies find and recruit top-tier technology professionals across all specializations, from junior developers to senior architects and executives.",
      features: [
        "Software developers and engineers",
        "DevOps and SRE professionals",
        "Data scientists and analysts",
        "Product managers and designers",
        "Technical leads and architects",
        "CTO and IT executive search"
      ],
      technologies: ["Technical assessment", "Cultural fit evaluation", "Market mapping", "Talent pool building"],
    }
  },
  {
    icon: Building,
    title: "Remote & Onsite Staffing",
    description: "Flexible staffing solutions for remote teams or onsite positions.",
    color: "from-devcode-blue to-devcode-pink",
    details: {
      fullDescription: "We provide flexible staffing solutions for both remote teams and onsite positions, helping companies scale their workforce according to project needs.",
      features: [
        "Remote team building",
        "Contract and full-time placements",
        "Team augmentation",
        "Project-based staffing",
        "Dedicated development teams",
        "Nearshore and offshore options"
      ],
      technologies: ["Remote work platforms", "Team collaboration tools", "Performance tracking", "Resource management"],
    }
  },
  {
    icon: MapPin,
    title: "Relocation Support",
    description: "Comprehensive immigration and relocation assistance for UK, USA, and Canada.",
    color: "from-devcode-pink to-devcode-purple",
    details: {
      fullDescription: "We offer comprehensive immigration and relocation assistance for professionals moving to the UK, USA, and Canada, making international hiring seamless.",
      features: [
        "Visa sponsorship guidance",
        "Work permit applications",
        "Housing assistance",
        "Family relocation support",
        "Cultural integration programs",
        "Legal compliance advisory"
      ],
      technologies: ["Immigration systems", "Relocation management", "Cross-border compliance", "International payroll"],
    }
  },
  {
    icon: FileCheck,
    title: "CV & Interview Prep",
    description: "Professional guidance to optimize CVs and prepare for technical interviews.",
    color: "from-devcode-purple to-devcode-orange",
    details: {
      fullDescription: "We provide professional guidance to job seekers to optimize their CVs and prepare for technical interviews, increasing their chances of landing their dream jobs.",
      features: [
        "Resume optimization and tailoring",
        "LinkedIn profile enhancement",
        "Mock technical interviews",
        "Behavioral interview coaching",
        "Portfolio review and improvement",
        "Salary negotiation guidance"
      ],
      technologies: ["ATS optimization", "Technical assessment preparation", "Presentation skills", "Negotiation techniques"],
    }
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry-Specific Hiring",
    description: "Specialized recruitment for IT, Finance, Healthcare, and other sectors.",
    color: "from-devcode-orange to-devcode-blue",
    details: {
      fullDescription: "We offer specialized recruitment services for various industries including IT, Finance, Healthcare, and other sectors, with deep understanding of each field's requirements.",
      features: [
        "Industry-specific talent pools",
        "Specialized skill assessment",
        "Compliance and regulatory expertise",
        "Industry trend insights",
        "Competitive analysis",
        "Market rate benchmarking"
      ],
      technologies: ["Healthcare IT", "FinTech", "EdTech", "E-commerce", "Manufacturing", "Energy"],
    }
  },
  {
    icon: Building2,
    title: "Employer Branding",
    description: "Consulting services to help companies attract and retain top talent.",
    color: "from-devcode-blue to-devcode-purple",
    details: {
      fullDescription: "We help companies develop and promote their employer brand to attract and retain top talent in competitive markets.",
      features: [
        "Employer value proposition development",
        "Recruitment marketing strategies",
        "Candidate experience optimization",
        "Employee testimonial campaigns",
        "Social media presence enhancement",
        "Recruitment event planning"
      ],
      technologies: ["Brand analytics", "Content marketing", "Social media strategies", "Candidate journey mapping"],
    }
  }
];

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    },
    hover: {
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const renderServiceCards = (services) => {
    return (
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="glass-morphism rounded-xl p-8 relative overflow-hidden group"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
            <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
              <service.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
            <div className="mt-6">
              <button 
                onClick={() => handleLearnMore(service)}
                className="text-sm font-medium text-devcode-blue hover:text-devcode-purple transition-colors inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <div className="absolute -bottom-2 -right-2 h-24 w-24 bg-gradient-to-br opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-black" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg">
            We offer comprehensive services in software development and talent recruitment
          </p>
        </div>

        <Tabs defaultValue="software" className="w-full mb-12">
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

          <TabsContent value="software" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            {renderServiceCards(softwareServices)}
          </TabsContent>
          
          <TabsContent value="recruitment" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            {renderServiceCards(recruitmentServices)}
          </TabsContent>
        </Tabs>
      </div>

      {/* Service Details Dialog */}
      {selectedService && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px] bg-black/90 backdrop-blur-sm border-white/10">
            <DialogHeader>
              <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center mb-4`}>
                <selectedService.icon className="h-8 w-8 text-white" />
              </div>
              <DialogTitle className="text-2xl font-bold">{selectedService.title}</DialogTitle>
              <DialogDescription className="text-gray-300 mt-2">
                {selectedService.details.fullDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                {selectedService.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedService.details.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <a 
                href={`/services#${selectedService.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 transition-opacity text-white"
              >
                View Full Details
              </a>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};
