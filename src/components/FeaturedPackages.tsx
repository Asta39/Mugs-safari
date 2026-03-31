import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import { ArrowRight, Clock, Tag } from 'phosphor-react';
import { Link } from 'react-router-dom';

const FeaturedPackages = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              Unforgettable Experiences
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-luxury-black tracking-tight leading-tight">
              Featured Safari <br />
              <span className="text-gold">Packages</span>
            </h2>
          </div>
          <Link
            to="/safaris"
            className="group flex items-center space-x-3 text-luxury-black font-bold text-[13px] tracking-tight hover:text-gold transition-all"
          >
            <span className="border-b-2 border-gold/30 pb-1 group-hover:border-gold">View All Packages</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-ios hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Package Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl text-white px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase border border-white/30 shadow-lg">
                  {pkg.type}
                </div>
              </div>

              {/* Package Details */}
              <div className="p-10">
                <div className="flex items-center space-x-5 mb-6">
                  <div className="flex items-center space-x-2 bg-cream px-3 py-1.5 rounded-full">
                    <Clock size={16} className="text-gold" weight="fill" />
                    <span className="text-[11px] font-bold text-luxury-black/60 tracking-tight uppercase">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-cream px-3 py-1.5 rounded-full">
                    <Tag size={16} className="text-gold" weight="fill" />
                    <span className="text-[11px] font-bold text-luxury-black/60 tracking-tight uppercase">{pkg.price}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-luxury-black mb-4 tracking-tight leading-snug group-hover:text-gold transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-sm text-luxury-black/60 leading-relaxed mb-10 line-clamp-2">
                  {pkg.tagline}
                </p>

                <Link
                  to={`/safaris/${pkg.id}`}
                  className="flex items-center justify-between bg-luxury-black text-white px-8 py-4 rounded-full font-bold text-[13px] hover:bg-gold transition-all shadow-xl active:scale-95"
                >
                  <span>Discover Itinerary</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;


