import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardChartType } from './_store/chartType/chartType.type';
import { Store } from '@ngrx/store';
import { AppState } from '../_core/store/app.state';
import { DashboardChangeChartTypeAction } from './_store/chartType/changeChartType.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  itemsCount$: Observable<number>;
  tagsCount$: Observable<number>;
  chartType$: Observable<string>;

  constructor (private store: Store<AppState>) {
  }

  ngOnInit () {
    this.itemsCount$ = this.store.select(s => s.core.items ? s.core.items.length : 0);
    this.tagsCount$ = this.store.select(s => s.core.tags ? s.core.tags.length : 0);
    this.chartType$ = this.store.select(s => s.dashboard.chartType);
  }

  changeChartType (chartType: DashboardChartType) {
    this.store.dispatch(new DashboardChangeChartTypeAction(chartType));
  }
}
