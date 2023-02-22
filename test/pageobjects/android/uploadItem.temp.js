class uploadItem {
  get addItem() {
    return $('(//android.view.ViewGroup[@content-desc="add item"])[2]');
  }
  get uploadImage() {
    return $('//android.widget.TextView[@text="Click here to upload a picture"]');
  }
  get titleAddItem() {
    return $('(//android.widget.TextView[@text="Select Category"])');
  }

  // get allowBtn() {
  //   return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
  // };
  get inputTitle() {
    return $('//*[@text="e.g. Toyota Premio, Suzuki Passo etc.."]');
  }

}

export default new uploadItem();
