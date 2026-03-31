import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import { ArrowLeft, WhatsappLogo, CheckCircle, Calendar, Sun } from 'phosphor-react';
import { packages } from '../data/packages';

const DestinationDetail = () => {
  const { id } = useParams();
  const dest = destinations.find((d) => d.id === id);
  const relatedPackages = packages.filter(p => p.itinerary.some(item => item.title.includes(dest?.name || '')));

  if (!dest) {
    return (
      <div className="pt-40 px-6 text-center">
        <h1 className="text-2xl font-bold">Destination not found</h1>
        <Link to="/destinations" className="text-gold underline mt-4 block">Return to Destinations</Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pb-32">
      {/* Hero Header */}
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden">
        <img 
          src={dest.image} 
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-black/30 bg-gradient-to-t from-luxury-black/90 to-transparent" />
        
        <div className="absolute bottom-16 left-0 w-full px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
             <Link to="/destinations" className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-semibold">
                <ArrowLeft size={18} />
                <span className="tracking-tight">Back to Destinations</span>
             </Link>
             <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-4">{dest.name}</h1>
             <p className="text-xl text-white/80 max-w-2xl font-medium tracking-tight leading-snug">{dest.description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white/80 blur-ios rounded-[32px] p-8 shadow-ios border border-white/40 flex items-center space-x-5">
                  <div className="bg-gold/10 p-4 rounded-2xl">
                     <Calendar size={28} className="text-gold" weight="fill" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-luxury-black/40 uppercase tracking-widest mb-1">Best Time to Visit</p>
                    <p className="text-lg font-semibold tracking-tight leading-tight">{dest.bestTime}</p>
                  </div>
               </div>
               <div className="bg-white/80 blur-ios rounded-[32px] p-8 shadow-ios border border-white/40 flex items-center space-x-5">
                  <div className="bg-gold/10 p-4 rounded-2xl">
                     <Sun size={28} className="text-gold" weight="fill" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-luxury-black/40 uppercase tracking-widest mb-1">Climate</p>
                    <p className="text-lg font-semibold tracking-tight leading-tight">{dest.climate}</p>
                  </div>
               </div>
            </div>

            {/* Narrative Content */}
            <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-ios space-y-8">
               <h2 className="text-3xl font-bold tracking-tight">Immerse Yourself in {dest.name}</h2>
               <div className="space-y-6 text-luxury-black/70 text-lg leading-relaxed font-medium">
                  <p>{dest.longDescription}</p>
               </div>

               <div className="pt-8 border-t border-cream">
                  <h3 className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-8">What to expect</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {dest.highlights.map((h, i) => (
                       <div key={i} className="flex items-center space-x-4 p-5 bg-cream rounded-3xl group hover:bg-gold/5 transition-colors">
                          <CheckCircle size={24} className="text-gold" weight="fill" />
                          <span className="font-semibold tracking-tight text-luxury-black/80">{h}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Related Safaris */}
            {relatedPackages.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight px-4">Experience {dest.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {relatedPackages.map(pkg => (
                     <Link to={`/safaris/${pkg.id}`} key={pkg.id} className="group bg-white rounded-[32px] overflow-hidden shadow-ios hover:shadow-2xl transition-all duration-500">
                        <div className="h-60 overflow-hidden">
                           <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        </div>
                        <div className="p-8">
                           <h3 className="text-xl font-bold tracking-tight mb-2">{pkg.name}</h3>
                           <p className="text-sm text-luxury-black/40 font-bold uppercase tracking-widest mb-4">{pkg.duration} • {pkg.price}</p>
                           <span className="text-gold font-bold text-xs uppercase tracking-widest flex items-center space-x-2">
                              <span>View Itinerary</span>
                              <CheckCircle size={16} />
                           </span>
                        </div>
                     </Link>
                   ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Sidebar */}
          <div className="space-y-8 lg:sticky lg:top-28 h-fit">
            <div className="bg-luxury-black rounded-[40px] p-10 shadow-2xl text-white">
               <h3 className="text-2xl font-bold mb-6 tracking-tight leading-tight">Plan Your Visit to {dest.name}</h3>
               <p className="text-white/60 mb-10 text-sm leading-relaxed font-medium">
                 Let our destination experts curate a personalized journey to {dest.name} tailored to your interests.
               </p>
               
               <a 
                 href={`https://wa.me/254721320787?text=Inquiry for ${dest.name}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-3 bg-white text-luxury-black px-8 py-5 rounded-full font-bold tracking-tight hover:bg-gold transition-all w-full mb-4 shadow-xl active:scale-95"
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

            <div className="bg-white rounded-[32px] p-8 shadow-ios border border-white/20 text-center">
               <p className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">Elite Concierge</p>
               <p className="text-sm text-luxury-black/60 leading-relaxed mb-6 font-medium">
                 Available 24/7 for our premium clients exploring Kenya.
               </p>
               <p className="text-xl font-bold tracking-tighter">+254 721 320787</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;

