import BuyerRequest from "../../pageobjects/android/buyerRequest.temp";
import Location from "../../pageobjects/android/buyerRequest.temp";

describe("Test Buyer Request", () => {
  it("Verify all validations, labels, dropdowns and input fields", async () => {
    await driver.pause(10000);
    // Go to the Buyer request form
    await BuyerRequest.addItemBtn();
    await driver.pause(5000);
    await BuyerRequest.brBtn.click();
    await driver.pause(3000);

    //verify BR all labels and input fields are present
    await BuyerRequest.brFormVerfication();
    await BuyerRequest.postBtn.click();
    // Validation goes here
    await driver.pause(3000);
    await BuyerRequest.validateAllInputs();
  });
  it("Post a buyer request and verify the request has sent", async () => {
    await BuyerRequest.brTitle.addValue("I am looking for car Vidz");
    await BuyerRequest.isElementPresent();
    await BuyerRequest.categoryDropdown.click();
    await driver.pause(2000);
    await BuyerRequest.carCategory.click();
    await BuyerRequest.priceInput.addValue("500000");
    await expect(BuyerRequest.priceInput).toHaveText("500000");
    await BuyerRequest.location.click();
    await driver.pause(2000);
    await expect(Location.locationPopupTitle).toBeDisplayed();
    await Location.locationInput.addValue("Gilgit");
    await driver.pause(3000);

    await expect(BuyerRequest.gilgitLocation).toHaveText("Gilgit");
    await BuyerRequest.gilgitLocation.click();
    await driver.pause(5000);
    await BuyerRequest.postBtn.click();
    await driver.pause(10000);
    await expect(BuyerRequest.successMessage).toHaveText(
      "You have successfully posted a buyer request"
    );
    await BuyerRequest.myRequestBtn.click();
    await BuyerRequest.verifyBRCard();
    await BuyerRequest.verfiyBRLimit();
    await BuyerRequest.goBack();
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await BuyerRequest.logoutBtn.click();
    await driver.pause(3000);
    await BuyerRequest.signInBtn.click();
    await BuyerRequest.signInFacebook.click();
    await BuyerRequest.brBtn.val;

    // relaunch app to login with different account
    // await driver.reset();
  });




  
});
