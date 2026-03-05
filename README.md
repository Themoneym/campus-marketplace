# CampusMarketplace (Ghana)

Full-stack starter implementation of a multi-vendor e-commerce + booking platform with location-based vendor discovery.

## Included

- **Frontend (React + Vite)** with pages for:
  - Homepage with hero, search, categories, featured vendors, trending products/services.
  - Product details page with review section and vendor link context.
  - Booking page with slot list and confirmation action.
  - Cart/checkout with Ghana payment options (MoMo, Gh-Link, ExpressPay, Slydepay, Zeepay, cards).
  - User dashboard for orders, bookings, reviews, and payment history.
  - Vendor registration and vendor dashboard pages.
  - Public vendor profile page.
  - Admin panel overview.
  - Location map integration placeholder component ready for Google Maps/Mapbox SDK.

- **Backend (Node + Express) API structure** for:
  - User registration/dashboard
  - Vendor onboarding/listing/dashboard
  - Product listing/creation
  - Booking creation/listing
  - Payment methods + payment confirmation endpoint
  - Nearby vendor search with radius/category filtering using Haversine distance
  - Admin approval and reports

## Run locally

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## What was not fully completed

1. **Production persistence**: currently uses an in-memory store instead of MongoDB/PostgreSQL.
2. **Authentication/authorization**: no JWT/session login enforcement implemented yet.
3. **Real payment gateway integration**: endpoints are mocked and require provider SDK integrations.
4. **Real map rendering**: current map is a UI placeholder; integrate Google Maps or Mapbox SDK and secure API keys.
5. **Notification delivery**: email/SMS flows are described but not wired to providers.
6. **AI recommendations**: noted as optional and not implemented in this scaffold.

This codebase is designed to be implementation-ready in structure and easy to extend into production.
