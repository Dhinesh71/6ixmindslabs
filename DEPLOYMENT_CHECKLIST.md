# Deployment Checklist

## Pre-Launch Checklist

### Content
- [ ] Update all project images in `src/data/projects.ts`
- [ ] Update team member information in `TeamFinal.tsx`
- [ ] Update contact email addresses
- [ ] Update phone numbers in footer
- [ ] Update social media links
- [ ] Review all text content for accuracy

### Branding
- [ ] Replace `/public/logo.jpg` with final logo
- [ ] Update favicon in `index.html`
- [ ] Verify brand colors in `tailwind.config.js`
- [ ] Check gradient consistency across sections

### Functionality
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify all external links open in new tabs
- [ ] Check portfolio project links
- [ ] Test keyboard navigation (Tab, Arrow keys)

### 3D & Animations
- [ ] Verify 3D spheres render on all browsers
- [ ] Test animations on mobile devices
- [ ] Check reduced motion works (System Settings)
- [ ] Verify Lottie animations play correctly
- [ ] Test parallax effects on desktop

### Responsive Design
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test at breakpoints: 320px, 768px, 1024px, 1440px, 1920px
- [ ] Verify no horizontal scroll
- [ ] Check all touch targets >= 44px

### Performance
- [ ] Run `npm run build` successfully
- [ ] Check bundle size (should be ~453 KB gzipped)
- [ ] Run Lighthouse audit (Performance > 90)
- [ ] Verify FCP < 1.8s
- [ ] Verify TTI < 3.5s
- [ ] Test on 3G throttled connection
- [ ] Check for memory leaks (DevTools Memory tab)

### Accessibility
- [ ] Test with keyboard only (no mouse)
- [ ] Verify focus states visible
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Check color contrast (WCAG AA)
- [ ] Enable reduced motion and verify animations disable
- [ ] Verify all images have alt text
- [ ] Check form labels and error messages

### SEO
- [ ] Update title in `index.html`
- [ ] Update meta description
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Update `public/schema.json` with correct URLs
- [ ] Create `robots.txt`
- [ ] Create `sitemap.xml`

### Security
- [ ] Remove console.log statements
- [ ] Check for exposed API keys
- [ ] Verify HTTPS only
- [ ] Add Content Security Policy headers
- [ ] Test form validation and sanitization

---

## Build Process

### 1. Final Build
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Type check
npm run typecheck

# Lint
npm run lint

# Build
npm run build

# Preview
npm run preview
```

### 2. Verify Build Output
```bash
# Check bundle sizes
ls -lh dist/assets/

# Expected:
# - index.js: ~453 KB gzipped
# - index.css: ~7 KB gzipped
```

### 3. Test Production Build
- [ ] Open `http://localhost:4173`
- [ ] Navigate through all sections
- [ ] Test all interactions
- [ ] Check console for errors
- [ ] Verify 3D renders correctly
- [ ] Test animations

---

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

**Settings:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: 18.x

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

**Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

**Add `netlify.toml`:**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Option 3: Custom Server (Nginx)

**Build:**
```bash
npm run build
```

**Nginx Config:**
```nginx
server {
    listen 80;
    server_name 6ixminds.com;

    root /var/www/6ixminds/dist;
    index index.html;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Post-Deployment

### Immediate Checks
- [ ] Visit live URL
- [ ] Test on mobile device
- [ ] Check SSL certificate
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check 3D rendering

### Analytics Setup
- [ ] Add Google Analytics
- [ ] Add Plausible Analytics (privacy-friendly)
- [ ] Set up error tracking (Sentry)
- [ ] Configure Web Vitals monitoring

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure performance monitoring
- [ ] Set up email alerts for downtime
- [ ] Monitor Core Web Vitals

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify Open Graph tags with Facebook Debugger
- [ ] Test Twitter Card with Twitter Card Validator

---

## Environment Variables

If using API keys or sensitive data, create `.env.local`:

```env
# Example (not currently used)
VITE_CONTACT_API_URL=https://...
VITE_GA_TRACKING_ID=G-...
```

**Never commit `.env.local` to version control!**

---

## Rollback Plan

If issues occur after deployment:

1. **Vercel:**
   ```bash
   vercel rollback
   ```

2. **Netlify:**
   - Go to Netlify Dashboard
   - Deploys → Previous Deploy → Publish

3. **Custom:**
   - Keep previous `dist` folder as backup
   - Swap folders if needed

---

## Performance Targets

### Lighthouse Scores
```
Performance:     > 90
Accessibility:   100
Best Practices:  > 95
SEO:             100
```

### Core Web Vitals
```
FCP:  < 1.8s
LCP:  < 2.5s
CLS:  < 0.1
TTI:  < 3.5s
TBT:  < 250ms
```

### Bundle Size
```
Main JS:  < 500 KB gzipped
CSS:      < 10 KB gzipped
Total:    < 510 KB
```

---

## Troubleshooting

### 3D Not Rendering
- Check browser WebGL support
- Verify Three.js loaded correctly
- Check console for errors
- Test in incognito mode

### Slow Performance
- Run Lighthouse audit
- Check Network tab for large files
- Verify lazy loading works
- Test on slower device/network

### Layout Broken
- Test at specific breakpoint
- Check browser DevTools console
- Verify CSS loaded correctly
- Clear browser cache

### Form Not Working
- Check form validation
- Test console for errors
- Verify email service configured
- Test with different inputs

---

## Support Contacts

- Development: 6ixmindslabs@gmail.com
- Hosting: [Your hosting provider]
- Domain: [Your domain registrar]

---

## Post-Launch Tasks

### Week 1
- [ ] Monitor analytics daily
- [ ] Check for errors in console
- [ ] Review user feedback
- [ ] Fix any critical issues

### Month 1
- [ ] Run performance audit
- [ ] Review analytics data
- [ ] Update content based on feedback
- [ ] Plan improvements

### Quarterly
- [ ] Update dependencies
- [ ] Security audit
- [ ] Performance review
- [ ] Content refresh

---

## Success Criteria

✅ All tests passing
✅ Lighthouse score > 90
✅ No console errors
✅ Works on all major browsers
✅ Mobile responsive
✅ 3D renders correctly
✅ Animations smooth (60fps)
✅ Accessible (WCAG AA)
✅ Fast load time (< 3s)
✅ SSL enabled

---

**Ready to deploy when all checks pass!**
