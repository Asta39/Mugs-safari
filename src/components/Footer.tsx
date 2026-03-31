import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, Envelope, Phone } from 'phosphor-react';

const Footer = () => {
  return (
    <footer className="bg-cream pt-10 pb-32 md:pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[40px] md:rounded-[56px] p-10 md:p-20 shadow-ios border border-white/40 overflow-hidden relative">
          
          {/* Subtle Background Accent */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
            
            {/* Brand Section - Always Visible */}
            <div className="flex flex-col space-y-6">
              <Link to="/" className="flex flex-col">
                <span className="text-2xl font-bold text-luxury-black tracking-tighter">
                  MARA LUXE
                </span>
                <span className="text-[9px] font-bold text-luxury-black/40 tracking-[0.2em] uppercase -mt-1">
                  Expeditions
                </span>
              </Link>
              <p className="text-sm text-luxury-black/50 leading-relaxed font-medium max-w-xs">
                Curating Africa’s finest journeys with a focus on luxury, 
                personalized experiences, and the magic of the wild.
              </p>
              <div className="flex items-center space-x-4 pt-2">
                {[FacebookLogo, InstagramLogo, TwitterLogo].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-luxury-black/40 hover:bg-gold hover:text-white transition-all shadow-sm">
                    <Icon size={20} weight="fill" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - Simplified on Mobile */}
            <div className="hidden md:block">
              <h4 className="text-[11px] font-bold text-luxury-black/30 uppercase tracking-[0.2em] mb-8">Navigation</h4>
              <ul className="space-y-4 text-[15px] text-luxury-black/70 font-semibold tracking-tight">
                <li><Link to="/safaris" className="hover:text-gold transition-colors">Safaris</Link></li>
                <li><Link to="/destinations" className="hover:text-gold transition-colors">Destinations</Link></li>
                <li><Link to="/experiences" className="hover:text-gold transition-colors">Experiences</Link></li>
                <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              </ul>
            </div>

            {/* Contact Info - Important on all views */}
            <div>
              <h4 className="text-[11px] font-bold text-luxury-black/30 uppercase tracking-[0.2em] mb-8">Concierge</h4>
              <ul className="space-y-5 text-[15px] text-luxury-black/70 font-semibold tracking-tight">
                <li className="flex items-center space-x-3">
                  <div className="text-gold"><Phone size={20} weight="fill" /></div>
                  <a href="tel:+254721320787">+254 721 320787</a>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="text-gold"><Envelope size={20} weight="fill" /></div>
                  <a href="mailto:inquiries@maraluxe.com">inquiries@maraluxe.com</a>
                </li>
                <li className="flex items-center space-x-3 md:hidden lg:flex">
                  <div className="text-gold"><WhatsappLogo size={20} weight="fill" /></div>
                  <a href="https://wa.me/254721320787">Live Chat Support</a>
                </li>
              </ul>
            </div>

            {/* Newsletter - Only Desktop to save mobile space */}
            <div className="hidden md:block">
              <h4 className="text-[11px] font-bold text-luxury-black/30 uppercase tracking-[0.2em] mb-8">Updates</h4>
              <p className="text-sm text-luxury-black/50 font-medium mb-6">
                Receive curated safari news.
              </p>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-cream border border-luxury-black/5 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-gold transition-all"
                />
                <button className="bg-luxury-black text-white font-bold text-xs py-3.5 rounded-2xl uppercase tracking-widest hover:bg-gold transition-all shadow-lg active:scale-95">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-8 border-t border-luxury-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-luxury-black/30 font-bold uppercase tracking-[0.2em]">
            <p>© 2026 Mara Luxe Expeditions.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-gold">Privacy</a>
              <a href="#" className="hover:text-gold">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
