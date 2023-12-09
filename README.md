# Book a Bite

## Development Requirements

Before proceeding, please install the following software:

- [Docker][docker-download] - For easy database setup.
- [Beekeeper Studio - Community Edition][beekeeper-download] - For easy database querying and viewing. You can use `psql` if you're a keyboard elitist.
- [Node][node-download]
  ```
  nvm install 18
  nvm use 18
  ```
- [PNPM][pnpm-download] - Preferred package manager.
  ```
  npm install --global pnpm
  ```

## Get Started

```sh
# 1. Copy env.
cp .env.example .env

# 2. Run/Build Postgres in Docker.
pnpm db:stop

# - To stop:
pnpm db:stop

# 3. Install dependencies.
pnpm install

# 4. Run the dev server.
pnpm dev
```

## Database ORM Workflow (Drizzle)

```sh
# 1. Create Migration Scripts
# This will create .sql files in `drizzle` folder in Root.

# 1.a Create scripts automatically based on changes in `src/lib/server/db/schema/*.ts`
pnpm db:generate

# 1.b Create a custom migration (Use when inserting rows)
pnpm db:generate --custom

# 2. Run Migration Scripts (To apply the changes to the connected Database in `.env`)
pnpm db:migrate

# 3. Drizzle Studio (Database GUI like Robo3T, but we I actually prefer Beekeeper Studio)
pnpm drizzle-kit studio

# 4. Clearing the database (Not ideal, but might help when developing like resetting it to clean slate).
# - For this, just open Beekeeper Studio (or psql), connect to our database, and run these commands:
DROP SCHEMA public CASCADE;
DROP SCHEMA drizzle CASCADE;
CREATE SCHEMA public;
```

[node-download]: https://nodejs.org/download/release/v18.19.0/
[docker-download]: https://www.docker.com/products/docker-desktop/
[beekeeper-download]: https://github.com/beekeeper-studio/beekeeper-studio/releases
[pnpm-download]: https://pnpm.io/cli/install

<!-- # create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment. -->
