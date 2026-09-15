# Editing Guide

This portfolio is intentionally data-driven so future updates are simple.

## Add or edit a project

Open:

```text
src/data/projects.js
```

Every project is one JavaScript object.

To add a project, copy an existing object and update:

- `id`
- `title`
- `subtitle`
- `categories`
- `featured`
- `priority`
- `image`
- `description`
- `problem`
- `approach`
- `outcome`
- `tools`
- `skills`
- `links`

No layout changes are required.

## Add a screenshot

Put images in:

```text
public/assets/projects/
```

or:

```text
public/assets/dashboards/
```

Then update the matching `image` field in `projects.js`.

If an image is missing, the site automatically shows a professional placeholder.

## Add links

Inside a project:

```js
links: {
  github: 'https://github.com/...',
  dashboard: 'https://...',
  report: 'assets/reports/report.pdf',
  demo: 'https://...',
}
```

Buttons appear only when a link has a value.

## Reorder projects

Change:

```js
priority: 1
```

Lower numbers appear first.

## Feature a project

Set:

```js
featured: true
```

Featured projects use larger cards.

## Change personal details

Open:

```text
src/data/siteConfig.js
```

## Resume

Place the final PDF at:

```text
public/assets/resume/Rishit_Gupta_Resume.pdf
```

## Add a filter category

At the bottom of:

```text
src/data/projects.js
```

add the new category inside `projectCategories`.

Then use the exact same category name inside a project's `categories` array.

## Rule for future maintenance

Keep content in `src/data/`.
Keep layout in `src/components/`.
Keep visual styling in `src/styles/custom.css`.

This separation is what keeps the portfolio easy to update.


# Stage 5 Editable Sections

## Skills and tools
Edit:

```text
src/data/skills.js
```

You can add/remove skill groups or tool-ribbon items without editing the layout.

## Education, global exposure, certifications, achievements
Edit:

```text
src/data/profileSections.js
```

These sections render automatically from the data arrays.

## Contact details
Edit:

```text
src/data/siteConfig.js
```

Update:
- email
- location
- LinkedIn
- GitHub
- resume path

## Design rule
Keep:
- content in `src/data/`
- layout in `src/components/`
- styling in `src/styles/custom.css`

This keeps future updates simple.


## International immersion programs

Edit:

```text
src/data/profileSections.js
```

Inside `globalExposure`, each immersion supports:

- location
- organization
- program
- city
- period
- description
- highlights
- icon

This makes it easy to add more countries later without changing `GlobalExposure.jsx`.
