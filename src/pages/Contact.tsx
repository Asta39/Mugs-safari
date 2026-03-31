import { useState } from 'react';
import { motion } from 'framer-motion';
import { Envelope, Phone, WhatsappLogo, MapPin, PaperPlaneTilt, CaretRight } from 'phosphor-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    safariType: 'Luxury Signature Safari',
    message: '',
    guests: '2',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Inquiry for Mara Luxe Expeditions*%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Safari:* ${formData.safariType}%0A
*Guests:* ${formData.guests}%0A
*Date:* ${formData.date || 'TBD'}%0A
*Message:* ${formData.message}`;

    window.open(`https://wa.me/254721320787?text=${message}`, '_blank');
  };

  return (
    <div className="bg-cream min-h-screen pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Column: Contact Info (iOS Card Style) */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gold font-bold text-xs tracking-[0.3em] uppercase block"
              >
                Concierge
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl text-luxury-black font-bold tracking-tighter"
              >
                Start Your <br />
                <span className="text-gold text-3xl md:text-5xl">Adventure</span>
              </motion.h1>
            </div>

            <div className="bg-white/50 blur-ios rounded-[40px] p-10 shadow-ios border border-white/40 space-y-8">
              <a href="tel:+254721320787" className="flex items-center space-x-5 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-gold group-hover:text-white transition-all">
                  <Phone size={24} weight="fill" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-luxury-black/30 uppercase tracking-widest">Call</p>
                  <p className="text-lg font-bold tracking-tight text-luxury-black">+254 721 320787</p>
                </div>
              </a>

              <a href="mailto:inquiries@maraluxe.com" className="flex items-center space-x-5 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-gold group-hover:text-white transition-all">
                  <Envelope size={24} weight="fill" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-luxury-black/30 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-bold tracking-tight text-luxury-black">inquiries@maraluxe.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-5">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  <MapPin size={24} weight="fill" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-luxury-black/30 uppercase tracking-widest">Office</p>
                  <p className="text-lg font-bold tracking-tight text-luxury-black">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/254721320787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#25D366] text-white px-8 py-6 rounded-full font-bold tracking-tight shadow-xl hover:scale-[1.02] transition-all active:scale-95"
            >
              <div className="flex items-center space-x-4">
                <WhatsappLogo size={28} weight="fill" />
                <span>Immediate WhatsApp Response</span>
              </div>
              <CaretRight size={20} weight="bold" />
            </a>
          </div>

          {/* Right Column: Inquiry Form (iOS Form Style) */}
          <div className="w-full lg:w-2/3 bg-white rounded-[48px] p-10 md:p-20 shadow-ios border border-white/20">
            <h2 className="text-3xl font-bold tracking-tight text-luxury-black mb-12">Trip Inquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-3">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-black/30 px-1">Guest Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Jane Doe"
                    className="bg-cream/50 border-b-2 border-luxury-black/5 px-1 py-4 focus:outline-none focus:border-gold transition-all font-medium text-lg text-luxury-black placeholder:text-luxury-black/10"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-black/30 px-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="jane@example.com"
                    className="bg-cream/50 border-b-2 border-luxury-black/5 px-1 py-4 focus:outline-none focus:border-gold transition-all font-medium text-lg text-luxury-black placeholder:text-luxury-black/10"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-3">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-black/30 px-1">Safari Interest</label>
                  <select 
                    className="bg-cream/50 border-b-2 border-luxury-black/5 px-1 py-4 focus:outline-none focus:border-gold transition-all font-medium text-lg text-luxury-black appearance-none"
                    onChange={(e) => setFormData({...formData, safariType: e.target.value})}
                  >
                    <option>Luxury Signature Safari</option>
                    <option>Classic Midrange Safari</option>
                    <option>Honeymoon / Proposal</option>
                    <option>Custom Experience</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-black/30 px-1">Number of Guests</label>
                  <input 
                    type="number" 
                    placeholder="2"
                    min="1"
                    className="bg-cream/50 border-b-2 border-luxury-black/5 px-1 py-4 focus:outline-none focus:border-gold transition-all font-medium text-lg text-luxury-black"
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-black/30 px-1">Preferred Dates</label>
                <input 
                  type="text" 
                  placeholder="e.g. August 2026"
                  className="bg-cream/50 border-b-2 border-luxury-black/5 px-1 py-4 focus:outline-none focus:border-gold transition-all font-medium text-lg text-luxury-black placeholder:text-luxury-black/10"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="flex flex-col space-y-3">
                <label className="text-[11px] font-bold tracking-widest uppercase text-luxury-black/30 px-1">Special Requirements</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your dream journey..."
                  className="bg-cream/50 border-b-2 border-luxury-black/5 px-1 py-4 focus:outline-none focus:border-gold transition-all font-medium text-lg text-luxury-black placeholder:text-luxury-black/10 resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="group flex items-center justify-between bg-luxury-black text-white px-10 py-6 rounded-full font-bold tracking-tight hover:bg-gold transition-all w-full shadow-2xl active:scale-95"
              >
                <span className="text-xl">Send WhatsApp Inquiry</span>
                <div className="bg-white/10 p-2 rounded-full group-hover:translate-x-2 transition-transform">
                  <PaperPlaneTilt size={28} />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
