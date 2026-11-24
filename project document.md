# Al-Batahan Contracting Establishment — Project Documentation

## 1. Client Overview

| Field | Details |
|---|---|
| **Client Name** | Al-Batahan Contracting Establishment |
| **Brand Name** | AlBatahan |
| **Location** | Riyadh, Kingdom of Saudi Arabia |
| **Industry** | Construction & Contracting |
| **Client Email** | albathan500@gmail.com |
| **Client Phone** | Saudi number (collected at setup) |

---

## 2. Domain & Email Setup

### 2.1 Domain Registration

| Field | Details |
|---|---|
| **Domain** | albathanksa.com |
| **Registrar** | Cloudflare Registrar |
| **Cost** | ~$11.17 / year |
| **Registration Date** | 18 November 2026 |
| **Expiry Date** | 18 November 2027 |
| **Auto-Renewal** | OFF (manual renewal preferred) |
| **WHOIS Privacy** | Enabled (free on Cloudflare) |
| **DNSSEC** | Enabled (free on Cloudflare) |

#### Domain Renewal Timeline

| Date | Event |
|---|---|
| 19 Oct 2027 | ⚠️ First reminder email (30 days before) |
| 04 Nov 2027 | ⚠️ Second reminder email (14 days before) |
| 11 Nov 2027 | 🚨 Urgent reminder (7 days before) |
| 17 Nov 2027 | 🚨 Final reminder (1 day before) |
| **18 Nov 2027** | **Domain expires** |
| 18 Dec 2027 | Grace period ends — normal price $11.17 |
| 17 Feb 2028 | Redemption period ends — high fee $80–200 |
| 23 Feb 2028 | Domain released to public permanently |

> **Important:** Renew before 18 Dec 2027 to avoid extra fees.

### 2.2 Business Email (Zoho Mail)

| Field | Details |
|---|---|
| **Provider** | Zoho Mail (Free Plan) |
| **Plan** | Forever Free (up to 5 users, 5 GB each) |
| **Cost** | $0 |
| **Account Created With** | albathan500@gmail.com |

#### Email Accounts

| Email Address | Purpose |
|---|---|
| sales@albathanksa.com | Sales enquiries |
| info@albathanksa.com | General information |
| projects@albathanksa.com | Project-related communication |

#### Zoho Free Plan Limitations

| Feature | Free Plan |
|---|---|
| Webmail access | ✅ Yes |
| Mobile app | ✅ Yes |
| Custom domain email | ✅ Yes |
| IMAP/POP3 (Outlook, Apple Mail) | ❌ Paid only (~$1/user/month) |

#### DNS Records Added in Cloudflare (for Zoho)

| Type | Name | Value | Purpose |
|---|---|---|---|
| TXT | @ | Zoho verification code | Domain ownership verification |
| MX | @ | mx.zoho.com (Priority 10) | Email routing |
| MX | @ | mx2.zoho.com (Priority 20) | Email routing (backup) |
| MX | @ | mx3.zoho.com (Priority 50) | Email routing (backup) |
| TXT | @ | v=spf1 include:zoho.com ~all | Spam prevention (SPF) |

---

## 3. Website Requirements

### 3.1 Core Requirements

| Requirement | Detail |
|---|---|
| **Language** | Bilingual — English (LTR) + Arabic (RTL) |
| **Language Switcher** | EN / AR toggle, persists via localStorage |
| **Priority** | Mobile-first (highest importance) |
| **Reference Site** | https://www.fmco.sa/ |
| **Hosting** | Cloudflare Pages (free) |
| **Deployment** | Via GitHub repository |
| **Live URL** | https://albathanksa.com |

### 3.2 Color Palette

