import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../_core/store/app.state';
import { TagsToggleAction } from './_store/toggle/toggle.action';

@Component({
  selector: 'rl-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent implements OnInit {
  tags$: Observable<string[]>;
  selectedTags$: Observable<string[]>;

  constructor (private store: Store<AppState>) {
  }

  ngOnInit () {
    this.tags$ = this.store.select(s => s.core.tags);
    this.selectedTags$ = this.store.select(s => s.tags.selected);
  }

  toggle (item: string) {
    this.store.dispatch(new TagsToggleAction(item));
  }
}
