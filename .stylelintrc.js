module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-idiomatic-order",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "no-descending-specificity": null,
  },
  ignoreFiles: ["!**/*.css"],
};