| Role | Color Name | Hex Code | Used For |
|---|---|---|---|
| Primary | Deep Forest Green | `#1B4D3E` | Navbar, footer, buttons, headings |
| Secondary | Rich Gold | `#C9A227` | Accents, CTAs, highlights, icons |
| Background | Soft White | `#F8F5F0` | Page background |
| Text | Charcoal Black | `#1A1A1A` | Body text |
| Section BG | Light Sand | `#F0EAD6` | Alternating section backgrounds |
| Accent | Warm Grey | `#8D8D8D` | Subtext, borders, placeholders |

### 3.3 Typography

| Language | Font | Weights | Source |
|---|---|---|---|
| English | Poppins | 300, 400, 600, 700 | Google Fonts |
| Arabic | Tajawal | 300, 400, 700 | Google Fonts |

#### Font Sizes (Mobile-First)

| Element | Mobile | Tablet (768px+) | Desktop (1024px+) |
|---|---|---|---|
| H1 | 28px | 36px | 46px |
| H2 | 22px | 28px | 34px |
| H3 | 18px | 20px | 22px |
| Body | 15px | 16px | 16px |
| Small | 13px | 14px | 14px |
| Button | 15px | 15px | 16px |

---

## 4. Tech Stack

| Layer | Technology | Version / CDN |
|---|---|---|
| Structure | HTML5 | — |
| Styling | CSS3 | — |
| Interactivity | Vanilla JavaScript | — |
| Hero Slider | Swiper.js | v11 (CDN) |
| Icons | Font Awesome | v6.5.1 (CDN) |
| Fonts | Google Fonts | CDN |
| Deployment | Cloudflare Pages | Free tier |
| Version Control | GitHub | Private repo |

---

## 5. Project Folder Structure

```
albathanksa.com/
│
├── index.html                  ← Home page
├── about/
│    └── index.html             ← About Us page
├── services/
│    └── index.html             ← Services page
├── projects/
│    └── index.html             ← Projects page (with filter)
├── contact/
│    └── index.html             ← Contact page (with form)
│
├── css/
│    ├── style.css              ← Main stylesheet (mobile-first, 31 KB)
│    ├── rtl.css                ← Arabic RTL layout overrides
│    └── responsive.css         ← Responsive breakpoints (576–1200px)
│
├── js/
│    ├── main.js                ← Navbar, Swiper init, project filter, form validation
│    ├── switcher.js            ← Language switcher (EN/AR + localStorage)
│    └── animations.js          ← Animated counters (IntersectionObserver)
│
└── images/
     ├── logo/                  ← Client logo (placeholder — to be replaced)
     ├── hero/                  ← Hero slider images (placeholder)
     ├── projects/              ← Project photos (placeholder)
     └── icons/                 ← Icon assets
```

> **Note:** Folder-based URL structure so pages load as `albathanksa.com/about/` instead of `albathanksa.com/about.html` — cleaner, more professional, better SEO.

---

## 6. Pages & Sections

### Page 1 — Home (index.html)

| Section | Description |
|---|---|
| Navbar | Logo, desktop nav links, EN/AR switcher, hamburger menu |
| Hero Slider | 3 auto-playing slides (Swiper.js), swipe-enabled on mobile |
| Stats | 4 animated counters: 10+ Years, 50+ Projects, 30+ Clients, 100+ Team |
| About Snapshot | Company intro + "Learn More" button |
| Services | 6 service cards with Font Awesome icons |
| Featured Projects | 3 project cards with gradient backgrounds |
| Why Choose Us | 4 feature cards |
| Our Clients | 6 client logo placeholders |
| CTA Banner | Call-to-action with two buttons |
| Footer | 4-column footer with links, contact info, social icons |

### Page 2 — About Us (about/index.html)

| Section | Description |
|---|---|
| Page Hero Banner | "About Us" with breadcrumb navigation |
| Company Overview | 3-paragraph company history and description |
| Owner Message | CEO/Owner photo placeholder, name, 2-paragraph message |
| Vision | Vision statement (green card) |
| Mission | Mission statement (sand card) |
| Values | 6 value cards: Excellence, Integrity, Safety, Quality, Teamwork, Innovation |
| CTA Section | Links to contact and services |

