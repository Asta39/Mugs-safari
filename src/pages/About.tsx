import { motion } from 'framer-motion';
import { Trophy, Handshake, Globe, Heart, ShieldCheck, Users } from 'phosphor-react';

const About = () => {
  const values = [
    {
      icon: <Trophy size={32} className="text-gold" />,
      title: "Excellence",
      description: "We strive for perfection in every detail of your journey, from the vehicle comfort to the lodge selection."
    },
    {
      icon: <Handshake size={32} className="text-gold" />,
      title: "Integrity",
      description: "Transparent pricing and honest advice. We are committed to delivering exactly what we promise."
    },
    {
      icon: <Globe size={32} className="text-gold" />,
      title: "Sustainability",
      description: "We support local communities and conservation efforts to ensure Kenya's wild beauty lasts for generations."
    },
    {
      icon: <Heart size={32} className="text-gold" />,
      title: "Passion",
      description: "We don't just work in tourism; we live and breathe the African wilderness."
    }
  ];

  return (
    <div className="bg-cream min-h-screen pt-32 pb-24">
      {/* Story Section */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block"
              >
                Our Legacy
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl text-luxury-black font-bold mb-8 tracking-tight"
              >
                Curating Africa’s <br />
                <span className="text-gold">Finest Journeys</span>
              </motion.h1>
              <div className="space-y-6 text-luxury-black/70 font-medium leading-relaxed">
                <p>
                  Mara Luxe Expeditions was born from a vision to redefine the African safari experience. 
                  Leveraging our deep roots in luxury event coordination and high-end logistics, 
                  we recognized a gap for truly personalized, high-experience travel in Kenya.
                </p>
                <p>
                  We are not just a tour company; we are experience curators. We believe that a safari 
                  should be more than just a game drive—it should be a collection of unforgettable 
                  moments, from private bush dinners under the stars to intimate encounters with 
                  the world's most majestic wildlife.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200" 
                  alt="African Wilderness"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Depth Section: Our Fleet & Guides */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-ios mt-12" />
                 <img src="https://images.unsplash.com/photo-1581012733671-913069bf0755?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-ios" />
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                 <h2 className="text-4xl font-bold tracking-tight">The Mara Luxe <span className="text-gold">Standard</span></h2>
                 <p className="text-luxury-black/60 leading-relaxed text-lg font-medium">
                    Our operational excellence is built on two pillars: our state-of-the-art fleet and our expert guides. 
                    Every 4x4 Land Cruiser in our collection is custom-outfitted with luxury seating, charging ports, 
                    and panoramic viewing roofs.
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-cream rounded-2xl">
                       <ShieldCheck size={24} className="text-gold" />
                       <span className="font-bold tracking-tight">Custom 4x4 Safari Fleet</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-cream rounded-2xl">
                       <Users size={24} className="text-gold" />
                       <span className="font-bold tracking-tight">Bronze & Silver Level Certified Guides</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="py-32 px-6 md:px-12 bg-luxury-black text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-8 bg-white/5 w-20 h-20 items-center mx-auto rounded-3xl group-hover:bg-gold/10 transition-colors">
                   {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{v.title}</h3>
                <p className="text-sm text-cream/50 leading-relaxed max-w-xs mx-auto font-medium">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-32 px-6 md:px-12 text-center bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold text-gold uppercase tracking-[0.3em] mb-12">Our Philosophy</h2>
          <p className="text-3xl md:text-5xl font-bold text-luxury-black tracking-tight leading-tight mb-12">
            "Africa is not just a place you visit; it's a <span className="text-gold">feeling</span> that stays with you forever."
          </p>
          <div className="w-12 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>
    </div>
  );
};

export default About;

