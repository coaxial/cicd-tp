module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    ["jest-allure2-reporter", {
      resultsDir: "build/allure-results"
    }]
  ]
};
