const store = {
  users: [],
  vendors: [
    {
      id: 'v1',
      name: 'Accra Tech Hub',
      approved: true,
      category: 'Products',
      location: { lat: 5.6037, lng: -0.187 },
      rating: 4.7,
    },
    {
      id: 'v2',
      name: 'Kumasi Beauty Lounge',
      approved: true,
      category: 'Services',
      location: { lat: 6.6885, lng: -1.6244 },
      rating: 4.5,
    },
  ],
  products: [{ id: 'p1', name: 'HP EliteBook 840', vendorId: 'v1', price: 4200, stock: 8 }],
  bookings: [],
  orders: [],
};

module.exports = store;
