module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    "no-console": "error",
    "import/first": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-var-requires": 0,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  root: true,
  plugins: ["react", "@typescript-eslint", "html"],
  parserOptions: {
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
