import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsAddComponent } from './add.component';
import { AppTestingModule } from '../../appTesting.module';
import { AppState } from '../../_core/store/app.state';
import { Store } from '@ngrx/store';
import { TagsLoadedAction } from '../../_core/store/tags/loaded/tagsLoaded.action';
import { TagsAddAction } from '../../_core/store/tags/add/tagsAdd.action';

describe('TagsAddComponent', () => {
  let component: TagsAddComponent;
  let fixture: ComponentFixture<TagsAddComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagsAddComponent],
      imports: [
        AppTestingModule
      ]
    })
      .compileComponents();
    store = TestBed.get(Store);
    store.dispatch(new TagsLoadedAction(['1', '2']));
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch "TagsAddAction" when "add(...)" is called', () => {
    const newTag = 'newTag';
    component.add(newTag);
    expect(store.dispatch).toHaveBeenCalledWith(new TagsAddAction(newTag));
  });
});
