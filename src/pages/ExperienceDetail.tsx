import { useParams, Link } from 'react-router-dom';
import { Heart, Diamond, Briefcase, Wine, Camera, ArrowLeft, WhatsappLogo, CheckCircle, ShieldCheck } from 'phosphor-react';

const experiencesData = [
  {
    id: 'honeymoons',
    icon: <Heart size={40} className="text-gold" weight="fill" />,
    title: "Luxury Honeymoons",
    tagline: "Begin your life together in the most romantic setting on earth.",
    description: "Our luxury honeymoons are more than just a trip; they are a celebration of your new life together. From private suites with sunset views to intimate bush dinners under the African stars, every detail is designed for romance and privacy.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200",
    features: ["Private Sundowners", "Bespoke Couple Experiences", "Luxury Honeymoon Suites", "Professional Photography"]
  },
  {
    id: 'proposals',
    icon: <Diamond size={40} className="text-gold" weight="fill" />,
    title: "Unforgettable Proposals",
    tagline: "Let us curate a breathtaking surprise proposal setup in the wild.",
    description: "Planning a proposal is a monumental task. We handle the entire logistics, from choosing the perfect secret location in the Maasai Mara to arranging the hidden photographers and the celebratory champagne toast.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
    features: ["Location Scouting", "Hidden Photography", "Celebratory Bush Dinners", "Full Secret Coordination"]
  },
  {
    id: 'weddings',
    icon: <Heart size={40} className="text-gold" weight="fill" />,
    title: "Destination Weddings",
    tagline: "Exchange vows against the backdrop of the Savannah.",
    description: "A wedding in the wild is a dream for many. We provide complete coordination for luxury bush weddings, ensuring that your ceremony is as majestic as the landscape itself.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450616?auto=format&fit=crop&q=80&w=1200",
    features: ["Complete Coordination", "Maasai Choir Arrangements", "Luxury Catering", "Legal & Logistics Support"]
  },
  {
    id: 'corporate',
    icon: <Briefcase size={40} className="text-gold" weight="fill" />,
    title: "Corporate Retreats",
    tagline: "Inspire your team with a retreat in the African wilderness.",
    description: "Combine strategy with the serenity of the wilderness. Our corporate retreats are designed to foster team building and high-level strategy in an environment that inspires creativity and connection.",
    image: "https://images.unsplash.com/photo-1581012733671-913069bf0755?auto=format&fit=crop&q=80&w=1200",
    features: ["Executive Logicstics", "Team Building Activities", "Bush Meeting Setups", "Luxury Group Accommodation"]
  }
];

const ExperienceDetail = () => {
  const { id } = useParams();
  const exp = experiencesData.find((e) => e.id === id);

  if (!exp) {
    return (
      <div className="pt-40 px-6 text-center">
        <h1 className="text-2xl font-bold">Experience not found</h1>
        <Link to="/experiences" className="text-gold underline mt-4 block">Return to Experiences</Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pb-32">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img 
          src={exp.image} 
          alt={exp.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-black/40 bg-gradient-to-t from-luxury-black/90 to-transparent" />
        
        <div className="absolute bottom-16 left-0 w-full px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
             <Link to="/experiences" className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-semibold">
                <ArrowLeft size={18} />
                <span className="tracking-tight">Back to Experiences</span>
             </Link>
             <div className="flex items-center space-x-6 mb-4">
                <div className="bg-white/20 backdrop-blur-xl p-4 rounded-3xl border border-white/20">
                   {exp.icon}
                </div>
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">{exp.title}</h1>
             </div>
             <p className="text-xl text-white/80 max-w-2xl font-medium tracking-tight leading-snug">{exp.tagline}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* The Experience Narrative */}
            <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-ios">
               <h2 className="text-3xl font-bold tracking-tight mb-8">The Mara Luxe Touch</h2>
               <div className="space-y-6 text-luxury-black/70 text-lg leading-relaxed font-medium">
                  <p>{exp.description}</p>
                  <p>
                    Every signature moment is personally coordinated by our lead experience curators. 
                    We believe that luxury is found in the details—the temperature of the champagne, 
                    the perfect angle for the photography, and the complete privacy of the setting.
                  </p>
               </div>

               <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {exp.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-4 p-5 bg-cream rounded-3xl group hover:bg-gold/5 transition-colors">
                       <CheckCircle size={24} className="text-gold" weight="fill" />
                       <span className="font-semibold tracking-tight text-luxury-black/80">{feat}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Immersive Gallery Concept */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white rounded-[40px] p-8 shadow-ios flex flex-col justify-center border border-white/40">
                  <Wine size={32} className="text-gold mb-4" weight="fill" />
                  <h3 className="text-xl font-bold mb-2 tracking-tight">Curated Setups</h3>
                  <p className="text-sm text-luxury-black/60 font-medium">From floral arrangements to table settings in the bush.</p>
               </div>
               <div className="bg-white rounded-[40px] p-8 shadow-ios flex flex-col justify-center border border-white/40">
                  <Camera size={32} className="text-gold mb-4" weight="fill" />
                  <h3 className="text-xl font-bold mb-2 tracking-tight">Professional Media</h3>
                  <p className="text-sm text-luxury-black/60 font-medium">High-end photography and videography included.</p>
               </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-8 lg:sticky lg:top-28 h-fit">
            <div className="bg-luxury-black rounded-[40px] p-10 shadow-2xl text-white">
               <h3 className="text-2xl font-bold mb-6 tracking-tight leading-tight">Book This Experience</h3>
               <p className="text-white/60 mb-10 text-sm leading-relaxed font-medium">
                 Ready to plan your {exp.title}? Chat with our lead coordinator to start the bespoke planning process.
               </p>
               
               <a 
                 href={`https://wa.me/254721320787?text=Interested in ${exp.title}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-3 bg-white text-luxury-black px-8 py-5 rounded-full font-bold tracking-tight hover:bg-gold transition-all w-full mb-4 shadow-xl active:scale-95"
               >
                 <WhatsappLogo size={24} weight="fill" />
                 <span>CHAT ON WHATSAPP</span>
               </a>
               <Link 
                 to="/contact"
                 className="flex items-center justify-center space-x-3 bg-white/10 text-white border border-white/20 px-8 py-5 rounded-full font-bold tracking-tight hover:bg-white/20 transition-all w-full"
               >
                 <span>CUSTOM INQUIRY</span>
               </Link>

               <div className="mt-8 pt-8 border-t border-white/10 flex items-center space-x-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck size={18} />
                  <span>Secure & Private Coordination</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;

