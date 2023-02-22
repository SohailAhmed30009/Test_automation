module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "16.13.0",
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-modules-commonjs"
  ]
};
