# Stage 4 Asset Guide

Stage 4 is designed so real dashboard screenshots can be dropped into the site without changing React layout code.

## Required dashboard filenames

Place screenshots here:

```text
public/assets/dashboards/
```

Use these exact names:

```text
a2-foods-dashboard.png
manufacturing-dashboard.png
hr-dashboard.png
retail-bank-dashboard.png
meraki-dashboard.png
```

The gallery will update automatically.

## If you want different filenames

Edit:

```text
src/data/dashboards.js
```

and change the matching `image` value.

## Add another dashboard later

Copy one dashboard object inside:

```text
src/data/dashboards.js
```

Then change:

- id
- title
- category
- tool
- image
- description
- metrics
- projectId

No change is required in `DashboardGallery.jsx`.

## Recommended screenshot format

- PNG preferred
- Landscape orientation
- Crop out unnecessary Excel ribbon/toolbars where possible
- Keep text readable
- Recommended width: 1400–2200 px
- Do not compress heavily

## Project files

The website can later link to:

- Excel workbook
- PDF report
- GitHub repository
- Power BI link
- deployed app/demo

Those links are controlled in:

```text
src/data/projects.js
```
