# Harmony

_Unified, strict editor configuration for modern web apps._

Harmony is a unified, strict editor configuration for modern React apps, designed to work seamlessly together and enforce hyper-strict syntax rules as you type to help you write bulletproof code. By default it supports React and Typescript, but also contains support for Tailwind as well as particular frameworks, such as Next.js and React Native / Expo.

By default, Harmony combines with pre-defined rulesets for [ESLint](https://eslint.org/), as well as:

- [Import](https://www.npmjs.com/package/eslint-plugin-import)
- [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [React](https://www.npmjs.com/package/eslint-plugin-react)
- [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [n](https://www.npmjs.com/package/eslint-plugin-n)
- [Typescript](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [Prettier](https://prettier.io/)
- [Tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [Stylelint](https://stylelint.io/)
- [Stylelint-Prettier](https://www.npmjs.com/package/stylelint-prettier)
- [Next.js](https://nextjs.org/docs/basic-features/eslint#eslint-plugin)

## Installation

Run the command below to install Harmony:

```sh
yarn add -D @haydenbleasel/harmony
```

You'll also need to install peer dependencies, like so:

```sh
yarn add -D \
eslint \
eslint-plugin-import \
eslint-plugin-jsx-a11y \
eslint-plugin-react \
eslint-plugin-react-hooks \
eslint-plugin-jest \
eslint-plugin-promise \
eslint-plugin-n \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
prettier \
prettier-plugin-tailwindcss \
stylelint \
stylelint-prettier \
typescript \
jest
```

If you're running [VS Code](https://code.visualstudio.com/), ensure you have the following extensions installed:

```sh
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
code --install-extension stylelint.vscode-stylelint
```

## Usage

Simply add the fields below to your `package.json`. If you don't use a particular tool (say, [Stylelint](https://stylelint.io/)) then you can simply not include the field.

```json
{
  "eslintConfig": {
    "extends": "./node_modules/@haydenbleasel/harmony/eslint.js",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  },
  "prettier": "@haydenbleasel/harmony/prettier",
  "stylelint": {
    "extends": "@haydenbleasel/harmony/stylelint"
  }
}
```

You can also create seperate files if you'd prefer - `.eslintrc`, `stylelint.config.js` and `.prettierrc`. The import syntax will differ so check the respective websites for details. If these files already exist in your repo (or you have similar fields in your `package.json`), you'll need to delete them first otherwise there will be conflicts.

Lastly, create the following `.vscode/settings.json`. This will enable full formatting on save.

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "emmet.showExpandedAbbreviation": "never",
  "editor.codeActionsOnSave": {
    "source.fixAll.esbenp.prettier-vscode": true,
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
