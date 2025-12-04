# 6ixminds Labs Website

Production-ready company website for 6ixminds Labs — an engineering-first shop specializing in Full-Stack, AI, and IoT solutions.

## Features

- Clean, professional white background design
- Interactive hero section with 3D placeholder (ready for Spline integration)
- Responsive design with mobile-first approach
- Accessibility-focused with ARIA labels and keyboard navigation
- Reduced-motion support for users with motion sensitivity
- SEO-optimized with meta tags and structured data
- Performance-optimized with lazy loading and efficient animations

## Technology Stack

- React 18 + TypeScript
- Vite for fast development and optimized builds
- Tailwind CSS for styling with custom color tokens
- Lucide React for icons
- Inter font for typography

## Color Palette

- Primary Background: `#FFFFFF` (white)
- Primary Text: `#0B0B0B` (dark charcoal)
- Muted Text: `#6B6B6B` (neutral gray)
- Accent 1: `#6C2FA5` (deep violet)
- Accent 2: `#A13EA8` (rich magenta)
- Accent 3: `#C6A3E0` (soft lavender)
- UI Muted Background: `#F5F5F7` (light gray)

## Sections

1. **Hero** - Main value proposition with interactive 3D visualization placeholder
2. **Services** - Three core offerings (Full-Stack Web, AI/ML, IoT) with hover animations
3. **Portfolio** - Flagship case studies with modal details
4. **Process** - Four-step timeline showing the workflow
5. **Team** - Team member profiles with expertise
6. **Contact** - Lead capture form with validation
7. **Footer** - Company info, links, and social media

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Lint
npm run lint
```

## Future Enhancements

### 3D Integration
The hero section is designed to integrate with Spline or Three.js for an interactive 3D scene showing:
- Server/cloud infrastructure
- Dashboard/laptop interface
- IoT device with signal rings
- Animated data flow particles

Replace the placeholder in `src/components/Hero.tsx` with your 3D viewer component.

### Recommended Assets
- Logo file (SVG or PNG with transparency)
- Team member photos
- Case study images/screenshots
- 3D scene files (Spline .glb export or Three.js models)

### Performance Optimization
- Use `next/image` if migrating to Next.js
- Implement code splitting for modal components
- Add service worker for offline support
- Compress images with AVIF/WebP formats

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Respects prefers-reduced-motion
- Sufficient color contrast ratios

## SEO

- Semantic HTML with proper heading hierarchy
- Meta tags in index.html
- Structured data (schema.json in public folder)
- Descriptive alt text for images
- Fast loading times (LCP < 2.5s target)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Proprietary - 6ixminds Labs
