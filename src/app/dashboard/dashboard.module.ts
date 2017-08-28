import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { DashboardReducer } from './_store/dashboard.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent},
    ]),

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('dashboard', DashboardReducer),

    // EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
