import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../_core/store/app.state';
import { ItemsToggleAction } from './_store/toggle/itemsToggle.action';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../_core/store/items/_types/item.interface';
import { ItemsAddAction } from '../_core/store/items/add/itemsAdd.action';
import { ItemsLoadedAction } from '../_core/store/items/loaded/itemsLoaded.action';

@Component({
  selector: 'rl-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {
  items$: Observable<string[]>;
  selectedItems$: Observable<string[]>;

  constructor (private store: Store<AppState>, private db: AngularFireDatabase) {
  }

  ngOnInit () {
    this.items$ = this.store.select(s => s.core.items);
    this.selectedItems$ = this.store.select(s => s.items.selected);
    this.db.list<{url: string}>('users/N9qdGAbS8JTIV6BFq0mvbB21LcT2/items')
      .snapshotChanges()
      .subscribe(snapshot => {
        this.store.dispatch(new ItemsLoadedAction(snapshot.map(item => ({key: item.key, ...item.payload.val()}))));
      });
    // this.db.list<{url: string}>('users/N9qdGAbS8JTIV6BFq0mvbB21LcT2/items').auditTrail().subscribe(console.log);
  }

  toggle (item: string) {
    this.store.dispatch(new ItemsToggleAction(item));
  }

}
