import AddItemBtn from '../../pageobjects/android/buyerRequest.temp'
import UploadItem from '../../pageobjects/android/uploadItem.temp'


describe("Upload item test", () => {
  it("Upload an item from car/suv", async () => {
    driver.setImplicitTimeout(50000)
    // click on add item button and verify the popup is opened
    await AddItemBtn.addItemBtn();
    // click on Car/Suv button
    await $('~Cars/SUVs').click();
    // verify the input from in opened.
    
    const carSuvTitle = $("android.view.View")
    await expect(carSuvTitle).toHaveText("Cars/Suvs - گاڈیاں")
    await expect(UploadItem.uploadImage).toBeExisting();
    //click on upload button
    
    // if (uploadItem.allowBtn.toBeExisting) {
    //   await uploadItem.allowBtn.click();
    // }
    // await $('~Show roots').click();
    // const downloads = await $('//*[@text="Download"]');
    // await downloads.click();
    // const touchAction = driver.touchAction();
    // touchAction.longPress(element).perform();

    // // select images
    // await $('~Photo taken on Feb 1, 2023 4:31:36 PM').click();
    // await $('~Photo taken on Feb 1, 2023 4:31:20 PM').click();
    // await $('~Photo taken on Feb 1, 2023 4:31:10 PM').click();
    // await $('~Photo taken on Feb 1, 2023 4:31:01 PM').click();
    // await $('~Done').click();
    // await uploadItem.inputTitle.addValue('Toyota');
    // //verify the text
    // await expect(uploadItem.inputTitle).toHaveText('Toyota');
    // // await uploadItem.inputDesc.addValue('Lorem epsum emit lorem epsium emit');
    // const description = await $('//*[@text="Enter your description"]');
    // await description.addValue('Lorem epsum emit lorem epsium emit')
    // await expect(description).toHaveText('Lorem epsum emit lorem epsium emit');

  })
})