import {
  NavItem,
  SlideItem,
  FeaturedProject,
  TeamMember,
  AwardItem,
  NewsPost,
  TestimonialItem,
  VideoItem,
} from '../types';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/AspenHomesUK',
  twitter: 'https://x.com/AspenHomesUK',
  linkedin: 'https://www.linkedin.com/company/4830123?trk=prof-0-ovw-curr_pos',
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Current Developments', path: '/current-developments/' },
  { name: 'Portfolio', path: '/portfolio/' },
  { name: 'About Us', path: '/about-us/' },
  { name: 'Videos', path: '/videos/' },
  { name: 'Awards', path: '/awards/' },
  { name: 'Sustainability', path: '/sustainability/' },
  { name: 'Customer Service', path: '/customer-service/' },
  { name: 'Testimonials', path: '/testimonials/' },
  { name: 'Land Required', path: '/land-required/' },
  { name: 'Local Community', path: '/local-community/' },
  { name: 'News', path: '/news/' },
  { name: 'Contact Us', path: '/contact-us/' },
];

export const HOME_SLIDER_ITEMS: SlideItem[] = [
  {
    id: 'slide-1',
    image: '/images/2017/08/Butterfly-House-Front_crop2.jpg',
    alt: 'Butterfly House Front View - Aspen Homes Guildford',
    title: 'Inspirational Design',
    subtitle: 'Bespoke residential developments crafted with distinction across Surrey',
  },
  {
    id: 'slide-2',
    image: '/images/2017/08/Butterfly-House-Dining_crop.jpg',
    alt: 'Grand Surrey country residence with handcrafted brickwork and gated driveway',
    title: 'Aspirational Living',
    subtitle: 'Exceptional attention to detail, architectural poise, and modern luxury',
  },
  {
    id: 'slide-3',
    image: '/images/2017/08/Butterfly-House-Kitchen.jpg',
    alt: 'Exquisite kitchen island with premium fittings and integrated appliances',
    title: 'Precision Craftsmanship',
    subtitle: 'Award-winning standards in prime Surrey residential locations',
  },
  {
    id: 'slide-4',
    image: '/images/2017/08/Butterfly-House-Master-Suite.jpg',
    alt: 'Bespoke master suite with luxury appointments and serene atmosphere',
    title: 'Timeless Elegance',
    subtitle: 'Combining cutting-edge innovations with classic architectural heritage',
  },
  {
    id: 'slide-5',
    image: '/images/2017/08/Pewley-Hill-Master.jpg',
    alt: 'Spacious living room with open-plan design and natural light',
    title: 'Uncompromising Quality',
    subtitle: 'Delivering homes that exceed expectations in every detail and finish',
  },
  {
    id: 'slide-6',
    image: '/images/2017/08/Pinehurst-Rear.jpg',
    alt: 'Elegant exterior of a Surrey home with landscaped gardens and architectural finesse',
    title: 'Bespoke Developments',
    subtitle: 'Tailored to the unique needs and aspirations of our discerning clients',
  },
  {
    id: 'slide-7',
    image: '/images/2017/08/Pewley-Heights-Bed-2-1.jpg',
    alt: 'Modern kitchen with premium appliances and sophisticated design',
    title: 'Innovative Design',
    subtitle: 'Blending contemporary aesthetics with functional living spaces',
  },
  {
    id: 'slide-8',
    image: '/images/2017/08/Pewley-Heights-Study.jpg',
    alt: 'Cozy living room with warm lighting and comfortable seating',
    title: 'Exceptional Comfort',
    subtitle: 'Creating spaces that offer the perfect blend of style and functionality',
  },
  {
    id: 'slide-9',
    image: '/images/2017/08/Butterfly-House-Bed-3.jpg',
    alt: 'Luxurious bathroom with spa-like features and elegant finishes',
    title: 'Refined Interiors',
    subtitle: 'Attention to detail in every room, ensuring a harmonious living experience',
  }
];

export const CURRENT_DEVELOPMENTS: FeaturedProject[] = [
  {
    id: 'horseshoe-lane-west-guildford',
    slug: 'horseshoe-lane-west-guildford',
    title: 'Horseshoe Crescent, Guildford',
    category: 'Current Developments',
    image: '/images/2026/04/P1-Front.jpeg',
    description: [
      'Our development at Horseshoe Crescent is an exclusive collection of three thoughtfully designed and meticulously<br>finished bespoke family homes. Each home showcases our signature blend of contemporary elegance, traditional<br>craftsmanship, and practical living.',
      'Set within a peaceful and well‑connected corner of Guildford, these brand‑new properties offer generous layouts, high‑quality specifications, and an attention to detail that elevates everyday living. All three homes offer versatility, privacy and an excellent balance of formal and informal space.',
      'PRICES FROM: £1,750,000',
      'For more details, you can view the dedicated Horseshoe Crescent website <a href="https://www.horseshoecrescent.com/">here</a>',
    ],
    gallery: [
      '/images/2026/04/P1-Front.jpeg',
      '/images/2026/04/P1-Hallway.jpeg',
      '/images/2026/04/P1-Open.jpeg',
      '/images/2026/04/P1-Kitchen.jpeg',
      '/images/2026/04/P1-Living.jpeg',
      '/images/2026/04/P1-Study.jpeg',
      '/images/2026/04/P1-Bed.jpeg',
      '/images/2026/04/P1-Bath.jpeg',
    ],
    status: 'Completed',
  },
];

