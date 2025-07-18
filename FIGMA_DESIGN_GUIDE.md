# Figma Design Guide - Cool Heads Men Website Redesign

## 🎨 Design Specifications for Figma

This document provides detailed specifications for recreating the Cool Heads Men website design in Figma, inspired by The Spot Barbershop aesthetic.

## 📐 Frame Specifications

### Desktop (1920x1080)
- **Width**: 1920px
- **Height**: 1080px (minimum, extendable)
- **Grid**: 12-column grid system
- **Margins**: 40px on each side
- **Gutters**: 20px

### Tablet (768x1024)
- **Width**: 768px
- **Height**: 1024px
- **Grid**: 8-column grid system
- **Margins**: 24px on each side
- **Gutters**: 16px

### Mobile (375x812)
- **Width**: 375px
- **Height**: 812px
- **Grid**: 4-column grid system
- **Margins**: 16px on each side
- **Gutters**: 12px

## 🎨 Color Palette

### Primary Colors
```
Primary Gold: #d4af37
Secondary Dark: #2c2c2c
Accent Brown: #8b4513
```

### Text Colors
```
Text Dark: #1a1a1a
Text Light: #ffffff
Text Gray: #666666
```

### Background Colors
```
Background Light: #f8f8f8
Background Dark: #1a1a1a
Border Color: #e0e0e0
```

### Status Colors
```
Success Green: #28a745
Error Red: #dc3545
Warning Orange: #ffc107
```

## 🔤 Typography

### Font Families
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Font Sizes & Weights

#### Desktop
```
H1: 48px, Weight 700 (Hero Title)
H2: 36px, Weight 600 (Section Headers)
H3: 24px, Weight 600 (Card Titles)
H4: 20px, Weight 600 (Sub Headers)
Body Large: 18px, Weight 400
Body: 16px, Weight 400
Body Small: 14px, Weight 400
Caption: 12px, Weight 400
```

#### Mobile
```
H1: 32px, Weight 700
H2: 28px, Weight 600
H3: 20px, Weight 600
H4: 18px, Weight 600
Body Large: 16px, Weight 400
Body: 14px, Weight 400
Body Small: 12px, Weight 400
Caption: 10px, Weight 400
```

## 🧩 Component Specifications

### Header Component
- **Height**: 80px (Desktop), 60px (Mobile)
- **Background**: rgba(26, 26, 26, 0.95) with backdrop blur
- **Logo**: Left-aligned, 24px font size
- **Navigation**: Right-aligned, 14px font size, uppercase
- **Book Now Button**: Primary gold background, 10px padding

### Hero Section
- **Height**: 100vh
- **Background**: Dark gradient with overlay image
- **Content**: Centered, max-width 600px
- **CTA Buttons**: Primary and secondary styles
- **Social Sidebar**: Fixed right, 50px square buttons

### Service Cards
- **Dimensions**: 280px x 320px (Desktop)
- **Background**: White
- **Border Radius**: 12px
- **Shadow**: 0 4px 6px rgba(0, 0, 0, 0.1)
- **Icon**: 80px circle, primary gold background
- **Hover Effect**: translateY(-5px), enhanced shadow

### Location Cards
- **Dimensions**: 300px x 200px (Desktop)
- **Background**: White
- **Border**: 1px solid #e0e0e0
- **Border Radius**: 8px
- **Image**: 50px x 50px, border-radius 6px
- **Hover Effect**: Border color change to primary gold

### Buttons

#### Primary Button
- **Background**: #d4af37
- **Text Color**: #1a1a1a
- **Padding**: 12px 24px
- **Border Radius**: 6px
- **Font**: Inter, 14px, Weight 500, Uppercase
- **Hover**: Background #c19b2e, translateY(-2px)

#### Secondary Button
- **Background**: Transparent
- **Text Color**: #ffffff
- **Border**: 2px solid #ffffff
- **Padding**: 12px 24px
- **Border Radius**: 6px
- **Hover**: Background #ffffff, Text #1a1a1a

#### Outline Button
- **Background**: Transparent
- **Text Color**: #1a1a1a
- **Border**: 2px solid #1a1a1a
- **Padding**: 12px 24px
- **Border Radius**: 6px
- **Hover**: Background #1a1a1a, Text #ffffff

### Modal Component
- **Background**: White
- **Border Radius**: 12px
- **Max Width**: 500px
- **Shadow**: 0 8px 15px rgba(0, 0, 0, 0.2)
- **Header**: 20px padding, border-bottom
- **Body**: 20px padding
- **Footer**: 20px padding, border-top

## 📍 Location Grid Layout

### Desktop Grid
- **Columns**: 4 columns (auto-fit, minmax 300px)
- **Gap**: 20px
- **Container**: Max-height 600px, scrollable
- **Cards per row**: 3-4 depending on screen width

