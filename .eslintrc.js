const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "airbnb",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", path.resolve(__dirname, "src")]],
        extensions: [".ts", ".js", ".jsx", ".json", ".tsx"],
      },
    },
  },
  rules: {
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
