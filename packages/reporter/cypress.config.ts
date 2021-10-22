export default {
  'projectId': 'ypt4pf',
  'baseUrl': 'http://localhost:5006',
  'viewportWidth': 400,
  'viewportHeight': 450,
  'reporter': '../../node_modules/cypress-multi-reporters/index.js',
  'reporterOptions': {
    'configFile': '../../mocha-reporter-config.json',
  },
  'retries': {
    'runMode': 2,
    'openMode': 0,
  },
}
