module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  parserOptions: {
    ecmaVersion: "latest",
    project: true,
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
