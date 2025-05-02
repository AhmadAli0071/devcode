
import { Button } from "@/components/ui/button";
import { HeroScene } from "../HeroScene";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroScene />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto md:mx-0"
        >
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-white/80">The Future of Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight mb-6">
            We build <span className="text-gradient-primary">exceptional</span> software solutions
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Transforming businesses with cutting-edge technology, innovative strategies and forward-thinking development practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-devcode-purple to-devcode-blue hover:opacity-90 transition-opacity">
              Explore Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
