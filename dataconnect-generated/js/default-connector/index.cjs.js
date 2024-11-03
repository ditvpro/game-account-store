const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'game-account-store',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

