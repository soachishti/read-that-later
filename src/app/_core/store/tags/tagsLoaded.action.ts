import { Action } from '@ngrx/store';
import { CoreState } from '../core.state';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
export const TagsLoadedActionType = 'TAGS_LOADED';

export class TagsLoadedAction implements Action {
  readonly type = TagsLoadedActionType;

  constructor (public payload: string[]) {
  }
}

export const TagsLoadedActionHandler = (state: CoreState,
                                        action: TagsLoadedAction) => {
  return Object.assign({}, state, {tags: action.payload});
};

@Injectable()
export class TagsLoadedActionEffect {

  constructor (private actions$: Actions) {
  }

  @Effect({dispatch: false}) itemsLoaded$ = this.actions$
    .ofType(TagsLoadedActionType)
    .map((action: TagsLoadedAction) => {
      console.log('Tags loaded:', action.payload);
    });
}