export const PORTFOLIO_PROJECTS: FeaturedProject[] = [
  {
    'id': 'rosemount-highmeadows',
    'slug': 'rosemount-highmeadows',
    'title': 'Rosemount and High Meadows, Oxshott',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2018/08/Aspen-Homes-Sunny-2edited.jpg',
    'description': [
      'Aspen Homes are extremely proud to introduce another luxury development of two new family homes in the idyllic village of Oxshott, Surrey.',
      'Accessed via their own private driveway, Rosemount and High Meadows both offer accommodation of just under 3500 square feet arranged over 3 floors. With 5 bedrooms, 3 receptions rooms, 4 bathrooms, top floor playroom and an open plan kitchen and dining area, Rosemount and High Meadows certainly offer ample space for entertainment, rest and relaxation in equal measure. The homes also feature generous west facing landscaped gardens, accessed from an Indian sandstone paved terrace, that see plenty of sunlight from morning right through to the evening.',
      'Rosemount and High Meadows have been handcrafted with the same meticulous attention to detail that Aspen Homes have become known for within the housebuilding industry.'
    ],
    'gallery': [
      '/images/2018/08/Aspen-Homes-Sunny-2edited.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo22.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo20.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo25.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo28.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo29.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo10.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo13.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo06.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo15.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo17.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo58.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo19.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo23.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo49.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo47.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo43.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo41.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo40.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo32.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo33.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo36.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo51.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo48.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo56.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo37.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo54.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo05.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo03.jpg',
      '/images/2017/08/Aspen-Homesdoctor-photo01.jpg'
    ]
  },
  {
    'id': 'pewley-heights-guildford',
    'slug': 'pewley-heights-guildford',
    'title': 'Pewley Heights, Guildford',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/08/Pewley-Heights-Front.jpg',
    'description': [
      'Sold off plan, the Aspen Homes team worked tirelessly on Pewley Hill, Guildford, to ensure the owners could move in to their beautiful new home just in time for Christmas 2016.',
      'This charming property features five-bedrooms, a spacious living room, four-bathrooms, an internal garage and an open plan kitchen, living and dining area ideal for entertaining guests. The property is arranged over three floors and offers magnificent views out over the Pewley Downs.',
      'Thank you to everyone involved in crafting this fantastic home, and those who supported the Aspen Homes team throughout the project. This new home is a testament to your continued hard work and support.'
    ],
    'gallery': [
      '/images/2017/08/Pewley-Heights-Front.jpg',
      '/images/2017/08/Pewley-Heights-Hallway_sm.jpg',
      '/images/2017/08/Pewley-Heights-Kitchen_sm.jpg',
      '/images/2017/08/Pewley-Heights-Oven_sm.jpg',
      '/images/2017/08/Pewley-Heights-Hob_sm.jpg',
      '/images/2017/08/Pewley-Heights-OpenPlanLiving_sm.jpg',
      '/images/2017/08/Pewley-Heights-Dining-1_sm.jpg',
      '/images/2017/08/Pewley-Heights-Dining-2_sm.jpg',
      '/images/2017/08/Pewley-Heights-Landing_sm.jpg',
      '/images/2017/08/Pewley-Heights-Master-Bath_sm.jpg',
      '/images/2017/08/Pewley-Heights-Bed-2_sm.jpg',
      '/images/2017/08/Pewley-Heights-Bed-2a_sm.jpg',
      '/images/2017/08/Pewley-Heights-View_sm.jpg',
      '/images/2017/08/Pewley-Heights-En-Suite_sm.jpg',
      '/images/2017/08/Pewley-Heights-Bed-3_sm.jpg',
      '/images/2017/08/Pewley-Heights-Bed-4_sm.jpg',
      '/images/2017/08/Pewley-Heights-Bed-5_sm.jpg',
      '/images/2017/08/Pewley-Heights-Tap_sm.jpg',
      '/images/2017/08/Pewley-Heights-Basin_sm.jpg',
      '/images/2017/08/Pewley-Heights-RW_sm.jpg'
    ]
  },
  {
    'id': 'butterfly-house-guildford',
    'slug': 'butterfly-house-guildford',
    'title': 'Butterfly House, Guildford',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/08/Butterfly-House-Front.jpg',
    'description': [
      'Butterfly House, situated in the heart of Guildford is set behind elegantly crafted gates, and delivers 5,100 square feet of luxury living space arranged over three floors.',
      'The five-bedrooms and five bathrooms are complemented by excellent family, entertaining and leisure space including two generous reception rooms, a media room and study; the open plan kitchen with living and family area are perfect for formal and informal entertaining. The property sits on a plot of just under 0.5 acre, featuring a magnificently landscaped south facing garden accessed from the house via the stylish dual-level terrace.',
      'We were delighted to see Butterfly House go on to be named the winner of \u2018Best New Luxury Property\u2019 at the Surrey Property Awards in November 2016.'
    ],
    'gallery': [
      '/images/2017/08/Butterfly-House-Front.jpg',
      '/images/2017/08/Butterfly-House-Rear-new.jpg',
      '/images/2017/08/Butterfly-House-Hallway_sm.jpg',
      '/images/2017/08/Butterfly-House-Kitchen_sm.jpg',
      '/images/2017/08/Butterfly-House-Dining_sm.jpg',
      '/images/2017/08/Butterfly-House-Living_sm.jpg',
      '/images/2017/08/Butterfly-House-Study_sm.jpg',
      '/images/2017/08/Butterfly-House-Landing_sm.jpg',
      '/images/2017/08/Butterfly-House-Master-Bed_sm.jpg',
      '/images/2017/08/Butterfly-House-Dressing_sm.jpg',
      '/images/2017/08/Butterfly-House-Master-Suite_sm.jpg',
      '/images/2017/08/Butterfly-House-Bed-2_sm.jpg',
      '/images/2017/08/Butterfly-House-Dressing-2_sm.jpg',
      '/images/2017/08/Butterfly-House-Bed-2-Suite_sm.jpg',
      '/images/2017/08/Butterfly-House-Bed-3_sm.jpg',
      '/images/2017/08/Butterfly-House-Bed-3-Snug_sm.jpg',
      '/images/2017/08/Butterfly-House-Bed-3-Suite_sm.jpg',
      '/images/2017/08/Butterfly-House-Bed-4_sm.jpg',
      '/images/2017/08/Butterfly-House-Bed-4-Suite-1_sm.jpg',
      '/images/2017/08/Butterfly-House-Bed-5_sm.jpg',
      '/images/2017/08/Butterfly-House-Family-Bath_sm.jpg',
      '/images/2017/08/Butterfly-House-Media-1_sm.jpg',
      '/images/2017/08/Butterfly-House-Media-2_sm.jpg',
      '/images/2017/08/Butterfly-House-Rear-2_sm.jpg',
      '/images/2017/08/Butterfly-House-Rear-3_sm.jpg'
    ]
  },
  {
    'id': 'pewley-hill-guildford',
    'slug': 'pewley-hill-guildford',
    'title': 'Pewley Hill, Guildford',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/08/Pewley-Hill-Front-new_sm.jpg',
    'description': [
      'Our project on Pewley Hill, one of Guildford\u2019s prime locations, comprised two beautifully handcrafted six-bedroom homes.',
      'Boasting a luxurious specification and a layout designed perfectly for modern day living, whilst offering panoramic views of the surrounding area.',
      'Features included landscaped gardens of a third of an acre with an Indian Sandstone alfresco dining area, a Pedini designer kitchen, a Sonos integrated music system to all principal rooms, bespoke wardrobes from the English Wardrobe Company, a waterproof TV to the bathroom in the master bedroom suite as well as Villeroy and Boch Sanitaryware throughout.',
      'We were delighted to have our Pewley Hill project named \u2018Best New Homes Development\u2019 at the Surrey Property Awards 2014.'
    ],
    'gallery': [
      '/images/2017/08/Pewley-Hill-Front-new_sm.jpg',
      '/images/2017/08/Pewley-Hill-Hallway_sm.jpg',
      '/images/2017/08/Pewley-Hill-Family_sm.jpg',
      '/images/2017/08/Pewley-Hill-Open-Plan_sm.jpg',
      '/images/2017/08/Pewley-Hill-Kitchen_sm.jpg',
      '/images/2017/08/Pewley-Hill-Kitchen-1_sm.jpg',
      '/images/2017/08/Pewley-Hill-Kitchen-2_sm.jpg',
      '/images/2017/08/Pewley-Hill-Kitchen-3_sm.jpg',
      '/images/2017/08/Pewley-Hill-Dining_sm.jpg',
      '/images/2017/08/Pewley-Hill-Living_sm.jpg',
      '/images/2017/08/Pewley-Hill-Study_sm.jpg',
      '/images/2017/08/Pewley-Hill-Master_sm.jpg',
      '/images/2017/08/Pewley-Hill-Master-1_sm.jpg',
      '/images/2017/08/Pewley-Hill-Master-Suite_sm.jpg',
      '/images/2017/08/Pewley-Hill-Suite_sm.jpg',
      '/images/2017/08/Pewley-Hill-Views_sm.jpg'
    ]
  },
  {
    'id': 'pinehurst-haslemere',
    'slug': 'pinehurst-haslemere',
    'title': 'Pinehurst, Haslemere',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/09/Pinehurst-Front_sm.jpg',
    'description': [
      'Pinehurst enjoys a tranquil and secluded environment and is approached through a private gated entrance via an impressive tree-lined drive with surrounding landscaped gardens of half an acre.',
      'The 3775 square feet living space includes a luxury designer kitchen, en-suite bathrooms and shower rooms as well as an integrated music and TV system to all principal rooms. This wonderful combination creates an ideal home for family living.'
    ],
    'gallery': [
      '/images/2017/09/Pinehurst-Front_sm.jpg',
      '/images/2017/08/Pinehurst-Rear.jpg',
      '/images/2017/09/Pinehurst-WC.jpg',
      '/images/2017/09/Pinehurst-Kitchen.jpg',
      '/images/2017/09/Pinehurst-Suite.jpg',
      '/images/2017/09/Pinehurst-Bath.jpg',
      '/images/2017/08/pinehurst-night_new.jpg'
    ]
  },
  {
    'id': 'wellington-house-wentworth',
    'slug': 'wellington-house-wentworth',
    'title': 'Wellington House, Wentworth',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/09/Wellington-House-Front_featured.jpg',
    'description': [
      'Wellington House is a stunning gated residence nestled in the prestigious Wentworth Estate.',
      'This magnificent seven-bedroom home was specifically designed with a traditional touch yet incorporates the latest innovations and was finished in a contemporary style. With a beautiful sweeping staircase, bespoke kitchen, five en-suite bathrooms and an indoor swimming pool, this home is designed with relaxation and entertaining in mind. With the quality of the design and build carried out to an exceptionally high standard inside and out, Wellington House is truly one of the grandest residences on the Wentworth Estate.'
    ],
    'gallery': [
      '/images/2017/08/Wellington-House-Front.jpg',
      '/images/2017/09/Wellington-House-Kitchen.jpg',
      '/images/2017/09/Wellington-House-Living.jpg',
      '/images/2017/09/Wellington-House-Hallway.jpg',
      '/images/2017/09/Wellington-House-Pool.jpg',
      '/images/2017/09/Wellington-House-Master.jpg',
      '/images/2017/09/Wellington-House-Suite.jpg',
      '/images/2017/09/Wellington-House-Hob_sm.jpg'
    ]
  },
  {
    'id': 'chestnut-house-pines-camberley',
    'slug': 'chestnut-house-pines-camberley',
    'title': 'Chestnut House &#038; The Pines, Camberley',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/09/Chestnut-House-Gates_sm2.jpg',
    'description': [
      'This prestigious development is situated in the tranquillity of Brackendale Road within a short stroll of Tekels Park.',
      'With access to 50-acre woodland yet only a mile from the town centre of Camberley, these two luxurious five-bedroom houses offered their owners the perfect balance between urban and country living.'
    ],
    'gallery': [
      '/images/2017/09/Chestnut-House-Gates_sm2.jpg',
      '/images/2017/09/Chestnut-House-Living.jpg',
      '/images/2017/09/Chestnut-House-Utility_sm.jpg',
      '/images/2017/09/Chestnut-House-Bath.jpg',
      '/images/2017/09/Chestnut-House-Shower-2_sm.jpg',
      '/images/2017/09/Chestnut-House-Exterior_sm.jpg'
    ]
  },
  {
    'id': 'greensleeves-guildford',
    'slug': 'greensleeves-guildford',
    'title': 'Greensleeves, Guildford',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/09/Greensleeves-Front_sm.jpg',
    'description': [
      'Greensleeves is a sympathetic creation of a beautiful Arts and Crafts inspired house located at the foot of The Mount in Guildford.',
      'Set in an elegant walled garden, the house was beautifully crafted to accommodate everything needed for modern day living. Traditionally styled and exuding exemplary quality, the house has five-bedrooms, three stunning bathrooms and an open plan living area ideal for entertaining as well as two generously proportioned reception rooms.'
    ],
    'gallery': [
      '/images/2017/09/Greensleeves-Front_sm.jpg',
      '/images/2017/09/Greensleeves-KitchenDining_sm.jpg',
      '/images/2017/09/Greensleeves-Dining_sm.jpg',
      '/images/2017/09/Greensleeves-Master_sm.jpg',
      '/images/2017/09/Greensleeves-Suite_sm.jpg',
      '/images/2017/09/Greensleeves-Views_sm.jpg'
    ]
  },
  {
    'id': 'fairwood-haslemere',
    'slug': 'fairwood-haslemere',
    'title': 'Fairwood, Haslemere',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/09/Fairwood-Front_sm.jpg',
    'description': [
      'Fairwood is a stunning home which epitomises the standards that Aspen Homes applies to all of its developments.',
      'Located just minutes away from the charming market town of Haslemere, this home is situated in a picturesque rural setting and accessed by its own driveway. Fairwood was traditionally styled drawing on the Surrey Hills Arts and Crafts vernacular while incorporating a contemporary touch; it\u2019s a home perfect for modern day living.'
    ],
    'gallery': [
      '/images/2017/09/Fairwood-Front_sm.jpg',
      '/images/2017/09/Fairwood-Kitchen.jpg',
      '/images/2017/09/Fairwood-WC_sm.jpg',
      '/images/2017/09/Fairwood-Coffee.jpg',
      '/images/2017/09/Fairwood-Door.jpg',
      '/images/2017/09/Fairwood-Bed.jpg',
      '/images/2017/09/Fairwood-Dressing.jpg',
      '/images/2017/09/Fairwood-Bath.jpg',
      '/images/2017/09/Fairwood-Rear_sm.jpg'
    ]
  },
  {
    'id': 'the-croft-ash',
    'slug': 'the-croft-ash',
    'title': 'The Croft, Ash',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/08/FrontElevationTheCroft_crop2.jpg',
    'description': [
      'After working closely with Guildford Borough Council, Aspen Homes was successful in obtaining planning permission for 39 new homes at The Croft, Ash.',
      'After careful consideration, Aspen Homes sold the site with planning permission to Bellway Homes. Set in five acres this development has delivered a great choice of new homes for the area with 14 of the homes being offered as affordable housing.'
    ],
    'gallery': [
      '/images/2017/09/The-Croft-1_sm.jpg',
      '/images/2017/09/The-Croft-2_sm.jpg',
      '/images/2017/09/The-Croft-3_sm.jpg'
    ]
  },
  {
    'id': 'lowlands-farnham',
    'slug': 'lowlands-farnham',
    'title': 'Lowlands, Farnham',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/09/Lowlands-Front_quote.jpg',
    'description': [
      'This prestigious development is situated in the tranquillity of Folly Hill within a short stroll of both Farnham Park and Farnham Castle.',
      'With views across the Downs and being only a mile from the town centre of Farnham these two luxurious four bedroom houses offer their owners that perfect balance between urban and country living. With both houses being built with a meticulous attention to detail and to exacting standards one will be able to see, touch and feel why every house we build becomes a home one can be proud of.'
    ],
    'gallery': [
      '/images/2017/09/Lowlands-Front_sm.jpg',
      '/images/2017/09/Lowlands-Bed_sm.jpg',
      '/images/2017/09/Lowlands-Suite_sm.jpg',
      '/images/2017/09/Lowlands-Basin_sm.jpg',
      '/images/2017/09/Lowlands-Shower-1_sm.jpg',
      '/images/2017/09/Lowlands-Shower-2_sm.jpg',
      '/images/2017/09/Lowlands-Shelf_sm.jpg'
    ]
  },
  {
    'id': 'the-barns-normandy',
    'slug': 'the-barns-normandy',
    'title': 'The Barns, Normandy',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/09/The-Barns-1_quote.jpg',
    'description': [
      'The Barns at Normandy form part of a Grade II listed estate set in three acres of landscaped gardens.',
      'The estate dates back to the 1600s and over the years has been beautifully restored. As the final part of its restoration and in line with national heritage and listed buildings regulations, our remit was to re-purpose the old barns and stables. We commenced by constructing a new roof and covering it with reclaimed welsh slate. All of the brickwork, beams and windows were formed from reclaimed materials to retain the authenticity of the estate. Underfloor heating throughout was installed and covered in Italian porcelain tiles; it was the perfect finish to this stunning and sympathetically designed conversion of the former outbuildings.'
    ],
    'gallery': [
      '/images/2017/09/The-Barns-1.jpg',
      '/images/2017/09/The-Barns-2.jpg'
    ]
  },
  {
    'id': 'foreman-manor-ash',
    'slug': 'foreman-manor-ash',
    'title': 'Foreman Manor, Ash',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2017/11/Photo_1dp_dp_28541807.jpg',
    'description': [
      'Foreman Manor was a boutique development of 9 units in the Surrey village of Ash, the perfect location offering the best of both town and country living. The development consisted of a mix of 3, 4 and 5 bedroom homes that were completed to the Aspen Homes standard and brought to market in 2019.',
      'This development was a unique challenge for us at Aspen Homes, with Foreman Manor being the largest build we have undertaken as a company so far. The key for us was to ensure that building more homes didn\u2019t mean compromising on quality, and we are proud to have implemented the same luxury elements at Foreman Manor that have defined Aspen Homes developments over the years.',
      'We are delighted that Foreman Manor has been nominated for \u2018Best Boutique Development\u2019 at the Surrey Property Awards.'
    ],
    'gallery': [
      '/images/2017/11/Photo_1dp_dp_28541807.jpg',
      '/images/2017/11/Plot-6-Foreman-Manor-10.jpg',
      '/images/2017/11/Plot-6-Foreman-Manor-15.jpg',
      '/images/2017/11/Plot-6-Foreman-Manor-3.jpg',
      '/images/2017/11/Plot-3-Foreman-Manor-9.jpg',
      '/images/2017/11/Plot-6-Foreman-Manor-6.jpg',
      '/images/2017/11/Plot-6-Foreman-Manor-2.jpg',
      '/images/2017/11/Plots-Foreman-12.jpg',
      '/images/2017/11/Plot-6-Foreman-Manor-1.jpg',
      '/images/2017/11/Plot-6-Foreman-Manor-9.jpg',
      '/images/2017/11/Plot-6-Foreman-3.jpg',
      '/images/2017/11/Plot-3-Foreman-Manor-12.jpg',
      '/images/2017/11/Plot-3-Foreman-Manor-14.jpg',
      '/images/2017/11/Plot-3-Foreman-Manor-2.jpg',
      '/images/2017/11/Plot-3-Foreman-Manor-3.jpg',
      '/images/2017/11/Plot-3-Foreman-Manor-7.jpg',
      '/images/2017/11/Plots-Foreman-7.jpg'
    ]
  },
  {
    'id': 'merrow-croft-guildford',
    'slug': 'merrow-croft-guildford',
    'title': 'Merrow Croft, Guildford',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2019/05/18-Merrow-Croft-Guildford-GU1-2XH-153-1.jpg',
    'description': [
      'Merrow Croft is a development of two 5-bedroom homes on the outskirts of Guildford, in the leafy suburb of Merrow. Located just a stones throw away from the picturesque Merrow Downs, this bespoke development combines the best of town and country living.',
      'The houses were designed with family in mind, each offering multiple reception rooms to provide separate spaces for relaxation and downtime for parents and children, and four bathrooms to ensure morning arguments are kept to a minimum! The large open plan kitchen and dining areas provide fantastic spaces not just for entertaining guests, but also for those important moments when the family comes together.',
      'Merrow Croft, like any new build project, had its challenges and the onset of the pandemic brought about a unique test that we could never in a million years think we would be faced with. However, we are so proud of the way that the team adapted and persevered under such challenging circumstances to deliver a development that fits in perfectly with the Aspen Homes brand. The quality and attention to detail gives us immense pride every time we go back to visit Merrow Croft, and the happiness we have brought to two young families that are thoroughly enjoying their new homes is the icing on the cake.'
    ],
    'gallery': [
      '/images/2021/09/Mc1.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-158-3.jpg',
      '/images/2021/09/Mc5.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-96.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-107.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-111.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-131.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-124.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-132.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-123.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-89.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-27.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-73.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-75.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-71.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-66.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-48.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-45.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-58.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-31.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-10.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-5.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-137.jpg',
      '/images/2021/09/18-Merrow-Croft-Guildford-GU1-2XH-143.jpg'
    ]
  },
  {
    'id': 'exciting-developments-coming-soon',
    'slug': 'exciting-developments-coming-soon',
    'title': 'Exciting Developments Coming Soon!',
    'category': [],
    'image': '/images/2021/10/Coming-Soon.jpg',
    'description': [
      'We are working away on plans for our future developments and look forward to revealing news on them soon!'
    ],
    'gallery': []
  },
  {
    'id': 'may-and-juniper-cottages',
    'slug': 'may-and-juniper-cottages',
    'title': 'May and Juniper Cottages',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2021/02/Site-2_crop.jpg',
    'description': [
      'May and Juniper Cottages was a joint venture undertaken by Aspen Homes alongside the land owners, creating a scheme of circa 100 units.',
      'Liaising with local bodies and neighbours, we sought to design a development that would cause as little disruption to the community as possible throughout its lifetime, whilst creating an idyllic environment for the future occupants.',
      'The scheme successfully gained planning approval in November 2019, before being sold on to Bloor Homes in early 2021. We wish Bloor luck with the development, and look forward to seeing the finished product.'
    ],
    'gallery': [
      '/images/2021/10/Street-Scene-1.jpg',
      '/images/2021/10/Street-Scene-2.jpg',
      '/images/2021/10/Indicative-Street-Scenes-showing-frontage-to-Ash-Green-Road.jpg'
    ]
  },
  {
    'id': 'manor-way-guildford',
    'slug': 'manor-way-guildford',
    'title': 'Manor Way, Guildford',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2013/05/57-Manor-Way-5_crop.jpg',
    'description': [
      'Manor Way was a development of two 4 bedroom family homes in Onslow Village, Guildford designed and guided through planning by Aspen Homes in 2013.',
      'Due to our commitments on other projects, once planning was achieved Aspen Homes decided to sell the site onto a developer that would do the scheme justice. A deal was made with Arthur Waite and they went on to build two beautiful homes that truly stand out on Manor Way.'
    ],
    'gallery': [
      '/images/2017/08/Pewley-Hill-Front-1.jpg',
      '/images/2017/08/Pewley-Hill-Hallway_sm.jpg',
      '/images/2017/08/Pewley-Hill-Family_sm.jpg',
      '/images/2017/08/Pewley-Hill-Open-Plan_sm.jpg',
      '/images/2017/08/Pewley-Hill-Kitchen_sm.jpg',
      '/images/2017/08/Pewley-Hill-Kitchen-1_sm.jpg',
      '/images/2017/08/Pewley-Hill-Kitchen-2_sm.jpg',
      '/images/2017/08/Pewley-Hill-Kitchen-3_sm.jpg',
      '/images/2017/08/Pewley-Hill-Dining_sm.jpg',
      '/images/2017/08/Pewley-Hill-Living_sm.jpg',
      '/images/2017/08/Pewley-Hill-Study_sm.jpg',
      '/images/2017/08/Pewley-Hill-Master_sm.jpg',
      '/images/2017/08/Pewley-Hill-Master-1_sm.jpg',
      '/images/2017/08/Pewley-Hill-Master-Suite_sm.jpg',
      '/images/2017/08/Pewley-Hill-Suite_sm.jpg',
      '/images/2017/08/Pewley-Hill-Views_sm.jpg'
    ]
  },
  {
    'id': 'tretower-house-guildford',
    'slug': 'tretower-house-guildford',
    'title': 'Tretower House, Guildford',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2022/01/Willow_Place_Showhome_1-29-scaled.jpg',
    'description': [
      'Tretower House is a beautifully restored, detached redbrick residence set along a highly regarded no through lane in the heart of Merrow. When we took possession of Tretower House it is fair to say that it had seen better days. Over the course of a year the house was painstakingly renovated to create a wonderful family home in the village of Merrow, close to Guildford town centre and moments away from the scenic Merrow Downs.',
      'Notable features include:',
      'Pocelain tile flooring to hallways and kitchen/family room.',
      'Lano Cashmere Luxe carpet to all rooms except porcelain tiled areas.',
      'Beautifully designed bespoke kitchen by Crouch Design with intigrated appliances',
      'Individually designed feature staircases in satin white',
      'White Windsor Deanta panelled doors.',
      'Polished stainless steel ironmongery.',
      'Bespoke dressing room to master bedroom.',
      'Bespoke fitted wardrobes to bedroom two.',
      'Driveway finished in block paviours.',
      'Numerous flexible outbuildings with options for additional storage or conversion to office/workspace with relevent consents.',
      'Fully landscaped gardens and Indian Sandstone patio areas.',
      'For more information please view the Tretower House brochure'
    ],
    'gallery': [
      '/images/2022/01/Willow_Place_Showhome_1-8-scaled.jpg',
      '/images/2022/01/Willow_Place_Showhome_1-4-scaled.jpg',
      '/images/2022/01/Willow_Place_Showhome_1-2-scaled.jpg',
      '/images/2022/01/Willow_Place_Showhome_1-1-scaled.jpg',
      '/images/2022/01/Willow_Place_Showhome_1-11-scaled.jpg',
      '/images/2022/01/Willow_Place_Showhome_1-12-scaled.jpg',
      '/images/2022/01/Willow_Place_Showhome_1-23-scaled.jpg',
      '/images/2022/01/Willow_Place_Showhome_1-16-scaled.jpg',
      '/images/2022/01/Willow_Place_Showhome_1-19-scaled.jpg'
    ]
  },
  {
    'id': 'horseshoe-lane-west-guildford',
    'slug': 'horseshoe-lane-west-guildford',
    'title': 'Horseshoe Crescent, Guildford',
    'category': [
      'current-developments'
    ],
    'image': '/images/2026/04/P1-Front.jpeg',
    'description': [
      'Our development at Horseshoe Crescent is an exclusive collection of three thoughtfully designed and meticulously',
      'finished bespoke family homes. Each home showcases our signature blend of contemporary elegance, traditional',
      'craftsmanship, and practical living.',
      'Set within a peaceful and well\u2011connected corner of Guildford, these brand\u2011new properties offer generous layouts, high\u2011quality specifications, and an attention to detail that elevates everyday living. All three homes offer versatility, privacy and an excellent balance of formal and informal space.',
      'PRICES FROM: \u00a31,750,000',
      'For more details, you can view the dedicated Horseshoe Crescent website here'
    ],
    'gallery': [
      '/images/2026/04/P1-Front.jpeg',
      '/images/2026/04/P1-Hallway.jpeg',
      '/images/2026/04/P1-Open.jpeg',
      '/images/2026/04/P1-Kitchen.jpeg',
      '/images/2026/04/P1-Living.jpeg',
      '/images/2026/04/P1-Study.jpeg',
      '/images/2026/04/P1-Bed.jpeg',
      '/images/2026/04/P1-Bath.jpeg'
    ]
  },
  {
    'id': '6-willow-place-guildford',
    'slug': '6-willow-place-guildford',
    'title': 'Willow Place, Guildford',
    'category': [
      'completed-developments'
    ],
    'image': '/images/2024/09/Willow_Place_Showhome_2-24_crop.jpg',
    'description': [
      'Willow Place is a collection of six luxuriously crafted three, four and five bedroom homes in the village of Merrow, Guildford. Built over 18 months throughout 2023 and 2024, we were delighted to sell 5 of the homes off plan. All houses are now sold to happy buyers who have been enjoying make Willow Place home.',
      'Notable features include:',
      'Brampton Chase herring-bone flooring to hallways and kitchen/family room.',
      'Lano Cashmere Luxe carpet to all rooms except porcelain tiled areas.',
      'Individually designed feature staircases in satin white',
      'White Windsor Deanta paneled doors.',
      'Polished stainless steel ironmongery.',
      'Bespoke fitted wardrobes to master bedroom.',
      'Fitted wardrobes to bedrooms two and four.',
      'Beautifully designed bespoke kitchen by Crouch Design with integrated appliances.',
      'Hansgrohe brassware, Villeroy & Boch Vanity units and heated chrome ladder towel rails to all bathrooms, en-suites and W.C\u2019s.',
      'For more information, please view the Willow Place Brochure'
    ],
    'gallery': [
      '/images/2024/09/Willow_Place_Showhome_2-8-scaled.jpg',
      '/images/2024/09/Willow_Place_Showhome_2-1-scaled.jpg',
      '/images/2024/09/Willow_Place_Showhome_2-5-scaled.jpg',
      '/images/2024/09/Willow_Place_Showhome_2-10-scaled.jpg',
      '/images/2024/09/Willow_Place_Showhome_2-29-scaled.jpg',
      '/images/2024/09/Willow_Place_Showhome_2-36-scaled.jpg',
      '/images/2024/09/Willow_Place_Showhome_2-11-scaled.jpg',
      '/images/2024/09/Willow_Place_Showhome_2-12-scaled.jpg',
      '/images/2024/09/Willow_Place_Showhome_2-14-scaled.jpg'
    ]
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'merrow-croft',
    slug: 'merrow-croft-guildford',
    title: 'Merrow Croft, Guildford',
    category: 'Completed Developments',
    image: '/images/2019/05/18-Merrow-Croft-Guildford-GU1-2XH-153-1-800x533.jpg',
    summary: 'A development of two 5-bedroom luxury homes on the outskirts of Guildford in the leafy suburb of Merrow.',
    description: [],
    status: 'Completed',
  },
  {
    id: 'foreman-manor-ash',
    slug: 'foreman-manor-ash',
    title: 'Foreman Manor, Ash',
    category: 'Completed Developments',
    image: '/images/2017/11/Photo_1dp_dp_28541807-800x533.jpg',
    summary: 'An outstanding bespoke residence situated in a prestigious Surrey location with extensive private grounds.',
    description: [
      'Tretower House is an exquisite contemporary family home situated in an established, quiet residential enclave of Guildford. Designed and built to exacting specifications, this property represents the very pinnacle of luxury Surrey living.',
      'Featuring expansive open-plan entertaining areas, handcrafted bespoke cabinetry, zoned underfloor heating, integrated smart home technology, and landscaped private rear gardens backing onto mature woodland.',
    ],
    status: 'Completed',
  },
  {
    id: 'pewley-heights-guildford',
    slug: 'pewley-heights-guildford',
    title: 'Pewley Heights, Guildford',
    category: 'Completed Developments',
    image: '/images/2017/08/Pewley-Heights-Front-800x533.jpg',
    summary: 'A boutique development of 3 new handcrafted family homes in one of Guildford’s most sought-after roads.',
    description: [
      'Located at 25 & 25a Horseshoe Lane West, this select new development of 3 high-specification homes provides superior design and unmatched build quality.',
      'Our team is working diligently on groundwork, road completion, and structural framing to deliver another landmark development that complements the surrounding streetscape.',
    ],
    status: 'Completed',
  },
  {
    id: 'butterfly-house-guildford',
    slug: 'butterfly-house-guildford',
    title: 'Butterfly House, Guildford',
    category: 'Completed Developments',
    image: '/images/2017/08/Butterfly-House-Front-800x533.jpg',
    summary: 'Winner of Surrey Property Awards Best New Homes Development & Premier Guarantee Top Development.',
    description: [
      '50 Pewley Hill features two beautifully handcrafted six-bedroom luxury family residences overlooking the historic Surrey Hills.',
      'Awarded the Surrey Property Awards "Best New Homes Development" in 2014 and the Premier Guarantee Excellence Award for "Top Development".',
    ],
    status: 'Completed',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'joe-jelley',
    name: 'JOE JELLEY',
    role: 'Managing Director',
    bio: 'Joe’s experienced approach to land acquisition, the planning process and his skill in optimising land values means he can offer landowners a range of carefully considered options that will be met with support from the local community. Joe’s keen attention to detail during the build stage ensures that all our homes are finished to perfection.',
    email: 'joe@aspen-homes.co.uk',
  },
  {
    id: 'paul-hack',
    name: 'PAUL HACK',
    role: 'Head of Construction',
    bio: 'With over thirty years of experience at the sharp end of the construction industry in both England and Germany, Paul prides himself on the exacting standards he expects from his team. With the benefit of running his own contracting company in Germany for seven years, he recognises and values the evolving methods of construction and ensures he is at the forefront of innovation.',
    email: 'paul@aspen-homes.co.uk',
  },
  {
    id: 'sean-moore',
    name: 'SEAN MOORE',
    role: 'Development Manager',
    bio: 'Sean is an extremely valuable member of the Aspen Homes team, assisting in every step of the operation of the business. From helping with obtaining planning consents on new developments, to the fine detail and execution of each of our homes, Sean has experience within a multitude of areas in property development.',
    email: 'sean@aspen-homes.co.uk',
  },
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: 'surrey-property-awards-2014',
    year: '2014',
    title: 'Surrey Property Awards 2014',
    organization: 'Surrey Property Awards',
    development: '50 Pewley Hill, Guildford',
    description: 'Awarded for our development at 50 Pewley Hill; two beautifully handcrafted six-bedroom homes in Guildford.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'premier-guarantee-2014',
    year: '2014',
    title: 'Premier Guarantee Excellence Awards 2014',
    organization: 'Premier Guarantee',
    development: '50 Pewley Hill, Guildford',
    description: '50 Pewley Hill was awarded "Top Development" at the Premier Guarantee Excellence Awards in 2014 — a nationally recognised accolade.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'surrey-property-awards-2016',
    year: '2016',
    title: 'Surrey Property Awards 2016',
    organization: 'Surrey Property Awards',
    development: 'Butterfly House, Guildford',
    description: 'Awarded for our development of Butterfly House also in Guildford — a beautiful five-bedroom family-home set in half an acre of stunning landscaped gardens.',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80',
  },
];

