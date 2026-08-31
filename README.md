# 🤖 (AI Company Landing[https://ai-company-landing-six.vercel.app/])

A modern, responsive landing page for a fictional AI company. Built from scratch with React, Vite, and Tailwind CSS, the project focuses on component-driven UI, responsive layouts, interactive sections, accessibility, and polished visual design.

The landing page presents AI products and services through a complete marketing experience including company metrics, workflows, integrations, testimonials, pricing, FAQ, and conversion-focused CTAs.

## ✨ Features

- **Hero section**: Company introduction, primary CTAs, and static business metrics
- **Services**: AI solutions presented through reusable service cards
- **Product showcase**: Interactive presentation of IA platform capabilities
- **Partners**: Visual presentation of fictional partner companies
- **Workflow**: Three-step overview of the implementation process
- **Features**: AI automation, analytics, and enterprise security highlights
- **Testimonials**: Customer testimonials with interactive navigation
- **Integrations**: Visual integrations grid including Slack, HubSpot, Salesforce, AWS, Azure, Stripe, and Snowflake
- **Pricing**: Monthly and annual pricing options across three plans
- **About & team**: Company positioning and team presentation
- **FAQ**: Expandable frequently asked questions
- **Responsive navigation**: Desktop and mobile navigation experience
- **Scroll animations**: Reveal animations triggered through the Intersection Observer API
- **Scroll-aware header**: Header behavior based on the current scroll position
- **Back to top**: Floating navigation control displayed after scrolling
- **Responsive UI**: Layouts optimized for mobile, tablet, and desktop
- **Accessibility considerations**: Semantic HTML, keyboard interaction, focus management, and reduced-motion support

## 🛠️ Tech Stack

| Technology                                                | Purpose                                      |
| --------------------------------------------------------- | -------------------------------------------- |
| [React 19](https://react.dev/)                            | UI components and interactive state          |
| [Vite 8](https://vite.dev/)                               | Development server and production build      |
| [Tailwind CSS 4](https://tailwindcss.com/)                | Utility-first styling and responsive layouts |
| [React Icons](https://react-icons.github.io/react-icons/) | Interface and integration icons              |
| [ESLint](https://eslint.org/)                             | JavaScript and React code linting            |

The project currently uses **JavaScript and JSX**. TypeScript is not part of the current implementation.

## 📁 Project Structure

```text
├── public/
├── src/
│   ├── assets/
│   │   └── hero.png
│   │
│   ├── components/
│   │   ├── common/
│   │   │   └── BackToTopButton.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── SiteFooter.jsx
│   │   │   └── SiteHeader.jsx
│   │   │
│   │   └── sections/
│   │       ├── AboutSection.jsx
│   │       ├── CTASection.jsx
│   │       ├── FAQSection.jsx
│   │       ├── FeaturesSection.jsx
│   │       ├── HeroSection.jsx
│   │       ├── IntegrationsSection.jsx
│   │       ├── LandingSections.jsx
│   │       ├── PartnersSection.jsx
│   │       ├── PricingSection.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── ShowcaseSection.jsx
│   │       ├── TestimonialsSection.jsx
│   │       └── WorkflowSection.jsx
│   │
│   ├── data/
│   │   └── landingData.js
│   │
│   ├── hooks/
│   │   ├── useAutoRotate.js
│   │   ├── useRevealOnScroll.js
│   │   └── useScrollState.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Architecture overview

The project follows a component-based React structure:

- **components/layout**: Global layout components such as the header and footer.
- **components/sections**: Individual lading page sections.
- **components/common**: Reusable UI elements shared across the page.
- **data**: Centralized static content used by the sections.
- **hooks**: Reusable behavior such as scroll state, reveal animations, and automatic rotation.
- **assets**: Static visual assets used by the application.

The page composition is centralized in ``LandingSections.jsx``, keeping ``App.jsx`` focused on the application shell and global behavior.

## 📊 Content & Data

The landing page content is centralized in:

``src/data/landingData.js``

This file contains the static data used throughout the page, including:

- company statistics;
- partners;
- features;
- services;
- product showcases;
- workflow steps;
- integrations;
- testimonials;
- pricing plans;
- FAQs;
- team members;

For example, the Hero statistics are defined as static data:

```js
export const stats = [
    { label: 'Modelos Implantados', value: '+280' },
    { label: 'Ganhos Médios', value: '127%' },
    { label: 'Uptime', value: '99.99%' },
    { label: 'Clientes Globais', value: '42' },
]
```

These values are presentation content and are **not connected to a real-time backend or analytics service**.

## ⚙️ Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

Clone the  repository:

```bash
git clone https://github.com/UelintonHJ/ai-company-landing.git
```

Navigate to the project:

```bash
cd ai-company-landing
```

Install the dependencies:

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

### Production build

Create an optimized production build:

```bash
npm run build
```

The generated files are placed in:

```text
dist/
```

### Preview production build

To preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint:

```bash
npm run lint
```

## 🎨 Customization

Most of the landing page's content can be modified without changing component logic.

### Page content

Update:

```text
src/data/landingData.js
```

This is the main source for:

- statistics;
- services;
- features;
- integrations;
- testimonials;
- pricing;
- FAQs;
- team members;
- workflow conten.

### Global styling

Global styles and animations definitions are located in:

```text
src/index.css
```

### Header & navigation

The site header can be customized in:

```text
src/components/layout/SiteHeader.jsx
```

### Footer

Footer content and links are defined in:

```text
src/components/layout/SiteFooter.jsx
```

## 🧩 Design & Engineering Focus

This project was developed as a Frontend engineering and UI practice project, with emphasis on:

- component composition;
- separation of content and presentation;
- responsive design;
- semantic HTML;
- accessibility;
- reusable React hooks;
- maintainable CSS;
- interaction design;
- visual hierarchy;
- responsive typography and spacing;
- progressive enhancement;
- user experience;
- code organization.

The visual direction takes inspiration from modern technology companies and products such as Vercel, Stripe, and other contemporary SaaS interfaces.

## 🚀 Deployment

The application is publicly deployed on Vercel:

**Production**: https://ai-company-landing-six.vercel.app/

The project is a static Vite application and does not require a backend or database to run.

### Deployment pipeline

The project uses Vercel's Git integration for continuous deployment:

GitHub -> Pull Request -> Preview Deployment -> Merge into main -> Production Deployment

Every production deployment is generated from the main branch after a successful Vite production build.

### Production build

```
npm run build
```

The generated production assets are placed in:

```
dist/
```

### Local production preview

```
npm run preview
```

> vite preview is intended for locally previewing the production build and is not used as the production server.

## 📌 Project Status

This project is currently focused on the Frontend experience of a fictional AI company.

The current implementation does not include:

- a backend API;
- database persistence;
- authentication;
- real-time data;
- real analytics;
- a CMS;
- TypeScript;
- a production payment system.

The content presented by the landing page is static and intended to demonstrate UI engineering, React componentization, responsive design, and frontend development practices.

## 🎯 Purpose

This project is part of my Frontend development portfolio and is intended to demonstrate my ability to build modern interfaces from scratch using React and Tailwind CSS.

The project also serves as a practical environment for studying:

- React architecture;
- UI Engineering;
- accessibility;
- responsive design;
- frontend performance;
- component design;
- maintainable project structure;
- modern development workflows.

## 📄 License

This project was developed for study and portfolio purposes.
