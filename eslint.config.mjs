import antfu from "@antfu/eslint-config";

// Run this command to generate base config and vs code settings:
// pnpm dlx @antfu/eslint-config@latest
// @ts-check
// TODO: add tailwindcss plugin to eslint config

export default antfu({
  type: "app",
  vue: true,
  typescript: true,
  formatters: true,
  ignores: [
    ".pnpm-store",
  ],
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
  },
});
