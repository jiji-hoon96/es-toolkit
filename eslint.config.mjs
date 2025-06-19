import prettier from "eslint-plugin-prettier/recommended";
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
      ".scripts/**",
      "src/**/*.{js,ts}",
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
      "vue/component-tags-order": [
        "error",
        { order: ["template", "script", "style"] },
      ],
      "vue/no-v-html": "error",
    },
  },

  {
    files: ["src/**/{index,compat}.ts"],
    plugins: {
      prettier: prettier,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          plugins: [require.resolve("prettier-plugin-sort-re-exports")],
        },
      ],
    },
  },
];
