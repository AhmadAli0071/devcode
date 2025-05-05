
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Code, Users, Target, Heart, Clock, Zap } from "lucide-react";

const About = () => {
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

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Alex has over 15 years of experience in software development and business leadership. He founded Dev&Code with a vision to create technology that makes a difference."
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "With a PhD in Computer Science and experience at top tech companies, Sophia leads our technical strategy and ensures we stay at the cutting edge of technology."
    },
    {
      name: "Marcus Johnson",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Marcus is a full-stack developer with expertise in React, Node.js, and cloud architecture. He's passionate about creating elegant, efficient code."
    },
    {
      name: "Emma Rodriguez",
      role: "UX/UI Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Emma combines artistic talent with user psychology to create interfaces that are both beautiful and highly functional. She leads our design team."
    },
    {
      name: "David Kim",
      role: "AI Specialist",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "David specializes in machine learning and AI integration. His work helps our clients leverage the power of artificial intelligence in their products."
    },
    {
      name: "Olivia Wang",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
      bio: "Olivia ensures our projects run smoothly, on time, and within budget. Her organizational skills and client communication are unparalleled."
    }
  ];

  const values = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "We strive for the highest standards in our code and technical solutions."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We view our clients as partners and work collaboratively to achieve success."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that impact our clients' businesses."
    },
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "We're constantly exploring new technologies and approaches to solve problems."
    },
    {
      icon: Clock,
      title: "Timeliness",
      description: "We respect deadlines and deliver our projects on schedule."
    },
    {
      icon: Zap,
      title: "Continuous Improvement",
      description: "We're always learning, growing, and enhancing our skills and processes."
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
                About <span className="text-gradient-primary">Dev&Code</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We're a team of passionate technologists dedicated to building innovative software solutions that solve real-world problems.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded in 2018, Dev&Code began with a simple mission: to create software that makes a difference. Our founder, Alex Thompson, saw that many businesses were struggling to find development partners who truly understood their needs and could deliver high-quality solutions.
                  </p>
                  
                  <p>
                    Starting with a small team of just four developers, we quickly earned a reputation for technical excellence and client-focused service. As our portfolio grew, so did our team and capabilities.
                  </p>
                  
                  <p>
                    Today, Dev&Code is home to over 50 talented professionals spanning development, design, AI, and project management. We've successfully delivered more than 200 projects for clients ranging from startups to Fortune 500 companies.
                  </p>
                  
                  <p>
                    Despite our growth, we've maintained our core values and commitment to quality. We believe in building long-term relationships with our clients, understanding their business goals, and delivering solutions that drive real results.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="relative perspective"
                initial={{ opacity: 0, rotateY: 15 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-devcode-purple/20 to-devcode-blue/20 rounded-2xl transform -rotate-2 scale-105"></div>
                
                <div className="glass-morphism rounded-2xl overflow-hidden relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Dev&Code team" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Our Values
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                The principles that guide everything we do at Dev&Code
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism rounded-xl p-8"
                  variants={itemVariants}
                >
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-br from-devcode-purple to-devcode-blue flex items-center justify-center mb-4`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Meet Our Team
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                The talented individuals behind Dev&Code's success
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="relative mx-auto w-48 h-48 mb-6 group perspective">
                    <div className="absolute inset-0 bg-gradient-to-br from-devcode-purple to-devcode-blue rounded-full opacity-50 group-hover:opacity-70 transition-opacity blur-md"></div>
                    <div className="relative overflow-hidden rounded-full border-4 border-white/10">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-devcode-blue mb-4">{member.role}</p>
                  <p className="text-gray-400 max-w-xs mx-auto">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Join Our Team CTA */}
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
                Join Our <span className="text-gradient-primary">Team</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                We're always looking for talented individuals who are passionate about technology and innovation. Check out our open positions and become part of our story.
              </p>
              
              <a 
                href="https://www.linkedin.com/company/devncode-cloud/"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 font-medium transition-all"
              >
                View Open Positions <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
