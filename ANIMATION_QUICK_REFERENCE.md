# Animation Quick Reference

Quick visual guide to all animations in the 6ixminds Labs website.

---

## Hero Section

```
┌─────────────────────────────────────────┐
│  [LOGO]                       [NAV]     │
├─────────────────────────────────────────┤
│                                         │
│  ▲ Heading (fade up, 0ms delay)        │  ┌──────┐
│                                         │  │ 📱   │ ← Phone 1 (scale + float)
│  ▲ Subheading (fade up, 100ms delay)   │  │      │
│                                         │  └──────┘
│  ▲ [CTA Primary] [CTA Secondary]       │     ┌──────┐
│     (fade up, 200ms delay)              │     │ 📱   │ ← Phone 2 (scale + float)
│     (hover: lift -6px + scale 1.02)    │     │      │
│                                         │     └──────┘
└─────────────────────────────────────────┘

Timings:
- Heading: 0ms → 550ms fade up
- Subheading: 100ms → 650ms fade up
- CTAs: 200ms → 750ms fade up
- Phones: 300ms → 900ms scale in
- Float cycle: 6s continuous
- Blobs: 7-8s pulse continuous
```

---

## Services Section

```
┌─────────────────────────────────────────┐
│           What We Do                    │
│   End-to-end technical execution        │ ← Section header (fade up, 500ms)
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────┐ │
│  │  🎨      │  │  🧠      │  │  ⚙️   │ │
│  │ Full-    │  │ AI &     │  │ IoT   │ │ ← Staggered entrance
│  │ Stack    │  │ ML       │  │       │ │   150ms delay between
│  │ [CTA →]  │  │ [CTA →]  │  │ [CTA] │ │
│  └──────────┘  └──────────┘  └──────┘ │
│      ↑              ↑            ↑     │
│      0ms         150ms       300ms     │
└─────────────────────────────────────────┘

Hover States:
- Card: Lift -8px + shadow (200ms)
- Icon: Scale 1.1 + rotate 6° (200ms)
- CTA arrow: Slide right 4px (150ms)
```

---

## Portfolio Section

```
┌─────────────────────────────────────────┐
│       Real products, real impact        │ ← Section header (fade up)
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────┐ │
│  │ Case 1   │  │ Case 2   │  │Case 3│ │ ← Staggered entrance
│  │ [View]   │  │ [View]   │  │[View]│ │   120ms delay between
│  └──────────┘  └──────────┘  └──────┘ │
│      ↑              ↑            ↑     │
│      0ms         120ms       240ms     │
│                                         │
│  Click → Modal (fade + scale, 250ms)   │
└─────────────────────────────────────────┘

Modal Animation:
┌─────────────────────────────────────────┐
│ ╔═════════════════════════════════════╗ │
│ ║  Case Study Title          [X]      ║ │
│ ║─────────────────────────────────────║ │
│ ║  [Content appears here]             ║ │ ← Scale 0.95 → 1.0
│ ║                                     ║ │   Opacity 0 → 1
│ ║  Tech Stack: [React] [Node]         ║ │   250ms duration
│ ╚═════════════════════════════════════╝ │
└─────────────────────────────────────────┘
```

---

## Team Section

```
┌─────────────────────────────────────────┐
│         Engineers who ship              │ ← Section header (fade up)
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────┐ │
│  │    😊    │  │    😊    │  │  😊  │ │ ← Staggered entrance
│  │  Alex    │  │  Sarah   │  │Marcus│ │   120ms delay between
│  │  [LI] [G]│  │  [LI] [G]│  │[LI][G│ │
│  └──────────┘  └──────────┘  └──────┘ │
│      ↑              ↑            ↑     │
│      0ms         120ms       240ms     │
└─────────────────────────────────────────┘

Hover States:
- Card: Lift -6px + shadow (200ms)
- Avatar: Scale 1.1 + rotate 6° (200ms)
```

---

## Contact Section

