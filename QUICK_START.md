# 🎯 Quick Setup Guide

## Your Site is Ready! Here's What to Do Now:

### 📍 Development Server
✅ **Currently running at:** `http://localhost:5173/`

Your site is live locally! Press `Ctrl + C` in the terminal to stop.

---

## 🎨 Step 1: Customize Your Content (5 minutes)

Edit **`src/content.js`** - that's where everything is:

```javascript
// Your personal info
export const personalInfo = {
  name: 'Reynold Mashininga',      // ← Change this
  title: 'Web Developer & Graphic Designer',  // ← And this
  location: 'Zimbabwe',             // ← And this
  email: 'reynold@example.com',     // ← Your email
  whatsapp: '263712345678',         // ← Your WhatsApp
  github: 'https://github.com',     // ← Your GitHub
  linkedin: 'https://linkedin.com', // ← Your LinkedIn
  behance: 'https://behance.net',   // ← Your Behance
};
```

Then scroll down and update:
- **Services** - Add/remove your services
- **Portfolio** - Add your projects
- **Pricing** - Set your prices
- **Testimonials** - Add client reviews
- **Skills** - List your technologies

---

## 📸 Step 2: Add Your Images

Use free image services:
- **Unsplash** - Free beautiful images
- **Pexels** - Stock photos
- **Pixabay** - Free images
- **Imgur** - Upload & get URL
- **Cloudinary** - Image optimization

Just get image URLs and paste into `content.js`

---

## ✅ Step 3: Test Locally

Your site auto-refreshes as you edit:

1. Open `http://localhost:5173/` in browser
2. Edit `src/content.js`
3. Watch changes appear instantly!

---

## 🚀 Step 4: Build for Production

```bash
npm run build
```

This creates the `dist` folder - ready to deploy!

---

## 🌐 Step 5: Deploy to Vercel

### 5a. One-Line Deploy (Easiest)

```bash
npm install -g vercel
vercel
```

Follow prompts, your site goes live in minutes!

### 5b. GitHub Method (Best for Updates)

```bash
git add .
git commit -m "Initial portfolio"
git push
# Then connect to Vercel at vercel.com
```

---

## 📋 What You Have

✅ 6 complete pages
✅ Mobile responsive  
✅ Dark mode design
✅ WhatsApp integration
✅ Lead capture form
✅ Portfolio filtering
✅ Pricing tiers
✅ Testimonials
✅ Fast & optimized
✅ Ready to deploy

---

## 🎯 Essential Files to Know

| File | Purpose | Action |
|------|---------|--------|
| **src/content.js** | All your data | ⭐ EDIT THIS |
| **src/pages/** | All pages | Reference/understand |
| **src/components.jsx** | Reusable parts | Reference |
| **tailwind.config.js** | Colors & fonts | Customize if needed |
| **README.md** | Quick reference | Read for help |
| **DEPLOYMENT_GUIDE.md** | Detailed help | Read if stuck |
| **PROJECT_SUMMARY.md** | What's included | Overview |

---

## 💡 Common First Changes

### Change Hero Headline

In `src/pages/HomePage.jsx`:

```jsx
<h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
  I build websites and designs that help <span className="text-blue-400">businesses grow</span>
</h1>
```

### Change Colors

In `tailwind.config.js`:

```javascript
colors: {
  slate: {
    900: '#0f172a', // Background color
    800: '#1e293b', // Card color
    // Adjust as needed
  },
}
```

### Add New Section

Copy a component, import it, add it to a page. Simple!

---

## 🐛 Troubleshooting

### Site not loading?
```bash
npm run dev
```

### Changes not showing?
- Save the file
- Check browser (hard refresh: Ctrl+Shift+R)

### Build failing?
```bash
npm run lint  # Check errors
npm run build # Try again
```

### WhatsApp button not working?
- Check `personalInfo.whatsapp` format
- Should be: `263712345678` (no + or spaces)

---

## 📞 Complete Resources

**For Quick Help:**
- README.md - Quick start
- PROJECT_SUMMARY.md - What's included
- This file - Getting started

**For Detailed Help:**
- DEPLOYMENT_GUIDE.md - Complete guide (100+ lines)

**For Learning:**
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)

---

## ✨ Next Commands to Run

```bash
# To edit live
npm run dev

# To prepare for deployment
npm run build

# To deploy to Vercel
vercel
```

---

## 🎉 You're All Set!

1. ✅ Site is built
2. ✅ Running locally at http://localhost:5173
3. ✅ Code is clean & commented
4. ✅ Ready to customize
5. ✅ Ready to deploy

**Go customize your content and launch your portfolio!** 🚀

---

Questions? Check the documentation files in your project.
Need help with anything specific? See DEPLOYMENT_GUIDE.md
