import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import { Clock, Tag, ShieldCheck, ArrowLeft, WhatsappLogo, CheckCircle, Info } from 'phosphor-react';

const SafariDetail = () => {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="pt-40 px-6 text-center">
        <h1 className="text-2xl font-bold">Package not found</h1>
        <Link to="/safaris" className="text-gold underline mt-4 block">Return to Safaris</Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pb-24">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-black/30 bg-gradient-to-t from-luxury-black/80 to-transparent" />
        
        <div className="absolute bottom-16 left-0 w-full px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
             <Link to="/safaris" className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-bold">
                <ArrowLeft size={18} />
                <span className="tracking-tight">Back to Safaris</span>
             </Link>
             <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-4">{pkg.name}</h1>
             <p className="text-xl text-white/80 max-w-2xl font-medium tracking-tight leading-snug">{pkg.tagline}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview Stats */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-ios flex flex-wrap gap-8 md:gap-16 items-center border border-white/20 backdrop-blur-md">
               <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-2xl">
                     <Clock size={24} className="text-gold" weight="fill" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-luxury-black/40 uppercase tracking-widest">Duration</p>
                    <p className="text-xl font-bold tracking-tight">{pkg.duration}</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-2xl">
                     <Tag size={24} className="text-gold" weight="fill" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-luxury-black/40 uppercase tracking-widest">Price</p>
                    <p className="text-xl font-bold tracking-tight">{pkg.price}</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-2xl">
                     <ShieldCheck size={24} className="text-gold" weight="fill" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-luxury-black/40 uppercase tracking-widest">Type</p>
                    <p className="text-xl font-bold tracking-tight capitalize">{pkg.type}</p>
                  </div>
               </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-ios">
               <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center space-x-4">
                  <span className="bg-luxury-black text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
                  <span>Daily Itinerary</span>
               </h2>
               <div className="space-y-10 relative">
                  <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-luxury-black/5" />
                  {pkg.itinerary.map((day) => (
                    <motion.div 
                      key={day.day}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative pl-14"
                    >
                       <div className="absolute left-0 top-1 w-10 h-10 rounded-2xl bg-cream border-4 border-white flex items-center justify-center text-sm font-bold shadow-ios">
                          {day.day}
                       </div>
                       <h3 className="text-xl font-bold mb-3 tracking-tight">{day.title}</h3>
                       <p className="text-luxury-black/60 leading-relaxed text-base">{day.description}</p>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* Immersive Context Section */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-ios overflow-hidden relative">
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold tracking-tight mb-8">What Makes This Unique?</h2>
                 <p className="text-luxury-black/70 leading-relaxed text-lg mb-8">
                   Every Mara Luxe expedition is curated with precision. On this particular journey, 
                   we focus on high-experience moments—private sundowners overlooking the plains, 
                   expert-led game drives in custom Land Cruisers, and stays at Kenya's most 
                   exclusive lodges.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-cream rounded-3xl border border-gold/5">
                       <h4 className="font-bold mb-2 flex items-center space-x-2">
                          <CheckCircle className="text-gold" weight="fill" />
                          <span>Elite Lodging</span>
                       </h4>
                       <p className="text-sm text-luxury-black/60">Selected 5-star properties with high aesthetic standards.</p>
                    </div>
                    <div className="p-6 bg-cream rounded-3xl border border-gold/5">
                       <h4 className="font-bold mb-2 flex items-center space-x-2">
                          <CheckCircle className="text-gold" weight="fill" />
                          <span>Private Guides</span>
                       </h4>
                       <p className="text-sm text-luxury-black/60">Expert naturalists dedicated exclusively to your party.</p>
                    </div>
                 </div>
               </div>
               <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl -z-1" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-luxury-black rounded-[32px] p-8 md:p-10 shadow-2xl text-white sticky top-28">
               <h3 className="text-2xl font-bold mb-6 tracking-tight">Reserve This Experience</h3>
               <p className="text-white/60 mb-8 text-sm leading-relaxed">
                 We can customize this itinerary to your specific preferences, group size, and travel dates.
               </p>
               
               <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-3 text-sm font-medium text-white/80">
                     <CheckCircle size={20} className="text-gold" weight="fill" />
                     <span>Private 4x4 Vehicle</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm font-medium text-white/80">
                     <CheckCircle size={20} className="text-gold" weight="fill" />
                     <span>All Inclusive Meals</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm font-medium text-white/80">
                     <CheckCircle size={20} className="text-gold" weight="fill" />
                     <span>Bespoke Guest Care</span>
                  </div>
               </div>

               <a 
                 href={`https://wa.me/254721320787?text=Inquiry for ${pkg.name}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-3 bg-gold text-luxury-black px-8 py-5 rounded-full font-bold tracking-tight hover:bg-white transition-all w-full mb-4 shadow-xl active:scale-95"
               >
                 <WhatsappLogo size={24} weight="fill" />
                 <span>BOOK VIA WHATSAPP</span>
               </a>
               <Link 
                 to="/contact"
                 className="flex items-center justify-center space-x-3 bg-white/10 text-white border border-white/20 px-8 py-5 rounded-full font-bold tracking-tight hover:bg-white/20 transition-all w-full"
               >
                 <span>CUSTOM INQUIRY</span>
               </Link>
            </div>

            <div className="bg-white rounded-[32px] p-8 shadow-ios border border-white/20">
               <div className="flex items-center space-x-3 mb-4 text-gold">
                  <Info size={24} />
                  <span className="font-bold tracking-tight">Need help?</span>
               </div>
               <p className="text-sm text-luxury-black/60 leading-relaxed mb-6">
                 Talk to a safari specialist to build your perfect African journey.
               </p>
               <p className="text-lg font-bold tracking-tight">+254 721 320787</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SafariDetail;


