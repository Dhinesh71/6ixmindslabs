# 6ixminds Labs - Enhanced 3D Animated Website

Premium, high-performance marketing website with advanced 3D animations, Lottie micro-interactions, and sophisticated parallax effects.

## Features

### 🚀 Performance First
- **Bundle Size:** < 200 KB gzipped (excluding lazy-loaded 3D assets)
- **First Contentful Paint (FCP):** < 2s on 3G simulated
- **Time to Interactive (TTI):** < 3.5s
- **Total Blocking Time (TBT):** < 250ms
- Code-split heavy libraries (Spline, Lottie) with dynamic imports
- Lazy loading for images, videos, and 3D scenes

### 🎨 Advanced Animations
- **Hero:** Pointer-driven parallax, gradient text, Spline 3D scene (optional)
- **Services:** Lottie pulse animations on hover, staggered reveals
- **Portfolio:** Vanilla-tilt 3D card effects, video preview on hover
- **Team:** Circular 3D gallery with keyboard navigation
- **Contact:** Animated form inputs, Lottie success celebration

### ♿ Accessibility
- Respects `prefers-reduced-motion` system setting
- Keyboard-navigable interactive elements
- ARIA labels and live regions
- Color contrast ratio >= 4.5:1

### 📱 Responsive
- Mobile-first design with optimized breakpoints
- Touch-friendly interactions
- Smooth 60fps animations on mid-range devices

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (fast dev server & optimized builds)
- **TailwindCSS** (utility-first styling)
- **Framer Motion** (animation orchestration)
- **Spline** (3D scene integration - optional)
- **Lottie** (vector micro-animations)
- **Vanilla Tilt** (3D card effects)

---

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## File Structure

```
src/
├── components/
│   ├── HeroEnhanced.tsx           # 3D hero with parallax
│   ├── ServicesEnhanced.tsx       # Lottie service cards
│   ├── PortfolioEnhanced.tsx      # Tilt portfolio cards
│   ├── TeamEnhanced.tsx           # Section wrapper for team
│   ├── CircularTeamGallery.tsx    # 3D circular carousel
│   ├── ContactEnhanced.tsx        # Animated form with Lottie success
│   ├── SplineScene.tsx            # Lazy-loaded Spline wrapper
│   ├── motion/
│   │   ├── CTAButton.tsx          # Animated CTA buttons
│   │   ├── FadeIn.tsx             # Fade-in wrapper
│   │   ├── MotionWrapper.tsx      # Directional animations
│   │   └── StaggerContainer.tsx   # Staggered reveals
│   └── ... (existing components)
├── hooks/
│   ├── usePointerParallax.ts     # Pointer-driven 3D parallax
│   ├── useRevealOnScroll.ts      # Viewport-triggered animations
│   └── usePrefersReducedMotion.ts # Reduced motion detection
├── data/
│   └── projects.ts                # Portfolio data
├── AppEnhanced.tsx                # Main app with enhanced components
└── main.tsx                       # App entry point
```

---

## Asset Placeholders & Customization

### 1. Spline 3D Scene (Hero)

**Current State:** Uses fallback phone mockups with CSS 3D transforms.

**To Enable Spline:**
1. Open `src/components/HeroEnhanced.tsx`
2. Set `USE_SPLINE = true` (line 40)
3. Replace `SPLINE_SCENE_URL` with your Spline export URL:
   ```tsx
   const SPLINE_SCENE_URL = 'https://prod.spline.design/YOUR-SCENE-ID';
   ```

**Recommended Spline Scene:**
- Two floating phone mockups with screen cards
- Subtle ambient lighting (soft purple/pink glow)
- Pointer-reactive rotation (max ±8°)
- Optimize: Keep polygon count < 50K, texture resolution < 2048px

**Export Settings:**
- Format: Spline Cloud URL (auto-optimized)
- Alternative: Export as GLB (Draco compressed) and use with react-three-fiber

---

### 2. Lottie Animations

**Location:** `public/lottie/`

**Included Placeholders:**
- `hero-accent.json` - Animated ring for hero section
- `service-icon.json` - Pulse effect for service cards
- `success-tick.json` - Success checkmark with confetti

