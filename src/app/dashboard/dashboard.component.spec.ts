import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Store } from '@ngrx/store';
import { AuthSignInAction } from '../_core/store/auth/signIn/authSignIn.action';
import { AppTestingModule } from '../appTesting.module';
import { DashboardChangeChartTypeAction } from './_store/chartType/changeChartType/changeChartType.action';
import { ItemsAddAction } from '../_core/store/items/add/itemsAdd.action';
import { ItemsLoadedAction } from '../_core/store/items/loaded/itemsLoaded.action';
import { TagsLoadedAction } from '../_core/store/tags/loaded/tagsLoaded.action';
import { TagsAddAction } from '../_core/store/tags/add/tagsAdd.action';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: Store<any>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        AppTestingModule
      ]
    })
      .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('chartType', () => {
    let indicatorChartType: Element;
    beforeEach(() => {
      indicatorChartType = fixture.debugElement.nativeElement
        .querySelector('.indicator_chart-type');
    });

    it('should change chart type when "changeChartType(...)" is called', () => {
      component.changeChartType('line');
      expect(store.dispatch)
        .toHaveBeenCalledWith(new DashboardChangeChartTypeAction('line'));
      fixture.detectChanges();
      expect(indicatorChartType.innerHTML).toEqual('line');
      component.changeChartType('pie');
      expect(store.dispatch)
        .toHaveBeenCalledWith(new DashboardChangeChartTypeAction('pie'));
      fixture.detectChanges();
      expect(indicatorChartType.innerHTML).toEqual('pie');
    });

    it('should change chart type when "chart-type-switcher" is clicked', () => {
      fixture.debugElement.nativeElement
        .querySelector('.chart-type-switcher_line').click();
      expect(store.dispatch)
        .toHaveBeenCalledWith(new DashboardChangeChartTypeAction('line'));
      fixture.detectChanges();
      expect(indicatorChartType.innerHTML).toEqual('line');
      fixture.debugElement.nativeElement
        .querySelector('.chart-type-switcher_pie').click();
      expect(store.dispatch)
        .toHaveBeenCalledWith(new DashboardChangeChartTypeAction('pie'));
      fixture.detectChanges();
      expect(indicatorChartType.innerHTML).toEqual('pie');
    });
  });

  describe('items count', () => {
    let indicatorItemsCount: Element;
    beforeEach(() => {
      indicatorItemsCount = fixture.debugElement.nativeElement
        .querySelector('.indicator_items-count');
      store.dispatch(new ItemsLoadedAction(['1', '2', '3', '4', '5']));
    });

    it('should update items count indicator when item added', () => {
      fixture.detectChanges();
      expect(indicatorItemsCount.innerHTML).toEqual('Items: 5');
      store.dispatch(new ItemsAddAction('new Item 1'));
      fixture.detectChanges();
      expect(indicatorItemsCount.innerHTML).toEqual('Items: 6');
      store.dispatch(new ItemsAddAction('new Item 2'));
      fixture.detectChanges();
      expect(indicatorItemsCount.innerHTML).toEqual('Items: 7');
    });

    it('should update items count indicator when items loaded', () => {
      fixture.detectChanges();
      expect(indicatorItemsCount.innerHTML).toEqual('Items: 5');
      store.dispatch(new ItemsAddAction('new Item 1'));
      fixture.detectChanges();
      expect(indicatorItemsCount.innerHTML).toEqual('Items: 6');
      store.dispatch(new ItemsLoadedAction(['1', '2']));
      fixture.detectChanges();
      expect(indicatorItemsCount.innerHTML).toEqual('Items: 2');
    });
  });

  describe('tags count', () => {
    let indicatorTagsCount: Element;
    beforeEach(() => {
      indicatorTagsCount = fixture.debugElement.nativeElement
        .querySelector('.indicator_tags-count');
      store.dispatch(new TagsLoadedAction(['1', '2', '3', '4', '5']));
    });

    it('should update tags count indicator when item added', () => {
      fixture.detectChanges();
      expect(indicatorTagsCount.innerHTML).toEqual('Tags: 5');
      store.dispatch(new TagsAddAction('new Tag 1'));
      fixture.detectChanges();
      expect(indicatorTagsCount.innerHTML).toEqual('Tags: 6');
      store.dispatch(new TagsAddAction('new Tag 2'));
      fixture.detectChanges();
      expect(indicatorTagsCount.innerHTML).toEqual('Tags: 7');
    });

    it('should update tags count indicator when tags loaded', () => {
      fixture.detectChanges();
      expect(indicatorTagsCount.innerHTML).toEqual('Tags: 5');
      store.dispatch(new TagsAddAction('new Tag 1'));
      fixture.detectChanges();
      expect(indicatorTagsCount.innerHTML).toEqual('Tags: 6');
      store.dispatch(new TagsLoadedAction(['1', '2']));
      fixture.detectChanges();
      expect(indicatorTagsCount.innerHTML).toEqual('Tags: 2');
    });
  });
});
