# Mondo Member - Node.js

![tests](https://github.com/mondomember/node/workflows/tests/badge.svg)

Monorepo for Mondo Member Node.js utilities and libraries

## Installing Packages in a Project

## Contributing

### Adding a new package

#### Copying an existing package as a template

[@mondomember/sdk](./packages/sdk) should be the most mature and to be used as the gold standard for a template for new packages.

##### `package.json`

- package names MUST match the following guidelines:
  - for the `packages/` directory: `@mondomember/<directory-name>`
- The "main" and "types" properties MUST exist. Use "lib/index.js" and "lib/index.d.ts" for consistency.
- The MUST be a "build" script to compile the code as needed. Use "tsc -d -p ./tsconfig.json" for consistency.
- For monorepo packaging, the "repository" must match the below:
  for the packages directory ...

```json
  "repository": {
    "type": "git",
    "url": "git@github.com:mondomember/node.git",
    "directory": "packages/<new package dir>"
  },
```

- use the following tsconfig.json (requires `yarn workspace @mondomember/<package> add -D @tsconfig/node14`)

```json
{
  "extends": "@tsconfig/node14/tsconfig.json",
  "compilerOptions": {
    "preserveConstEnums": true
  },
  "include": ["lib/index.ts"],
  "exclude": ["**/*.test.ts", "__mocks__", "coverage", "node_modules"]
}
```

### Commit Syntax

Follow conventional commits guidelines: https://www.conventionalcommits.org/en/v1.0.0/

#### Examples

- `fix: Issue bug where x wouldn't let certain users y, closing #1232`
- `feat: Added this great new way to do this`
- `BREAKING CHANGE: getMethod was removed.`

Other Options:
build:, chore:, ci:, docs:, style:, refactor:, perf:, test:

### Publish

It is recommended to publish changes using `yarn publish:patch`
