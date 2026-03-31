import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, House, MapTrifold, Compass, Info, ChatCircleText } from 'phosphor-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <House weight="fill" /> },
    { name: 'Safaris', path: '/safaris', icon: <Compass weight="fill" /> },
    { name: 'Destinations', path: '/destinations', icon: <MapTrifold weight="fill" /> },
    { name: 'Experiences', path: '/experiences', icon: <ChatCircleText weight="fill" /> },
    { name: 'About', path: '/about', icon: <Info weight="fill" /> },
  ];

  return (
    <>
      {/* Desktop Navbar (Top Pill) */}
      <div className="hidden md:flex fixed top-6 left-0 w-full z-50 px-6 justify-center pointer-events-none">
        <nav
          className={cn(
            'w-full max-w-5xl h-14 pointer-events-auto transition-all duration-500 flex items-center justify-between px-8 rounded-full border border-white/40 shadow-ios blur-ios',
            isScrolled ? 'bg-white/80 scale-[0.98]' : 'bg-white/50'
          )}
        >
          <Link to="/" className="flex flex-col">
            <span className="text-lg font-bold text-luxury-black tracking-tight">MARA LUXE</span>
            <span className="text-[7px] font-bold text-luxury-black/40 tracking-[0.2em] uppercase -mt-1">EXPEDITIONS</span>
          </Link>

          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[13px] font-medium transition-all duration-300 hover:text-gold',
                  location.pathname === link.path ? 'text-gold' : 'text-luxury-black/60'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/254721320787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-luxury-black text-white px-5 py-2 rounded-full font-semibold text-[12px] hover:bg-gold transition-all shadow-md active:scale-95"
            >
              <WhatsappLogo size={16} weight="fill" />
              <span>BOOK</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar (Bottom Pill) */}
      <div className="md:hidden fixed bottom-6 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
        <nav
          className={cn(
            'w-full max-w-[92%] h-16 pointer-events-auto transition-all duration-500 flex items-center justify-around px-2 rounded-full border border-white/40 shadow-2xl blur-ios',
            isMenuOpen ? 'bg-white/95 translate-y-[-20px]' : 'bg-white/80'
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300',
                location.pathname === link.path ? 'text-gold' : 'text-luxury-black/40'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="text-xl mb-0.5">{link.icon}</div>
              <span className="text-[9px] font-bold uppercase tracking-tight">{link.name}</span>
            </Link>
          ))}
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300',
              isMenuOpen ? 'text-gold' : 'text-luxury-black/40'
            )}
          >
            <div className="text-xl mb-0.5">{isMenuOpen ? <X weight="bold" /> : <List weight="bold" />}</div>
            <span className="text-[9px] font-bold uppercase tracking-tight">More</span>
          </button>
        </nav>

        {/* Mobile Expanded Menu (Floating Card) */}
        <div
          className={cn(
            'absolute bottom-24 left-6 right-6 bg-white/95 blur-ios rounded-[32px] border border-white/40 shadow-2xl transition-all duration-500 overflow-hidden pointer-events-auto',
            isMenuOpen ? 'max-h-[300px] opacity-100 p-8 translate-y-0' : 'max-h-0 opacity-0 translate-y-10'
          )}
        >
          <div className="flex flex-col space-y-6">
             <div className="flex flex-col">
               <span className="text-[10px] font-bold text-luxury-black/40 uppercase tracking-widest mb-2">Concierge</span>
               <a href="tel:+254721320787" className="text-lg font-semibold">+254 721 320787</a>
             </div>
             <a
              href="https://wa.me/254721320787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-luxury-black text-white px-8 py-5 rounded-3xl font-bold tracking-tight shadow-xl active:scale-95"
            >
              <WhatsappLogo size={24} weight="fill" />
              <span>Chat with Specialists</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

