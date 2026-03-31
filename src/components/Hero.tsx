import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000" 
          alt="African Safari Landscape"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-luxury-black/30 bg-gradient-to-b from-luxury-black/50 via-transparent to-luxury-black/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-gold font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-6"
        >
          Curating Africa’s Finest Journeys
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white leading-[1.1] mb-10 tracking-tight"
        >
          MARA LUXE <br />
          <span className="text-white/80">EXPEDITIONS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            to="/safaris"
            className="group flex items-center space-x-3 bg-white text-luxury-black px-10 py-5 rounded-full font-bold tracking-tight hover:scale-105 transition-all duration-300 shadow-2xl active:scale-95"
          >
            <span>Explore Safaris</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold tracking-tight hover:bg-white/20 transition-all duration-300"
          >
            <span>Custom Inquiry</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" />
        <span className="text-[10px] text-white/60 font-bold tracking-widest uppercase">Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;


