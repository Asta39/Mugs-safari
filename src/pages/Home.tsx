
import Hero from '../components/Hero';
import FeaturedPackages from '../components/FeaturedPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import { motion } from 'framer-motion';
import { ArrowRight, Quotes } from 'phosphor-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      text: "The most incredible experience of our lives. Mara Luxe curated a proposal setup in the middle of the Mara that was beyond our dreams.",
      author: "Sarah & David, UK",
    },
    {
      text: "Flawless logistics and the most professional guides. We saw the Big Five in the first two days! Highly recommended for any serious traveler.",
      author: "Michael Chen, USA",
    }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />

      {/* Destination Preview */}
      <section className="py-24 px-6 md:px-12 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <span className="text-gold font-sans text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                Iconic Destinations
              </span>
              <h2 className="text-3xl md:text-5xl  text-luxury-black font-bold mb-8">
                The Best of <br />
                <span className="italic font-normal">East Africa</span>
              </h2>
              <p className="text-luxury-black/60 font-sans leading-relaxed mb-8">
                From the rolling plains of the Maasai Mara to the turquoise waters 
                of Diani Beach, we take you to the most breathtaking locations in Kenya.
              </p>
              <Link
                to="/destinations"
                className="group inline-flex items-center space-x-3 bg-luxury-black text-cream px-8 py-4 rounded-2xl font-bold tracking-widest uppercase hover:bg-gold hover:text-luxury-black transition-all"
              >
                <span>View Destinations</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-64 object-cover mt-8"
                  />
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    src="https://images.unsplash.com/photo-1581012733671-913069bf0755?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-64 object-cover"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quotes size={48} weight="fill" className="text-gold/20 mx-auto mb-8" />
          <div className="flex flex-col space-y-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <p className="text-xl md:text-3xl  text-luxury-black font-light leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <span className="text-gold font-sans text-xs font-bold tracking-[0.3em] uppercase">
                  — {t.author}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 bg-luxury-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-6xl  text-cream font-bold mb-8">
            Ready for your <br />
            <span className="italic font-normal">African Adventure?</span>
          </h2>
          <p className="text-cream/60 font-sans leading-relaxed mb-12 max-w-2xl mx-auto">
            Contact our specialists today and let us start curating your 
            bespoke safari experience in Kenya.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-gold text-luxury-black px-12 py-5 rounded-2xl font-bold tracking-widest uppercase hover:bg-white transition-all"
          >
            <span>Start Your Journey</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;



