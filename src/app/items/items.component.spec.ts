import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponent } from './items.component';
import { ItemsAddComponent } from './add/add.component';
import { AppTestingModule } from '../appTesting.module';
import { Store } from '@ngrx/store';
import { AppState } from '../_core/store/app.state';
import { ItemsLoadedAction } from '../_core/store/items/loaded/itemsLoaded.action';
import { ItemsAddAction } from '../_core/store/items/add/itemsAdd.action';
import { ItemsToggleAction } from './_store/toggle/itemsToggle.action';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let store: Store<AppState>;
  const getItems = (): NodeListOf<Element> => {
    return fixture.debugElement.nativeElement
      .querySelectorAll('.items__item');
  };
  const getItemsTitles = (): NodeListOf<Element> => {
    return fixture.debugElement.nativeElement
      .querySelectorAll('.items__item__title');
  };
  const getSelectedItems = (): NodeListOf<Element> => {
    return fixture.debugElement.nativeElement
      .querySelectorAll('.items_selected__item');
  };
  const getSelectedItemsTitles = (): NodeListOf<Element> => {
    return fixture.debugElement.nativeElement
      .querySelectorAll('.items_selected__item__title');
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsComponent, ItemsAddComponent],
      imports: [
        AppTestingModule
      ]
    })
      .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('items', () => {
    beforeEach(() => {
      store.dispatch(new ItemsLoadedAction(['1', '2', '3', '4', '5']));
    });

    it('should update items when item added or items loaded', () => {
      const newItem = 'new Item';
      fixture.detectChanges();
      expect(getItemsTitles().length).toEqual(5);
      expect(getItemsTitles().item(0).innerHTML).toEqual('1');
      expect(getItemsTitles().item(4).innerHTML).toEqual('5');
      store.dispatch(new ItemsAddAction(newItem));
      fixture.detectChanges();
      expect(getItemsTitles().length).toEqual(6);
      expect(getItemsTitles().item(5).innerHTML).toEqual(newItem);
      store.dispatch(new ItemsLoadedAction(['a', 'b', 'c']));
      fixture.detectChanges();
      expect(getItemsTitles().length).toEqual(3);
      expect(getItemsTitles().item(0).innerHTML).toEqual('a');
      expect(getItemsTitles().item(2).innerHTML).toEqual('c');
    });
  });

  describe('toggle', () => {
    beforeEach(() => {
      store.dispatch(new ItemsLoadedAction(['1', '2', '3', '4', '5']));
    });

    it('should dispatch "ItemsToggleAction" on "toggle(...)" call', () => {
      component.toggle('2');
      expect(store.dispatch).toHaveBeenCalledWith(new ItemsToggleAction('2'));
    });

    it('should add and remove item in selected items list' +
      ' on "toggle(...)" call', () => {
      fixture.detectChanges();
      expect(getSelectedItemsTitles().length).toEqual(0);
      component.toggle('2');
      fixture.detectChanges();
      expect(getSelectedItemsTitles().length).toEqual(1);
      expect(getSelectedItemsTitles().item(0).innerHTML).toEqual('2');
    });

    it('should display selected items on toggle button click', () => {
      fixture.detectChanges();
      expect(getSelectedItemsTitles().length).toEqual(0);
      (getItems().item(1).querySelector(
        '.items__item__toggle-button') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(getSelectedItems().length).toEqual(1);
      expect(getSelectedItemsTitles().item(0).innerHTML).toEqual('2');
      (getItems().item(1).querySelector(
        '.items__item__toggle-button') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(getSelectedItems().length).toEqual(0);
    });
  });
});
