---
name: ExplorerX
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5a403f'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#8e706f'
  outline-variant: '#e2bebc'
  surface-tint: '#b52330'
  primary: '#b52330'
  on-primary: '#ffffff'
  primary-container: '#ff5a5f'
  on-primary-container: '#61000e'
  inverse-primary: '#ffb3b0'
  secondary: '#00696d'
  on-secondary: '#ffffff'
  secondary-container: '#8eeff4'
  on-secondary-container: '#006e72'
  tertiary: '#7e5700'
  on-tertiary: '#ffffff'
  tertiary-container: '#c38900'
  on-tertiary-container: '#3e2900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001b'
  secondary-fixed: '#91f2f7'
  secondary-fixed-dim: '#74d6db'
  on-secondary-fixed: '#002021'
  on-secondary-fixed-variant: '#004f52'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#ffba35'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style
The brand personality is adventurous yet sophisticated, striking a balance between the excitement of discovery and the reliability of a premium service. This design system adopts a **Minimalist** style with **Glassmorphism** accents to ensure that high-quality travel photography remains the focal point. 

The emotional response should be one of inspiration and clarity. By utilizing vast whitespace and a refined UI-layering strategy, the interface recedes to let the destination content breathe. Subtle transitions and high-end typography elevate the experience from a utility to a premium lifestyle product.

## Colors
The palette is led by **Sunset Orange**, a high-energy primary color used for critical actions and brand moments. **Deep Teal** serves as the secondary color, providing a professional and trustworthy grounding for secondary actions and success states. 

The neutral palette avoids pure black, opting instead for a range of warm grays that maintain a soft, premium feel. Backgrounds should primarily be pure white (#FFFFFF) to maximize the "gallery" effect for photography, while subtle off-white (#F7F7F7) is used for section differentiation.

## Typography
The typography system uses a tiered approach: **Plus Jakarta Sans** for headlines to provide a soft, welcoming, and modern geometric feel, and **Inter** for body text and labels to ensure maximum legibility and functional clarity.

Headlines use tight letter-spacing and heavy weights to create a strong visual hierarchy. Body copy is set with generous line-height to maintain the "airy" feel of the design system. On mobile devices, display sizes scale down aggressively to ensure headlines remain readable without forcing excessive scrolling.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to ensure content remains centered and premium, transitioning to a **Fluid Grid** for mobile. The spacing rhythm is based on an 8px base unit.

A defining characteristic of this layout is "generous breathing room." Section vertical spacing (stack-lg) is intentionally large to prevent the UI from feeling cluttered. Content cards should utilize consistent gutters to create a rhythmic, gallery-like flow. On mobile, side margins are reduced to 20px to maximize the horizontal real estate for imagery.

## Elevation & Depth
Hierarchy is established through **Ambient Shadows** and **Glassmorphism**. Surface depth is minimal but purposeful:
- **Level 0 (Base):** Pure white background.
- **Level 1 (Cards):** Subtle 1px border (#EBEBEB) with no shadow, or a very soft, high-diffusion shadow (0px 4px 20px rgba(0,0,0,0.05)) when hovering.
- **Level 2 (Floating UI):** Elements like search bars and "Book Now" sticky bars use a background blur (Backdrop Filter: blur(12px)) with a semi-transparent white fill (rgba(255, 255, 255, 0.8)) and a more pronounced shadow to indicate they sit above the content.
- **Overlays:** Use a soft neutral dimming (rgba(0,0,0,0.4)) to focus attention on modals.

## Shapes
The shape language is consistently **Rounded**. A radius of 0.5rem (8px) is the standard for most components, providing a modern and friendly appearance that isn't overly "bubbly." 

Larger containers and cards utilize the `rounded-xl` (24px) setting to echo the premium, approachable nature of the brand. Interactive elements like search inputs and primary buttons often lean toward a fully pill-shaped profile to differentiate them from static content containers.

## Components
- **Buttons:** Primary buttons are pill-shaped, using the Sunset Orange background with white text. Secondary buttons use a ghost style with a Deep Teal border.
- **Cards:** Travel cards are the system's core. They feature a top-heavy image ratio (4:3), 16px padding for text content, and no visible border unless in a "selected" state. The title is prominent, followed by secondary meta-data in a lighter gray.
- **Floating Search Bar:** A signature component. It should be pill-shaped, elevated with a Level 2 shadow, and contain segmented inputs for "Where," "When," and "Who."
- **Pill Filters:** Used for category selection. These are low-profile, rounded-full elements with a light gray border that fills with Deep Teal when active.
- **Rating Stars:** Use a small, solid Tertiary (Yellow) star followed by the numerical rating in bold, and the review count in parentheses.
- **Inputs:** Text fields use a 12px padding and a subtle 1px border. On focus, the border transitions to Deep Teal with a soft outer glow.