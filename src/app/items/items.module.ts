import { NgModule } from '@angular/core';
import { ItemsComponent } from './items.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ItemsReducer } from './_store/items.reducer';
import { ItemsAddComponent } from './add/add.component';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ItemsComponent},
    ]),

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('items', ItemsReducer),

    // EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
  declarations: [ItemsComponent, ItemsAddComponent]
})
export class ItemsModule {
}
