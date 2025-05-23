import * as base from './wdio.conf.js'

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
    platformName: 'Android',
    'appium:deviceName': 'Galaxy S21',
    'appium:platformVersion': '11',
    'appium:app': 'tb://38b04764b4d2ffe62247fc11',  // or your .apk upload URL
    'appium:automationName': 'UiAutomator2',
    'tb:options': {
     build: 'TB Build-01',
     name: 'GateKeeperApp Tests',
     tags: ['azure', 'appium', 'android']
  },
  }],
};
