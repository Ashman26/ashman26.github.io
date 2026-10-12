# Lloyd Ashman Portfolio - Quick Reference

## 🎯 What You Need to Do

### IMMEDIATE (Before deploying):

1. **Update config.js** (Required)
   ```javascript
   email: "your-email@example.com"
   linkedin: "https://linkedin.com/in/your-profile"
   github: "https://github.com/your-username"
   name: "Your Name"
   tagline: "Your Professional Tagline"
   ```

2. **Review projects.js** (Recommended)
   - You have 4 demo projects included
   - Keep them with "Demo Project" labels, OR
   - Replace with your actual projects
   - Instructions in projects.js file

3. **Test locally**
   ```bash
   # Already running on http://localhost:8000
   # Or start new server:
   python -m http.server 8000
   ```

### TO DEPLOY (5 minutes):

1. **Create GitHub repository**
   - Name it: `USERNAME.github.io` for user site
   - Or any name for project site

2. **Push code**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Settings → Pages
   - Source: GitHub Actions (it's already configured)

4. **Wait 1-2 minutes**
   - Your site goes live automatically!

## 📋 File Directory

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml              ← GitHub Actions (ready to use)
├── public/
│   └── assets/                     ← Put images here
├── index.html                      ← Main page (don't edit much)
├── styles.css                      ← Styling (edit for color changes)
├── main.js                         ← JavaScript (ready to use)
├── config.js                       ← EDIT THIS: Your personal info
├── projects.js                     ← EDIT THIS: Your projects
├── skills.js                       ← EDIT THIS: Your skills
├── package.json                    ← Metadata
├── .gitignore                      ← Git config (ready to use)
├── README.md                       ← Full setup guide
├── SETUP_GUIDE.md                  ← Implementation summary
└── QUICK_REFERENCE.md              ← This file
```

## 🔧 What to Edit

### config.js
```javascript
const siteConfig = {
  name: "Lloyd Ashman",              // Change to your name
  tagline: "Your tagline",           // Your professional tagline
  aboutText: "Your bio...",          // Your about section
  email: "your@email.com",           // Your email
  linkedin: "https://...",           // Your LinkedIn URL
  github: "https://...",             // Your GitHub URL
  cvPath: "/assets/CV.pdf",          // Optional: path to your CV
};
```

### projects.js
Keep 4 demo projects OR replace with yours. Each project needs:
- `id` - unique identifier
- `title` - project name
- `description` - short description
- `type` - "Demo Project" or "Case Study" etc.
- `technologies` - array of tech used
- `businessProblem` - the challenge
- `dataApproach` - how data was handled
- `technicalApproach` - implementation details
- `outcome` - results
- `demonstrates` - capabilities shown
- `artifacts` - deliverables
- `image` - SVG or image path
- `notes` - disclaimer about demo/real status

### skills.js
5 skills are configured. To edit:
- Add new skill to array
- Remove unused skills
- Update capabilities list
- Keep icon names from: database, zap, bar-chart-2, file-text, sliders

### styles.css
To change colors, edit the `:root` section:
```css
:root {
  --primary-dark: #0f172a;      /* Main background */
  --accent-blue: #00d4ff;       /* Main accent color */
  --accent-teal: #00a8a8;       /* Secondary accent */
  /* ... other variables ... */
}
```

## 🌐 Section Customization

### Update Hero CTA
In index.html, find the hero section:
```html
<a href="#projects" class="btn btn-primary">Explore My Projects</a>
<a href="#contact" class="btn btn-secondary">Get in Touch</a>
```

### Modify About Text
Edit in config.js:
```javascript
aboutText: "Your about section here..."
```

### Add/Remove Skills
Edit skills.js - add new objects to array

### Change Project Display
In index.html, filter buttons are in projects section - modify as needed

### Disable Sections
Comment out entire `<section>` in index.html if not needed

## 🚀 GitHub Deployment

### For User Site (username.github.io)
1. Create repo named `USERNAME.github.io`
2. Push to main branch
3. Auto-deploys to `https://USERNAME.github.io`

### For Project Site (username.github.io/portfolio)
1. Create any repo name
2. Settings → Pages → Source: GitHub Actions
3. Push to main branch  
4. Auto-deploys to `https://USERNAME.github.io/REPO`

## 📱 Testing Checklist

- [ ] Open http://localhost:8000
- [ ] Navigation menu works
- [ ] Mobile menu (hamburger) works
- [ ] Hero section displays correctly
- [ ] All sections scroll smoothly
- [ ] Project filtering works
- [ ] Click project → modal opens
- [ ] Contact links clickable
- [ ] Mobile layout is responsive
- [ ] No console errors (F12)
- [ ] All text is readable
- [ ] Images/SVGs display
- [ ] Buttons have hover effects

## 🎨 Design Customization Ideas

### Quick Color Change
Edit `:root` in styles.css:
```css
--accent-blue: #00d4ff;  /* Change this */
```

### Change Font
Add to top of styles.css:
```css
body {
  font-family: "Your Font", sans-serif;
}
```

### Modify Section Spacing
Search for `padding:` values in styles.css

### Add New Section
1. Add HTML in index.html
2. Add styles in styles.css
3. Update nav in navbar
4. Add link in footer

## 🔒 Important Notes

✅ **DO:**
- Update config.js with real information
- Test locally before pushing
- Keep demo projects labeled clearly
- Use HTTPS URLs for LinkedIn/GitHub
- Commit to git regularly

❌ **DON'T:**
- Put passwords or secrets in files
- Use fake LinkedIn/GitHub profiles
- Make up project details or metrics
- Delete the deployment workflow
- Hardcode email addresses (unless masking)

## 📊 Performance

- Total size: ~70KB uncompressed
- No external dependencies
- No API calls
- Loads in <500ms on 4G
- No database needed
- Works offline once loaded

## 🆘 Troubleshooting

**Site won't deploy:**
- Check GitHub Actions tab
- Verify branch is "main"
- Wait 1-2 minutes
- Clear browser cache

**Personal info not updating:**
- Edit config.js
- Reload page (Ctrl+Shift+Delete)
- Ensure proper URL format

**Projects not showing:**
- Check browser console (F12)
- Verify projects.js syntax
- Ensure all IDs are unique

**Styling looks wrong:**
- Clear cache (Ctrl+Shift+Delete)
- Check CSS file is loading (F12 Network tab)
- Verify colors in :root

## 📞 Getting Help

1. **Read the full README.md** - Most answers are there
2. **Check SETUP_GUIDE.md** - Step-by-step guide
3. **Look at inline comments** - In config.js, projects.js, skills.js
4. **Check index.html structure** - Semantic HTML shows the layout
5. **Search styles.css** - CSS is well-organized and commented

## ✨ Success Criteria

Your portfolio is ready when:
- [ ] config.js has real email/LinkedIn/GitHub
- [ ] Projects are real or clearly marked as demo
- [ ] Site loads without errors locally
- [ ] Mobile layout looks good
- [ ] All links work
- [ ] Pushed to GitHub main branch
- [ ] GitHub Actions shows successful deploy
- [ ] Live site is accessible

## 🎉 Next Steps

1. **Now:** Customize config.js (5 min)
2. **Then:** Review/update projects.js (10 min)
3. **Next:** Test locally in browser (5 min)
4. **Then:** Create GitHub repo (2 min)
5. **Finally:** Push code and deploy (3 min)

**Total time: ~30 minutes to live website!**

---

**You've got everything you need. Let's ship this! 🚀**
