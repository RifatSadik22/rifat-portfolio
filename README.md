# Masudur Sadik Rifat — Portfolio

A modern, responsive portfolio combining your **technical work** and **creative work**.

## What is included

- Premium animated hero section
- About section
- Machine Learning / AI / Data Science project gallery
- Creative reel / acting / editing gallery
- YouTube video modal support
- Skills section
- Education + experience timeline
- Resume button
- Social / external links
- Contact section
- Responsive mobile layout
- Easy single-file content editing

---

## 1. How to edit your content

Open:

`content.js`

Almost everything you need to change is there.

### Change email

Find:

```js
email: "your.email@example.com",
```

Replace with your real email.

### Add your CV / resume

Create a folder called `assets` and put your PDF there, for example:

`assets/Masudur_Sadik_Rifat_CV.pdf`

Then in `content.js`:

```js
resumeUrl: "./assets/Masudur_Sadik_Rifat_CV.pdf",
```

---

## 2. Add a new tech project

Inside `projects` in `content.js`, copy one project block and change the values:

```js
{
  title: "My New Project",
  category: "Machine Learning",
  year: "2026",
  description: "Short project description.",
  tags: ["Python", "ML", "OpenCV"],
  image: "YOUR_IMAGE_LINK",
  liveUrl: "YOUR_WEBSITE_LINK",
  githubUrl: "YOUR_GITHUB_LINK"
},
```

You can add as many as you want.

---

## 3. Add a reel / acting video / edit

Inside `creativeWork`:

```js
{
  title: "Brand Campaign",
  type: "On-Camera / Brand Reel",
  brand: "Brand Name",
  description: "What I did in this project.",
  thumbnail: "YOUR_THUMBNAIL_IMAGE",
  videoUrl: "YOUR_VIDEO_LINK"
},
```

YouTube watch links, Shorts links, and youtu.be links automatically open inside the site's video player.

Instagram, Facebook, Vimeo, Google Drive, etc. will open in a new tab.

---

## 4. Add a social link

Inside `links`:

```js
{ label: "Behance", url: "https://behance.net/yourname", icon: "palette" },
```

This site uses Lucide icons:
https://lucide.dev/icons/

---

## 5. Run the site

### Easiest

Double-click `index.html`.

### Better local preview

If you have Python:

```bash
python -m http.server 8000
```

Then visit:

`http://localhost:8000`

---

## How to update the live portfolio

After editing files like `content.js`, save your changes and run:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages will redeploy the same public website automatically.

## 6. Publish for free

### GitHub Pages

1. Create a GitHub repository.
2. Upload all these files.
3. Repository → Settings → Pages.
4. Choose the `main` branch.
5. Save.
6. GitHub gives you a public URL.

### Netlify

Drag the whole project folder into Netlify Drop.

### Vercel

Import your GitHub repository into Vercel.

This project is static, so deployment is very easy.

---

## Recommended next upgrades

- Replace the initials card with your own portrait.
- Add real project screenshots.
- Add your actual brand reels.
- Add a proper downloadable CV.
- Add Google Analytics.
- Add a custom domain such as `rifat.dev` or `masudurrifat.com`.
- Add a contact-form backend using Formspree / Web3Forms.
