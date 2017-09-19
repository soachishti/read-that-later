import { ItemsPage } from './items.po';
import { reachGuardedPage } from '../_helpers/reachPage.helper';

describe('ItemsPage', () => {
  let page: ItemsPage;

  beforeAll(async () => {
    page = new ItemsPage();
    await reachGuardedPage(page);
  });

  it('should display head text', () => {
    expect(page.getHeadText()).toEqual('Items');
  });

  it('should add new item', async () => {
    const oldLength = await page.getItems().count();
    const testItemTitle = 'testItem';
    await page.addItem(testItemTitle);

    expect(page.getItems().count()).toEqual(oldLength + 1);
    expect(page.getItems().last().getText()).toEqual(testItemTitle);
  });
});