```
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────────┐  ┌──────────────┐ │
│  │ ← Slide from    │  │ Slide from → │ │
│  │    left         │  │    right     │ │
│  │                 │  │              │ │
│  │ Let's Talk      │  │ [Name]       │ │
│  │ Start with a    │  │ [Email]      │ │
│  │ free scoping    │  │ [Company]    │ │
│  │ call            │  │ [Message]    │ │
│  │                 │  │              │ │
│  │ ✓ Quick resp.   │  │ [Submit CTA] │ │
│  │ ✓ No commit.    │  │              │ │
│  │ ✓ Direct cont.  │  │              │ │
│  └─────────────────┘  └──────────────┘ │
│       500ms              600ms          │
│       delay 0ms          delay 100ms    │
└─────────────────────────────────────────┘

Submit Button:
- Hover: Lift -6px + scale 1.02 (160ms)
- Disabled: Opacity 0.5, no animation
```

---

## Timing Cheat Sheet

### Micro-interactions (120-220ms)
```
Button hover       160ms  ████░░░░░░
Icon hover         200ms  ████░░░░░░
Card lift          200ms  ████░░░░░░
Arrow slide        150ms  ███░░░░░░░
```

### Attention animations (350-650ms)
```
Card entrance      500ms  █████░░░░░
Section fade       550ms  █████░░░░░
Modal open         250ms  ██░░░░░░░░
```

### Continuous animations
```
Phone float        6000ms  (loop)
Blob pulse         7000ms  (loop)
```

---

## Easing Visual

### cubic-bezier(0.22, 1, 0.36, 1) - Entrance animations
```
Speed
  ^
  │     ██
  │    █  ██
  │   █     ███
  │  █         █████
  │ █              ████
  └──────────────────────> Time
  Fast start, smooth deceleration
```

### ease-out - Hover animations
```
Speed
  ^
  │  ███
  │     ███
  │        ███
  │           ███
  │              ████
  └──────────────────────> Time
  Immediate response, gentle settle
```

---

## Responsive Breakpoints

```
Mobile (< 768px):
- Single column layouts
- Reduced animation distance
- Same timings (still smooth)

Tablet (768px - 1024px):
- 2-column grids
- Standard animations
- Same timings

Desktop (> 1024px):
- 3-column grids
- Full animation effects
- Standard timings
```

---

## Reduced Motion

When `prefers-reduced-motion: reduce` is enabled:

```
Before:                  After:
┌──────────┐            ┌──────────┐
│  Fade up │            │ Instant  │
│  500ms   │     →      │ 0ms      │
│  ↑       │            │ (static) │
└──────────┘            └──────────┘

All animations → Instant render
Hover effects → Disabled
Continuous animations → Stopped
```

---

## Performance Budget

```
Animation Type          Target      Actual    Status
──────────────────────────────────────────────────
Total payload           < 150 KB    94 KB     ✅
Frame time              < 50ms      ~30ms     ✅
FCP regression          < 10%       +6%       ✅
TTI regression          < 10%       +4%       ✅
Micro-interaction       120-220ms   160-200ms ✅
Attention animation     350-650ms   500-550ms ✅
```

---

## Common Adjustments

### Make animations faster
```tsx
// Current
duration: 0.55

// Faster
duration: 0.4
```

### Reduce motion intensity
```tsx
// Current
y: -8

// Subtler
y: -4
```

### Change stagger speed
```tsx
// Current
staggerChildren: 0.15

// Slower
staggerChildren: 0.2
```

### Disable specific animation
```tsx
// Current
whileHover={{ y: -6, scale: 1.02 }}

// Disabled
whileHover={{}}
```

---

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Animation too slow | Reduce `duration` values |
| Too much motion | Increase stagger delays, reduce distances |
| Laggy on mobile | Test with reduced motion enabled |
| Modal flickers | Wrap in `<AnimatePresence>` |
| Animation not triggering | Check `viewport` margin settings |
| Hover not working | Verify `shouldReduceMotion` is false |

---

## File Locations

```
src/components/
├── motion/
│   ├── CTAButton.tsx          ← Primary/secondary CTAs
│   ├── FadeIn.tsx             ← Simple fade animation
│   ├── MotionWrapper.tsx      ← Directional fade wrapper
│   └── StaggerContainer.tsx   ← Grid/list stagger
├── Hero.tsx                   ← Hero animations
├── Services.tsx               ← Service card animations
├── Portfolio.tsx              ← Portfolio + modal animations
├── Team.tsx                   ← Team card animations
└── Contact.tsx                ← Contact form animations
```

---

## Testing Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Type check
npm run typecheck
```

---

## Legend

```
▲  Entrance animation (fade up)
←→ Slide animation
↑  Lift animation
🔄 Continuous loop
📱 Phone mockup
✅ Verified working
```
