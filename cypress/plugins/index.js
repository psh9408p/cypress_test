const synpressSetup = require("@synthetixio/synpress/setup");

module.exports = (on, config) => {
  synpressSetup(on, config);
  return config;
};
