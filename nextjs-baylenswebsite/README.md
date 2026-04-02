# Baylens Disc Golf Blog

A Next.js 16 app with Sanity CMS integration for disc golf course reviews and comments.

## Features

- Blog posts fetched from Sanity
- Comment system (API route + Sanity write client)
- Tailwind CSS for styling
- Custom theming and imagery

## Prerequisites

- **Node.js** (v18+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Sanity.io** project (get your `projectId`, `dataset`, and API token)

## Setup

1. **Clone the repository**

	```bash
	git clone <your-repo-url>
	cd nextjs-baylenswebsite
	```

2. **Install dependencies**

	```bash
	npm install
	# or
	yarn
	# or
	pnpm install
	# or
	bun install
	```

3. **Configure environment variables**

	Create a `.env` file in the root with:

	```
	SANITY_PROJECT_ID=your_project_id
	SANITY_DATASET=your_dataset
	SANITY_API_WRITE_TOKEN=your_sanity_write_token
	```

	- Get these from your [Sanity.io](https://www.sanity.io/) project settings.
	- The write token is required for posting comments.

4. **Run the development server**

	```bash
	npm run dev
	# or
	yarn dev
	# or
	pnpm dev
	# or
	bun dev
	```

	Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` — Next.js app directory (pages, layout, API routes)
- `src/app/components/` — UI components (blog cards, comments, header, footer, etc.)
- `src/app/blog/[slug]/` — Dynamic blog post pages
- `src/sanity/` — Sanity client and seed scripts

## Sanity Integration

- Blog posts and comments are stored in Sanity.
- Configure your Sanity schemas for `BlogPost` and `comment` types.
- The app fetches posts and allows users to submit comments via the `/api/comments` route.

## Styling

- Uses Tailwind CSS (see `postcss.config.mjs` and `globals.css`)
- Custom colors and fonts (Geist)

## Deployment

- Deploy easily to [Vercel](https://vercel.com/) or any platform supporting Next.js 16.
