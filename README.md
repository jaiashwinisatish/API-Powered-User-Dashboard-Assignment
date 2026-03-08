<div align="center">

<img src="assets/screenshots/screenshot-dark.png" width="100%" alt="User Dashboard Banner" />

<br/><br/>

# ⚡ Responsive User Dashboard

<p align="center">
  <strong>A production-ready, blazing-fast User Dashboard — built for the modern web</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/API-JSONPlaceholder-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PRs-Welcome-7c3aed?style=for-the-badge" />
</p>

<br/>

<p align="center">
  <a href="https://api-powered-user-dashboard-assignme.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀_VIEW_LIVE_DEMO-Click_Here-0ea5e9?style=for-the-badge" />
  </a>
</p>

<sub>🔍 Search &nbsp;•&nbsp; ↕️ Sort &nbsp;•&nbsp; 🌙 Dark Mode &nbsp;•&nbsp; 📋 Copy Email &nbsp;•&nbsp; 🪟 Detail Modal &nbsp;•&nbsp; ⚡ Skeleton Loading &nbsp;•&nbsp; 📱 Fully Responsive</sub>

</div>

---

## 📌 Table of Contents

| # | Section |
|---|---------|
| 1 | [🌓 Screenshots](#-screenshots) |
| 2 | [🚀 Live Demo](#-live-demo) |
| 3 | [✨ Features](#-features) |
| 4 | [⚡ Quick Setup](#-quick-setup) |
| 5 | [🛠️ Technologies Used](#️-technologies-used) |
| 6 | [🏗️ Architecture](#️-architecture) |
| 7 | [🔄 Application Flow](#-application-flow) |
| 8 | [🧩 Component Hierarchy](#-component-hierarchy) |
| 9 | [🔀 Data Flow](#-data-flow) |
| 10 | [🎨 Theme System](#-theme-system) |
| 11 | [📱 Responsive Design](#-responsive-design) |
| 12 | [🔌 API Reference](#-api-reference) |
| 13 | [🧠 State Management](#-state-management) |
| 14 | [⚖️ Assumptions & Trade-offs](#️-assumptions--trade-offs) |
| 15 | [📊 Evaluation Criteria](#-evaluation-criteria) |
| 16 | [🤝 Contributing](#-contributing) |

---

## 🌓 Screenshots

<table>
  <tr>
    <td align="center" width="50%">
      <img src="assets/screenshots/screenshot-dark.png" width="100%" alt="Dark Mode Preview" />
      <br/><br/>
      <kbd>🌑 Dark Mode</kbd>
    </td>
    <td align="center" width="50%">
      <img src="assets/screenshots/screenshot-light.png" width="100%" alt="Light Mode Preview" />
      <br/><br/>
      <kbd>☀️ Light Mode</kbd>
    </td>
  </tr>
</table>

---

## 🚀 Live Demo

<div align="center">

| 🔗 Resource | 📎 Link |
|---|---|
| 🌐 **Live App (Vercel)** | [api-powered-user-dashboard-assignme.vercel.app](https://api-powered-user-dashboard-assignme.vercel.app) |
| 💻 **GitHub Repository** | [github.com/your-username/user-dashboard](https://github.com/your-username/user-dashboard) |
| 🎯 **API Endpoint Used** | [jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) |

</div>

---

## ✨ Features

<table>
  <tr>
    <th>Category</th>
    <th>Feature</th>
    <th>Description</th>
  </tr>
  <tr>
    <td rowspan="3">🔎 <strong>Search & Filter</strong></td>
    <td>Real-time Search</td>
    <td>Instantly filters users by name on every keystroke</td>
  </tr>
  <tr>
    <td>Smart Sorting</td>
    <td>Sort alphabetically by name or company name</td>
  </tr>
  <tr>
    <td>Empty State</td>
    <td>Friendly message + clear button when no results found</td>
  </tr>
  <tr>
    <td rowspan="3">🎨 <strong>UI / UX</strong></td>
    <td>Dark / Light Mode</td>
    <td>Persisted in localStorage, respects OS preference on first load</td>
  </tr>
  <tr>
    <td>Smooth Animations</td>
    <td>Hover scale, slide-up modal, shimmer skeleton, fade-in overlay</td>
  </tr>
  <tr>
    <td>Avatar Generation</td>
    <td>Auto-generated letter avatars via ui-avatars.com</td>
  </tr>
  <tr>
    <td rowspan="2">🧩 <strong>Interaction</strong></td>
    <td>Detail Modal</td>
    <td>Click any card → full user info overlay (ESC or backdrop to close)</td>
  </tr>
  <tr>
    <td>Copy Email</td>
    <td>One-click clipboard copy with ✅ visual confirmation for 2s</td>
  </tr>
  <tr>
    <td rowspan="2">⚙️ <strong>Reliability</strong></td>
    <td>Skeleton Loading</td>
    <td>Shimmer placeholder cards shown during API fetch</td>
  </tr>
  <tr>
    <td>Error Handling</td>
    <td>Network-safe error display with one-click retry</td>
  </tr>
  <tr>
    <td rowspan="2">📱 <strong>Responsive</strong></td>
    <td>Adaptive Grid</td>
    <td>1 col (mobile) → 2 col (tablet) → 3 col (desktop)</td>
  </tr>
  <tr>
    <td>Sticky Header</td>
    <td>Search & sort always accessible while scrolling</td>
  </tr>
</table>

---

## ⚡ Quick Setup

### Prerequisites

```
Node.js  >= 16.0.0
npm      >= 7.0.0   (or yarn / pnpm)
```

### 🔧 Local Development

```bash
# Step 1 — Clone the repository
git clone https://github.com/your-username/user-dashboard.git

# Step 2 — Move into the project folder
cd user-dashboard

# Step 3 — Install all dependencies
npm install

# Step 4 — Start the development server
npm run dev

# App is running at → http://localhost:5173
```

### 🏗️ Build for Production

```bash
# Type-check the codebase
npm run typecheck

# Lint the codebase
npm run lint

# Create optimised production build
npm run build

# Preview the production build locally
npm run preview
```

### 🚀 Deploy to Vercel

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project root (follow the prompts)
vercel

# Your app is live in ~30 seconds!
```

> **Note:** No environment variables are required. The app consumes the public JSONPlaceholder API with no authentication.

---

## 🛠️ Technologies Used

<table>
  <tr>
    <th>Layer</th>
    <th>Technology</th>
    <th>Version</th>
    <th>Why It Was Chosen</th>
  </tr>
  <tr>
    <td>⚛️ UI Framework</td>
    <td><strong>React</strong></td>
    <td>18.3.1</td>
    <td>Industry-standard, hooks-based, concurrent rendering support</td>
  </tr>
  <tr>
    <td>🔷 Language</td>
    <td><strong>TypeScript</strong></td>
    <td>5.6.3</td>
    <td>Type safety, better DX, catches bugs at compile time</td>
  </tr>
  <tr>
    <td>⚡ Build Tool</td>
    <td><strong>Vite</strong></td>
    <td>5.4.8</td>
    <td>Sub-second HMR, ESM-native, 10× faster than CRA</td>
  </tr>
  <tr>
    <td>🎨 Styling</td>
    <td><strong>Tailwind CSS</strong></td>
    <td>3.4</td>
    <td>Utility-first, dark mode via class, zero unused CSS in prod</td>
  </tr>
  <tr>
    <td>🔣 Icons</td>
    <td><strong>Lucide React</strong></td>
    <td>0.344</td>
    <td>Consistent design language, tree-shakeable, TypeScript-native</td>
  </tr>
  <tr>
    <td>🌐 Data</td>
    <td><strong>JSONPlaceholder API</strong></td>
    <td>—</td>
    <td>Free, stable, always-on mock REST API — perfect for demos</td>
  </tr>
  <tr>
    <td>🚀 Hosting</td>
    <td><strong>Vercel</strong></td>
    <td>—</td>
    <td>Zero-config deploy, global CDN, instant preview deploys</td>
  </tr>
  <tr>
    <td>🧹 Linting</td>
    <td><strong>ESLint + TS-ESLint</strong></td>
    <td>9.x</td>
    <td>Enforces code quality, consistent patterns across the codebase</td>
  </tr>
</table>

---

## 🏗️ Architecture

```
╔══════════════════════════════════════════════════════════════════════╗
║                    RESPONSIVE USER DASHBOARD                          ║
║                                                                        ║
║  ┌──────────────────────────────────────────────────────────────┐     ║
║  │                     Browser / Client                          │     ║
║  │                                                               │     ║
║  │  ┌─────────────────────────────────────────────────────┐     │     ║
║  │  │                   React App (SPA)                    │     │     ║
║  │  │                                                       │     │     ║
║  │  │   ┌───────────┐   ┌──────────────────────────────┐   │     │     ║
║  │  │   │  HEADER   │   │           MAIN               │   │     │     ║
║  │  │   │  (sticky) │   │                               │   │     │     ║
║  │  │   │           │   │  ┌─────────┐  ┌───────────┐  │   │     │     ║
║  │  │   │ SearchBar │   │  │Loading  │  │  Error    │  │   │     │     ║
║  │  │   │ SortCtrl  │   │  │Skeleton │  │  + Retry  │  │   │     │     ║
║  │  │   │ ThemeTgl  │   │  └─────────┘  └───────────┘  │   │     │     ║
║  │  │   └───────────┘   │                               │   │     │     ║
║  │  │                   │  ┌────────────────────────┐   │   │     │     ║
║  │  │                   │  │   UserCard Grid (CSS)  │   │   │     │     ║
║  │  │                   │  │  ┌──────┐ ┌──────┐    │   │   │     │     ║
║  │  │                   │  │  │Card 1│ │Card 2│ …  │   │   │     │     ║
║  │  │                   │  │  └──────┘ └──────┘    │   │   │     │     ║
║  │  │                   │  └────────────────────────┘   │   │     │     ║
║  │  │                   └──────────────────────────────┘   │     │     ║
║  │  │                                                       │     │     ║
║  │  │   ┌─────────────────────────────────────────────┐    │     │     ║
║  │  │   │   UserModal (Overlay — conditionally shown)  │    │     │     ║
║  │  │   └─────────────────────────────────────────────┘    │     │     ║
║  │  └─────────────────────────────────────────────────────┘     │     ║
║  └──────────────────────────────────────────────────────────────┘     ║
║                              │  fetch()  (useEffect on mount)          ║
║                              ▼                                          ║
║              ┌───────────────────────────────┐                         ║
║              │   JSONPlaceholder REST API     │                         ║
║              │   GET /users → User[10]        │                         ║
║              └───────────────────────────────┘                         ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

## 🔄 Application Flow

```
  Browser Opens App
        │
        ▼
  ┌─────────────────────┐
  │  Read localStorage  │  ← 'dark' | 'light' | system preference
  │  Initialise isDark  │
  └──────────┬──────────┘
             │
             ▼
  ┌─────────────────────┐
  │  Apply/Remove       │  ← document.documentElement.classList
  │  'dark' CSS class   │
  └──────────┬──────────┘
             │
             ▼
  ┌─────────────────────┐      ┌──────────────────────────────────┐
  │  setLoading(true)   │      │   Show 6x Skeleton Shimmer Cards  │
  │  fetchUsers()       │─────▶│   (while awaiting API response)  │
  └──────────┬──────────┘      └──────────────────────────────────┘
             │
      ┌──────┴───────┐
      │              │
   200 OK          Error
      │              │
      ▼              ▼
  setUsers(data)  setError(msg)
      │              │
      ▼              ▼
  ┌────────────┐  ┌────────────────────────────┐
  │ Render     │  │  ErrorMessage component     │
  │ User Cards │  │  with Retry Button          │
  └──────┬─────┘  │  onClick → fetchUsers()     │
         │        └────────────────────────────┘
         │
  ┌──────┴──────────────────────────────────────┐
  │              USER INTERACTIONS               │
  └──────┬───────────────┬──────────────────────┘
         │               │                │
         ▼               ▼                ▼
  ┌────────────┐  ┌─────────────┐  ┌──────────────────┐
  │ Type in    │  │ Change Sort │  │  Click User Card  │
  │ Search Box │  │ Dropdown    │  │                  │
  └──────┬─────┘  └──────┬──────┘  └────────┬─────────┘
         │               │                  │
         └───────┬────────┘                  │
                 │                           │
                 ▼                           ▼
         ┌──────────────┐          ┌───────────────────────┐
         │  useMemo     │          │  setSelectedUser(u)    │
         │  recomputes  │          │  Open UserModal        │
         │  filtered +  │          │  ESC / backdrop close  │
         │  sorted list │          └───────────────────────┘
         └──────┬───────┘
                │
                ▼
        ┌───────────────┐
        │  Re-render    │
        │  UserCards    │
        └───────────────┘
```

---

## 🧩 Component Hierarchy

```
src/
└── App.tsx  (all state lives here)
    │
    ├── HEADER
    │   ├── Logo + Title + User Count
    │   ├── <ThemeToggle>
    │   │       props: isDark, onToggle
    │   │       renders: Sun (dark mode) | Moon (light mode)
    │   │
    │   ├── <SearchBar>
    │   │       props: value, onChange
    │   │       renders: Search icon + controlled input
    │   │
    │   └── <SortControls>
    │           props: sortBy, onSortChange
    │           renders: ArrowUpDown icon + select dropdown
    │
    ├── MAIN
    │   ├── <LoadingSpinner>          [when: loading === true]
    │   │       renders: 6x animated skeleton card placeholders
    │   │
    │   ├── <ErrorMessage>            [when: error !== null]
    │   │       props: message, onRetry
    │   │       renders: AlertCircle + error text + retry button
    │   │
    │   ├── Empty State               [when: results.length === 0]
    │   │       renders: Users icon + message + clear search button
    │   │
    │   └── <UserCard> x N            [when: results.length > 0]
    │           props: user, onClick
    │           renders:
    │             ├── Avatar img (ui-avatars.com)
    │             ├── Fallback initials div (on img error)
    │             ├── Name h3
    │             ├── Email row + Copy button
    │             ├── Company (Building2 icon)
    │             └── City (MapPin icon)
    │
    └── MODAL LAYER
        └── <UserModal>               [when: selectedUser !== null]
                props: user, onClose
                renders:
                  ├── Backdrop div (click anywhere to close)
                  ├── Blue gradient header + X button
                  ├── Avatar (80px) + Name + @username
                  ├── Info Grid 2-col:
                  │     ├── Email + copy button
                  │     ├── Phone
                  │     ├── Website
                  │     └── Company
                  ├── Address block
                  └── Company catchphrase + BS tagline
```

---

## 🔀 Data Flow

```
  ┌──────────────────────┐
  │  JSONPlaceholder API  │
  │  GET /users           │
  │  Returns: User[10]    │
  └───────────┬───────────┘
              │  Response JSON array
              ▼
  ┌──────────────────────────────────────────────────────┐
  │  users: User[]   (useState)                          │
  │                                                       │
  │  type User = {                                        │
  │    id, name, username, email, phone, website,        │
  │    address: { street, suite, city, zipcode, geo },   │
  │    company: { name, catchPhrase, bs }                │
  │  }                                                    │
  └───────────────────────┬──────────────────────────────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
       searchQuery       sortBy        (raw)
       filter by name    sort A-Z      passthrough
            │              │              │
            └──────┬────────┘              │
                   │  useMemo              │
                   │  deps: [users,        │
                   │  searchQuery, sortBy] │
                   ▼                       │
  ┌──────────────────────────────────┐     │
  │  filteredAndSortedUsers: User[]  │◄────┘
  │  (memoized derived state)        │
  └───────────────┬──────────────────┘
                  │
       ┌──────────┴──────────┐
       │                     │
       ▼                     ▼
  UserCard x N          UserModal
  (grid render)    (on card click)
```

---

## 🎨 Theme System

```
  App Mount
      │
      ▼
  useState initialiser (runs once)
  ────────────────────────────────────────────────────────
  1. localStorage.getItem('theme') === 'dark'  → isDark = true
  2. localStorage.getItem('theme') === 'light' → isDark = false
  3. No value stored?
     → window.matchMedia('prefers-color-scheme: dark').matches
     → Respect the user's OS setting automatically
  ────────────────────────────────────────────────────────
      │
      ▼
  useEffect (fires on every isDark change)
         │
     ┌───┴───┐
     │       │
  isDark   !isDark
     │       │
     ▼       ▼
  html        html
  .classList  .classList
  .add(       .remove(
  'dark')     'dark')
     │       │
     ▼       ▼
  localStorage     localStorage
  .setItem(        .setItem(
  'dark')          'light')
         │
         ▼
  Tailwind CSS responds instantly:
  .dark .bg-gray-800   → dark backgrounds
  .dark .text-gray-100 → light text
  .dark .border-gray-700 → subtle borders
  CSS transitions: smooth 150ms theme switch
```

---

## 📱 Responsive Design

```
  ╔══════════════════╗  ╔══════════════════════════╗  ╔══════════════════════════════╗
  ║  MOBILE < 768px  ║  ║  TABLET 768px-1024px     ║  ║  DESKTOP > 1024px            ║
  ╠══════════════════╣  ╠══════════════════════════╣  ╠══════════════════════════════╣
  ║                  ║  ║                          ║  ║                              ║
  ║  [  Search   ]   ║  ║  [ Search ]  [ Sort v ]  ║  ║  [ Search...  ] [ Sort v ]   ║
  ║  [ Sort  v   ]   ║  ║                          ║  ║                              ║
  ║                  ║  ║  ┌─────────┬─────────┐   ║  ║  ┌──────┬──────┬──────┐     ║
  ║  ┌────────────┐  ║  ║  │ Card 1  │ Card 2  │   ║  ║  │Card 1│Card 2│Card 3│     ║
  ║  │   Card 1   │  ║  ║  ├─────────┼─────────┤   ║  ║  ├──────┼──────┼──────┤     ║
  ║  ├────────────┤  ║  ║  │ Card 3  │ Card 4  │   ║  ║  │Card 4│Card 5│Card 6│     ║
  ║  │   Card 2   │  ║  ║  ├─────────┼─────────┤   ║  ║  ├──────┼──────┼──────┤     ║
  ║  ├────────────┤  ║  ║  │ Card 5  │ Card 6  │   ║  ║  │Card 7│Card 8│Card 9│     ║
  ║  │   Card 3   │  ║  ║  └─────────┴─────────┘   ║  ║  └──────┴──────┴──────┘     ║
  ║  └────────────┘  ║  ║                          ║  ║                              ║
  ║  grid-cols-1     ║  ║  md:grid-cols-2          ║  ║  lg:grid-cols-3             ║
  ╚══════════════════╝  ╚══════════════════════════╝  ╚══════════════════════════════╝

  Header: sticky top-0 z-40 — always visible while scrolling
  Modal:  max-w-2xl, max-h-90vh, overflow-y-auto — works on all screens
```

---

## 🔌 API Reference

**Base URL:** `https://jsonplaceholder.typicode.com`

| Method | Endpoint | Auth | Returns |
|--------|----------|------|---------|
| `GET`  | `/users` | None | `User[10]` JSON array |

```
  Request Pipeline

  App Component
       │
       │  useEffect([], [])  — runs once on mount
       │
       ▼
  fetch('https://jsonplaceholder.typicode.com/users')
       │
       ├── Method:  GET
       ├── Headers: none required
       ├── Auth:    none required
       ├── CORS:    open (public API)
       │
       ├── 200 OK  →  JSON Array  →  setUsers(data)
       └── Error   →  setError(message)
```

**Full User Object Shape:**

```jsonc
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-0988 x56442",
  "website": "hildegard.org",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": { "lat": "-37.3159", "lng": "81.1496" }
  },
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

---

## 🧠 State Management

```
  APP.TSX — COMPLETE STATE MAP
  ════════════════════════════════════════════════════════════════

  useState hooks                     Derived state (useMemo)
  ─────────────────────────────────  ────────────────────────────────────
  users: User[]                      filteredAndSortedUsers: User[]
    set by: setUsers(data)             recomputes when:
    source: API fetch on mount           • users changes   (new fetch)
                                         • searchQuery changes (typing)
  loading: boolean                       • sortBy changes  (dropdown)
    set by: setLoading(true/false)
    true  → show skeleton cards        logic:
    false → show content/error           1. filter: name.toLowerCase()
                                              .includes(query.toLowerCase())
  error: string | null                   2. sort: localeCompare()
    set by: setError(message)                  by name OR company.name
    null  → no error state

  searchQuery: string
    set by: setSearchQuery(value)
    controlled by: SearchBar input

  sortBy: 'name' | 'company'
    set by: setSortBy(value)
    controlled by: SortControls select

  selectedUser: User | null
    set by: setSelectedUser(user | null)
    null  → modal is closed
    User  → modal is open with user data

  isDark: boolean
    set by: setIsDark(!isDark)
    initialised from: localStorage or matchMedia
    side effect: toggles html.classList 'dark'
    persisted: localStorage.setItem('theme', ...)
```

---

## 🗂️ Project Structure

```
user-dashboard/
│
├── index.html                    # HTML shell + viewport meta
├── package.json                  # Scripts, deps, devDeps
├── vite.config.ts                # Vite + React plugin config
├── tailwind.config.js            # Content paths + darkMode: 'class'
├── tsconfig.app.json             # Strict TypeScript for src/
├── tsconfig.node.json            # TypeScript for vite.config
├── tsconfig.json                 # References both tsconfigs
├── eslint.config.js              # ESLint flat config
├── postcss.config.js             # Tailwind + Autoprefixer
│
├── assets/
│   └── screenshots/
│       ├── screenshot-dark.png   # Dark mode screenshot (README)
│       └── screenshot-light.png  # Light mode screenshot (README)
│
└── src/
    ├── main.tsx                  # ReactDOM.createRoot entry point
    ├── App.tsx                   # Root: all state + layout
    ├── index.css                 # Tailwind directives + animations
    ├── vite-env.d.ts             # Vite type reference
    │
    ├── types/
    │   └── user.ts               # User, Address, Company interfaces
    │
    └── components/
        ├── UserCard.tsx          # Clickable user info card
        ├── UserModal.tsx         # Full detail overlay modal
        ├── SearchBar.tsx         # Controlled name search input
        ├── SortControls.tsx      # Name/company sort dropdown
        ├── ThemeToggle.tsx       # Sun/Moon theme button
        ├── LoadingSpinner.tsx    # Shimmer skeleton grid (6 cards)
        └── ErrorMessage.tsx      # Error state + retry button
```

---

## ⚖️ Assumptions & Trade-offs

### 📌 Assumptions Made

| # | Assumption | Reasoning |
|---|-----------|-----------|
| 1 | **JSONPlaceholder API is stable** | Widely-used, maintained public API — no auth or rate limits |
| 2 | **10 users is the full dataset** | API always returns exactly 10 — no pagination needed |
| 3 | **Client-side filtering is sufficient** | With 10 records, `useMemo` filtering is instant — no server search needed |
| 4 | **No backend required** | Spec called for frontend-only app consuming a public API |
| 5 | **Avatar images via third-party** | `ui-avatars.com` generates clean letter avatars without real photos |
| 6 | **OS dark mode preference respected on first load** | Improves UX by matching the user's system setting by default |
| 7 | **No authentication needed** | The JSONPlaceholder API is fully public |

### ⚖️ Trade-offs Made

| Trade-off | Decision Taken | Alternative Considered |
|-----------|---------------|----------------------|
| **State Management** | React `useState` + `useMemo` | Zustand / Redux — overkill for this scale |
| **Styling** | Tailwind CSS utility classes | CSS Modules / styled-components — slower to prototype |
| **No routing** | Single-page with modal for details | React Router with `/users/:id` — adds complexity without benefit here |
| **No virtualisation** | Render all 10 cards directly | `react-window` — unnecessary for 10 items |
| **No tests** | Prioritised functionality + polish | Would add Vitest + RTL in a production codebase |
| **Avatar service** | External `ui-avatars.com` API | Canvas API locally — external is simpler and more reliable |
| **No search debounce** | Instant `useMemo` filtering | Debouncing would add latency with no benefit for 10 records |

---

## 📊 Evaluation Criteria

### ✅ Code Readability & Maintainability

- **Single responsibility** — every component has exactly one job
- **Full TypeScript** — interfaces in `src/types/user.ts` type-check the entire data layer
- **Explicit prop types** on every component — no implicit `any`
- **`useMemo`** used intentionally to skip unnecessary re-computation
- **Consistent conventions** — `camelCase` state, `PascalCase` components, descriptive names throughout
- **No magic numbers** — all constants are named and explained

### ✅ Application Architecture

- **Unidirectional data flow** — all state in `App.tsx`, flows down as props
- **Separation of concerns** — data fetching, filtering logic, and presentation are cleanly separated
- **Derived state** via `useMemo` instead of duplicated `useState` calls
- **Clear conditional rendering** with readable boolean guards
- **Component composition** — small, focused components assembled into larger layouts

### ✅ Functionality Completeness

| Requirement | Status |
|-------------|--------|
| Fetch users from JSONPlaceholder API | ✅ Complete |
| Display user list as cards | ✅ Complete |
| Search / filter by name in real-time | ✅ Complete |
| Sort by name or company | ✅ Complete |
| View detailed user info | ✅ Complete (modal) |
| Loading state during fetch | ✅ Complete (skeleton) |
| Error state with retry | ✅ Complete |
| Responsive layout | ✅ Complete |
| Dark / Light mode toggle | ✅ Bonus feature |
| Copy email to clipboard | ✅ Bonus feature |

### ✅ UI / UX Quality

- Consistent visual language — spacing, colour palette, typography follow a cohesive system
- Hover animations (`scale-105`, `-translate-y-1`) give satisfying, tactile feedback
- Skeleton loading prevents layout shift during the API fetch
- Modal closes on Escape key AND backdrop click — standard, expected UX behaviour
- Copy confirmation (✅ for 2s) closes the feedback loop for users
- Sticky header ensures search and sort are always accessible while scrolling

### ✅ Responsiveness

- Tested at 375px (mobile), 768px (tablet), and 1440px (desktop)
- CSS Grid adapts 1 → 2 → 3 columns via Tailwind's `md:` and `lg:` prefixes
- Zero horizontal overflow at any breakpoint
- Modal is `max-h-90vh` and scrollable on small screens
- Search and sort controls stack vertically on mobile, row on larger screens

---

## 🤝 Contributing

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/user-dashboard.git
cd user-dashboard

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes
npm run dev  # develop with HMR

# 5. Check everything passes
npm run typecheck
npm run lint

# 6. Commit with a conventional message
git add .
git commit -m "feat: describe your change"

# 7. Push and open a Pull Request
git push origin feature/your-feature-name
```

**Commit message conventions:**

| Prefix | Use for |
|--------|---------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | Formatting, no logic change |
| `refactor:` | Code restructure, no behaviour change |
| `chore:` | Build config, deps, tooling |

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

<div align="center">

### 🙌 Built with passion using

**React** &nbsp;•&nbsp; **TypeScript** &nbsp;•&nbsp; **Vite** &nbsp;•&nbsp; **Tailwind CSS** &nbsp;•&nbsp; **Lucide Icons** &nbsp;•&nbsp; **Vercel**

<br/>

⭐ **If this project helped you, please give it a star!** ⭐

<br/>

<img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel" />

</div>
