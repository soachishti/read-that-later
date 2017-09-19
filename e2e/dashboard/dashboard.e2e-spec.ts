import { DashboardPage } from './dashboard.po';
import { reachGuardedPage } from '../_helpers/reachPage.helper';

describe('DashboardPage', () => {
  let page: DashboardPage;

  beforeAll(async () => {
    page = new DashboardPage();
    await reachGuardedPage(page);
  });

  it('should display head text', () => {
    expect(page.getHeadText()).toEqual('Dashboard');
  });

  it('should display initial amount of items as 5', () => {
    expect(page.getIndicatorText('items-count')).toEqual('Items: 5');
  });

  it('should display initial amount of tags as 3', () => {
    expect(page.getIndicatorText('tags-count')).toEqual('Tags: 3');
  });

  it('should display initial chart type as "pie"', () => {
    expect(page.getIndicatorText('chart-type')).toEqual('pie');
  });

  it('should switch chart type to "line"', () => {
    page.getChartTypeSwitcher('line').click();
    expect(page.getIndicatorText('chart-type')).toEqual('line');
  });

  it('should switch chart type to "pie"', () => {
    page.getChartTypeSwitcher('pie').click();
    expect(page.getIndicatorText('chart-type')).toEqual('pie');
  });

  // TODO: add tests for changing amount of items on ITEMS_ADD
  // TODO: add tests for changing amount of tags on TAGS_ADD
});