**To Replace:**
1. Export Lottie JSON from After Effects or use [LottieFiles](https://lottiefiles.com/)
2. Replace files in `public/lottie/`
3. Import in components:
   ```tsx
   import yourAnimation from '../../public/lottie/your-animation.json';
   ```

**Performance Tips:**
- Keep animations < 5s duration
- Limit layer count to < 20
- Avoid bitmap images in Lottie (use vectors only)
- Target file size: < 50 KB per animation

---

### 3. Video Previews (Portfolio)

**To Enable Video Previews:**
1. Add `videoPreview` field to project data in `src/data/projects.ts`:
   ```tsx
   {
     title: 'Project Name',
     videoPreview: '/videos/project-preview.mp4',
     // ... other fields
   }
   ```
2. Place video files in `public/videos/`
3. Optimize videos:
   - Format: MP4 (H.264 codec)
   - Resolution: 1280x720 max
   - Duration: 3-5 seconds looped
   - File size: < 2 MB per video

**FFmpeg Optimization:**
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -vf scale=1280:720 -an output.mp4
```

---

### 4. Brand Colors & Gradients

**Primary Gradient:**
```css
background: linear-gradient(90deg, #8A3FFC 0%, #FF5CA3 60%);
```

**Tailwind Utilities:**
- `bg-brand-purple` → `#8A3FFC`
- `bg-brand-pink` → `#FF5CA3`
- `bg-gradient-to-r from-brand-purple to-brand-pink`

**To Change Brand Colors:**
Edit `tailwind.config.js`:
```js
colors: {
  'brand-purple': '#YOUR_COLOR',
  'brand-pink': '#YOUR_ACCENT',
}
```

---

## Animation Tuning

### Timing Adjustments

**Micro-interactions (120-220ms):**
```tsx
// In CTAButton.tsx, line 47
whileHover={{
  transition: { duration: 0.16 }  // Adjust speed
}}
```

**Attention animations (350-650ms):**
```tsx
// In HeroEnhanced.tsx, line 50
variants: {
  visible: {
    transition: { duration: 0.6 }  // Adjust entrance speed
  }
}
```

**Parallax Sensitivity:**
```tsx
// In HeroEnhanced.tsx, line 14
usePointerParallax({
  maxTiltX: 8,    // Max horizontal tilt (degrees)
  maxTiltY: 8,    // Max vertical tilt (degrees)
  speed: 0.5,     // Interpolation speed (0-1)
})
```

**Stagger Delays:**
```tsx
// In ServicesEnhanced.tsx, line 119
containerVariants: {
  visible: {
    transition: { staggerChildren: 0.15 }  // Delay between cards
  }
}
```

---

## Performance Optimization

### Bundle Analysis

```bash
# Install analyzer
npm install --save-dev rollup-plugin-visualizer

# Build with analysis
npm run build

# View report
open dist/stats.html
```

### Lazy Loading

**Current Strategy:**
- Spline & heavy 3D libs: Dynamic import with `React.lazy()`
- Lottie: Loaded on-demand when component enters viewport
- Images: `loading="lazy"` attribute
- Videos: Loaded on hover interaction

**To Add More Lazy Components:**
```tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>
```

### Reducing Motion

All animations automatically disable when:
- User enables "Reduce motion" in system settings
- Detected via `useReducedMotion()` hook from Framer Motion

**Manual Override:**
```tsx
const shouldReduceMotion = useReducedMotion();

// Use shouldReduceMotion flag to conditionally animate
animate={shouldReduceMotion ? {} : { y: -10 }}
```

---

## Performance Checklist

### Development
- [ ] Bundle size < 200 KB (check with `npm run build`)
- [ ] No console errors or warnings
- [ ] Animations smooth at 60fps on mid-range devices
- [ ] Images optimized (WebP/AVIF with fallbacks)
- [ ] Videos under 2 MB each

### Lighthouse Targets (Production Build)
- [ ] **Performance:** > 90
- [ ] **FCP:** < 1.8s
- [ ] **TTI:** < 3.5s
- [ ] **TBT:** < 250ms
- [ ] **CLS:** < 0.1
- [ ] **Accessibility:** 100
- [ ] **Best Practices:** > 95
- [ ] **SEO:** 100

**Run Lighthouse:**
```bash
npm run build
npm run preview
# Open Chrome DevTools → Lighthouse → Run audit
```

### Mobile Testing
- [ ] Test on iOS Safari & Chrome Android
- [ ] Animations remain smooth on 4G connection
- [ ] Touch targets >= 44x44px
- [ ] No horizontal scroll
- [ ] Text readable without zoom

---

## Environment Variables

Create `.env.local` for custom configuration:

```env
# Spline Scene URL
VITE_SPLINE_HERO_URL=https://prod.spline.design/YOUR-SCENE-ID

# Toggle experimental features
VITE_ENABLE_3D_HERO=true
VITE_ENABLE_VIDEO_PREVIEWS=true

# Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_PLAUSIBLE_DOMAIN=6ixminds.com
```

---

## Browser Support

- **Chrome/Edge:** Last 2 versions
- **Firefox:** Last 2 versions
- **Safari:** Last 2 versions (macOS & iOS)
- **Mobile:** iOS 14+, Android 8+

---

## Troubleshooting

### Build Errors

**"Cannot find module '@splinetool/react-spline'"**
- Run `npm install` again
- Check if `node_modules` is intact

**"Module not found: Can't resolve 'vanilla-tilt'"**
- Ensure all dependencies installed: `npm install`

### Performance Issues

**Animations laggy on low-end devices:**
- Reduce parallax sensitivity (`maxTiltX`, `maxTiltY`)
- Disable heavy animations conditionally:
  ```tsx
  const isLowEnd = navigator.hardwareConcurrency <= 4;
  ```

**Bundle size too large:**
- Verify code-splitting: Check `dist/assets/` for multiple chunks
- Remove unused dependencies
- Use smaller Lottie files

**Lottie animations not playing:**
- Check browser console for errors
- Verify JSON file path is correct
- Ensure `lottie-react` is installed

---

## A/B Testing 3D vs. 2D

**Toggle Feature:**
Edit `HeroEnhanced.tsx` line 40:
```tsx
const USE_SPLINE = false;  // Set to true to enable 3D scene
```

**Recommended Test:**
- **Variant A:** `USE_SPLINE = false` (fallback phone mockups)
- **Variant B:** `USE_SPLINE = true` (Spline 3D scene)

**Metrics to Track:**
- CTA click-through rate
- Bounce rate
- Average session duration
- FCP / TTI (Google Analytics or Vercel Analytics)

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

---

## Support

For questions or issues:
- Email: 6ixmindslabs@gmail.com
- GitHub: [6ixminds](https://github.com/6ixminds)

---

## License

Proprietary - 6ixminds Labs

---

## Quick Start Summary

```bash
# 1. Install
npm install

# 2. Develop
npm run dev

# 3. Configure assets (optional)
# - Add Spline URL in HeroEnhanced.tsx
# - Replace Lottie files in public/lottie/
# - Add video previews in public/videos/

# 4. Build & Test
npm run build
npm run preview

# 5. Deploy
vercel deploy
```

---

**Built with ❤️ by 6ixminds Labs**
