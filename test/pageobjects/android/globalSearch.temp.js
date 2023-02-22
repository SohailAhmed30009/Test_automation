class globalSearch {
  get globalInput() {
    return $('(//android.view.ViewGroup[@content-desc="search cars,mobiles,phones,laptops etc..."])');
  }
  get searchInput() {
    return $('(//android.widget.EditText[@text="Find Cars, Mobile Phones etc..."])');
  }
  get searchedText() {
    return $('(//android.widget.EditText[@text="Toyota"])');
  }
  get searchResult() {
    return $('(//android.widget.TextView[@text="toyota"])');
  }
}

export default new globalSearch();