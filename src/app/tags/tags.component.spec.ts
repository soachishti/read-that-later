import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsComponent } from './tags.component';
import { TagsAddComponent } from './add/add.component';
import { AppTestingModule } from '../appTesting.module';
import { AppState } from '../_core/store/app.state';
import { Store } from '@ngrx/store';
import { TagsAddAction } from '../_core/store/tags/add/tagsAdd.action';
import { TagsLoadedAction } from '../_core/store/tags/loaded/tagsLoaded.action';
import { TagsToggleAction } from './_store/toggle/tagsToggle.action';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;
  let store: Store<AppState>;
  const getTags = (): NodeListOf<Element> => {
    return fixture.debugElement.nativeElement
      .querySelectorAll('.tags__tag');
  };
  const getTagsTitles = (): NodeListOf<Element> => {
    return fixture.debugElement.nativeElement
      .querySelectorAll('.tags__tag__title');
  };
  const getSelectedTags = (): NodeListOf<Element> => {
    return fixture.debugElement.nativeElement
      .querySelectorAll('.tags_selected__tag');
  };
  const getSelectedTagsTitles = (): NodeListOf<Element> => {
    return fixture.debugElement.nativeElement
      .querySelectorAll('.tags_selected__tag__title');
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsComponent, TagsAddComponent ],
      imports: [
        AppTestingModule
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('tags', () => {
    beforeEach(() => {
      store.dispatch(new TagsLoadedAction(['1', '2', '3', '4', '5']));
    });

    it('should update tags when tag added or tags loaded', () => {
      const newTag = 'new Tag';
      fixture.detectChanges();
      expect(getTagsTitles().length).toEqual(5);
      expect(getTagsTitles().item(0).innerHTML).toEqual('1');
      expect(getTagsTitles().item(4).innerHTML).toEqual('5');
      store.dispatch(new TagsAddAction(newTag));
      fixture.detectChanges();
      expect(getTagsTitles().length).toEqual(6);
      expect(getTagsTitles().item(5).innerHTML).toEqual(newTag);
      store.dispatch(new TagsLoadedAction(['a', 'b', 'c']));
      fixture.detectChanges();
      expect(getTagsTitles().length).toEqual(3);
      expect(getTagsTitles().item(0).innerHTML).toEqual('a');
      expect(getTagsTitles().item(2).innerHTML).toEqual('c');
    });
  });

  describe('toggle', () => {
    beforeEach(() => {
      store.dispatch(new TagsLoadedAction(['1', '2', '3', '4', '5']));
    });

    it('should dispatch "TagsToggleAction" on "toggle(...)" call', () => {
      component.toggle('2');
      expect(store.dispatch).toHaveBeenCalledWith(new TagsToggleAction('2'));
    });

    it('should add and remove tag in selected tags list' +
      ' on "toggle(...)" call', () => {
      fixture.detectChanges();
      expect(getSelectedTagsTitles().length).toEqual(0);
      component.toggle('2');
      fixture.detectChanges();
      expect(getSelectedTagsTitles().length).toEqual(1);
      expect(getSelectedTagsTitles().item(0).innerHTML).toEqual('2');
    });

    it('should display selected tags on toggle button click', () => {
      fixture.detectChanges();
      expect(getSelectedTagsTitles().length).toEqual(0);
      (getTags().item(1).querySelector(
        '.tags__tag__toggle-button') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(getSelectedTags().length).toEqual(1);
      expect(getSelectedTagsTitles().item(0).innerHTML).toEqual('2');
      (getTags().item(1).querySelector(
        '.tags__tag__toggle-button') as HTMLButtonElement).click();
      fixture.detectChanges();
      expect(getSelectedTags().length).toEqual(0);
    });
  });
});
