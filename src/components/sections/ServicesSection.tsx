
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, BarChart4, Globe, Database, Users, Building, MapPin, FileCheck, BriefcaseBusiness, BuildingOffice2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const softwareServices = [
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive, fast, and secure web applications built with the latest technologies.",
    color: "from-devcode-purple to-devcode-blue"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that provide seamless user experience.",
    color: "from-devcode-blue to-devcode-pink"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud architecture designed to grow with your business needs.",
    color: "from-devcode-pink to-devcode-purple"
  },
  {
    icon: BarChart4,
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn and adapt to provide actionable insights.",
    color: "from-devcode-purple to-devcode-orange"
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Strategic consulting to modernize your business processes and technologies.",
    color: "from-devcode-orange to-devcode-blue"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into valuable business insights with advanced analytics.",
    color: "from-devcode-blue to-devcode-purple"
  }
];

const recruitmentServices = [
  {
    icon: Users,
    title: "Tech Talent Sourcing",
    description: "Find and recruit top-tier tech professionals across all specializations.",
    color: "from-devcode-purple to-devcode-blue"
  },
  {
    icon: Building,
    title: "Remote & Onsite Staffing",
    description: "Flexible staffing solutions for remote teams or onsite positions.",
    color: "from-devcode-blue to-devcode-pink"
  },
  {
    icon: MapPin,
    title: "Relocation Support",
    description: "Comprehensive immigration and relocation assistance for UK, USA, and Canada.",
    color: "from-devcode-pink to-devcode-purple"
  },
  {
    icon: FileCheck,
    title: "CV & Interview Prep",
    description: "Professional guidance to optimize CVs and prepare for technical interviews.",
    color: "from-devcode-purple to-devcode-orange"
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry-Specific Hiring",
    description: "Specialized recruitment for IT, Finance, Healthcare, and other sectors.",
    color: "from-devcode-orange to-devcode-blue"
  },
  {
    icon: BuildingOffice2,
    title: "Employer Branding",
    description: "Consulting services to help companies attract and retain top talent.",
    color: "from-devcode-blue to-devcode-purple"
  }
];

export const ServicesSection = () => {
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
              <a href="#" className="text-sm font-medium text-devcode-blue hover:text-devcode-purple transition-colors inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
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
    </section>
  );
};
