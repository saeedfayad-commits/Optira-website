# Optira

**Helping Australian high school students explore careers with confidence.**

Optira is a free, student-friendly career discovery platform built for Australian students aged 14–18. It provides structured career profiles, a personality-based quiz, and side-by-side comparisons — in plain English.

---

## 📁 Project Structure

```
optira/
├── index.html          # Homepage
├── quiz.html           # Career match quiz (7 questions)
├── careers.html        # Career explorer with cluster filters
├── compare.html        # Side-by-side career comparison
├── opportunities.html  # Scholarships & opportunities
├── parents.html        # Page for parents & caregivers
├── schools.html        # Page for schools & advisers
├── dashboard.html      # Student dashboard
├── style.css           # All styles (dark theme, mobile-responsive)
├── main.js             # Mobile menu + scroll-reveal animations
└── README.md
```

---

## 🚀 Getting Started

This is a **static HTML site** — no build tools required.

### Run locally

Just open `index.html` in your browser, or use a simple local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8000`

### Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Deploy to Netlify

1. Drag and drop this folder into [netlify.com/drop](https://app.netlify.com/drop)  
   — or connect your GitHub repo for automatic deploys.

---

## ✨ Features

- **Career Explorer** — 50+ career profiles with salary ranges, study paths, and AI impact ratings
- **Career Match Quiz** — 7-question quiz that matches students to career clusters
- **8 Career Clusters** — Health, Business, Trades, Creative, Tech, Law, Education, Science
- **Dark mode UI** — youth-native aesthetic inspired by modern social apps
- **Fully responsive** — works on mobile, tablet, and desktop
- **Zero dependencies** — no frameworks, no npm, no build step

---

## 🎨 Design

- **Fonts:** Syne (display) + Inter (body) via Google Fonts
- **Colors:** Deep dark background (`#0a0a0f`) with purple gradient accent
- **Style:** Bold, modern, social-media-native — built for students, not corporates

---

## 📄 Disclaimer

Optira provides general career information only. It does not replace professional career advice, school counselling, or independent research. Salary figures are approximate ranges for Australian conditions and may vary by state, employer, and experience level.

---

© 2026 Optira
