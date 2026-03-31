export interface Destination {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  bestTime: string;
  climate: string;
}

export const destinations: Destination[] = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara',
    description: 'The world\'s most famous wildlife reserve, home to the Great Migration and the Big Five.',
    longDescription: 'The Maasai Mara National Reserve is an area of preserved savannah wilderness in southwestern Kenya, along the Tanzanian border. Its animals include lions, cheetahs, elephants, zebras and hippos. Wildebeest traverse its plains during their annual migration. The landscape has grassy plains and rolling hills, and is crossed by the Mara and Talek rivers. The area surrounding the park is dotted with villages (enkanjs) of Maasai people.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200',
    highlights: ['Great Migration (July-Oct)', 'Unrivaled Lion Sightings', 'Hot Air Balloon Safaris', 'Authentic Maasai Cultural Visits'],
    bestTime: 'July to October (Migration) or Jan to March',
    climate: 'Warm days and cool nights, year-round savannah climate.'
  },
  {
    id: 'amboseli',
    name: 'Amboseli',
    description: 'Famous for its large elephant herds and views of immense Mount Kilimanjaro.',
    longDescription: 'Amboseli National Park is in southern Kenya. It’s known for its large elephant herds and views of immense Mount Kilimanjaro, across the border in Tanzania. Observation Hill offers panoramas of the peak and the park’s plains and swamps. Wildlife includes giraffes, zebras, cheetahs and hundreds of bird species. The western section is dominated by vast Lake Amboseli, which is dry outside the rainy season.',
    image: 'https://images.unsplash.com/photo-1581012733671-913069bf0755?auto=format&fit=crop&q=80&w=1200',
    highlights: ['Iconic Kilimanjaro Backdrops', 'Vast Elephant Herds', 'Observation Hill Views', 'Swamp Wildlife Encounters'],
    bestTime: 'June to October and January to February',
    climate: 'Arid and hot, with spectacular clear views of the mountain in early mornings.'
  },
  {
    id: 'diani',
    name: 'Diani Beach',
    description: 'A major beach on the Indian Ocean coast of Kenya, known for its coral reefs and white sand.',
    longDescription: 'Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in Kwale County. It has been voted Africa\'s leading beach destination for the fifth time running since 2015. The beach is about 17 kilometres long, from the Kongo river to the north and Galu beach to the south. It is adjacent to the town of Ukunda, which is served by the Ukunda Airport.',
    image: 'https://images.unsplash.com/photo-1589392860841-7709c4e89325?auto=format&fit=crop&q=80&w=1200',
    highlights: ['Pristine White Sands', 'World-class Kite Surfing', 'Swimming with Whale Sharks', 'Luxury Coastal Retreats'],
    bestTime: 'August to March',
    climate: 'Tropical, warm and humid with refreshing ocean breezes.'
  },
  {
    id: 'samburu',
    name: 'Samburu',
    description: 'A unique landscape with rare wildlife species found only in the northern arid regions.',
    longDescription: 'Samburu National Reserve is a game reserve on the banks of the Ewaso Ng\'iro River in Kenya. On the other side of the river is the Buffalo Springs National Reserve. The reserve is 165 km² in size and is situated 350 km from Nairobi. It ranges in altitude from 800 to 1230m above sea level.',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450616?auto=format&fit=crop&q=80&w=1200',
    highlights: ['The Samburu Special Five', 'Ewaso Ng\'iro River Wildlife', 'Stunning Arid Landscapes', 'Rich Reticulated Giraffe Populations'],
    bestTime: 'December to March and June to October',
    climate: 'Hot and dry northern frontier climate.'
  }
];
