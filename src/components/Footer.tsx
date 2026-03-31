
import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, Envelope, Phone } from 'phosphor-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-cream py-16 px-6 md:px-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col space-y-4">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl  font-bold text-gold tracking-wider uppercase">
              Mara Luxe
            </span>
            <span className="text-xs font-sans text-cream/60 tracking-[0.2em] uppercase">
              Expeditions
            </span>
          </Link>
          <p className="text-sm text-cream/70 leading-relaxed font-sans max-w-xs">
            Curating Africa’s finest journeys with a focus on luxury, 
            personalized experiences, and the magic of the wild.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <a href="#" className="text-cream/60 hover:text-gold transition-colors"><FacebookLogo size={24} /></a>
            <a href="#" className="text-cream/60 hover:text-gold transition-colors"><InstagramLogo size={24} /></a>
            <a href="#" className="text-cream/60 hover:text-gold transition-colors"><TwitterLogo size={24} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold  text-lg mb-6 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-sm text-cream/70 font-sans">
            <li><Link to="/safaris" className="hover:text-gold transition-colors">Luxury Safaris</Link></li>
            <li><Link to="/destinations" className="hover:text-gold transition-colors">Destinations</Link></li>
            <li><Link to="/experiences" className="hover:text-gold transition-colors">Special Experiences</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gold  text-lg mb-6 uppercase tracking-widest">Get In Touch</h4>
          <ul className="space-y-4 text-sm text-cream/70 font-sans">
            <li className="flex items-start space-x-3">
              <Phone size={18} className="text-gold mt-0.5" />
              <span>+254 721 320787</span>
            </li>
            <li className="flex items-start space-x-3">
              <Envelope size={18} className="text-gold mt-0.5" />
              <span>inquiries@maraluxe.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <WhatsappLogo size={18} className="text-gold mt-0.5" />
              <span>+254 721 320787</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-gold  text-lg mb-6 uppercase tracking-widest">Newsletter</h4>
          <p className="text-sm text-cream/70 font-sans mb-4">
            Subscribe to receive safari updates and exclusive offers.
          </p>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="bg-cream/5 border border-cream/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-gold text-luxury-black font-bold text-xs py-3 uppercase tracking-widest hover:bg-gold/90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-cream/40 uppercase tracking-[0.2em]">
        <p>© 2026 Mara Luxe Expeditions. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



