
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, BarChart4, Globe, Database } from "lucide-react";

const services = [
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

  return (
    <section className="py-24 bg-gradient-to-b from-background to-black" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg">
            We offer a comprehensive range of services to help businesses thrive in the digital world
          </p>
        </div>

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

              {/* Background gradient effect */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 bg-gradient-to-br opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
