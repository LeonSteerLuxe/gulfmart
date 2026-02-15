# GulfMart Design System

## Brand Attributes
**Modern • Trustworthy • Efficient • Premium**

Gulf region aesthetic with international quality standards.

---

## 1. Color Palette

### Primary
```css
--emerald-400: #34d399;  /* Primary accent */
--emerald-500: #10b981;  /* Primary CTA */
--emerald-600: #059669;  /* Primary hover */
```

### Secondary
```css
--cyan-400: #22d3ee;     /* Secondary accent */
--cyan-500: #06b6d4;     /* Links, highlights */
```

### Neutral (Dark Mode)
```css
--zinc-50:  #fafafa;     /* Primary text */
--zinc-100: #f4f4f5;     /* Secondary text */
--zinc-400: #a1a1aa;     /* Muted text */
--zinc-500: #71717a;     /* Disabled text */
--zinc-700: #3f3f46;     /* Borders light */
--zinc-800: #27272a;     /* Borders, cards */
--zinc-900: #18181b;     /* Card backgrounds */
--zinc-950: #0a0a0b;     /* Page background */
```

### Semantic
```css
--success: #22c55e;      /* Green */
--warning: #f59e0b;      /* Amber */
--error:   #ef4444;      /* Red */
--info:    #3b82f6;      /* Blue */
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, #34d399, #06b6d4);
--gradient-hero: linear-gradient(135deg, #10b981, #22d3ee, #3b82f6);
--gradient-card: linear-gradient(135deg, #18181b, #27272a);
```

---

## 2. Typography

### Font Family
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-display: 'Inter', system-ui, sans-serif;
```

### Type Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 72px / 4.5rem | 700 | 0.95 | Hero headlines |
| H1 | 48px / 3rem | 700 | 1.1 | Page titles |
| H2 | 36px / 2.25rem | 700 | 1.2 | Section headers |
| H3 | 24px / 1.5rem | 600 | 1.3 | Card titles |
| H4 | 20px / 1.25rem | 600 | 1.4 | Subsections |
| Body Large | 18px / 1.125rem | 400 | 1.6 | Lead text |
| Body | 16px / 1rem | 400 | 1.6 | Default text |
| Body Small | 14px / 0.875rem | 400 | 1.5 | Secondary text |
| Caption | 12px / 0.75rem | 500 | 1.4 | Labels, badges |

---

## 3. Spacing System

Base unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight gaps |
| space-2 | 8px | Icon gaps |
| space-3 | 12px | Button padding |
| space-4 | 16px | Card padding (mobile) |
| space-5 | 20px | Section gaps |
| space-6 | 24px | Card padding |
| space-8 | 32px | Section padding |
| space-10 | 40px | Large gaps |
| space-12 | 48px | Section margins |
| space-16 | 64px | Page sections |
| space-20 | 80px | Hero padding |
| space-24 | 96px | Major sections |

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| rounded-sm | 4px | Small elements |
| rounded | 8px | Buttons, inputs |
| rounded-lg | 12px | Cards |
| rounded-xl | 16px | Large cards |
| rounded-2xl | 20px | Feature cards |
| rounded-3xl | 24px | Hero elements |
| rounded-full | 9999px | Pills, avatars |

---

## 5. Shadows

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
--shadow: 0 4px 6px rgba(0,0,0,0.3);
--shadow-md: 0 6px 12px rgba(0,0,0,0.4);
--shadow-lg: 0 12px 24px rgba(0,0,0,0.5);
--shadow-xl: 0 24px 48px rgba(0,0,0,0.6);

/* Colored shadows */
--shadow-emerald: 0 8px 24px rgba(16, 185, 129, 0.25);
--shadow-cyan: 0 8px 24px rgba(6, 182, 212, 0.25);
```

---

## 6. Component Tokens

### Buttons
```css
/* Primary */
background: var(--emerald-500);
color: white;
padding: 12px 24px;
border-radius: 9999px;
font-weight: 600;
transition: all 150ms;

/* Hover */
background: var(--emerald-600);
transform: translateY(-1px);

/* Secondary */
background: transparent;
border: 1px solid var(--zinc-700);
color: var(--zinc-100);

/* Ghost */
background: transparent;
color: var(--zinc-400);
```

### Cards
```css
background: rgba(24, 24, 27, 0.5);
border: 1px solid var(--zinc-800);
border-radius: 24px;
padding: 40px;

/* Hover */
border-color: var(--zinc-700);
transform: translateY(-4px);
box-shadow: var(--shadow-lg);
```

### Inputs
```css
background: var(--zinc-900);
border: 1px solid var(--zinc-800);
border-radius: 12px;
padding: 12px 16px;
color: var(--zinc-100);

/* Focus */
border-color: var(--emerald-500);
outline: none;
box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
```

---

## 7. Animation Guidelines

### Timing
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### Easing
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Standard Transitions
```css
/* Hover lift */
transform: translateY(-4px);
transition: transform 300ms var(--ease-out);

/* Fade in */
opacity: 0 → 1;
transition: opacity 300ms var(--ease-out);

/* Scale */
transform: scale(1.02);
transition: transform 150ms var(--ease-out);
```

---

*Generated: 2026-02-15*
