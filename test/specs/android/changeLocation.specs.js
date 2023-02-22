import ChangeLocation from '../../pageobjects/android/changeLocation.temp'

describe("Test Location module", () => {
  it("Perform actions to change locations", async () => {
    driver.setImplicitTimeout(50000);
    await ChangeLocation.currentLocation.click();
    await driver.pause('3000');
    await expect(ChangeLocation.locationPopupTitle).toHaveText('Select Location');
    await ChangeLocation.locationInput.addValue('Gilgit');
    const selectedLocation = await $('(//android.widget.TextView[@text="Gilgit"])');
    await selectedLocation.click();
    await driver.pause(10000);
    // verify the location gilgit is selected
    await expect(selectedLocation).toHaveText('Gilgit');
  });
  // verfiy use current location
  it('Verfiy current location', async () => {
    await ChangeLocation.currentLocation.click();
    await ChangeLocation.locationInput.click();
    const useCurrentLocation = await $('(//android.widget.TextView[@text="Use current location"])');
    await useCurrentLocation.click();
    // verify current location is selected
    const selectedLocation = await $('(//android.widget.TextView[@text="Gilgit"])');
    await expect(selectedLocation).toHaveText('Gilgit');
  });
});