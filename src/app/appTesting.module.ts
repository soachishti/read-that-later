import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { AppMetaReducers } from './_core/store/app.reducer';
import { AppState } from './_core/store/app.state';
import { CoreReducer } from './_core/store/core.reducer';
import { DashboardReducer } from './dashboard/_store/dashboard.reducer';
import { CoreStateInitial } from './_core/store/core.state';
import { DashboardStateInitial } from './dashboard/_store/dashboard.state';
import { ItemsStateInitial } from './items/_store/items.state';
import { TagsStateInitial } from './tags/_store/tags.state';
import { ItemsReducer } from './items/_store/items.reducer';
import { TagsReducer } from './tags/_store/tags.reducer';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  imports: [
    RouterTestingModule,
    StoreModule.forRoot({
        core: CoreReducer,
        dashboard: DashboardReducer,
        items: ItemsReducer,
        tags: TagsReducer
      } as ActionReducerMap<AppState>,
      {
        initialState: {
          core: CoreStateInitial,
          dashboard: DashboardStateInitial,
          items: ItemsStateInitial,
          tags: TagsStateInitial
        },
        metaReducers: AppMetaReducers
      }),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule
  ],
  exports: [
    RouterTestingModule,
    StoreModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule
  ]
})
export class AppTestingModule {
}

