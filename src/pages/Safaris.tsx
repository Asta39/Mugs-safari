import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import { Clock, Tag, ArrowRight, ShieldCheck, Star } from 'phosphor-react';
import { Link } from 'react-router-dom';

const Safaris = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Our Collections
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl text-luxury-black font-bold mb-8 tracking-tighter"
          >
            Curated <span className="text-gold">Journeys</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-black/60 text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            From high-end luxury to comfortable midrange adventures, 
            each journey is an immersive plunge into Kenya's raw beauty.
          </motion.p>
        </div>

        {/* Collections Filter (iOS Segmented Control Style) */}
        <div className="flex justify-center mb-20">
          <div className="bg-white/50 backdrop-blur-xl p-1.5 rounded-full border border-white/40 shadow-ios flex items-center">
            {['All', 'Luxury', 'Midrange'].map((cat, i) => (
              <button 
                key={cat}
                className={`px-8 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-all rounded-full ${
                  i === 0 ? 'bg-luxury-black text-white shadow-lg' : 'text-luxury-black/40 hover:text-luxury-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-[48px] overflow-hidden shadow-ios border border-white/20 hover:shadow-2xl transition-all duration-700`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 h-96 lg:h-auto overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                />
                <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-xl text-white px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase border border-white/30 shadow-xl">
                  {pkg.type} Tier
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5 p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-1 text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
                  <span className="text-[10px] font-bold tracking-widest uppercase ml-3 text-luxury-black/30">
                    Bespoke Series
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-luxury-black mb-6 tracking-tight leading-tight">
                  {pkg.name}
                </h2>
                
                <p className="text-luxury-black/60 text-lg font-medium leading-relaxed mb-10">
                  {pkg.tagline}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12 border-y border-cream py-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-luxury-black/30 font-bold tracking-widest uppercase mb-2">Duration</span>
                    <div className="flex items-center space-x-2.5 text-luxury-black">
                      <Clock size={22} className="text-gold" weight="fill" />
                      <span className="font-bold text-xl tracking-tight">{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-luxury-black/30 font-bold tracking-widest uppercase mb-2">Investment</span>
                    <div className="flex items-center space-x-2.5 text-luxury-black">
                      <Tag size={22} className="text-gold" weight="fill" />
                      <span className="font-bold text-xl tracking-tight">{pkg.price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-12">
                   {pkg.includes.slice(0, 3).map((item, i) => (
                     <div key={i} className="flex items-center space-x-4 text-sm font-semibold text-luxury-black/70">
                        <div className="bg-gold/10 p-1.5 rounded-full">
                           <ShieldCheck size={18} className="text-gold" weight="fill" />
                        </div>
                        <span>{item}</span>
                     </div>
                   ))}
                </div>

                <Link
                  to={`/safaris/${pkg.id}`}
                  className="flex items-center justify-between bg-luxury-black text-white px-10 py-5 rounded-full font-bold tracking-tight hover:bg-gold transition-all shadow-xl active:scale-95"
                >
                  <span>Explore Itinerary</span>
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

export default Safaris;
