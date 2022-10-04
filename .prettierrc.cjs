module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tailwindConfig: "./tailwind.config.cjs",
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
};
