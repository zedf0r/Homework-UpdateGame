import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("airbnb-base"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },

        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            ecmaVerison: 2018,
        },
    },
}];