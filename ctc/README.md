Crack The Campus – Landing Page

My take on the Crack The Campus landing page, built for students and kept as light as I could make it.

→ Live site: *add your Vercel/Netlify link here*

→ Lighthouse reports: see the Performance section at the bottom.

Setup

You need Node 18 or newer.

```
npm install

npm run dev          # local dev server

npm run build        # production build into /dist

npm run preview      # serve the build locally
```

To redo the hero image after changing the photo (needs Python and Pillow 11.3+ for AVIF):

```
python scripts/optimize_images.py
```

Tech choices

→ React + Vite

The page is made of repeated pieces (cards, sections, buttons), so components make sense, and Vite gives fast builds and small output. I didn't use Next.js because there is one static page and no server side needs. If this grows into a real product I'd move to Next or add React Router.

→ Tailwind CSS v4

Spacing, colours and breakpoints stay consistent without me writing lots of CSS, and the build only ships the classes I actually used.

How the code is organised

```
src/

  data.js                  all text and course content

  index.css                colour tokens, base styles, the one animation

  components/

    ui/                    Button, Section (reused everywhere)

    sections/              Navbar, Hero, Logos, Courses, Score, Stats, Faq, FinalCta, Footer

scripts/optimize_images.py makes AVIF / WebP / JPG

assets/source/             original photo

public/img/                optimised images
```

→ Sections read from data.js, so changing copy, adding a course or changing a CTA link means editing one place.

→ Button and Section are used by most sections, so they stay consistent.

→ App.jsx just lists the sections in order.

Dependencies

→ react, react-dom

UI. The only runtime dependency.

→ vite, @vitejs/plugin-react

Dev server and build.

→ tailwindcss, @tailwindcss/vite

Styling, build time only.

→ I didn't add an animation library, an icon pack or a UI kit, because CSS covers everything I animate.

Performance

→ Hero image

Exported as AVIF, WebP and JPG at two sizes, served through <picture> with srcset. It has explicit width and height so the page doesn't jump, fetchpriority="high", and a preload tag in index.html because it's the biggest thing on screen (LCP).

→ Fonts

System font stack, so there are no font files to download and no flash of unstyled text.

→ JavaScript

Everything below the hero is loaded with React.lazy, so the first load only needs the navbar and hero. React is the only runtime dependency.

→ No images elsewhere

Company names are text, the FAQ uses native <details>, so no extra JS or requests.

→ CSS

Tailwind only outputs the classes in use.

→ I haven't measured the exact bundle size yet. npm run build prints it.

Animations

→ Only two kinds: a fade-up on the hero text when the page loads, and small hover/press transitions on buttons and cards.

→ They only change transform and opacity, so the browser doesn't have to redo layout.

→ Both are wrapped so they switch off when the user has prefers-reduced-motion turned on.

→ No animation library.

→ I skipped scroll-reveal effects on purpose. They'd add JavaScript and observers for something that doesn't help students find anything faster.

Decisions and assumptions

→ I couldn't see the live design in detail, only its content, so the structure follows the real site (hero, company strip, courses, CTC Score, stats, FAQ, footer) and the look is mine.

→ Dark theme with #ADADAD as the primary colour, near-black backgrounds, and one warm accent used only for small labels. All colours are in index.css so a re-theme is one edit.

→ Text content and the four courses are mock data. No backend.

→ Hero is two columns (text left, photo right) so the whole photo is visible instead of being cropped behind the text.

→ Navigation uses in-page anchors, so nothing reloads.

Performance report

Run on the deployed URL, mobile and desktop.

→ Mobile

Performance:
Accessibility:
Best Practices:
SEO:

→ Desktop

Performance:
Accessibility:
Best Practices:
SEO:

→ LCP: ___

→ CLS: ___

→ TBT: ___

→ Screenshots/HTML reports: reports/ (add them here)

Questions I expect, and my answers

Why this framework?

→ React fits a page made of repeated components, and Vite keeps the build quick and the output small. I didn't need server rendering for a static landing page, so Next.js would have been extra weight.

Why these dependencies?

→ Only React, plus Vite and Tailwind at build time. Anything else, like an animation library, would have added JavaScript for effects CSS can already do.

How did you handle images?

→ I converted the hero to AVIF and WebP with a JPG fallback, in two sizes, and used <picture> so each browser takes the smallest format it understands.

→ I set width and height to avoid layout shift, preloaded it, and gave it high fetch priority because it's the LCP element.

How did you handle fonts?

→ I used the system font stack, so there's nothing to download.

→ The trade-off is that the typography is less unique than a custom font.

How did you implement animations?

→ CSS only, on transform and opacity.

→ One fade-up on the hero and hover effects on buttons and cards.

→ They turn off for prefers-reduced-motion.

How did you reduce unnecessary JavaScript?

→ React is the only runtime dependency.

→ Sections under the hero are lazy loaded.

→ The FAQ uses <details> instead of state.

→ The only useState is the mobile menu toggle.

What trade-offs did you make?

→ System fonts over a branded font.

→ No scroll animations.

→ Text company names instead of logos.

→ Plain JavaScript over TypeScript.

→ All of them favour speed and simplicity over polish.

What would you optimise further in production?

→ Self-hosted subset font.

→ A CDN image service for responsive sizes.

→ SVG logos.

→ Caching headers.

→ Lighthouse checks in CI.

How would you add a new course or section?

→ A new course is one object in data.js.

→ A new section is a new file in components/sections that I add to App.jsx.

How would you change the theme?

→ Edit the colour values in the @theme block in index.css.

→ Components use the colour names, not hex codes.
