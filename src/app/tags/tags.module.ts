import { NgModule } from '@angular/core';
import { TagsComponent } from './tags.component';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TagsReducer } from './_store/tags.reducer';
import { TagsAddComponent } from './add/add.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: TagsComponent},
    ]),

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('tags', TagsReducer),

    // EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
  declarations: [TagsComponent, TagsAddComponent]
})
export class TagsModule {
}