export const NEWS_POSTS: NewsPost[] = [
  {
    id: 'news-1',
    slug: 'progress-at-horseshoe-lane-west',
    title: 'PROGRESS AT HORSESHOE LANE WEST',
    date: '2025-02-01',
    formattedDate: 'February 01, 2025',
    summary: 'It has been a wet and frosty start to the year but despite the challenging weather our team on ...',
    content: [
      'It has been a wet and frosty start to the year but despite the challenging weather our team on site at Horseshoe Lane West has made impressive strides forward.',
      'Bricklayers and ground workers have been actively laying brick courses, establishing durable sub-structures, and progressing with moisture barriers and insulated blockwork.',
      'We remain on schedule to erect the first structural floors within the coming month.',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-2',
    slug: 'foundations-at-horseshoe-lane-west',
    title: 'FOUNDATIONS AT HORSESHOE LANE WEST',
    date: '2025-01-17',
    formattedDate: 'January 17, 2025',
    summary: 'We have been busy on site since the New Year digging trenches in an effort to get our 3 ...',
    content: [
      'We have been busy on site since the New Year digging trenches in an effort to get our 3 bespoke new homes founded on solid bedrock.',
      'Concrete pours have progressed under strict building control and quality monitoring.',
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-3',
    slug: 'completion-of-road-at-horseshoe-lane-west',
    title: 'COMPLETION OF ROAD AT HORSESHOE LANE WEST',
    date: '2024-12-04',
    formattedDate: 'December 04, 2024',
    summary: 'Over the past month our site team have been focusing on building the road into site that will serve ...',
    content: [
      'Over the past month our site team have been focusing on building the road into site that will serve all 3 upcoming family homes.',
      'This access road now ensures seamless logistics and deliveries while maintaining clean surroundings for nearby residents.',
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-4',
    slug: 'road-construction-begins-at-horseshoe-lane-west',
    title: 'ROAD CONSTRUCTION BEGINS AT HORSESHOE LANE WEST',
    date: '2024-11-10',
    formattedDate: 'November 10, 2024',
    summary: 'Over the past two weeks we have been installing drainage and utilities infrastructure to enable us to begin work ...',
    content: [
      'Over the past two weeks we have been installing drainage and utilities infrastructure to enable us to begin work on the primary access route.',
      'Careful groundwork planning ensures long-term reliability and sustainable surface runoff management.',
    ],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-5',
    slug: 'site-commencement-at-horseshoe-lane-west',
    title: 'SITE COMMENCEMENT AT HORSESHOE LANE WEST',
    date: '2024-10-01',
    formattedDate: 'October 01, 2024',
    summary: 'We are delighted to be underway on our latest project at 25 & 25a Horseshoe Lane West. This development ...',
    content: [
      'We are delighted to be underway on our latest project at 25 & 25a Horseshoe Lane West. This development brings three distinctive, high-specification homes to Merrow.',
      'Fencing, site offices, and tree preservation zones have been fully enacted.',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-6',
    slug: 'construction-phase-at-horseshoe-lane-west',
    title: 'CONSTRUCTION PHASE AT HORSESHOE LANE WEST',
    date: '2024-09-11',
    formattedDate: 'September 11, 2024',
    summary: 'With planning permission in place, Aspen Homes have been working towards getting ourselves in the best position to begin ...',
    content: [
      'With planning permission in place, Aspen Homes have been working towards getting ourselves in the best position to begin physical works.',
      'Our team is collaborating with award-winning architects and structural engineers.',
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-7',
    slug: 'planning-permission-at-horseshoe-lane-west',
    title: 'PLANNING PERMISSION AT HORSESHOE LANE WEST',
    date: '2023-10-12',
    formattedDate: 'October 12, 2023',
    summary: 'We were delighted to receive approval from Guildford Borough Council for our development of 3 new homes at Horseshoe ...',
    content: [
      'We were delighted to receive approval from Guildford Borough Council for our development of 3 new homes at Horseshoe Lane West.',
      'Our consultative design method ensured overwhelming local stakeholder support.',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'test-1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    quote: 'The whole process of buying a home from Aspen has been extremely positive. We are delighted with the attention to detail and the quality of workmanship throughout, resulting in a very high standard home which in my opinion, is second to none.',
    author: 'Mr and Mrs S Eaves',
    location: 'Owners of 52 Pewley Hill, Guildford',
    hasTextOverlayDefault: true,
  },
  {
    id: 'test-2',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    quote: 'What has also been particularly pleasing is the after sales service we have received. Aspen has always gone out of its way to ensure even the inevitable small teething problems were dealt with efficiently and without fuss.',
    author: 'Mr & Mrs Henderson',
    location: 'Merrow Croft, Guildford',
  },
  {
    id: 'test-3',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    quote: 'I have already recommended Aspen Homes to friends of ours who are now in the process of buying a new home from them — I know they will not be disappointed.',
    author: 'David & Claire Thorne',
    location: 'Pewley Hill, Guildford',
  },
  {
    id: 'test-4',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    quote: 'Joe Jelley of Aspen Homes moved quickly and efficiently from point of offer on the site we introduced to his firm; his energy and attention to detail carried on throughout the transaction. The outcome was two stunning family homes nestled at the top of Farnham Park.',
    author: 'Land & New Homes Director',
    location: 'Estate Agency, Farnham',
    hasTextOverlayDefault: true,
  },
  {
    id: 'test-5',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    quote: 'From architectural concept to key handover, Aspen Homes demonstrated impeccable standards. The finish of the kitchen and vaulted entertaining space exceeded all expectations.',
    author: 'Robert & Sarah King',
    location: 'Merrow Downs, Surrey',
  },
  {
    id: 'test-6',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
    quote: 'A housebuilder with genuine integrity and respect for the local Surrey architectural vernacular. Our home feels solid, beautifully insulated, and exquisitely detailed.',
    author: 'The Campbell Family',
    location: 'Guildford, Surrey',
  },
  {
    id: 'test-7',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    quote: 'The craftsmanship and interior finishes in our new home are simply breathtaking. We could not have asked for a smoother purchase experience.',
    author: 'James & Helen Morrison',
    location: 'Surrey',
  },
  {
    id: 'test-8',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    quote: 'Aspen Homes brings a level of bespoke refinement that is rare in today’s housebuilding industry. Every junction, lighting fixture, and oak joinery detail was crafted with care.',
    author: 'Bespoke Interior Consultant',
    location: 'Guildford',
  },
  {
    id: 'test-9',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    quote: 'Living in an Aspen Home has been a dream for our family. The balance between open sociable areas and private quiet rooms is masterfully thought through.',
    author: 'Marcus & Fiona Lloyd',
    location: 'Merrow, Surrey',
  },
];

export const VIDEOS_LIST: VideoItem[] = [
  {
    id: 'video-main',
    title: 'Merrow Croft, Guildford – Architectural Walkthrough',
    duration: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/images/2020/04/Aspen-Homes-Developments-Video.mp4',
    isLarge: true,
  },
  {
    id: 'video-1',
    title: '50 Pewley Hill – Award Winning Excellence',
    duration: '2:15',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/images/2021/10/17-Merrow-Croft.mp4',
  },
  {
    id: 'video-2',
    title: 'Bespoke Kitchen & Living Spaces Tour',
    duration: '1:50',
    thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/images/2020/04/Foreman-Manor-Ash-Development-Video.mp4',
  },
  {
    id: 'video-3',
    title: 'Precision Craftsmanship on Site – Horseshoe Lane West',
    duration: '2:30',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/images/2021/10/Kitchens-Video-For-Website.mp4',
  },
  {
    id: 'video-4',
    title: 'Landscape & Garden Integration Tour',
    duration: '1:40',
    thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/images/2021/10/Bathroom-Video-Final-2.mp4',
  },
  {
    id: 'video-5',
    title: 'Butterfly House – Surrey Hills Showcase',
    duration: '3:10',
    thumbnail: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/images/2021/10/Finishing-Touches.mp4',
  },
  {
    id: 'video-6',
    title: 'Behind the Scenes with Paul Hack & Team',
    duration: '2:55',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/images/2021/10/Interior-Finishes-Complete.mp4',
  },
];
