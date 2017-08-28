import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsAddComponent } from './add.component';
import { AppTestingModule } from '../../appTesting.module';

describe('TagsAddComponent', () => {
  let component: TagsAddComponent;
  let fixture: ComponentFixture<TagsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsAddComponent ],
      imports: [
        AppTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
