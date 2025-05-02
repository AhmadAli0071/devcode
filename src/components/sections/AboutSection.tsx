
import { motion } from "framer-motion";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-24 overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative perspective"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-devcode-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-devcode-blue/20 rounded-full blur-3xl"></div>
            
            <div className="relative grid grid-cols-2 gap-4 preserve-3d">
              <motion.div 
                className="col-span-1 h-60 glass-morphism rounded-lg overflow-hidden"
                initial={{ rotateY: -15 }}
                whileInView={{ rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="col-span-1 h-40 glass-morphism rounded-lg overflow-hidden"
                initial={{ rotateY: 15 }}
                whileInView={{ rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Code on screen" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="col-span-1 h-40 glass-morphism rounded-lg overflow-hidden"
                initial={{ rotateY: -15 }}
                whileInView={{ rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Tech meeting" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="col-span-1 h-60 glass-morphism rounded-lg overflow-hidden"
                initial={{ rotateY: 15 }}
                whileInView={{ rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Digital technology" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-white/80">About Dev&Code</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              We build software that makes a <span className="text-gradient-primary">difference</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              Dev&Code is a leading software development company founded in 2018. We specialize in creating cutting-edge digital solutions that help businesses thrive in the modern world.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-300 mb-8">
              Our team of expert developers, designers, and strategists work together to deliver exceptional results that exceed client expectations. We're passionate about technology and committed to innovation.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-devcode-purple mb-2">200+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-devcode-blue mb-2">50+</h3>
                <p className="text-gray-400">Tech Experts</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-devcode-pink mb-2">12+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-devcode-orange mb-2">98%</h3>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
