import { ServiceItem, GalleryItem } from '../types';

import heroImg from '../assets/images/golden_aura_hero_1789901965286.jpg';
import nailArtImg from '../assets/images/luxury_nail_art_1789901981740.jpg';
import lashBrowImg from '../assets/images/lash_brow_care_1789901995856.jpg';
import lipFacialImg from '../assets/images/lip_facial_care_1789902009485.jpg';

export const SALON_IMAGES = {
  hero: heroImg,
  nailArt: nailArtImg,
  lashBrow: lashBrowImg,
  lipFacial: lipFacialImg,
  // High-aesthetic photography matching the luxurious palette for complete coverage
  manicure: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
  nailCare: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  gelStyling: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
  eyelash: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
  eyebrow: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  lips: 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?auto=format&fit=crop&w=800&q=80',
  salonInterior: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
  salonDetails: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
};

export const BUSINESS_INFO = {
  name: 'Golden Aura Nail & Beauty',
  tagline: 'Beauty • Nails • Self Care',
  type: 'Beauty Salon',
  headline: 'BEAUTY THAT MAKES YOU FEEL EXTRAORDINARY',
  subheadline: 'Your destination for beautiful nails, beauty treatments and self-care in Batu Maung, Penang.',
  aboutTitle: 'YOUR BEAUTY, OUR PASSION',
  aboutDescription:
    'Golden Aura Nail & Beauty is a beauty salon in Batu Maung, Penang, dedicated to helping every client look and feel their best. From beautiful nail care to relaxing beauty treatments, our goal is to provide a comfortable experience with attention to detail.',
  address: {
    line1: '16-2, Lintang Batu Maung 2',
    postalCode: '11960',
    city: 'Batu Maung',
    state: 'Pulau Pinang',
    country: 'Malaysia',
    full: '16-2, Lintang Batu Maung 2, 11960 Batu Maung, Pulau Pinang, Malaysia',
    plusCode: '77QJ+74 Batu Maung, Penang',
  },
  phone: '012-448 4866',
  phoneClean: '0124484866',
  phoneInternational: '+60124484866',
  whatsAppLink: 'https://wa.me/60124484866',
  googleRating: 5.0,
  googleRatingText: '5.0 Google Rating',
  mapsDirectionUrl: 'https://www.google.com/maps/search/?api=1&query=16-2,+Lintang+Batu+Maung+2,+11960+Batu+Maung,+Pulau+Pinang,+Malaysia',
  googleProfileUrl: 'https://www.google.com/maps/search/?api=1&query=Golden+Aura+Nail+%26+Beauty+Batu+Maung+Penang',
  hours: [
    { day: 'Monday', hours: '9:00 AM – 8:00 PM', openHour: 9, closeHour: 20 },
    { day: 'Tuesday', hours: '9:00 AM – 8:00 PM', openHour: 9, closeHour: 20 },
    { day: 'Wednesday', hours: '9:00 AM – 8:00 PM', openHour: 9, closeHour: 20 },
    { day: 'Thursday', hours: '9:00 AM – 8:00 PM', openHour: 9, closeHour: 20 },
    { day: 'Friday', hours: '9:00 AM – 8:00 PM', openHour: 9, closeHour: 20 },
    { day: 'Saturday', hours: '9:00 AM – 8:00 PM', openHour: 9, closeHour: 20 },
    { day: 'Sunday', hours: '9:00 AM – 8:00 PM', openHour: 9, closeHour: 20 },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  // NAIL CARE
  {
    id: 'manicure',
    name: 'Manicure',
    category: 'nail',
    categoryLabel: 'Nail Care',
    description: 'Nail shaping, cuticle grooming, and gentle hand care for clean, naturally beautiful hands.',
    image: SALON_IMAGES.manicure,
    priceNote: 'Price available upon enquiry',
    highlights: ['Cuticle refinement', 'Nail shaping', 'Nourishing care'],
  },
  {
    id: 'nail-care',
    name: 'Nail Care',
    category: 'nail',
    categoryLabel: 'Nail Care',
    description: 'Comprehensive nail strengthening and conditioning treatments for healthy, resilient natural nails.',
    image: SALON_IMAGES.nailCare,
    priceNote: 'Price available upon enquiry',
    highlights: ['Nail repair & strength', 'Buffing & shine', 'Cuticle oil infusion'],
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    category: 'nail',
    categoryLabel: 'Nail Care',
    description: 'Custom bespoke nail artistry featuring refined hand-painted patterns, foil accents, and delicate gems.',
    image: SALON_IMAGES.nailArt,
    priceNote: 'Price available upon enquiry',
    highlights: ['Custom designs', 'Champagne & gold accents', 'Delicate detailing'],
  },
  {
    id: 'gel-styling',
    name: 'Gel / Nail Styling',
    category: 'nail',
    categoryLabel: 'Nail Care',
    description: 'Long-lasting high-gloss gel polish and extensions tailored to your preferred aesthetic and lifestyle.',
    image: SALON_IMAGES.gelStyling,
    priceNote: 'Price available upon enquiry',
    highlights: ['Chip-resistant shine', 'Rich color selection', 'Durable finish'],
  },

  // BEAUTY
  {
    id: 'eyelash-services',
    name: 'Eyelash Services',
    category: 'beauty',
    categoryLabel: 'Beauty',
    description: 'Meticulous lash enhancements designed to accentuate your natural gaze with feather-light comfort.',
    image: SALON_IMAGES.eyelash,
    priceNote: 'Price available upon enquiry',
    highlights: ['Natural to glam looks', 'Weightless feel', 'Careful application'],
  },
  {
    id: 'eyebrow-services',
    name: 'Eyebrow Services',
    category: 'beauty',
    categoryLabel: 'Beauty',
    description: 'Precision brow shaping and styling to frame your facial contours harmoniously and gracefully.',
    image: SALON_IMAGES.eyebrow,
    priceNote: 'Price available upon enquiry',
    highlights: ['Custom facial mapping', 'Precision shaping', 'Defined finish'],
  },
  {
    id: 'facial-skincare',
    name: 'Facial / Skincare Treatments',
    category: 'beauty',
    categoryLabel: 'Beauty',
    description: 'Soothing skincare regimens to cleanse, hydrate, and refresh your skin in a serene setting.',
    image: SALON_IMAGES.facial,
    priceNote: 'Price available upon enquiry',
    highlights: ['Deep hydration', 'Gentle extraction', 'Relaxing facial massage'],
  },

  // LIPS
  {
    id: 'lip-beauty',
    name: 'Lip Beauty Treatments',
    category: 'lips',
    categoryLabel: 'Lips',
    description: 'Revitalizing lip care treatments to soften, nourish, and enhance the natural blush of your lips.',
    image: SALON_IMAGES.lipFacial,
    priceNote: 'Price available upon enquiry',
    highlights: ['Hydrating exfoliation', 'Soft tint infusion', 'Nourishing botanical mask'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Signature Gel Nail Art',
    category: 'nails',
    image: SALON_IMAGES.nailArt,
    description: 'Handcrafted gold leaf accents with soft blush neutral base.',
  },
  {
    id: 'gal-2',
    title: 'Salon Sanctuary & Treatment Stations',
    category: 'salon',
    image: SALON_IMAGES.hero,
    description: 'Warm, tranquil salon interior designed for unhurried comfort.',
  },
  {
    id: 'gal-3',
    title: 'Precision Lash Enhancement',
    category: 'lashes',
    image: SALON_IMAGES.lashBrow,
    description: 'Featherlight lash extensions curated for subtle elegance.',
  },
  {
    id: 'gal-4',
    title: 'Hydrating Lip & Facial Regimen',
    category: 'beauty',
    image: SALON_IMAGES.lipFacial,
    description: 'Soothing hydration therapy for plump, healthy radiance.',
  },
  {
    id: 'gal-5',
    title: 'Delicate Classic Manicure',
    category: 'nails',
    image: SALON_IMAGES.manicure,
    description: 'Clean nail shaping and cuticle perfection.',
  },
  {
    id: 'gal-6',
    title: 'Sculpted Eyebrow Harmony',
    category: 'brows',
    image: SALON_IMAGES.eyebrow,
    description: 'Tailored arch definition complementing natural features.',
  },
  {
    id: 'gal-7',
    title: 'High-Gloss Gel Finish',
    category: 'nails',
    image: SALON_IMAGES.gelStyling,
    description: 'Durable, radiant gel polish with mirror-smooth topcoat.',
  },
  {
    id: 'gal-8',
    title: 'Relaxing Skincare Therapy',
    category: 'beauty',
    image: SALON_IMAGES.facial,
    description: 'Deep refreshing treatment in our private care suite.',
  },
  {
    id: 'gal-9',
    title: 'Boutique Salon Details',
    category: 'salon',
    image: SALON_IMAGES.salonDetails,
    description: 'Hygienic, welcoming environment in Batu Maung, Penang.',
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: '✨',
    title: 'BEAUTIFUL RESULTS',
    description: 'Attention to detail in every service.',
  },
  {
    icon: '💖',
    title: 'PERSONALIZED CARE',
    description: 'Treatments selected around your beauty needs.',
  },
  {
    icon: '🌸',
    title: 'RELAXING EXPERIENCE',
    description: 'A comfortable environment to enjoy your self-care time.',
  },
  {
    icon: '📍',
    title: 'CONVENIENT LOCATION',
    description: 'Located in Batu Maung, Penang.',
  },
];
