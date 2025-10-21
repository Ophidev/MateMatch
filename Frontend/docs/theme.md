

# 🎨 **MateMatch Theme Guide – Light + Dark Mode**

> *Where design meets connection — cozy, modern, and built for both day & night.*

---

## 🧭 Overview

MateMatch is designed with **emotional balance**:

* **Warm colors** for friendliness
* **Cool tones** for trust
* **Neutral bases** for clarity

Two cohesive color schemes:

* **☀️ Light Mode:** Soft, open, and social
* **🌙 Dark Mode:** Intimate, elegant, and calm

---

## 🌈 Color Palette – CSS Variables

| Variable           | Light Mode | Dark Mode | Usage / Where It’s Applied                              |
| ------------------ | ---------- | --------- | ------------------------------------------------------- |
| `--color-blush`    | #F7B2B7    | —         | Light accent areas, subtle highlights                   |
| `--color-coral`    | #FF6B6B    | #FF8C8C   | Primary buttons, CTAs                                   |
| `--color-amber`    | #FFD166    | #FFCA3A   | Secondary buttons, hover states                         |
| `--color-lilac`    | #CDB4DB    | #9D8AC4   | Panels, highlights, cards                               |
| `--color-teal`     | #118AB2    | #4BA3C3   | Info messages, links, active elements                   |
| `--color-mint`     | #06D6A0    | #00C896   | Success messages, positive feedback                     |
| `--color-charcoal` | #2D2D2D    | #FAFAFA   | Primary text in light mode, secondary text in dark mode |
| `--color-snow`     | #FAFAFA    | #121212   | Backgrounds, large surface areas                        |
| `--color-softgray` | #E0E0E0    | #2A2A2A   | Borders, dividers                                       |
| `--color-midnight` | #073B4C    | #073B4C   | Deep accent areas, dark headers                         |

| Dark Mode Specific     | Value   | Usage                                    |
| ---------------------- | ------- | ---------------------------------------- |
| `--color-dark-bg`      | #121212 | Overall dark background                  |
| `--color-dark-surface` | #1E1E1E | Cards, modals, UI panels in dark mode    |
| `--color-dark-text`    | #FAFAFA | Text in dark mode                        |
| `--color-dark-accent`  | #FF8C8C | Primary buttons in dark mode             |
| `--color-dark-border`  | #2A2A2A | Borders, dividers in dark mode           |
| `--color-dark-link`    | #4BA3C3 | Links, interactive elements in dark mode |
| `--color-dark-success` | #00C896 | Success / positive feedback in dark mode |
| `--color-dark-error`   | #FF5C5C | Error / warnings in dark mode            |

---

## 🧱 Color Usage Breakdown (with CSS Variables)

| Area                     | Light Mode CSS Var | Dark Mode CSS Var      | Description                          |
| ------------------------ | ------------------ | ---------------------- | ------------------------------------ |
| 🏠 Background            | `--color-snow`     | `--color-dark-bg`      | App background                       |
| 🧩 Card / Panel          | `--color-snow`     | `--color-dark-surface` | Cards, feed items                    |
| ✍️ Primary Text          | `--color-charcoal` | `--color-dark-text`    | Headings, body text                  |
| 🖱️ Primary Button       | `--color-coral`    | `--color-dark-accent`  | Main call-to-action                  |
| 💬 Hover / Secondary Btn | `--color-amber`    | `--color-dark-border`  | Hover state for buttons              |
| 🔗 Links / Active        | `--color-teal`     | `--color-dark-link`    | Links, menu items                    |
| 🟢 Success               | `--color-mint`     | `--color-dark-success` | Accepted requests, positive feedback |
| 🔴 Error / Warning       | `--color-error`    | `--color-dark-error`   | Error alerts, rejections             |
| 🧊 Navbar / Footer       | `--color-snow`     | `--color-dark-surface` | Top / bottom bars                    |
| 🌙 Dark Accent Areas     | `--color-midnight` | `--color-midnight`     | Deep backgrounds, headers            |
| ⚪ Border / Divider       | `--color-softgray` | `--color-dark-border`  | Structural dividers                  |
| ✨ Accent Highlights      | `--color-lilac`    | `--color-lilac`        | Panels, small highlights             |
| 🎯 Light Accents         | `--color-blush`    | —                      | Subtle highlights, UI flair          |

