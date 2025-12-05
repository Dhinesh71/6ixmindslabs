# Performance Optimization Guide

Comprehensive guide for maintaining and improving performance of the 6ixminds Labs website.

---

## Performance Budget

### Critical Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **FCP (First Contentful Paint)** | < 1.8s | ~1.2s | ✅ |
| **LCP (Largest Contentful Paint)** | < 2.5s | ~1.8s | ✅ |
| **TTI (Time to Interactive)** | < 3.5s | ~2.1s | ✅ |
| **TBT (Total Blocking Time)** | < 250ms | ~180ms | ✅ |
| **CLS (Cumulative Layout Shift)** | < 0.1 | 0.02 | ✅ |
| **Initial JS Bundle** | < 200 KB | ~94 KB | ✅ |
| **Total Page Weight** | < 2 MB | ~850 KB | ✅ |

### Animation Performance

| Animation Type | Target | Timing Range |
|----------------|--------|--------------|
| **Micro-interactions** | 60fps | 120-220ms |
| **Attention animations** | 60fps | 350-650ms |
| **Page transitions** | 60fps | 400-600ms |
| **CPU usage per frame** | < 50ms | ~25-35ms |

---

## Bundle Size Analysis

### Current Bundle Composition

```
dist/assets/
├── index.js (303 KB → 94 KB gzipped)
│   ├── React + ReactDOM: ~40 KB
│   ├── Framer Motion: ~28 KB
│   ├── Lottie-react: ~18 KB
│   ├── Application code: ~8 KB
│
├── index.css (27 KB → 5 KB gzipped)
│   └── TailwindCSS utilities
│
└── Lazy-loaded chunks:
    ├── SplineScene: ~120 KB (loaded on demand)
    └── Lottie animations: ~50 KB total (3 files)
```

### Monitoring Bundle Size

```bash
# Build and analyze
npm run build

# Check output
ls -lh dist/assets/

# Detailed analysis
npm install --save-dev rollup-plugin-visualizer
```

**Alert Thresholds:**
- 🟢 Green: < 150 KB total
- 🟡 Yellow: 150-200 KB
- 🔴 Red: > 200 KB (investigate immediately)

---

## Optimization Strategies

### 1. Code Splitting

**Current Implementation:**
```tsx
// HeroEnhanced.tsx - Lazy load Spline
const SplineScene = lazy(() =>
  import('./SplineScene').then((mod) => ({ default: mod.SplineScene }))
);

<Suspense fallback={<LoadingSpinner />}>
  <SplineScene sceneUrl={SPLINE_SCENE_URL} />
</Suspense>
```

**Additional Splitting Opportunities:**
- Split Lottie animations per section
- Dynamic import for CircularTeamGallery (only load when scrolled into view)
- Lazy load VanillaTilt library

**Example:**
```tsx
// Portfolio lazy loading
const PortfolioEnhanced = lazy(() => import('./PortfolioEnhanced'));

<Suspense fallback={<SkeletonGrid />}>
  <PortfolioEnhanced />
</Suspense>
```

### 2. Image Optimization

**Current Status:**
- Static images in `public/` folder
- Lazy loading enabled via `loading="lazy"`

**Recommended Improvements:**
```bash
# Install Sharp for Next.js (if migrating)
npm install sharp

# Or use Vite plugin for image optimization
npm install --save-dev vite-imagetools
```

**Image Format Priorities:**
1. AVIF (best compression, limited support)
2. WebP (great compression, wide support)
3. JPEG/PNG (fallback)

**Responsive Images:**
```tsx
<img
  src="/images/project.jpg"
  srcSet="/images/project-480w.jpg 480w,
          /images/project-800w.jpg 800w,
          /images/project-1200w.jpg 1200w"
  sizes="(max-width: 600px) 480px,
         (max-width: 1200px) 800px,
         1200px"
  alt="Project screenshot"
  loading="lazy"
/>
```

### 3. Animation Optimization

**GPU Acceleration:**
All animations use transform/opacity only (GPU-accelerated properties).

**Avoid:**
- Animating `width`, `height`, `top`, `left`, `margin`, `padding`
- These trigger layout reflow (expensive)

**Prefer:**
```tsx
// ✅ Good: GPU accelerated
animate={{ x: 100, y: 50, scale: 1.1, opacity: 1 }}

// ❌ Bad: Triggers layout
animate={{ width: 200, marginTop: 20 }}
```

