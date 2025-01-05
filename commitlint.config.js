module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // A new feature
        "fix", // A bug fix
        "docs", // Documentation only changes
        "style", // Changes that do not affect the code (e.g., formatting)
        "refactor", // Code changes that neither fix a bug nor add a feature
        "perf", // Performance improvements
        "test", // Adding or fixing tests
        "build", // Changes to build system or dependencies
        "ci", // Changes to CI configuration
        "chore", // Other changes that don't modify src/test files
        "revert", // Reverts a previous commit
      ],
    ],
    "type-case": [2, "always", "lower-case"], // Only lowercase types
    "subject-case": [2, "always", "sentence-case"], // Sentence case for the subject
    "subject-empty": [2, "never"], // Subject must not be empty
    "header-max-length": [2, "always", 72], // Limit the header to 72 characters
  },
};
