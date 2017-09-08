import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../_core/store/app.state';
import { TagsAddAction } from '../../_core/store/tags/add/tagsAdd.action';

@Component({
  selector: 'rl-tags-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsAddComponent implements OnInit {
  constructor (private store: Store<AppState>) {
  }

  ngOnInit () {
  }

  add (text: string) {
    this.store.dispatch(new TagsAddAction(text));
  }
}
