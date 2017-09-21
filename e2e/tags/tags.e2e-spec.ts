import { TagsPage } from './tags.po';
import { reachGuardedPage } from '../_helpers/reachPage.helper';

describe('TagsPage', () => {
  let page: TagsPage;

  beforeAll(async () => {
    page = new TagsPage();
    await reachGuardedPage(page);
  });

  it('should display head text', () => {
    expect(page.getHeadText()).toEqual('Tags');
  });

  it('should add new tag', async () => {
    const oldLength = await page.getTags().count();
    const testTagTitle = 'testTag';
    await page.addTag(testTagTitle);

    expect(page.getTags().count()).toEqual(oldLength + 1);
    expect(page.getTags().last().getText()).toEqual(testTagTitle);
  });
});
