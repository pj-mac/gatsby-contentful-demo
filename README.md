<img src="static/images/logo.jpg" alt="Logo" width="300" />

[![Netlify Status](https://api.netlify.com/api/v1/badges/cebf06d3-7516-45f1-bd8c-fdd5a3b85377/deploy-status)](https://app.netlify.com/sites/pjmac/deploys)

# Demonstration of a Gatsby-Contentful website

This is an example of using Gatsby and Contentful to build a basic starter website.

## Demo Site

### 👉 [https://pjmac.netlify.app/](https://pjmac.netlify.app/)

## What's included

- React
- Gatsby
- TypeScript
- ESLint
- Unit Testing (Jest)
- Tailwind CSS and PostCSS
- Heroicons
- Debouncer using Lodash
- Gatsby plug-ins for rendering images and Markdown
- Netlify configuration

The homepage is generated using `src/pages/index.tsx`. Individual pages are created using `gatsby-node.ts` and `src/templates/ProfilePageTemplate.tsx`.

## Building locally

Create an `.env` file to store environment variables. You can also create one per environment, such as `.env.development` and  `.env.production`. Then copy the contents of `_env.sample` and paste it into the new file(s). Add the values (obtained from Contentful) to variables CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN.

Run `npm install` to install dependencies.

If using VS Code, install the following extensions:

- ESLint
- Tailwind CSS IntelliSense

### Scripts

```bash
npm run dev
npm run build
npm run serve
npm run clean
npm run test
npm run lint
npm run typecheck
```

## Contentful Data Model

### Content model: Skill

- Name (name)
  - Short text
  - Entry title
  - Required
  - Appearance: Single line

### Content model: Consultant

- Active (active)
  - Boolean
  - Default value: Yes
  - Appearance: Radio
  - True condition label: Yes
  - False condition label: No
- Name (name)
  - Short text
  - Entry title
  - Required
  - Appearance: Single line
- Slug (slug)
  - Short text
  - Required
  - Unique field
  - Appearance: Slug
- Title (title)
  - Short text
  - Appearance: Single line
- Phone (phone)
  - Short text
  - Appearance: Single line
- Email (email)
  - Short text
  - Validation: Match email pattern
  - Appearance: Single line
- City (city)
  - Short text
  - Appearance: Single line
- StateProvince (stateProvince)
  - Short text
  - Appearance: Single line
- Country (country)
  - Short text
  - Accept only specified values: enter country options
  - Appearance: Dropdown
- Website (website)
  - Short text
  - Appearance: Single line
  - Validation: Match URL pattern
- Image (image)
  - Media
  - Appearance: Asset card
- Bio (bio)
  - Long text
  - Appearance: Markdown
- Skills (skills)
  - References (many)
  - Accept only specified entry type: Skill
  - Appearance: Entry links list
- HourlyFee (hourlyFee)
  - Integer
  - Appearance: Number editor
  - Display name: Hourly Fee (USD)
- AvailableStarting (availableStarting)
  - Date and time
  - Appearance: Date picker
- AvailableEnding (availableEnding)
  - Date and time
  - Appearance: Date picker

After creating content models, add a placeholder entry to each with the name of "PLACEHOLDER" and set "Active" to No when applicable.

Add environment variables to Netlify.