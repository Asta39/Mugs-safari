import { motion } from 'framer-motion';
import { Heart, Diamond, Briefcase, Wine, Camera, ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const specializedExperiences = [
  {
    id: 'honeymoons',
    icon: <Heart size={40} className="text-gold" weight="fill" />,
    title: "Luxury Honeymoons",
    description: "Begin your life together in the most romantic setting on earth. From private suites with sunset views to intimate bush dinners.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'proposals',
    icon: <Diamond size={40} className="text-gold" weight="fill" />,
    title: "Unforgettable Proposals",
    description: "Let us curate a breathtaking surprise proposal setup in the wild. We handle the logistics, photography, and the magic.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'weddings',
    icon: <Heart size={40} className="text-gold" weight="fill" />,
    title: "Destination Weddings",
    description: "Exchange vows against the backdrop of the Savannah. We provide complete coordination for luxury bush weddings.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450616?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'corporate',
    icon: <Briefcase size={40} className="text-gold" weight="fill" />,
    title: "Corporate Retreats",
    description: "Inspire your team with a retreat that combines strategy with the serenity of the African wilderness.",
    image: "https://images.unsplash.com/photo-1581012733671-913069bf0755?auto=format&fit=crop&q=80&w=1200"
  }
];

const Experiences = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Signature Moments
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl text-luxury-black font-bold mb-8 tracking-tighter"
          >
            Bespoke <span className="text-gold">Experiences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-black/60 text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Beyond the game drives, we specialize in curating life's most significant 
            milestones in the most extraordinary settings.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {specializedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[400px] overflow-hidden mb-10 rounded-[40px] shadow-ios group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-luxury-black/20" />
                <div className="absolute top-8 right-8 p-5 bg-white/90 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/20">
                  {exp.icon}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-luxury-black mb-4 tracking-tight group-hover:text-gold transition-colors">
                {exp.title}
              </h3>
              <p className="text-luxury-black/60 text-lg font-medium leading-relaxed mb-10">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-12">
                 <div className="flex items-center space-x-2 text-[11px] font-bold tracking-widest uppercase text-luxury-black/40 bg-white px-4 py-2 rounded-full border border-white/40 shadow-sm">
                    <Wine size={18} className="text-gold" weight="fill" />
                    <span>Private Setup</span>
                 </div>
                 <div className="flex items-center space-x-2 text-[11px] font-bold tracking-widest uppercase text-luxury-black/40 bg-white px-4 py-2 rounded-full border border-white/40 shadow-sm">
                    <Camera size={18} className="text-gold" weight="fill" />
                    <span>Photography</span>
                 </div>
              </div>

              <Link
                to={`/experiences/${exp.id}`}
                className="flex items-center justify-between bg-luxury-black text-white px-10 py-5 rounded-full font-bold tracking-tight hover:bg-gold transition-all shadow-xl active:scale-95"
              >
                <span>Learn More</span>
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;