### Page 3 — Services (services/index.html)

| Service | Arabic | Icon |
|---|---|---|
| General Contracting | المقاولات العامة | fa-hard-hat |
| Civil Works | الأعمال المدنية | fa-tools |
| Building Construction | إنشاء المباني | fa-building |
| Renovation & Maintenance | التجديد والصيانة | fa-paint-roller |
| Infrastructure Works | أعمال البنية التحتية | fa-road |
| Interior Finishing | التشطيبات الداخلية | fa-couch |

Each service card includes: icon, EN + AR title, description, 4 bullet points, "Get a Quote" button.

### Page 4 — Projects (projects/index.html)

| Project | Category | Year |
|---|---|---|
| Residential Complex — North Riyadh | Construction | 2024 |
| Government Office Building | Construction | 2024 |
| Highway Road Extension | Civil Works | 2023 |
| Shopping Mall Renovation | Renovation | 2023 |
| Water Supply Network | Infrastructure | 2022 |
| Corporate Office Fit-Out | Renovation | 2022 |

**Filter categories:** All · Construction · Civil Works · Renovation · Infrastructure

### Page 5 — Contact (contact/index.html)

| Element | Detail |
|---|---|
| Address card | Riyadh, Kingdom of Saudi Arabia |
| Phone card | +966 50 000 0000 (placeholder) |
| Email card | info@albathanksa.com + projects@albathanksa.com |
| Contact form | Full Name, Email, Phone, Subject, Message — with JS validation |
| Success message | Bilingual (EN + AR) confirmation on submit |
| Google Map | Riyadh, Saudi Arabia embed |

---

## 7. Mobile-First Design

### Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|---|---|---|
| Mobile (default) | 320px+ | Single column, hamburger menu |
| Large Mobile | 576px+ | 2-column adjustments |
| Tablet | 768px+ | 2–3 column grids, row layouts |
| Desktop | 1024px+ | Full desktop nav, 3–6 column grids |
| Large Desktop | 1200px+ | Max-width containers, larger visuals |

### Mobile-Specific Features

- Hamburger menu → full-screen slide-in overlay
- Touch/swipe enabled hero slider (Swiper.js)
- Minimum 48px touch targets on all buttons and links
- Horizontal scroll filter bar on Projects page
- Full-width form inputs
- Scroll-to-top button (appears after 300px scroll)

---

## 8. Bilingual System (EN / AR)

### How It Works

1. All translatable text has `data-en="..."` and `data-ar="..."` attributes
2. `switcher.js` reads these on language toggle and updates `textContent`
3. HTML `dir` attribute switches between `ltr` (English) and `rtl` (Arabic)
4. Font family changes: Poppins → Tajawal
5. Layout mirrors for RTL (flex direction, padding, margins, borders)
6. Language preference saved in `localStorage` key: `albathan-lang`
7. On page load: saved preference is auto-applied

### RTL Layout Changes

| Element | LTR (English) | RTL (Arabic) |
|---|---|---|
| Text alignment | Left | Right |
| Navbar hamburger | Right side | Left side |
| Service card border | Left border | Right border |
| CEO quote | Left border | Right border |
| Footer columns | Left → Right | Right → Left |
| Arrow icons | → | ← |
| Scroll-to-top | Bottom right | Bottom left |

---

## 9. Key Features

| Feature | Implementation |
|---|---|
| Hero Slider | Swiper.js v11 — autoplay 4.5s, fade transition, loop, touch-enabled |
| Animated Counters | IntersectionObserver API — count up when scrolled into view |
| Project Filter | JS show/hide with `data-category` attributes |
| Form Validation | Vanilla JS — required fields, email format, phone length |
| Language Switcher | `data-en/data-ar` attributes + localStorage persistence |
| Scroll-to-Top | Appears after 300px scroll, smooth scroll on click |
| Mobile Menu | Full-screen overlay, closes on link tap or outside click |

