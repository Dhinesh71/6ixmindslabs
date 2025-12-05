# Quick Start Guide

Get your enhanced 6ixminds Labs website running in 5 minutes.

---

## 1. Install & Run

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

**Open:** http://localhost:5173

---

## 2. What You'll See

### Enhanced Sections
✅ **Hero** - Gradient text + pointer parallax + floating phone mockups
✅ **Services** - Lottie pulse animations on hover
✅ **Portfolio** - 3D tilt cards with video preview (configurable)
✅ **Team** - Circular 3D gallery (keyboard navigable)
✅ **Contact** - Animated form with Lottie success celebration

---

## 3. Quick Customizations

### Enable Spline 3D (Optional)

**File:** `src/components/HeroEnhanced.tsx`
**Line:** 40

```tsx
// Change this:
const USE_SPLINE = false;

// To this:
const USE_SPLINE = true;

// And add your Spline URL:
const SPLINE_SCENE_URL = 'https://prod.spline.design/YOUR-SCENE-ID';
```

### Change Brand Colors

**File:** `tailwind.config.js`
**Lines:** 18-19

```js
'brand-purple': '#8A3FFC',  // Change to your primary color
'brand-pink': '#FF5CA3',    // Change to your accent color
```

### Update Team Members

**File:** `src/components/TeamEnhanced.tsx`
**Lines:** 7-58

Edit the `team` array with your team data.

### Update Portfolio Projects

**File:** `src/data/projects.ts`

Edit the `projects` array with your project data.

---

## 4. Add Your Assets

### Replace Lottie Animations

1. Download from [LottieFiles](https://lottiefiles.com/)
2. Replace in `public/lottie/`:
   - `hero-accent.json`
   - `service-icon.json`
   - `success-tick.json`

### Add Video Previews

1. Place videos in `public/videos/`
2. Add to projects:
   ```tsx
   videoPreview: '/videos/project-preview.mp4'
   ```
3. Optimize: MP4, 1280x720, < 2 MB

### Replace Images

1. Place images in `public/`
2. Update paths in:
   - `src/data/projects.ts` (project images)
   - `public/logo.jpg` (navigation logo)

---

## 5. Build & Deploy

### Build Production

```bash
npm run build
```

**Output:** `dist/` folder

### Preview Build

```bash
npm run preview
```

**Open:** http://localhost:4173

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

**Or push to GitHub and connect to Vercel.**

---

## 6. Performance Check

### Run Lighthouse

1. Build: `npm run build`
2. Preview: `npm run preview`
3. Open Chrome DevTools → Lighthouse
4. Run audit

**Targets:**
- Performance: > 90
- FCP: < 1.8s
- TTI: < 3.5s

---

## Common Tasks

### Disable Animations

**File:** Any component
```tsx
// Check if user prefers reduced motion
const shouldReduceMotion = useReducedMotion();

// Conditionally animate
animate={shouldReduceMotion ? {} : { y: -10 }}
```

### Adjust Animation Speed

**File:** Any component
```tsx
// Change duration (in seconds)
transition={{ duration: 0.5 }}  // 500ms

// Change easing
transition={{ ease: 'easeOut' }}
```

### Add New Section

1. Create component in `src/components/`
2. Import in `src/AppEnhanced.tsx`
3. Add to main:
   ```tsx
   <YourNewSection />
   ```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Animations Laggy

```tsx
// Reduce parallax sensitivity
usePointerParallax({
  maxTiltX: 4,  // Lower value
  maxTiltY: 4,
  speed: 0.3,   // Slower interpolation
})
```

### Bundle Too Large

1. Lazy-load Lottie: `const Lottie = lazy(() => import('lottie-react'))`
2. Remove unused dependencies
3. Tree-shake libraries

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/AppEnhanced.tsx` | Main app with all sections |
| `src/components/HeroEnhanced.tsx` | Hero section |
| `src/components/ServicesEnhanced.tsx` | Services cards |
| `src/components/PortfolioEnhanced.tsx` | Portfolio grid |
| `src/components/TeamEnhanced.tsx` | Team section |
| `src/components/ContactEnhanced.tsx` | Contact form |
| `src/data/projects.ts` | Portfolio data |
| `tailwind.config.js` | Brand colors |
| `public/lottie/` | Lottie animations |

---

## Documentation

📚 **Full Guides:**
- `ENHANCED_README.md` - Complete setup guide
- `PERFORMANCE_GUIDE.md` - Performance optimization
- `BUILD_SUMMARY.md` - Build analysis
- `IMPLEMENTATION_SUMMARY.md` - What's new

---

## Support

Need help?
- Email: 6ixmindslabs@gmail.com
- Check `ENHANCED_README.md` for detailed docs

---

**You're all set! 🚀**
