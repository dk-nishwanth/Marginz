# New Pages Documentation

## Overview
Three new pages have been added to the MARGINZ website, following the existing design theme with blue gradients, modern animations, and professional styling.

## Pages Created

### 1. About Us Page (`/about`)
**Location:** `src/pages/AboutUs.tsx`

**Sections:**
- **Hero Section**: Introduction to MARGINZ with animated background
- **Stats Section**: Key metrics (10+ Years, 500+ Projects, 98% Satisfaction, 50+ Team Members)
- **Core Values**: 6 value cards with icons (Mission-Driven, Innovation First, Trust & Integrity, Client-Centric, Excellence, Growth Mindset)
- **Leadership Team**: 4 team member cards with images and roles

**Design Features:**
- Blue gradient backgrounds matching the main theme
- Animated cards with hover effects
- Responsive grid layouts
- Motion animations using Framer Motion

### 2. Services Page (`/services`)
**Location:** `src/pages/Services.tsx`

**Sections:**
- **Hero Section**: Overview of services offered
- **Services Grid**: 6 main service offerings:
  - Custom Software Development
  - UI/UX Design
  - Mobile App Development
  - Cloud Solutions
  - Data Engineering
  - Cybersecurity
- **Process Section**: 4-step process (Discovery, Design & Planning, Development, Launch & Support)
- **CTA Section**: Call-to-action with gradient background

**Design Features:**
- Dark cards with gradient overlays
- Feature lists for each service
- Animated process timeline
- Colorful gradient accents for each service category

### 3. Contact Page (`/contact`)
**Location:** `src/pages/Contact.tsx`

**Sections:**
- **Hero Section**: Welcome message
- **Contact Info Cards**: Email, Phone, and Address with icons
- **Contact Form**: Full-featured form with:
  - Name (required)
  - Email (required)
  - Company (optional)
  - Message (required)
- **Why Choose MARGINZ**: Benefits list with checkmarks
- **Business Hours**: Operating hours card
- **Global Offices**: 3 office locations (San Francisco, New York, London)

**Design Features:**
- Interactive form with validation
- Hover animations on contact cards
- Two-column layout for form and additional info
- Office location cards with hours

## Routing Implementation

### Router Setup
- Installed `react-router-dom`
- Updated `src/App.tsx` with BrowserRouter
- Created NavBar component with active link highlighting
- Automatic scroll to top on route change

### Navigation Structure
```
/ (Home) - Original landing page with all sections
/about - About Us page
/services - Services page
/contact - Contact page
```

### Navigation Features
- Active link highlighting in navbar
- Mobile-responsive menu
- Smooth transitions between pages
- Logo links back to home

## Design Consistency

All new pages maintain the existing design language:
- **Color Scheme**: Blue gradients (blue-50, sky-50, cyan-50)
- **Typography**: Same font sizes and weights using clamp()
- **Spacing**: Consistent padding and margins
- **Animations**: Framer Motion with similar timing and effects
- **Components**: Reusable card patterns with hover states
- **Icons**: Lucide React icons matching existing style

## Technical Details

### Dependencies Added
- `react-router-dom` - For client-side routing

### File Structure
```
src/
├── pages/
│   ├── AboutUs.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── index.ts
├── App.tsx (updated with routing)
└── components/ (existing)
```

### Responsive Design
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Grid layouts adapt from 1 to 2 to 3/4 columns
- Touch-friendly buttons and links

## Usage

### Development
```bash
npm run dev
```
Visit: http://localhost:3001

### Navigation
- Click "About Us" in navbar → `/about`
- Click "Services" in navbar → `/services`
- Click "Contact" in navbar → `/contact`
- Click "MARGINZ" logo → `/` (home)

## Future Enhancements

Potential improvements:
1. Add form submission backend integration
2. Implement newsletter subscription functionality
3. Add more team members with bio modals
4. Create case studies for services
5. Add testimonials to About page
6. Implement contact form validation feedback
7. Add Google Maps integration for offices
8. Create a blog section linked from Insights

## Notes

- All images use placeholder URLs from Unsplash
- Form submission currently logs to console
- Contact information is placeholder data
- All animations are optimized for performance
- Pages are fully accessible with semantic HTML
