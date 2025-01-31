# cb.tarot

cb.tarot is a GPT-powered tarot card reader designed with transparency and simplicity in mind. Users can shuffle a deck and draw random cards for their reading, all while having a clear view of the entire 78-card deck—no cards hidden or obfuscated. Users can also customize elements like the inquiry topic, cardback design, and card orientation.

cb.tarot was built primarily to explore newer technology like SvelteKit, Cloudflare, the ChatGPT developer API, and Upstash.

## Goals

1. Learn about Svelte 5 by building a full stack app with SvelteKit
2. Deploy an app on Cloudflare for the first time
3. Try out ChatGPT developer API queries for basic queries
4. Explore a minimalistic yet expressive UI design
5. Share an informal review using: SvelteKit, Cloudflare, ChatGPT, and Upstash

## Scripts

```bash
pnpm install
# install dependencies
```

```bash
pnpm run dev
# launch development server with live reloading, updates, and debugging.
```

```bash
pnpm run build
# bundle project and create deployable app
```

```bash
pnpm run start
# launch production version of app
```

## Review

SvelteKit & Svelte 5 - 8/10

- Pros

  - Easy to pick up and understand
  - Easy to do certain things that are hard in other frameworks (#if, class:, etc)
  - Easy to understand project structure
  - All in one file syntax: script, html, css
  - Really good tutorial docs
  - Feels more "lightweight" vs. React

- Cons
  - Not as many 3rd party libraries compared to React
  - Really confusing going between Svelte 4 and Svelte 5
  - Preferred Svelte 4 syntax, but Svelte 5 is migrating to React-like syntax
  - AI help or stackoverflow help is lacking vs. React

Cloudflare - 8/10

- Pros

  - Easy plug and play deploy
  - Great free tier, no frills or disadvantages
  - Clean, normal UI
  - Good extra features, many for free (CDN, DNS, R2, etc)

- Cons
  - Have to use adapters or do cloudflare-specific setup because everything is routed through their ecosystem
  - Lots of options that can be confusing for someone new
  - Spammed my email after signup

ChatGPT API - 7/10

- Pros

  - Really easy to setup
  - 4.o mini is really cheap and pretty good
  - Generally good UI

- Cons
  - Costs $5 minimum to use
  - Semi inconsistent API query response times, kinda slow
  - Playground query tester costs paid tokens

Upstash - 8/10

- Pros

  - Really easy to setup
  - Good UI
  - Free tier was perfect for this app

- Cons
  - Inconsistent rate-limiting. Often, users could get 1-3 API requests in before properly getting rate-limited

## Dev Notes

cloudflare: cb

upstash: gh
