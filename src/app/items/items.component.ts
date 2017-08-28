import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../_core/store/app.state';
import { ItemsToggleAction } from './_store/toggle/toggle.action';

@Component({
  selector: 'rl-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {
  items$: Observable<string[]>;
  selectedItems$: Observable<string[]>;

  constructor (private store: Store<AppState>) {
  }

  ngOnInit () {
    this.items$ = this.store.select(s => s.core.items);
    this.selectedItems$ = this.store.select(s => s.items.selected);
  }

  toggle (item: string) {
    this.store.dispatch(new ItemsToggleAction(item));
  }

}
