module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "comma-dangle": "off",
    "no-var": "warn",
    semi: "off",
    "no-undef": "off",
    "no-unused-expressions": "warn",
    quotes: ["warn", "double"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
  },
};
