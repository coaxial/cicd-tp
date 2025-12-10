module.exports = {
  reporters: [
    "default",
    ["jest-allure2", {
      resultsDir: "allure-results"
    }]
  ]
};