---

## 10. Placeholder Content (To Be Replaced)

| Item | Current State | Action Required |
|---|---|---|
| Logo | CSS text "ب" in gold square | Replace with actual logo image |
| Hero images | CSS gradient backgrounds | Replace with real construction photos |
| Project images | CSS gradient backgrounds | Replace with real project photos |
| CEO/Owner photo | Placeholder circle with "ب" | Replace with actual photo |
| Client logos | Grey placeholder boxes | Replace with real client logos |
| Phone number | +966 50 000 0000 | Update with real phone |
| Owner name | [Owner Name] placeholder | Update with real name |
| All stats | 10+, 50+, 30+, 100+ | Confirm with client |

---

## 11. Deployment Process

### Step 1: GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit — Al-Batahan website"
git remote add origin https://github.com/YOUR_USERNAME/albatahan-website.git
git push -u origin main
```

### Step 2: Cloudflare Pages

1. Go to `dash.cloudflare.com` → **Pages** → **Create a project**
2. Connect GitHub → select `albatahan-website` repository
3. Build settings: Build command *(leave blank)*, Output directory `/`
4. Click **Save and Deploy**
5. Deployment URL: `albatahan.pages.dev`

### Step 3: Connect Custom Domain

1. Pages project → **Custom Domains** → Add `albathanksa.com`
2. DNS records auto-added (domain is on same Cloudflare account) ✅
3. SSL certificate auto-provisioned ✅
4. Test: `https://albathanksa.com`

### Full Architecture

```
albathanksa.com  (Cloudflare Registrar)
       │
       ├── Website → Cloudflare Pages (free hosting)
       │              └── GitHub repository (source code)
       │
       └── Email → Zoho Mail (free)
                   ├── sales@albathanksa.com
                   ├── info@albathanksa.com
                   └── projects@albathanksa.com
```

---

## 12. Total Cost Summary

| Item | Cost | Frequency |
|---|---|---|
| Domain (albathanksa.com) | $11.17 | Per year |
| Cloudflare Pages hosting | $0 | Free forever |
| SSL Certificate | $0 | Free (auto) |
| Zoho Mail (3 accounts) | $0 | Free forever |
| **Total** | **$11.17 / year** | |

> If client needs Outlook/Apple Mail IMAP access: Zoho paid plan ~$1/user/month = $3/month for 3 accounts.

---

## 13. File Summary

| File | Size | Lines | Purpose |
|---|---|---|---|
| index.html | ~44 KB | ~484 | Home page |
| about/index.html | ~22 KB | ~232 | About Us page |
| services/index.html | ~35 KB | ~339 | Services page |
| projects/index.html | ~30 KB | ~302 | Projects page |
| contact/index.html | ~16 KB | ~225 | Contact page |
| css/style.css | ~32 KB | — | Main styles |
| css/rtl.css | ~4 KB | — | RTL overrides |
| css/responsive.css | ~5 KB | — | Breakpoints |
| js/main.js | ~8 KB | — | Core JS |
| js/switcher.js | ~2 KB | — | Language switch |
| js/animations.js | ~2 KB | — | Counters |

---

## 14. Next Steps

- [ ] Receive and add client logo (images/logo/)
- [ ] Add real hero images (images/hero/)
- [ ] Add real project photos (images/projects/)
- [ ] Add CEO/Owner photo
- [ ] Update placeholder phone number
- [ ] Update placeholder owner name
- [ ] Confirm all stats numbers with client
- [ ] Add real client logos
- [ ] Set up GitHub repository
- [ ] Deploy to Cloudflare Pages
- [ ] Connect albathanksa.com domain
- [ ] Test on client's real mobile device
- [ ] Final client review and approval

---

*Documentation prepared for Al-Batahan Contracting Establishment*
*Project started: November 2026*
