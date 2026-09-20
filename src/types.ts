export interface ServiceItem {
  id: string;
  name: string;
  category: 'nail' | 'beauty' | 'lips';
  categoryLabel: string;
  description: string;
  image: string;
  priceNote: string;
  highlights?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'nails' | 'beauty' | 'lashes' | 'brows' | 'salon';
  image: string;
  description?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}
