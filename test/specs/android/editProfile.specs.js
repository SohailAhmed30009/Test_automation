

describe('Test Edit profile', () => {
  it('Validation test', async () => {
    await driver.startActivity("com.gilgitapp", "com.gilgitapp.MainActivity");

    await driver.pause('5000');

    await expect($('//*[@text="Mobile For Sale"]')).toExist();
  })
});