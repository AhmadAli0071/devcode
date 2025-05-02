
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: ""
      });
    }, 1500);
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
                Contact <span className="text-gradient-primary">Us</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Have a question or project in mind? We'd love to hear from you.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-1"
              >
                <div className="glass-morphism rounded-xl p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-devcode-purple/20 p-3 rounded-lg mr-4">
                        <Mail className="h-5 w-5 text-devcode-purple" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Email</h4>
                        <a 
                          href="mailto:contact@devcode.com" 
                          className="text-gray-400 hover:text-devcode-blue transition-colors"
                        >
                          contact@devcode.com
                        </a>
                        <p className="text-gray-500 text-sm mt-1">For general inquiries</p>
                        
                        <a 
                          href="mailto:support@devcode.com" 
                          className="text-gray-400 hover:text-devcode-blue transition-colors block mt-2"
                        >
                          support@devcode.com
                        </a>
                        <p className="text-gray-500 text-sm mt-1">For technical support</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-devcode-blue/20 p-3 rounded-lg mr-4">
                        <Phone className="h-5 w-5 text-devcode-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Phone</h4>
                        <a 
                          href="tel:+11234567890" 
                          className="text-gray-400 hover:text-devcode-blue transition-colors"
                        >
                          +1 (123) 456-7890
                        </a>
                        <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-devcode-pink/20 p-3 rounded-lg mr-4">
                        <MapPin className="h-5 w-5 text-devcode-pink" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Address</h4>
                        <p className="text-gray-400">
                          123 Tech Plaza, Silicon Valley<br />
                          CA 94043, United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-devcode-orange/20 p-3 rounded-lg mr-4">
                        <Clock className="h-5 w-5 text-devcode-orange" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Business Hours</h4>
                        <p className="text-gray-400">
                          Monday - Friday: 9am - 6pm<br />
                          Saturday: 10am - 2pm<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2.5 rounded-full">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2.5 rounded-full">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2.5 rounded-full">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2.5 rounded-full">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="glass-morphism rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="John Doe" 
                          required 
                          className="bg-white/5 border-white/10 focus:border-devcode-purple/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="john@example.com" 
                          required 
                          className="bg-white/5 border-white/10 focus:border-devcode-purple/50"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (optional)</label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="+1 (123) 456-7890" 
                          className="bg-white/5 border-white/10 focus:border-devcode-purple/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">Company (optional)</label>
                        <Input 
                          id="company" 
                          name="company" 
                          value={formData.company} 
                          onChange={handleChange} 
                          placeholder="Your Company Name" 
                          className="bg-white/5 border-white/10 focus:border-devcode-purple/50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">Service You're Interested In</label>
                      <select 
                        id="service" 
                        name="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-md bg-white/5 border border-white/10 py-2 px-3 text-sm focus:border-devcode-purple/50 focus:outline-none focus:ring-0"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-apps">Mobile Applications</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="digital-transformation">Digital Transformation</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="How can we help you?" 
                        required 
                        className="bg-white/5 border-white/10 focus:border-devcode-purple/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Tell us about your project or question..." 
                        rows={6} 
                        required 
                        className="bg-white/5 border-white/10 focus:border-devcode-purple/50"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-morphism rounded-xl p-4 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.4490307184!2d-122.0438269952774!3d37.373855500000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7815c08b76f%3A0x1dcd4a8e4a292c17!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651246850774!5m2!1sen!2suk" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dev&Code Office Location"
                    className="filter brightness-50 contrast-125 saturate-0"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Find answers to common questions about working with us
              </motion.p>
            </div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div 
                  className="glass-morphism rounded-xl overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">What is your typical project timeline?</h3>
                    <p className="text-gray-400">
                      Project timelines vary based on complexity and scope, but typical web applications take 8-12 weeks from concept to launch. Mobile applications generally require 12-16 weeks. During our initial consultation, we'll provide a more accurate timeline tailored to your specific project.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="glass-morphism rounded-xl overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">How do you handle project pricing?</h3>
                    <p className="text-gray-400">
                      We offer flexible pricing models including fixed-price quotes for well-defined projects, time and materials for evolving projects, and retainer arrangements for ongoing work. After understanding your requirements, we'll recommend the most appropriate model and provide transparent pricing.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="glass-morphism rounded-xl overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">What is your development process?</h3>
                    <p className="text-gray-400">
                      We follow an agile development methodology with iterative sprints, regular client check-ins, and continuous feedback integration. Our process includes discovery, design, development, testing, deployment, and post-launch support. This approach ensures quality results and allows for flexibility as your project evolves.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="glass-morphism rounded-xl overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Do you provide ongoing maintenance?</h3>
                    <p className="text-gray-400">
                      Yes, we offer various support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. These can include regular updates, performance monitoring, security patches, and feature enhancements according to your needs.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="glass-morphism rounded-xl overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">How do we get started?</h3>
                    <p className="text-gray-400">
                      The first step is to schedule an initial consultation where we'll discuss your project goals, requirements, and vision. From there, we'll develop a proposal outlining the scope, timeline, and cost estimates. Once approved, we'll move into the discovery and planning phase to kick off your project.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="text-center mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gray-300 mb-4">Didn't find what you were looking for?</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-devcode-purple hover:text-devcode-blue transition-colors"
                  >
                    View our complete FAQ page <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
