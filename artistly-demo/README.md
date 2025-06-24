# 🎤 Artistly – Performer Booking Platform

Welcome to the Artistly frontend project! This is a modern web app built with **Next.js App Router**, **Tailwind CSS**, and **ShadCN UI** for booking artists like musicians, DJs, comedians, and more.

---

## 🚀 Features

* 🔍 Explore & filter performers by category, price & location
* 📋 Artist onboarding form with validation
* 📂 Modular folder structure with Context API
* 🎨 Fully responsive UI using Tailwind utility classes
* ⚙️ ShadCN dropdowns & inputs
* ✅ SEO metadata configured per page

---

## 📁 Folder Structure

```bash
app/
├── artists/         → Performer listing UI + filters
├── dashboard/       → Placeholder for admin/dashboard view
├── onboard/         → ArtistOnboardingForm page + metadata
├── layout.js        → Root layout
├── page.js          → Homepage
components/
├── forms/           → ArtistOnboardingForm.js
├── ui/              → Navbar, Footer, Cards, Tables
context/
├── FilterContext.js → Filtering logic for dropdowns
├── FormContext.js   → Multi-step form shared state
public/
├── seo-artistly-banner.jpg → Open Graph image for social preview
```

---

## 🔧 Installation

```bash
git clone https://github.com/your-username/artistly-demo
cd artistly-demo
npm install
```

### Run the dev server

```bash
npm run dev
```

---

## 🧠 Tech Stack

* **Next.js 15 App Router**
* **Tailwind CSS**
* **ShadCN UI**
* **React Hook Form + Yup**
* **Context API**

---

## 📝 SEO Metadata (App Router)

Metadata is configured inside `app/onboard/page.js` like so:

```js
export const metadata = {
  title: "Artist Onboarding – Artistly",
  description: "Join Artistly as a performer...",
  openGraph: {
    title: "Become a Featured Artist",
    images: ["/seo-artistly-banner.jpg"]
  },
};
```

---

## ✅ Guidelines

* Use **Tailwind utility classes only** (no inline `style={...}`)
* All dropdown filters use **ShadCN DropdownMenu**
* Form logic lives in **Context API** for reusability
* Add your own API integrations or mock services

---

## 🙌 Credits

Built by \[Your Name] – Frontend Developer

Feel free to improve, fork, and scale this for production 🚀