---

## ✨ Theme Emojis & Personality

> **Friendly meets Futuristic**

| Mood | Emoji                        | Usage |
| ---- | ---------------------------- | ----- |
| 💕   | Match success, relationships |       |
| 🏡   | Home screen, roommates       |       |
| ✨    | Action highlights            |       |
| 🌙   | Dark mode toggle             |       |
| ☀️   | Light mode toggle            |       |
| 💬   | Chat / Messaging             |       |
| 🧭   | Navigation / Onboarding      |       |
| 🎯   | Buttons / Goals / Prompts    |       |

---

## 🔤 Typography System

| Type                  | Font                                                     | Use Case       | Description                |
| --------------------- | -------------------------------------------------------- | -------------- | -------------------------- |
| 🧭 **Primary Font**   | [Poppins](https://fonts.google.com/specimen/Poppins)     | Headings, CTAs | Rounded, bold, friendly    |
| 📖 **Secondary Font** | [Inter](https://fonts.google.com/specimen/Inter)         | Body text      | Highly legible, neutral    |
| 💎 **Accent Font**    | [Quicksand](https://fonts.google.com/specimen/Quicksand) | Logo, Taglines | Playful, rounded geometric |

---

## ✅ Quick Summary of CSS Variables

| CSS Variable           | Light Mode | Dark Mode | Usage                           |
| ---------------------- | ---------- | --------- | ------------------------------- |
| `--color-blush`        | #F7B2B7    | —         | Subtle accents                  |
| `--color-coral`        | #FF6B6B    | #FF8C8C   | Primary buttons, CTAs           |
| `--color-amber`        | #FFD166    | #FFCA3A   | Secondary / hover buttons       |
| `--color-lilac`        | #CDB4DB    | #9D8AC4   | Panels, highlights              |
| `--color-teal`         | #118AB2    | #4BA3C3   | Links, info messages            |
| `--color-mint`         | #06D6A0    | #00C896   | Success feedback                |
| `--color-charcoal`     | #2D2D2D    | #FAFAFA   | Primary text                    |
| `--color-snow`         | #FAFAFA    | #121212   | Background                      |
| `--color-softgray`     | #E0E0E0    | #2A2A2A   | Borders / dividers              |
| `--color-midnight`     | #073B4C    | #073B4C   | Dark accents                    |
| `--color-dark-bg`      | —          | #121212   | Overall dark background         |
| `--color-dark-surface` | —          | #1E1E1E   | Cards / panels in dark mode     |
| `--color-dark-text`    | —          | #FAFAFA   | Text in dark mode               |
| `--color-dark-accent`  | —          | #FF8C8C   | Primary buttons in dark mode    |
| `--color-dark-border`  | —          | #2A2A2A   | Borders / dividers in dark mode |
| `--color-dark-link`    | —          | #4BA3C3   | Links / interactive elements    |
| `--color-dark-success` | —          | #00C896   | Success / positive feedback     |
| `--color-dark-error`   | —          | #FF5C5C   | Error / warnings                |

---

This now **documents all colors from your `@theme` CSS variables** and specifies **exactly where each is used** in the app.

---



## 🧩 Example Components – Using CSS Variables

### ☀️ Light Mode Button

```jsx
<button className="bg-[var(--color-coral)] text-[var(--color-snow)] px-4 py-2 rounded-xl shadow-glow hover:bg-[var(--color-amber)] transition-all">
  💕 Find Your Match
</button>
```

**Explanation:**

* `bg-[var(--color-coral)]` → Primary button color
* `text-[var(--color-snow)]` → Text color on light background
* `hover:bg-[var(--color-amber)]` → Hover state color
* `shadow-glow` → Tailwind box shadow defined in your theme

---

### 🌙 Dark Mode Button

```jsx
<button className="bg-[var(--color-dark-accent)] text-[var(--color-dark-text)] px-4 py-2 rounded-xl shadow-dark hover:bg-[var(--color-dark-link)] transition-all">
  🌙 Keep Matching
</button>
```

**Explanation:**

* `bg-[var(--color-dark-accent)]` → Dark mode primary button
* `text-[var(--color-dark-text)]` → Text in dark mode
* `hover:bg-[var(--color-dark-link)]` → Hover effect for interactive feedback
* `shadow-dark` → Subtle glow/shadow in dark mode

---

### 🪩 Themed Card Component

```jsx
<div className="bg-[var(--color-snow)] dark:bg-[var(--color-dark-surface)] text-[var(--color-charcoal)] dark:text-[var(--color-dark-text)] p-6 rounded-2xl shadow-card dark:shadow-dark transition-all">
  <h2 className="font-heading text-xl mb-2">Roommate Preferences</h2>
  <p className="font-sans text-sm opacity-80">
    Loves cooking 👨‍🍳 and clean spaces 🧹
  </p>
</div>
```

**Explanation:**

* `bg-[var(--color-snow)]` → Card background in light mode
* `dark:bg-[var(--color-dark-surface)]` → Card background in dark mode
* `text-[var(--color-charcoal)]` → Text color in light mode
* `dark:text-[var(--color-dark-text)]` → Text color in dark mode
* `shadow-card` / `dark:shadow-dark` → Subtle shadows for depth
* `rounded-2xl` → Smooth rounded corners

---

### 🔗 Link / Active Item Example

```jsx
<a href="#" className="text-[var(--color-teal)] dark:text-[var(--color-dark-link)] font-medium hover:underline">
  View Profile
</a>
```

* `text-[var(--color-teal)]` → Light mode link color
* `dark:text-[var(--color-dark-link)]` → Dark mode link color
* `hover:underline` → Interactive hover feedback

---

### 🟢 Success Message

```jsx
<div className="bg-[var(--color-mint)] text-[var(--color-snow)] px-4 py-2 rounded-lg shadow-md">
  🟢 Request Accepted!
</div>
```

* `bg-[var(--color-mint)]` → Success background
* `text-[var(--color-snow)]` → Text on success background
* `shadow-md` → Elevation

---

### 🔴 Error / Warning Message

```jsx
<div className="bg-[var(--color-error)] text-[var(--color-snow)] px-4 py-2 rounded-lg shadow-md">
  🔴 Something went wrong!
</div>
```

* `bg-[var(--color-error)]` → Error background
* `text-[var(--color-snow)]` → Text color
* `shadow-md` → Elevation

---

### 🏠 Navbar / Footer Example

```jsx
<nav className="bg-[var(--color-snow)] dark:bg-[var(--color-dark-surface)] text-[var(--color-charcoal)] dark:text-[var(--color-dark-text)] px-6 py-4 flex justify-between items-center shadow-md">
  <h1 className="font-heading text-lg">MateMatch</h1>
  <div className="space-x-4">
    <a href="#" className="text-[var(--color-teal)] dark:text-[var(--color-dark-link)] hover:underline">Home</a>
    <a href="#" className="text-[var(--color-teal)] dark:text-[var(--color-dark-link)] hover:underline">Messages</a>
    <a href="#" className="text-[var(--color-teal)] dark:text-[var(--color-dark-link)] hover:underline">Profile</a>
  </div>
</nav>
```

* `bg-[var(--color-snow)]` / `dark:bg-[var(--color-dark-surface)]` → Navbar background
* `text-[var(--color-charcoal)]` / `dark:text-[var(--color-dark-text)]` → Text colors
* `text-[var(--color-teal)]` / `dark:text-[var(--color-dark-link)]` → Links

---

This setup now ensures that **all your MateMatch components use your global `@theme` CSS variables**, making your **Light + Dark mode fully consistent** across the app.

---

