
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    content: "Dev&Code transformed our business with their innovative web solutions. Their team was responsive, professional, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "CEO, TechVentures Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "Working with Dev&Code was a game-changer for our startup. Their mobile app development expertise helped us secure our first round of funding.",
    author: "Michael Chen",
    position: "Co-founder, NexaPay",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "The AI solution developed by Dev&Code increased our operational efficiency by 37%. I couldn't be happier with the results and ongoing support.",
    author: "Emma Rodriguez",
    position: "CTO, Quantum Industries",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    content: "Dev&Code's team understood our vision perfectly and delivered a cloud platform that exceeded all our requirements. Their technical expertise is outstanding.",
    author: "David Miller",
    position: "Director of Innovation, GlobalTech",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.1),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.1),transparent_40%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg">
            Hear what our clients have to say about working with us
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-morphism rounded-xl p-8 md:p-10 text-center">
                    <div className="mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="inline-block w-5 h-5 text-devcode-purple" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl font-medium mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-gray-400">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full mx-1.5 transition-all ${
                  currentIndex === index ? 'bg-devcode-purple w-8' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
