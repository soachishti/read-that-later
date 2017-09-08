import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAddComponent } from './add.component';
import { AppTestingModule } from '../../appTesting.module';
import { Store } from '@ngrx/store';
import { AppState } from '../../_core/store/app.state';
import { ItemsLoadedAction } from '../../_core/store/items/loaded/itemsLoaded.action';
import { ItemsAddAction } from '../../_core/store/items/add/itemsAdd.action';

describe('ItemsAddComponent', () => {
  let component: ItemsAddComponent;
  let fixture: ComponentFixture<ItemsAddComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsAddComponent],
      imports: [
        AppTestingModule
      ]
    })
      .compileComponents();
    store = TestBed.get(Store);
    store.dispatch(new ItemsLoadedAction(['1', '2']));
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch "ItemsAddAction" when "add(...)" is called', () => {
    const newItem = 'newItem';
    component.add(newItem);
    expect(store.dispatch).toHaveBeenCalledWith(new ItemsAddAction(newItem));
  });
});
