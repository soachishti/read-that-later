import { Action } from '@ngrx/store';
import { CoreState } from '../core.state';
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
