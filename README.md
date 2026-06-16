# Bawsala Fellowship

Marketing website for the **Bawsala Fellowship** — a transformative leadership journey for
high-potential Omani youth. Built as a modern, animated single-page site.

> _"To be the premier compass for Omani youth, encouraging a generation of visionary leaders who
> possess the mindset and network to drive the Sultanate's development."_

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** (App Router)
- **React 19**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[Framer Motion](https://www.framer.com/motion/)** — scroll reveals, count-up, accordion

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.js        Root layout, fonts, metadata
  page.js          Single-page composition
  globals.css      Theme tokens (brand palette) + global styles
components/         One component per page section
lib/content.js     All site copy & data (single source of truth)
public/logos/       Brand logo assets
```

## Brand Palette

| Token        | Hex       | Use                     |
| ------------ | --------- | ----------------------- |
| Brand Purple | `#291532` | Background / logo plum  |
| Leadership   | `#24527A` | Accents                 |
| Purpose      | `#5E4B8B` | Gradients               |
| Sky Clarity  | `#A5C9EA` | Highlights              |
| Orchid       | `#A678D0` | Primary CTA / accent    |
| Cloud White  | `#F5F6FA` | Text                    |
| Moonlight    | `#DADCE5` | Muted text              |

## Editing Content

All copy lives in [`lib/content.js`](lib/content.js). Update the application link
(`APPLY_URL`), contact email, FAQs, stats, partners, and section text there without touching markup.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/) (zero config) or any Node host via
`npm run build && npm run start`.

## Notes

- The **Apply Now** buttons point to `APPLY_URL` in `lib/content.js`, wired to the live Jotform
  registration form.
- The **Mentors** section is built to host a mentor gallery; swap the category chips for photos when available.
