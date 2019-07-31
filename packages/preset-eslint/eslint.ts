const plugins = ["prettier"];

console.log(__dirname, 123123123);

const eslintConfig = ({ prettierConfig = require('./prettierrc') }: any = {}) => ({
  extends: ["eslint-config-airbnb-base", "eslint-config-prettier"].map(
    (name) => require.resolve(name)
  ),
  plugins,
  rules: {
    "func-names": [1, "as-needed"],
    "prettier/prettier": ["warn", prettierConfig]
  },
  env: {
    es6: true
  },
  overrides: [
    {
      files: ["src/**/*.spec.{js,jsx,ts,tsx}"],
      env: {
        jest: true
      },
      globals: {}
    },
    {
      files: ["src/**/*.spec.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        // TODO:
        // project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      plugins: [...plugins, "@typescript-eslint"],
      rules: {}
    }
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
} as const);

export default eslintConfig;
