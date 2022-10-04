module.exports = {
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-astro"),
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
  semi: false,
  singleQuote: true,
};
