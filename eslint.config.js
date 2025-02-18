// eslint.config.js
export default [
  {
    ignores: ["node_modules/"], // Ignore unnecessary files
  },
  {
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "semi": ["error", "always"],
    },
  },
];
