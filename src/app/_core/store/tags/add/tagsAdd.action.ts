import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';

export const TagsAddActionType = 'TAGS_ADD';

export class TagsAddAction implements Action {
  readonly type = TagsAddActionType;
  constructor (public payload: string) {
  }
}

export const TagsAddActionHandler = (state: CoreState,
                                      action: TagsAddAction) => {
  return Object.assign({}, state, {tags: [...state.tags, action.payload]});
};
