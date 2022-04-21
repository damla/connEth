# ConnEth

## Technology Stack

- [Yarn](https://yarnpkg.com)
- [NextJS](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io/)
- [Moralis](https://moralis.io)
- [Web3 Authentication via Metamask](https://metamask.io)
- [tailwindcss](https://tailwindcss.com)
- [Husky](https://github.com/typicode/husky)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [i18n Routing](https://nextjs.org/docs/advanced-features/i18n-routing)
- [headlessUI](https://headlessui.dev)
- [heroicons](https://heroicons.com)

## Notes

If the husky hooks do not work, delete files found under the `.husky` folder and run these commands:

```sh
yarn husky add .husky/pre-commit
yarn husky add .husky/commit-msg
```

Fill the created files as follow:

### pre-commit

Basically, it will do linting on staged files.

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged
```

### commit-msg

This will force developer to use [semantic commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716).

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

undefined
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

#!/bin/sh
if ! head -1 "$1" | grep -qE "^(feat|fix|chore|docs|test|style|refactor|perf|build|ci|revert)(\(.+?\))?: .{1,}$"; then
    echo "Aborting commit. Your commit message is invalid." >&2
    exit 1
fi
if ! head -1 "$1" | grep -qE "^.{1,88}$"; then
    echo "Aborting commit. Your commit message is too long." >&2
    exit 1
fi
```

## Installation

```bash
git clone git@github.com:damla/connEth.git

cd connEth

# Install node packages
yarn

# Note: Environment variables need to be added
# before running

# generate prisma client according to schema directives
npx prisma generate --schema=./src/lib/prisma/schema.prisma

# create initial migration
npx prisma db push

# seed data according to seed.ts
npx prisma db seed

# Run
yarn dev
```
