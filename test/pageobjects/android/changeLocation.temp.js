class changeLocation {
  get selectLocation() {
    return $('(//android.view.ViewGroup[@content-desc="select your location"])[2]/android.widget.TextView');
  }
  get currentLocation() {
    return $('//android.widget.TextView[@text="Current Location"]');
  }
  get locationInput() {
    return $('//android.widget.EditText[@text="Enter location"]');
  }
  get locationPopupTitle() {
    return $('//android.widget.TextView[@text="Select Location"]');
  }

  
}
export default new changeLocation();