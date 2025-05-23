import * as base from './wdioIOS.conf.js'

console.log('TestingBot credentials:', process.env.TB_KEY, process.env.TB_SECRET);

export const config = {
  user: process.env.TB_KEY,
  key: process.env.TB_SECRET,

  ...base.config,

  protocol: 'https',
  hostname: 'hub.testingbot.com',
  port: 443,
  path: '/wd/hub',

  services: ['testingbot'],
  testingbot: {
    key: process.env.TB_KEY,
    secret: process.env.TB_SECRET,
  },

  connectionRetryTimeout: 180000, // 3 minutes
  connectionRetryCount: 3,

  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 16',
    'appium:platformVersion': '18', // or latest supported by TestingBot
    'appium:app': 'tb://3be1d7c7ecf37fa7f203ebeb', // replace with the actual TestingBot app ID
    'appium:automationName': 'XCUITest',
    'tb:options': {
      build: 'TB Build-01',
      name: 'GateKeeperApp iOS Tests',
      tags: ['azure', 'appium', 'ios']
    },
  }],
};
