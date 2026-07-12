# AI Synthetic Platform

A consent-based, venture-grade AI synthetic media platform for real-time character interactions, user testing, demonstrations, and continued product development.

## Overview

AI Synthetic Platform is a polished Next.js codebase designed to support a venture-grade product experience. The repository is structured to serve two goals at the same time:

1. **Investor and stakeholder demonstrations** — a professional, easy-to-navigate interface for presentations, reviews, and user testing.
2. **Practical product development** — a modular foundation that can evolve into a production platform with authentication, AI orchestration, billing, moderation, analytics, and administration.

The platform includes the MVP journey from landing page and authentication through character discovery, conversation, session history, premium conversion, and administrator management.

## ✨ What's Included

- ✅ Public landing page
- ✅ Login and registration screens
- ✅ User dashboard
- ✅ Character library
- ✅ Real-time conversation workspace
- ✅ Session history
- ✅ Pricing and upgrade flow
- ✅ Profile and settings pages
- ✅ Admin dashboard
- ✅ API route stubs for future backend integration
- ✅ Modular component structure for continued development

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19 + Tailwind CSS
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod-ready structure
- **State/Data**: Ready for React Query integration
- **Deployment**: Vercel-ready

## 📁 Repository Structure

```
ai-synthetic-platform/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── login/route.ts
│   │   │   ├── characters/route.ts
│   │   │   ├── health/route.ts
│   │   │   └── sessions/route.ts
│   │   ├── admin/page.tsx
│   │   ├── characters/page.tsx
│   │   ├── conversation/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── history/page.tsx
│   │   ├── login/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── profile/page.tsx
│   │   ├── register/page.tsx
│   │   ├── settings/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── card.tsx
│   │   ├── character-grid.tsx
│   │   ├── flow-step.tsx
│   │   ├── hero.tsx
│   │   ├── journey-preview.tsx
│   │   ├── page-shell.tsx
│   │   ├── section-title.tsx
│   │   ├── sidebar.tsx
│   │   ├── stat-grid.tsx
│   │   ├── topbar.tsx
│   │   └── users-table.tsx
│   ├── data/
│   │   ├── characters.ts
│   │   ├── mvp.ts
│   │   └── nav.ts
│   └── lib/
│       └── utils.ts
├── public/
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm 10+
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kuldipangan65-ui/ai-synthetic-platform.git
cd ai-synthetic-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📄 Available Pages

| Page | Route | Purpose |
|------|-------|---------|
| Landing | `/` | Public homepage and value proposition |
| Sign In | `/login` | User authentication |
| Register | `/register` | Account creation |
| Dashboard | `/dashboard` | User home and quick actions |
| Characters | `/characters` | Browse and select AI characters |
| Conversation | `/conversation` | Start and manage conversations |
| History | `/history` | View past sessions |
| Pricing | `/pricing` | Subscription plans |
| Profile | `/profile` | User account information |
| Settings | `/settings` | Preferences and privacy |
| Admin | `/admin` | Administrator dashboard |

## 🔌 API Routes

These endpoints are currently structured as stubs for future integration:

- `GET /api/health` — Health check
- `POST /api/auth/login` — User authentication
- `GET /api/characters` — Retrieve character library
- `GET /api/sessions` — List user sessions
- `POST /api/sessions` — Create new session

## 📊 Product Flow

The MVP is organized around a single measurable product journey:

1. Landing Page
2. Create Account / Login
3. Verify Email
4. Complete Profile
5. Browse Character Library
6. Select Character
7. Initialize Conversation
8. AI Conversation Session
9. Conversation Ends
10. Generate Session Summary
11. Store Session
12. Return to Dashboard
13. Upgrade to Premium

## 🏗 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Deploy to Vercel

1. Push the code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Framework is detected as Next.js
6. Click "Deploy"

Vercel will automatically generate a live preview URL.

## 📋 Environment Variables

For the current demo build, no environment variables are required.

For production expansion, you'll want to add:

```env
# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Stripe (Billing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...

# AI Provider
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=...

# Voice API
ELEVENLABS_API_KEY=...

# Analytics
POSTHOG_API_KEY=...
```

## 🎯 Design Intent

This codebase is intentionally structured to support:

- Investor demonstrations
- User testing sessions
- Design reviews
- Technical due diligence
- Future production development

The layout is simple enough to move quickly, but modular enough to scale into a full platform.

## 🗺 Next Development Phases

### Phase 1 — Core Platform
- [ ] Real authentication (NextAuth.js)
- [ ] Database integration (PostgreSQL + Prisma)
- [ ] Character library backend
- [ ] Persistent session history

### Phase 2 — AI Experience
- [ ] Real-time chat (WebSocket)
- [ ] Voice interaction (text-to-speech)
- [ ] Session summaries (LLM integration)
- [ ] Safety and moderation layers

### Phase 3 — Monetization
- [ ] Pricing plans (Stripe integration)
- [ ] Subscription billing
- [ ] Usage limits per tier
- [ ] Premium access controls

### Phase 4 — Administration
- [ ] Full admin dashboard
- [ ] Audit logs
- [ ] Content moderation
- [ ] User management

### Phase 5 — Scale
- [ ] Analytics pipelines (PostHog/Mixpanel)
- [ ] Performance optimization
- [ ] API platform
- [ ] Enterprise workflows

## ✅ Deployment Checklist

### Before Pushing to GitHub

- [ ] Confirm file structure matches repository map
- [ ] Verify all routes compile without errors
- [ ] Check that shared components are imported correctly
- [ ] Review copy, labels, and headings for consistency
- [ ] Ensure placeholder data is clearly identified as demo data

### Before Deploying to Vercel

- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Fix any TypeScript errors
- [ ] Confirm homepage loads correctly
- [ ] Confirm navigation links work
- [ ] Confirm `/admin` page is separated from user flow

### After Deployment

- [ ] Test live URL on desktop and mobile
- [ ] Verify route navigation in browser
- [ ] Review page load speed
- [ ] Capture screenshots for investor review
- [ ] Share preview link with testers

## 📝 Professional Notes

This repository is a strong foundation for a venture-grade MVP, but it is still a demo-oriented codebase until the following are added:

- Production authentication
- Database persistence
- Billing integration
- AI orchestration
- Moderation and governance logic
- Security hardening
- Automated tests
- Analytics instrumentation

Once those layers are added, the platform can evolve from a polished prototype into a production-ready product.

## 📄 License

Internal / confidential until released by the project owner.

---

**Questions?** Check the individual component files for implementation details.
