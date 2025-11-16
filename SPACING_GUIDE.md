# MARGINZ Website - Unified Spacing & UI/UX Guide

## Overview
This document outlines the standardized spacing system implemented across the MARGINZ website to ensure consistent, professional UI/UX design.

## Design Principles

### 1. **Consistent Spacing Scale**
All spacing follows an 8px base unit system for mathematical harmony and visual consistency:
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

### 2. **Responsive Spacing**
Spacing adapts across breakpoints:
- **Mobile (< 768px)**: Tighter spacing for smaller screens
- **Tablet (768px - 1024px)**: Medium spacing
- **Desktop (> 1024px)**: Full spacing for optimal readability

### 3. **Container Max-Width**
All sections use a consistent max-width of **1400px** for:
- Optimal reading length
- Balanced white space
- Professional appearance

## Spacing Implementation

### Section Padding
```css
/* Mobile */
py-20 (80px vertical)
px-6 (24px horizontal)

/* Tablet */
md:py-24 (96px vertical)
md:px-8 (32px horizontal)

/* Desktop */
lg:py-32 (128px vertical)
lg:px-12 (48px horizontal)
```

### Content Gaps
```css
/* Between elements in a section */
gap-6 md:gap-8 lg:gap-10

/* Between grid items */
gap-8 md:gap-10 lg:gap-12

/* Between major sections */
space-y-6 md:space-y-8
```

### Typography Spacing
```css
/* Heading margins */
mb-6 (24px bottom margin)

/* Paragraph spacing */
leading-relaxed (line-height: 1.7)

/* Section titles */
mb-16 md:mb-20 (64px-80px bottom margin)
```

## Typography Scale

### Headings
All headings use responsive `clamp()` for fluid scaling:

```css
/* Main Section Headings (H2) */
font-size: clamp(28px, 4.5vw, 56px)

/* Sub-headings (H3) */
font-size: clamp(24px, 3.5vw, 48px)

/* Body Text */
font-size: clamp(16px, 1.25vw, 18px)
line-height: 1.7
```

### Benefits of clamp()
- Smooth scaling between breakpoints
- No jarring size jumps
- Maintains readability at all sizes
- Reduces need for multiple media queries

## Component-Specific Guidelines

### Hero Section
- **Padding**: `pt-32 pb-24 md:pt-40 md:pb-32`
- **Max-width**: 1400px
- **Spacing**: `space-y-8 md:space-y-12`

### About Section
- **Padding**: `py-20 md:py-24 lg:py-32`
- **Grid Gap**: `gap-12 md:gap-16 lg:gap-24`
- **Content Spacing**: `space-y-6 md:space-y-8`

### Why Margins Section
- **Padding**: `py-20 md:py-24 lg:py-32`
- **Grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Gap**: `gap-8 md:gap-10 lg:gap-12`

### Projects Section
- **Padding**: `py-20 md:py-24 lg:py-32`
- **Grid Gap**: `gap-6 md:gap-8 lg:gap-10`
- **Card Height**: Consistent at 400px

### Quality Section
- **Padding**: `py-20 md:py-24 lg:py-32`
- **Grid Gap**: `gap-12 md:gap-16 lg:gap-24`
- **Content Spacing**: `space-y-6 md:space-y-8`

### Creative Cards Section
- **Padding**: `py-20 md:py-24 lg:py-32`
- **Grid Gap**: `gap-6 md:gap-8`
- **Card Padding**: `p-8`

### Methodology Section
- **Padding**: `py-20 md:py-24 lg:py-32`
- **Section Spacing**: `mb-16 md:mb-20`
- **Grid Gap**: `gap-12 md:gap-16 lg:gap-24`

### Testimonials Section
- **Padding**: `py-20 md:py-24 lg:py-32`
- **Grid Gap**: `gap-8 md:gap-10 lg:gap-12`

### Footer
- **Padding**: `py-16 md:py-20`
- **Top Margin**: `mt-20 md:mt-24 lg:mt-32`
- **Grid Gap**: `gap-8 md:gap-10 lg:gap-12`

## Alignment Guidelines

### Text Alignment
- **Headings**: Center-aligned for section titles
- **Body Text**: Left-aligned for readability
- **CTAs**: Center-aligned in hero, left-aligned in sections

### Image Alignment
- **Full-width images**: Contained within max-width container
- **Grid images**: Equal heights within rows
- **Aspect ratios**: Maintained consistently

### Grid Alignment
- **2-column layouts**: Equal width columns with consistent gaps
- **3-column layouts**: Equal width with responsive stacking
- **Vertical alignment**: `items-center` for balanced layouts

## Color & Contrast

### Text Colors
- **Primary Text**: `text-black` or `text-gray-900`
- **Secondary Text**: `text-gray-600` or `text-gray-700`
- **Muted Text**: `text-gray-500`

### Background Colors
- **Primary**: `bg-white`
- **Alternate**: `bg-gray-50` or gradient backgrounds
- **Cards**: `bg-white` with shadows

## Accessibility Considerations

### Spacing for Touch Targets
- **Minimum button size**: 44x44px
- **Button padding**: `px-6 py-3` or larger
- **Interactive element spacing**: Minimum 8px gap

### Reading Width
- **Optimal line length**: 60-80 characters
- **Max-width for text**: 1400px container
- **Paragraph max-width**: `max-w-4xl` (896px)

### Focus States
- **Visible focus rings**: 2px solid with offset
- **Keyboard navigation**: Clear visual indicators

## Best Practices

### Do's ✅
- Use the spacing scale consistently
- Maintain responsive spacing across breakpoints
- Keep text within optimal reading width
- Use consistent grid gaps
- Apply proper heading hierarchy

### Don'ts ❌
- Don't use arbitrary spacing values
- Don't mix spacing systems
- Don't create overly wide text blocks
- Don't use inconsistent gaps in grids
- Don't skip responsive breakpoints

## Implementation Checklist

When creating or updating a section:

- [ ] Apply consistent section padding (`py-20 md:py-24 lg:py-32`)
- [ ] Use max-width container (`max-w-[1400px]`)
- [ ] Implement responsive horizontal padding (`px-6 md:px-8 lg:px-12`)
- [ ] Use consistent grid gaps (`gap-8 md:gap-10 lg:gap-12`)
- [ ] Apply responsive typography with clamp()
- [ ] Maintain consistent spacing between elements (`space-y-6 md:space-y-8`)
- [ ] Ensure proper heading margins (`mb-16 md:mb-20`)
- [ ] Test on mobile, tablet, and desktop viewports

## CSS Variables Reference

The spacing system is defined in `src/styles/spacing.css`:

```css
:root {
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  --container-2xl: 1400px;
  --section-padding-y: 6rem;
  --section-padding-x: 1.5rem;
  --grid-gap-md: 2rem;
}
```

## Maintenance

### Regular Reviews
- Audit spacing consistency quarterly
- Check responsive behavior on new devices
- Update documentation with new patterns
- Gather user feedback on readability

### Version Control
- Document spacing changes in commit messages
- Review spacing in pull requests
- Test across browsers and devices
- Maintain this guide with updates

---

**Last Updated**: November 2024  
**Version**: 1.0  
**Maintained by**: MARGINZ Development Team
