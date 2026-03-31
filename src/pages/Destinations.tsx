import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import { ArrowRight, MapPin, CheckCircle } from 'phosphor-react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Curated Locations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl text-luxury-black font-bold mb-8 tracking-tighter"
          >
            The Heart of <span className="text-gold">Africa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-black/60 text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Discover Kenya's most breathtaking landscapes and wildlife sanctuaries, 
            each handpicked for its unique beauty and premium experience potential.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-ios hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-[450px] overflow-hidden relative">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="flex items-center space-x-2 text-gold mb-3">
                      <MapPin size={20} weight="fill" />
                      <span className="text-xs font-bold tracking-widest uppercase">Kenya</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                     {dest.name}
                   </h2>
                </div>
              </div>

              <div className="p-10 md:p-14">
                <p className="text-luxury-black/70 text-lg font-medium leading-relaxed mb-10">
                  {dest.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                   {dest.highlights.slice(0, 4).map((h, i) => (
                     <div key={i} className="flex items-center space-x-3 text-sm font-semibold text-luxury-black/60">
                        <CheckCircle size={20} className="text-gold" weight="fill" />
                        <span>{h}</span>
                     </div>
                   ))}
                </div>

                <Link
                  to={`/destinations/${dest.id}`}
                  className="flex items-center justify-between bg-luxury-black text-white px-10 py-5 rounded-full font-bold tracking-tight hover:bg-gold transition-all shadow-xl active:scale-95"
                >
                  <span>Learn More</span>
                  <ArrowRight size={24} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;

