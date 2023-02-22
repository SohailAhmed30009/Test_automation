import Login from '../pageobjects/login'
// const AsyncStorage = require('@react-native-community/async-storage');

describe("Login Test", () => {
  it('Login and redirect to GA', async () => {
    await driver.pause(5000);
    await Login.letsGoBtn.click();
    await Login.continueBtn.click();
    await Login.continueGoogleBtn.click();
    await Login.login();
  });
});