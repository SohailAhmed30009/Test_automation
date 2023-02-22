import AddItem from './uploadItem.temp'

class buyerRequest {
  
  get brBtn() {
    return $('~Buyer Requests')
  }
  get brLimitLabel() {
    return $('(//android.widget.TextView[@text="You have only 5 Buyer Requests to post. Learn More"])');
  }
  get brTitleLabel() {
    return $('(//android.widget.TextView[@text="What are you looking for?"])');
  }
  get brHeader() {
    return $('(//android.view.View[@text="Post A Buyer Request"])');
  }
  get brTitle() {
    return $('(//android.widget.EditText[@text="I am looking for"])');
  }
  get categoryLabel() {
    return $('(//android.widget.TextView[@text="Category"])');
  }
  get categoryDropdown() {
    return $('(//android.widget.TextView[@text="Select"])');
  }
  get priceLabel() {
    return $('(//android.widget.TextView[@text="Price"])');
  }
  get priceInput() {
    return $('~Price');
  }
  get locationLabel() {
    return $('(//android.widget.TextView[@text="Location"])');
  }
  get location() {
    return $('(//android.view.ViewGroup[3])');
  }
  get postBtn() {
    return $('~Post a Request');
  }

  get carCategory() {
    return $('~Cars');
  }
  get myRequestBtn() {
    return $('(//android.widget.TextView[@text="My Requests"])');
  }
  get btnBRSecondary() {
    return $('android.widget.Button');
  }
  get logoutBtn() {
    return $('~logout');
  }
  get signInBtn() {
    return $('~sign in');
  }
  get signInFacebook() {
    return $('~sign in with facebook');
  }
  // verify the posted BR
  get myBRHeader() {
    return $('(//android.view.View[@text="My Buyer Requests"])');
  }
  get postedBRTitle() {
    return $('(//android.widget.TextView[@text="I am looking for car Vidz"])');
  }
  get postedBRPrice() {
    return $('(//android.widget.TextView[@text="Pkr 5.00 Lac"])');
  }
  //verify the BR limit left
  get brLimitLeft() {
    return $('//android.widget.TextView[@text="You have only 4 Buyer Requests to post. Learn More"]');
  }

  //Validation part goes here

  get validateTitle() {
    return $('(*//android.view.ViewGroup[2]/android.widget.TextView[2])');
  }
  get validateCategory() {
    return $('(*//android.view.ViewGroup[2]/android.widget.TextView[4])');
  }
  get validatePrice() {
    return $('(*//android.view.ViewGroup[2]/android.widget.TextView[6])');
  }
  get locationPopup() {
    return $('(*//android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.widget.TextView)');
  }
  get gilgitLocation() {
    return $('(//android.widget.TextView[@text="Gilgit"])');
  }
  get successMessage() {
    return $('//android.widget.TextView[@text="You have successfully posted a buyer request"]');
  }


  async brFormVerfication() {
    await expect(this.brHeader).toHaveText('Post A Buyer Request');
    await expect(this.brLimitLabel).toHaveText('You have only 5 Buyer Requests to post. Learn More');
    await expect(this.brTitleLabel).toHaveText('What are you looking for?');
    await expect(this.brTitle).toExist();
    await expect(this.categoryLabel).toHaveText('Category');
    await expect(this.categoryDropdown).toExist();
    await expect(this.priceLabel).toHaveText('Price');
    await expect(this.priceInput).toExist();
    await expect(this.locationLabel).toHaveText('Location');
    await expect(this.location).toExist();
    await expect(this.postBtn).toExist();
  }

  async addItemBtn() {
    // Comes from uploadItem.temp.js
    await AddItem.addItem.click()
    await driver.pause(3000);
    const text = await AddItem.titleAddItem.getText();
    await expect(text).toEqual("Select Category");
  }
  async validateAllInputs() {
    await expect(this.validateTitle).toHaveText("title is a required field");
    await expect(this.validateCategory).toHaveText("This field should not be empty");
    await expect(this.validatePrice).toHaveText("This field is required");
  }
  
  async verifyBRCard() {
    await expect(this.myBRHeader).toBeDisplayed();
    await expect(this.postedBRTitle).toHaveText("I am looking for car Vidz");
    await expect(this.postedBRPrice).toHaveText("Pkr 5.00 Lac")
  }
  async verfiyBRLimit() {
    await this.btnBRSecondary.click();
    await expect(this.brLimitLeft).toHaveText("You have only 4 Buyer Requests to post. Learn More")
  }
  async goBack() {
    await driver.back();
    await driver.back();
  }

  //validate that the validation error message is removed is not prsent
  async isElementPresent() {
    const element = await this.validateTitle.getText()
    if(element.length > 0) {
      console.log(element + " is not present")
    } else {
      console.log(element + " is present")
    }
  }
}

export default new buyerRequest();