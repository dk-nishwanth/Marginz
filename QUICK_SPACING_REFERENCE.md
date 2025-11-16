# Quick Spacing Reference - MARGINZ Website

## 🎯 Quick Copy-Paste Patterns

### Standard Section Wrapper
```tsx
<section className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto mb-12 md:mb-16 lg:mb-20">
  {/* Your content */}
</section>
```

### Section with Hover Effects (Cards that lift)
```tsx
<section 
  className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto mb-16 md:mb-20 lg:mb-24"
  style={{ overflow: 'visible' }}
>
  {/* Cards with hover animations */}
</section>
```

### Section Header (Centered)
```tsx
<div className="text-center mb-16 md:mb-20 space-y-6">
  <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
    Section Label
  </p>
  <h2 className="text-black font-bold leading-tight" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
    Main Heading
  </h2>
  <p className="text-gray-600 max-w-4xl mx-auto px-4" style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}>
    Description text
  </p>
</div>
```

### 2-Column Grid
```tsx
<div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
  {/* Column 1 */}
  {/* Column 2 */}
</div>
```

### 3-Column Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
  {/* Cards */}
</div>
```

### Card Component
```tsx
<div className="bg-white rounded-2xl p-8 shadow-xl">
  {/* Card content */}
</div>
```

### Content Spacing
```tsx
<div className="space-y-6 md:space-y-8">
  {/* Stacked elements */}
</div>
```

## 📏 Spacing Values

| Use Case | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section Padding (Vertical) | `py-20` (80px) | `md:py-24` (96px) | `lg:py-32` (128px) |
| Section Padding (Horizontal) | `px-6` (24px) | `md:px-8` (32px) | `lg:px-12` (48px) |
| Section Bottom Margin (Standard) | `mb-12` (48px) | `md:mb-16` (64px) | `lg:mb-20` (80px) |
| Section Bottom Margin (With Hover) | `mb-16` (64px) | `md:mb-20` (80px) | `lg:mb-24` (96px) |
| Grid Gap (Small) | `gap-6` (24px) | `md:gap-8` (32px) | - |
| Grid Gap (Medium) | `gap-8` (32px) | `md:gap-10` (40px) | `lg:gap-12` (48px) |
| Grid Gap (Large) | `gap-12` (48px) | `md:gap-16` (64px) | `lg:gap-24` (96px) |
| Content Spacing | `space-y-6` (24px) | `md:space-y-8` (32px) | - |
| Section Header Margin | `mb-16` (64px) | `md:mb-20` (80px) | - |

## 🎨 Typography

### Headings
```tsx
// Main Section Heading (H2)
style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}

// Sub-heading (H3)
style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}

// Small Heading (H4)
style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
```

### Body Text
```tsx
// Standard Body
style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}

// Large Body
style={{ fontSize: 'clamp(18px, 1.5vw, 20px)', lineHeight: '1.7' }}
```

## 🎯 Common Patterns

### Hero Section
```tsx
<section className="relative w-full h-screen flex items-start justify-center overflow-hidden bg-white pt-32">
  <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-24 md:pt-40 md:pb-32">
    <div className="text-center space-y-8 md:space-y-12">
      {/* Hero content */}
    </div>
  </div>
</section>
```

### Two-Column Content + Image
```tsx
<section className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
  <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
    {/* Image */}
    <div className="relative">
      <img src="..." alt="..." className="w-full h-auto rounded-3xl" />
    </div>
    
    {/* Content */}
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-black font-bold leading-tight" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
        Heading
      </h2>
      <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(16px, 1.25vw, 18px)', lineHeight: '1.7' }}>
        Description
      </p>
    </div>
  </div>
</section>
```

### Card Grid Section
```tsx
<section className="py-20 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-[1400px] mx-auto">
    {/* Header */}
    <div className="text-center mb-16 md:mb-20 space-y-6">
      <h2 className="text-black font-bold leading-tight" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
        Section Title
      </h2>
    </div>
    
    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      {/* Card items */}
    </div>
  </div>
</section>
```

### Footer
```tsx
<footer className="bg-gray-900 text-white py-16 md:py-20 px-6 md:px-8 lg:px-12 mt-20 md:mt-24 lg:mt-32">
  <div className="max-w-[1400px] mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12">
      {/* Footer columns */}
    </div>
  </div>
</footer>
```

## 🎨 Color Classes

### Text Colors
```tsx
text-black          // Primary headings
text-gray-900       // Alternative primary
text-gray-700       // Secondary text
text-gray-600       // Body text
text-gray-500       // Muted text
text-white          // On dark backgrounds
```

### Background Colors
```tsx
bg-white            // Primary background
bg-gray-50          // Alternate section
bg-gray-900         // Dark sections (footer)
bg-gradient-to-br from-gray-50 to-white  // Subtle gradient
```

## 🔧 Utility Combinations

### Responsive Padding
```tsx
p-6 md:p-8 lg:p-10          // All sides
px-6 md:px-8 lg:px-12       // Horizontal only
py-20 md:py-24 lg:py-32     // Vertical only
```

### Responsive Gaps
```tsx
gap-6 md:gap-8              // Small gap
gap-8 md:gap-10 lg:gap-12   // Medium gap
gap-12 md:gap-16 lg:gap-24  // Large gap
```

### Responsive Spacing
```tsx
space-y-6 md:space-y-8      // Vertical stack
space-x-4 md:space-x-6      // Horizontal stack
```

### Responsive Margins
```tsx
mb-16 md:mb-20              // Bottom margin
mt-20 md:mt-24 lg:mt-32     // Top margin
```

## ✅ Checklist for New Sections

- [ ] Use standard section wrapper with responsive padding
- [ ] Apply max-w-[1400px] container
- [ ] Add bottom margin (mb-12 md:mb-16 lg:mb-20 or larger for hover effects)
- [ ] Use overflow: 'visible' for sections with hover animations
- [ ] Use consistent grid gaps
- [ ] Apply responsive typography with clamp()
- [ ] Use space-y for vertical stacking
- [ ] Add proper heading margins (mb-16 md:mb-20)
- [ ] Test on mobile, tablet, desktop
- [ ] Verify text readability
- [ ] Check alignment with other sections
- [ ] Test hover animations don't get clipped

## 🚫 Common Mistakes to Avoid

❌ Using arbitrary spacing values  
✅ Use the standardized scale

❌ Fixed font sizes  
✅ Use clamp() for fluid typography

❌ Inconsistent max-widths  
✅ Always use max-w-[1400px]

❌ Missing responsive breakpoints  
✅ Include mobile, tablet, desktop

❌ Uneven grid gaps  
✅ Use consistent gap patterns

## 📱 Responsive Testing

Test these breakpoints:
- **Mobile**: 375px, 414px
- **Tablet**: 768px, 1024px
- **Desktop**: 1280px, 1440px, 1920px

---

**Quick Tip**: Copy the patterns above and adjust content as needed. The spacing will remain consistent! 🎯
