# Stage 6 Deployment Guide

This portfolio is ready for GitHub Pages.

## 1. Open the project in VS Code

Open:

```text
rishit-portfolio-stage-6-final
```

## 2. Install dependencies

```bash
npm install
```

## 3. Test locally

```bash
npm run dev
```

Open the local Vite URL, usually:

```text
http://localhost:5173/
```

## 4. Final build test

Before uploading:

```bash
npm run build
```

Then:

```bash
npm run preview
```

This previews the exact production build.

---

# Upload to GitHub

## 5. Create a GitHub repository

Recommended repository name:

```text
rishit-portfolio
```

The project uses a relative Vite base, so another repository name will also work.

## 6. Initialize Git

Inside the project folder:

```bash
git init
git add .
git commit -m "Initial professional portfolio"
git branch -M main
```

## 7. Connect the repository

Replace YOUR-USERNAME if needed:

```bash
git remote add origin https://github.com/grishit/rishit-portfolio.git
git push -u origin main
```

---

# GitHub Pages — Recommended Method

This project includes:

```text
.github/workflows/deploy.yml
```

The workflow builds and deploys the website automatically whenever code is pushed to `main`.

## 8. Enable GitHub Pages

On GitHub:

1. Open the repository.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, select:
   **GitHub Actions**
5. Push your code to `main`.

GitHub will run the deployment workflow.

The website URL will normally look like:

```text
https://grishit.github.io/rishit-portfolio/
```

---

# Updating the website later

Edit your files locally.

Then run:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will redeploy automatically.

---

# Main files you will update

## Personal profile

```text
src/data/siteConfig.js
```

## Projects

```text
src/data/projects.js
```

## Dashboards

```text
src/data/dashboards.js
```

## Skills

```text
src/data/skills.js
```

## Education / International Immersion / Certifications / Achievements

```text
src/data/profileSections.js
```

## Images

```text
public/assets/projects/
public/assets/dashboards/
```

---

# Add a future project

You do NOT need to create another React component.

Add a new object to:

```text
src/data/projects.js
```

Add its screenshot to:

```text
public/assets/projects/
```

and push the update to GitHub.

---

# Before publishing publicly

Check:

- Resume is final.
- Email is correct.
- LinkedIn URL works.
- GitHub URL works.
- No confidential company/customer data is included.
- Every project has either a screenshot or a clean placeholder.
- Video demo does not contain confidential data.
- Raw academic/team workbooks are not publicly downloadable unless you intentionally add them.
