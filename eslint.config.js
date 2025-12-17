import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsPlugin  from "@typescript-eslint/eslint-plugin";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      parserOptions: {
        allowDefaultProject: true,
        projectService: true
      }
    }
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  pluginReactConfig,
  eslintConfigPrettier,
  {
    ignores: ["eslint.config.js", "rsbuild.config.ts", "node_modules", "**/*.d.ts"],
  },
  {
    plugins: { "simple-import-sort": simpleImportSort, "react-hooks": reactHooks, '@typescript-eslint': tsPlugin },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "prefer-const": "error",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-vars": 1,
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": false,
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-check": true
        }
      ],
      "@typescript-eslint/await-thenable": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
      "@typescript-eslint/no-unnecessary-type-assertion": 0,
      "simple-import-sort/imports": [
        "error",
        {
          "groups": [
            ["^react", "lodash", "^\\w", "^@?\\w"],
            ["./services/^(types).", "./utils/^(types).", "./utils", "./actions"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["./constants/."],
            ["./definitions/.", "./types"],
            ["^.+\\.svg", "^.+\\.png$", "^.+\\.jpg", "^.+\\.s?css$"]
          ]
        }
      ],
      "react/jsx-curly-brace-presence": ["error"],
      "react-hooks/exhaustive-deps": 1,
      "react/jsx-sort-props": [
        "warn",
        {
          "noSortAlphabetically": true,
          "callbacksLast": true
        }
      ],
      "react/no-unused-prop-types": [1],
      "react/react-in-jsx-scope": 0,
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": "import", "next": "*" },
        { "blankLine": "any", "prev": "import", "next": "import" },
        { "blankLine": "always", "prev": "*", "next": "block-like" },
        { "blankLine": "always", "prev": "block-like", "next": "*" },
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        {
          "blankLine": "any",
          "prev": ["const", "let", "var"],
          "next": ["const", "let", "var"]
        }
      ],
      "no-restricted-syntax": [
        "error",
        {
          "selector": "ExportDefaultDeclaration",
          "message": "Avoid using 'export default'"
        }
      ],
      "no-restricted-exports": [
        "warn",
        {
          "restrictedNamedExports": ["default"]
        }
      ],
      "import/no-extraneous-dependencies": 0,
      "no-else-return": "error",
      "no-lonely-if": "error",
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "curly": 2,
      "quotes": ["error", "single", { "avoidEscape": true }],
      'default-case': 1
    }
  }
]);
