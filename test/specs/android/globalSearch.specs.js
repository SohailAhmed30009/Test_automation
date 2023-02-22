import GlobalSearch from '../../pageobjects/android/globalSearch.temp'

describe('Test Global Search Module', () => {
  it('Verify the global search input and search results', async () => {
    await driver.pause(10000);
    await GlobalSearch.globalInput.click();
    await GlobalSearch.searchInput.addValue("Toyota");
    await expect(GlobalSearch.searchedText).toHaveText("Toyota");
    await GlobalSearch.searchResult.click();
  });
});