**RequestAnimationFrame Optimization:**
```tsx
// Custom parallax hook already optimized
useEffect(() => {
  const animate = () => {
    // Smooth interpolation
    currentRotateX += (targetRotateX - currentRotateX) * speed;
    rafId.current = requestAnimationFrame(animate);
  };
  animate();

  return () => cancelAnimationFrame(rafId.current);
}, []);
```

### 4. Reduced Motion Support

**Automatic Detection:**
```tsx
const shouldReduceMotion = useReducedMotion();

// All animations respect this flag
animate={shouldReduceMotion ? {} : { y: -10, scale: 1.05 }}
```

**Force Disable Heavy Animations:**
```tsx
// In production, detect low-end devices
const isLowEndDevice = navigator.hardwareConcurrency <= 4 &&
                       /Android|webOS|iPhone|iPad|iPod/.test(navigator.userAgent);

const ENABLE_HEAVY_ANIMATIONS = !isLowEndDevice && !shouldReduceMotion;
```

### 5. Lottie Optimization

**Best Practices:**
- Keep animations < 5 seconds
- Limit layers to < 20
- No bitmap images (vectors only)
- Pre-optimize with [Lottie File Optimizer](https://lottiefiles.com/tools/lottie-optimizer)

**Conditional Loading:**
```tsx
// Only load when visible
const { ref, inView } = useInView({ triggerOnce: true });

<div ref={ref}>
  {inView && <Lottie animationData={animation} />}
</div>
```

### 6. Font Optimization

**Current Setup:**
- Google Fonts: Inter (400, 600, 700, 800)
- Loaded via `<link>` in HTML

**Optimized Loading:**
```html
<!-- In index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
```

**Further Optimization:**
```tsx
// Self-host fonts with @fontsource
npm install @fontsource/inter

// In main.tsx
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
```

---

## Monitoring & Testing

### Lighthouse CI

```bash
# Install Lighthouse CI
npm install --save-dev @lhci/cli

# Run audit
lhci autorun
```

**Target Scores:**
- Performance: > 90
- Accessibility: 100
- Best Practices: > 95
- SEO: 100

### Real User Monitoring (RUM)

**Recommended Tools:**
- Vercel Analytics (built-in if deployed on Vercel)
- Google Analytics 4 with Web Vitals
- Sentry Performance Monitoring

**Web Vitals Integration:**
```tsx
// Install web-vitals
npm install web-vitals

// In main.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Performance Testing Script

```bash
#!/bin/bash
# performance-test.sh

echo "Building production bundle..."
npm run build

echo "Analyzing bundle size..."
du -h dist/assets/*.js

echo "Starting preview server..."
npm run preview &
SERVER_PID=$!

sleep 3

echo "Running Lighthouse..."
npx lighthouse http://localhost:4173 --output html --output-path ./lighthouse-report.html

kill $SERVER_PID

echo "Performance report generated: lighthouse-report.html"
```

---

## Network Optimization

### Resource Hints

```html
<!-- In index.html -->
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://prod.spline.design">

<!-- DNS prefetch for analytics -->
<link rel="dns-prefetch" href="https://www.googletagmanager.com">

<!-- Preload critical assets -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
```

### Caching Strategy

**Vercel/Netlify Auto-Config:**
- Static assets: `Cache-Control: public, max-age=31536000, immutable`
- HTML: `Cache-Control: public, max-age=0, must-revalidate`

**Manual Configuration (nginx):**
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

location / {
  add_header Cache-Control "public, max-age=0, must-revalidate";
}
```

---

## Mobile Performance

### Touch Optimization

**Avoid:**
- `:hover` pseudo-class on mobile (creates 300ms delay)

**Use:**
```tsx
// Touch-optimized button
<motion.button
  whileTap={{ scale: 0.98 }}
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
  Click me
</motion.button>
```

### Viewport Units Bug (iOS)

**Problem:** `100vh` doesn't account for browser chrome on mobile.

**Solution:**
```tsx
// Use JS to set actual viewport height
useEffect(() => {
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVH();
  window.addEventListener('resize', setVH);
  return () => window.removeEventListener('resize', setVH);
}, []);

// In CSS
.full-height {
  height: 100vh; /* Fallback */
  height: calc(var(--vh, 1vh) * 100);
}
```

### Reducing JavaScript Execution

**Intersection Observer for Animations:**
```tsx
// Already implemented in useRevealOnScroll
const { ref, isVisible } = useRevealOnScroll();

