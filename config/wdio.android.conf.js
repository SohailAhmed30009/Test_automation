const { config } =  require('./wdio.shared.conf');
const path =  require('path')
const androidPath = path.join(process.cwd(), "app/android/99.apk");


// ====================
// Runner Configuration
// ====================
config.port = 4723;

// =================
// Specs ios
// =================
config.specs = [
  "./test/specs/android/*.js"
];

// ===============
// Capabilities ios
// ===============
config.capabilities = [
  {
    platformName: "Android",
    // "appium:deviceName": 'DESKTOP-N38765X',
    "appium:deviceName": "Pixel 2",
    "appium:platformVersion": "10",
    "appium:automationName": "UiAutomator2",
    "appium:app": androidPath,
    "appium:appProduct": "com.gilgitapp",
    "appium:appActivity": "com.gilgitapp.MainActivity",
    "appium:autoGrantPermissions": true,
    // "appium:noReset": true,
    // "appium:ignoreHiddenApiPolicyError": true,
    // autoLaunch: true,
    // noReset: true,
    // skipDeviceInitialization: true,
    // skipServerInstallation: true,
    // autoGrantPermissions: true,
  },
]

exports.config = config;