import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // 允许未使用变量
      "@typescript-eslint/no-explicit-any": "off", // 允许使用 any 类型
      "@typescript-eslint/no-wrapper-object-types": "off", // 允许使用 String, Number 这种包装类型
    },
  },
];

export default eslintConfig;