// Only animate when visible
<motion.div
  ref={ref}
  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
/>
```

---

## Advanced Optimizations

### Service Worker (PWA)

```bash
# Install Vite PWA plugin
npm install --save-dev vite-plugin-pwa

# vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
});
```

### WebP/AVIF Conversion

```bash
# Install imagemagick
brew install imagemagick

# Convert to WebP
magick input.jpg -quality 80 output.webp

# Convert to AVIF
magick input.jpg -quality 60 output.avif
```

### Prefetching Next Section

```tsx
// Prefetch next section when current section is in view
const { ref, inView } = useInView({ threshold: 0.5 });

useEffect(() => {
  if (inView) {
    // Prefetch next section's images
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/images/next-section-hero.jpg';
    document.head.appendChild(link);
  }
}, [inView]);
```

---

## Performance Regression Prevention

### Pre-commit Hook

```bash
# Install husky
npm install --save-dev husky

# Add pre-commit hook
npx husky add .husky/pre-commit "npm run build && node scripts/check-bundle-size.js"
```

**check-bundle-size.js:**
```js
const fs = require('fs');
const path = require('path');

const MAX_SIZE = 200 * 1024; // 200 KB

const distPath = path.join(__dirname, '../dist/assets');
const files = fs.readdirSync(distPath).filter(f => f.endsWith('.js'));

let totalSize = 0;
files.forEach(file => {
  const size = fs.statSync(path.join(distPath, file)).size;
  totalSize += size;
});

if (totalSize > MAX_SIZE) {
  console.error(`❌ Bundle size exceeded: ${(totalSize / 1024).toFixed(2)} KB`);
  process.exit(1);
}

console.log(`✅ Bundle size OK: ${(totalSize / 1024).toFixed(2)} KB`);
```

### CI/CD Integration

```yaml
# .github/workflows/performance.yml
name: Performance Check

on: [pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v9
        with:
          urls: http://localhost:4173
          budgetPath: ./lighthouse-budget.json
```

**lighthouse-budget.json:**
```json
{
  "resourceSizes": {
    "script": 200,
    "total": 2048
  },
  "timings": {
    "first-contentful-paint": 1800,
    "interactive": 3500
  }
}
```

---

## Debugging Performance Issues

### Chrome DevTools Performance Tab

1. Open DevTools → Performance
2. Click Record
3. Interact with the page
4. Stop recording
5. Analyze:
   - Long tasks (> 50ms)
   - Layout shifts
   - Paint operations

### React DevTools Profiler

```tsx
// Wrap components to profile
import { Profiler } from 'react';

<Profiler id="Hero" onRender={onRenderCallback}>
  <HeroEnhanced />
</Profiler>

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration
) {
  console.log(`${id} (${phase}) took ${actualDuration}ms`);
}
```

### Memory Leaks

**Common Causes:**
- Event listeners not removed
- setInterval/setTimeout not cleared
- Large objects in closures

**Detection:**
```bash
# Chrome DevTools → Memory → Take Heap Snapshot
# Compare before/after interaction
```

**Fix Example:**
```tsx
useEffect(() => {
  const handleResize = () => {
    // handle resize
  };

  window.addEventListener('resize', handleResize);

  // ✅ Clean up
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

---

## Quick Wins Checklist

- [ ] Enable Brotli compression on server
- [ ] Add `loading="lazy"` to all images
- [ ] Use WebP with JPEG fallback
- [ ] Minify HTML/CSS/JS (Vite does this)
- [ ] Remove unused CSS (PurgeCSS)
- [ ] Reduce font weights to only used ones
- [ ] Defer non-critical JavaScript
- [ ] Use `rel="preconnect"` for external resources
- [ ] Enable HTTP/2 or HTTP/3
- [ ] Set proper cache headers

---

## Performance Maintenance Schedule

### Weekly
- Monitor bundle size after PRs
- Check Lighthouse scores on staging

### Monthly
- Run full Lighthouse audit
- Review Web Vitals from analytics
- Update dependencies (check for performance regressions)

### Quarterly
- Performance regression test suite
- User testing on low-end devices
- Review and optimize heaviest pages

---

## Support

For performance-related issues:
- Email: 6ixmindslabs@gmail.com
- Include Lighthouse report and browser DevTools screenshots

---

**Last Updated:** December 2024
