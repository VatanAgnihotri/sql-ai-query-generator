// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "max-lines": ["error", { max: 250 }],
      "prettier/prettier": [
        "error",
        {
          trailingComma: "all",
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          bracketSpacing: true,
          eslintIntegration: true,
          printWidth: 120,
        },
      ],
    },
  }
);
