export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  type: 'luxury' | 'midrange' | 'experience';
  image: string;
  itinerary: { day: number; title: string; description: string }[];
  includes: string[];
}

export const packages: Package[] = [
  {
    id: 'signature-luxury-safari',
    name: 'Signature Luxury Safari',
    tagline: 'The ultimate 7-day curated journey through Kenya\'s wild heart.',
    price: 'From $6,500',
    duration: '7 Days',
    type: 'luxury',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200',
    includes: [
      'Luxury accommodation (5-star)',
      'Private 4x4 Land Cruiser',
      'Professional expert guide',
      'All park entrance fees',
      'Airport transfers',
      'Full board meals'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Nairobi', description: 'Transfer to a 5-star hotel, briefing and welcome dinner.' },
      { day: 2, title: 'Maasai Mara', description: 'Flight or drive to the Mara. Afternoon game drive.' },
      { day: 3, title: 'Maasai Mara', description: 'Full day game drives. Optional balloon safari.' },
      { day: 4, title: 'Maasai Mara', description: 'Morning game drive and cultural visit.' },
      { day: 5, title: 'Amboseli', description: 'Drive to Amboseli. View of Mt. Kilimanjaro.' },
      { day: 6, title: 'Amboseli', description: 'Elephants and Kilimanjaro backdrop game drives.' },
      { day: 7, title: 'Diani Beach', description: 'Fly to Diani for a luxury beach finish and relaxation.' }
    ]
  },
  {
    id: 'classic-safari',
    name: 'Classic Private Safari',
    tagline: 'Our best-selling 5-day adventure covering the highlights.',
    price: 'From $2,800',
    duration: '5 Days',
    type: 'midrange',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200',
    includes: [
      'Mid-high range accommodation',
      'Private safari vehicle',
      'Expert local guide',
      'Park fees',
      'All meals'
    ],
    itinerary: [
      { day: 1, title: 'Nairobi to Maasai Mara', description: 'Drive to the world-famous reserve.' },
      { day: 2, title: 'Maasai Mara Full Day', description: 'Explore the vast plains and wildlife.' },
      { day: 3, title: 'Lake Nakuru', description: 'Drive to Nakuru for flamingos and rhinos.' },
      { day: 4, title: 'Lake Naivasha', description: 'Boat ride and crescent island walk.' },
      { day: 5, title: 'Return to Nairobi', description: 'Morning activity and transfer back.' }
    ]
  },
  {
    id: 'luxury-honeymoon',
    name: 'Luxury Honeymoon & Proposals',
    tagline: 'Romantic setups and intimate bush dinners for unforgettable moments.',
    price: 'Custom Pricing',
    duration: 'Flexible',
    type: 'experience',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200',
    includes: [
      'Private romantic bush dinners',
      'Luxury honeymoon suites',
      'Private photography session',
      'Beach experiences in Diani',
      'Special sundowners'
    ],
    itinerary: [
      { day: 1, title: 'Intimate Arrival', description: 'Special welcome and private setup.' },
      { day: 2, title: 'Private Game Drive', description: 'Exclusive drives with picnic lunch.' },
      { day: 3, title: 'Bush Dinner', description: 'Romantic dinner under the African stars.' }
    ]
  }
];
