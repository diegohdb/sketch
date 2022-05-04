/// <reference types="cypress" />
const dotenvPlugin = require('cypress-dotenv');


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  config = dotenvPlugin(config);
}
