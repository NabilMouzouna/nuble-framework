import { config } from "@nuble/eslint-config/base.js";

export default [
  ...config,
  {
    ignores: ["node_modules/**"],
    rules: {
      // Add package-specific overrides here if needed
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];