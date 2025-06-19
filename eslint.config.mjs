import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";

export default [
  {
    ignores: [
      ".yarn/**",
      "coverage/**",
      "**/dist/**",
      "**/cache/**",
      ".pnp.*",
      "**/*.d.ts",
      "**/*.tgz",
      "node_modules/**",
    ],
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      "vue/html-indent": ["error", 2],
      "vue/html-quotes": ["error", "single"],
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true },
      ],
    },
  },
];
