import { config } from './wdio.shared.conf';
import path from 'path';
const iosPath = path.join(process.cwd(), "app/ios/UIKitCatalog.app");


// ====================
// Runner Configuration
// ====================
config.port = 4723;

// =================
// Specs ios
// =================
config.specs = [
  "test/pageobjects/ios/*.js"
];

// ===============
// Capabilities ios
// ===============
config.capabilities = [
  {
    platformName: 'ios',
    // "appium:deviceName": 'DESKTOP-N38765X',
    "appium:deviceName": 'iPhone 11 Pro',
    "appium:platformVersion": '14.4',
    "appium:automationName": 'XCUITest',
    "appium:app": iosPath,
    "appium:appProduct": 'com.gilgitapp',
    "appium:appActivity": 'com.gilgitapp.MainActivity',
    "appium:noReset": true,
    "appium:autoGrantPermissions": true,
    autoLaunch: true,
    noReset: true,
    skipDeviceInitialization: true,
    skipServerInstallation: true,
    autoGrantPermissions: true,
    }
]

exports.config = config;