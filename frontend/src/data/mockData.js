export const categories = ['Products', 'Services', 'Bookings', 'Deals'];

export const vendors = [
  {
    id: 'v1',
    name: 'Accra Tech Hub',
    description: 'Electronics, repairs, and laptop accessories.',
    rating: 4.7,
    distanceKm: 2.5,
    location: { lat: 5.6037, lng: -0.187 },
  },
  {
    id: 'v2',
    name: 'Kumasi Beauty Lounge',
    description: 'Hair, makeup, and bridal services.',
    rating: 4.5,
    distanceKm: 3.8,
    location: { lat: 6.6885, lng: -1.6244 },
  },
];

export const products = [
  {
    id: 'p1',
    title: 'HP EliteBook 840',
    price: 4200,
    stock: 8,
    rating: 4.8,
    vendorId: 'v1',
    images: ['/placeholder-1.jpg', '/placeholder-2.jpg'],
    description: 'Reliable business laptop with SSD and long battery life.',
  },
  {
    id: 'p2',
    title: 'Campus Backpack',
    price: 220,
    stock: 35,
    rating: 4.2,
    vendorId: 'v1',
    images: ['/placeholder-3.jpg'],
    description: 'Water-resistant backpack designed for students.',
  },
];

export const services = [
  {
    id: 's1',
    vendorId: 'v2',
    name: 'Bridal Makeup Session',
    price: 600,
    duration: '2 hours',
    description: 'Complete bridal glam with consultation and touch-up kit.',
    slots: ['2026-03-06T10:00:00', '2026-03-06T14:00:00', '2026-03-07T09:00:00'],
  },
];

export const paymentOptions = {
  local: ['MTN MoMo', 'Vodafone Cash', 'AirtelTigo Money', 'ExpressPay', 'Slydepay', 'Zeepay', 'Visa', 'Mastercard', 'Gh-Link'],
  international: ['PayPal', 'Stripe'],
};
