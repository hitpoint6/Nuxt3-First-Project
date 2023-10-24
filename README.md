# WearNCarry

Shopping app built by Nuxt3 and TailwindCSS

## Development

- Installation
  `npx nuxi@latest init <project-name>`
- Pages, Route parameters, NuxtLink
  - useRoute().params
- layouts/default.vue, create a slot
- Tailwind:
  1. npm install --save-dev @nuxtjs/tailwindcss
  2. Add @nuxtjs/tailwindcss to the modules section of nuxt.config.{ts,js}
  3. Add ./assets/css/tailwind.css
- Fetch data useFetch(``);
- Build reusesable components in /components folder,
  - auto import feature in Nuxt3
  - defineProps()
- Custom error page,
  - add a error page under ./
  - clearError({redirect('/')})
  - throw createError(statusCode, statusMessage) in pages to use it
  - Add a thrid property called fatal: true to capture client errors
- Metadata
  - Add it under nuxt.config
  - useHead({}) for each page script
  - or `<Head><Title></Title></Head>`
- Server Route
  - defineEventHandler
  - event.context.params
  - getQuery(event)
  - await readBody(event)
  - process.env.CURRECNY_API_KEY
- Handle State
  - useState()

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