### Mobile Grid
- **Columns**: 1 column
- **Gap**: 16px
- **Container**: Max-height 400px, scrollable
- **Cards per row**: 1

## 🎭 Animation Specifications

### Transitions
- **Duration**: 0.3s
- **Easing**: ease
- **Properties**: all

### Hover Effects
- **Cards**: translateY(-5px)
- **Buttons**: translateY(-2px)
- **Social Links**: translateY(-3px)
- **Chat Widget**: scale(1.1)

### Loading Animations
- **Fade In**: 0.6s ease-out
- **Direction**: translateY(20px) to translateY(0)

## 📱 Responsive Breakpoints

### Desktop (1200px+)
- Full navigation visible
- Social sidebar visible
- 4-column location grid
- Full hero section

### Tablet (768px - 1199px)
- Condensed navigation
- Hidden social sidebar
- 2-3 column location grid
- Adjusted hero section

### Mobile (< 768px)
- Hamburger menu
- Hidden social sidebar
- 1-column location grid
- Stacked hero content

## 🖼️ Image Specifications

### Hero Background
- **Aspect Ratio**: 16:9
- **Resolution**: 1920x1080px minimum
- **Format**: JPG/WebP
- **Optimization**: Compressed for web

### Location Images
- **Size**: 50px x 50px
- **Format**: JPG/WebP
- **Border Radius**: 6px
- **Fallback**: Placeholder with location initials

### Service Icons
- **Size**: 80px x 80px (circle)
- **Format**: SVG preferred
- **Color**: #1a1a1a on #d4af37 background

### Gallery Images
- **Size**: 200px x 200px
- **Format**: JPG/WebP
- **Border Radius**: 8px
- **Grid**: 3x2 layout

## 🎨 Design Elements

### Shadows
```
Light Shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
Hover Shadow: 0 8px 15px rgba(0, 0, 0, 0.2)
Modal Shadow: 0 8px 15px rgba(0, 0, 0, 0.2)
```

### Border Radius
```
Small: 4px (buttons, small elements)
Medium: 6px (cards, images)
Large: 8px (location cards)
Extra Large: 12px (service cards, modals)
```

### Spacing System
```
4px: Extra small spacing
8px: Small spacing
12px: Medium spacing
16px: Large spacing
20px: Extra large spacing
24px: Section spacing
40px: Page margins
```

## 🔧 Interactive States

### Button States
- **Default**: Primary color
- **Hover**: Darker shade, slight lift
- **Active**: Pressed state
- **Disabled**: 50% opacity, no hover

### Form States
- **Default**: Light border
- **Focus**: Primary gold border
- **Error**: Red border
- **Success**: Green border

### Navigation States
- **Default**: White text
- **Hover**: Primary gold text
- **Active**: Primary gold text, bold

## 📋 Figma Organization

### Pages Structure
1. **Design System** (Colors, Typography, Components)
2. **Desktop** (1920x1080 frames)
3. **Tablet** (768x1024 frames)
4. **Mobile** (375x812 frames)
5. **Components** (Reusable elements)
6. **Prototypes** (Interactive flows)

### Component Naming
```
Header/Navigation
Hero/Hero Section
Services/Service Card
Locations/Location Card
About/About Section
Footer/Footer Section
Modal/Booking Modal
Button/Primary Button
Button/Secondary Button
Button/Outline Button
```

### Layer Organization
```
Frame Name
├── Background
├── Header
├── Hero
├── Services
├── Locations
├── About
├── Footer
└── Modals
```

## 🚀 Export Specifications

### Images
- **Format**: WebP (primary), JPG (fallback)
- **Quality**: 80-85%
- **Sizes**: 1x, 2x for retina displays

### Icons
- **Format**: SVG (preferred), PNG (fallback)
- **Size**: 24px base size
- **Color**: Current color (for SVG)

### Components
- **Export as**: Individual components
- **Include**: All states and variations
- **Documentation**: Component descriptions

## 📝 Notes for Implementation

1. **Start with Desktop**: Design desktop version first
2. **Use Auto Layout**: For responsive components
3. **Create Components**: For reusable elements
4. **Test Interactions**: Prototype key user flows
5. **Document States**: All interactive states
6. **Optimize Assets**: Compress images and icons
7. **Follow Grid**: Use consistent grid system
8. **Maintain Hierarchy**: Clear visual hierarchy

## 🎯 Design Goals

- **Professional**: Clean, sophisticated appearance
- **Modern**: Contemporary design trends
- **Accessible**: High contrast, readable text
- **Fast**: Optimized for performance
- **Responsive**: Works on all devices
- **User-Friendly**: Intuitive navigation and interactions

---

**Remember**: This design should feel premium and professional while being highly functional and user-friendly. The focus is on creating a seamless booking experience while showcasing all 25 locations efficiently. 