# React x TypeScript x Nextjs x Tailwind | Boilerplate

Template repository for the following **tech stack:**

- React
- TypeScript
- Nextjs
- Tailwind CSS
- yarn

## How to run

```
yarn dev
```

## Development

### Tailwind CSS

Set global styles in `src/styles/global.css`. Import custom fonts in this file and add imported font to `theme/fontFamily` in the `tailwind.config.js` file. Karla font is used by default as an example.

#### Tailwind CSS example components

- [Tailblocks](https://tailblocks.cc/)
- [Tailwind Components](https://tailwindcomponents.com/)
- [MerakiUI](https://merakiui.com/)
- [Kutty](https://kutty.netlify.app/components/)
- [Kitwind](https://kitwind.io/products/kometa/components/)

### API

#### To add an API route

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Linting

Eslint enforces the AirBnB style guide and checks the code for linting errors.
Prettier also helps with auto code styling and formatting.

## Meta component

This file contains the head of the project and meta data.
Change `title`, `keywords` and `description` to suit your project.

## Layout component

This file contains the layout that will appear on each page e.g Navbar, Footer, Container etc. Takes `title` as a prop, which should be the title of the current page.

## Icons

The `assets/icons` folder contains some example icons. It is recommended to use [Hero Icons](https://heroicons.com/) as they work very well with Tailwind CSS.

## Headless UI

Another recommendation is to use [Headless UI](https://headlessui.dev/), fully accessible UI components that are designed to integrate beautifully with Tailwind CSS.
