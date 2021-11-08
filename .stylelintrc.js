module.exports = {
  extends: [
    "stylelint-config-standard", //Turns on additional rules to enforce common conventions found in the specifications and in a handful of CSS styleguides, including: The Idiomatic CSS Principles, Google's CSS Style Guide, Airbnb's Styleguide, and @mdo's Code Guide.
    "stylelint-config-css-modules", //Tweaks stylelint rules to accept css modules specific syntax. This is useful as an override of pre-defined rules, for instance the stylelint-config-standard.
    "stylelint-config-idiomatic-order", //Order your styles based on idiomatic-css.
    "stylelint-config-prettier", //Turns off all rules that are unnecessary or might conflict with Prettier. This lets you use your favorite shareable config without letting its stylistic choices get in the way when using Prettier.
  ],
  rules: {
    "at-rule-no-unknown": null, //Disallow unknown at-rules.
    "no-descending-specificity": null, //Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
  },
  ignoreFiles: ["!**/*.css"],
};
