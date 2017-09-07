import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../_core/store/app.state';
import { ItemsAddAction } from '../../_core/store/items/add/itemsAdd.action';

@Component({
  selector: 'rl-items-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsAddComponent implements OnInit {
  constructor (private store: Store<AppState>) {
  }

  ngOnInit () {
  }

  add (text: string) {
    this.store.dispatch(new ItemsAddAction(text));
  }
}
