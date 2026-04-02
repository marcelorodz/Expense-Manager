# Nexus Expense Manager

**Nexus Expense Manager** is a high-performance, enterprise-grade UI application built to simulate a global corporate expense management platform. This project serves as a comprehensive study in **UI Engineering**, focusing on scalability, accessibility, and modern frontend architecture.

---

## 🚀 Key Features & UI Engineering Principles

### 1. Robust Type Safety (TypeScript)
- **Discriminated Unions:** Implemented to handle complex expense lifecycles (Pending, Approved, Rejected), preventing runtime errors by ensuring status-specific properties (like `rejectionReason`) are only accessible when relevant.
- **Generics:** Utilized for API response structures and utility functions to maintain a DRY (Don't Repeat Yourself) and type-safe codebase.

### 2. Performance-First Rendering
- **Memoization Strategy:** Leveraged `useMemo` for client-side filtering logic to minimize expensive re-computations and maintain a low **INP (Interaction to Next Paint)**.
- **Optimized Bundle:** Built with **Vite** for fast HMR (Hot Module Replacement) and efficient production builds, ensuring high scores in **Core Web Vitals**.

### 3. Accessibility & Semantics (WCAG 2.1 AA)
- **Semantic HTML5:** Built using meaningful tags (`<main>`, `<header>`, `<table>`, `<thead>`) to ensure proper document outlines for SEO and Screen Readers.
- **ARIA Patterns:** Integrated ARIA roles and labels to guide assistive technologies through interactive data grids and dynamic content updates.

### 4. Global Internationalization (i18n)
- **Localization:** Implemented native **Intl API** to handle multi-currency display (BRL, USD, EUR) and locale-aware date formatting, adapting gracefully to global business requirements.
- **Responsive Layout:** Developed with a **Mobile-First** methodology using **CSS Modules**, **Flexbox**, and **CSS Grid** to ensure cross-browser compatibility and fluid experiences on both desktop and mobile.

---

## 🛠️ Tech Stack

- **Framework:** React 18+ (Hooks & Functional Components)
- **Language:** TypeScript (Strict Mode)
- **Styling:** CSS Modules (Scoped styles & Custom Properties)
- **Build Tool:** Vite
- **API Simulation:** Async/Await with Mock Service Layer

---

## 📂 Project Architecture

```text
src/
  ├── @types/      # Global type definitions and Discriminated Unions
  ├── components/  # Reusable, decoupled UI components
  ├── hooks/       # Custom hooks for state and performance logic
  ├── services/    # Data fetching and API integration layer
  ├── styles/      # Global themes and CSS Module definitions
  └── utils/       # Localized formatters and helper functions