import { motion } from 'framer-motion';
import { CheckCircle, Truck, Trophy, Users } from 'phosphor-react';

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: <CheckCircle size={32} weight="duotone" className="text-gold" />,
      title: "Luxury Curation",
      description: "We don’t just sell transport; we curate premium African experiences tailored to your desires."
    },
    {
      icon: <Truck size={32} weight="duotone" className="text-gold" />,
      title: "Logistics Experts",
      description: "With years of event experience, our logistics and coordination are flawless and stress-free."
    },
    {
      icon: <Trophy size={32} weight="duotone" className="text-gold" />,
      title: "Elite Partners",
      description: "We work only with the finest lodges, guides, and hotels to ensure 5-star quality throughout."
    },
    {
      icon: <Users size={32} weight="duotone" className="text-gold" />,
      title: "Personalized Care",
      description: "From the moment you inquire to your flight home, you’ll have a dedicated concierge."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-black text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold font-sans text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl  text-cream font-bold">
            The Mara Luxe Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 border border-gold/20 rounded-full group-hover:border-gold/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl  font-bold text-cream mb-4">{item.title}</h3>
              <p className="text-sm text-cream/60 leading-relaxed font-sans max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



